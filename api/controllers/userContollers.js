const User = require('../models/user.model')/* user schme */
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    try {
        const { e_posta, password } = req.body // values from frontend to backend   

        await User.findOne({ e_posta }).then((User) => {
            if (!User) {
                return res.json({ sucess: false, message: "This e-mail is not registered in the system!" })
            } else {
                bcrypt.compare(password, User.password)
                    .then((success) => {
                        if (!success) {
                            res.status(401).json({ sucess: false, message: "You entered your password incorrectly!" })
                        } else {
                            jwt.sign({ User }, process.env.JWT_SECRET_KEY, ((err, token) => {
                                if (err) {
                                    if (process.env.NODE_ENV === "development") { console.log(err) }
                                    res.status(400).json({ success: false, message: 'something went wrong' })
                                }
                                if (token) {
                                    res.cookie("userSession", token, { httpOnly: process.env.NODE_ENV !== "development" }).status(200).json({ success: true })
                                } else { res.status(401).json({ success: false, message: 'something went wrong' }) }
                            }))
                        }
                    })
            }
        }).catch((error) => {
            if (error) { res.status(404).josn({ success: false, message: "something went wrong" }) }
            if (process.env.NODE_ENV === "development") { console.log(error) }
        });

    } catch (error) {
        if (error) { res.status(404).json({ message: 'something went wrong', sucess: false }) }
        if (process.env.NODE_ENV === "development") { console.log(error) }
    }
}

exports.logout = async (req, res) => {
    try {
        res.cookie("userSession", "").status(200).json({ success: true })
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        }
        res.status(401).json({ success: false, message: 'something went wrong' })
    }

}

/* nodemailer config */
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "bayrambayraktar091@gmail.com",
        pass: "mysbfbaotmmgwkro"
    },
    tls: {
        rejectUnauthorized: false
    }
})

exports.signin = async (req, res) => {
    try {
        /*values from front end*/
        const { name, phone_number, location, e_posta, password } = req.body

        const find_eposta = await User.findOne({ e_posta })
        if (find_eposta) {
            return res.json({ message: "there is this email please try something different", success: false })
        }

        /*hide our password*/
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt)

        /*generate token for mail confirmation*/
        const token = jwt.sign({
            name,
            phone_number,
            e_posta,
            location,
            password: hashPass
        }, process.env.JWT_SECRET_KEY, { expiresIn: '5m'   /* The token is valid for 5 minutes.*/ })

        /* Who will the email be sent to and what will its content be? */
        var mailOptions = {
            from: `"Verify your email" ${process.env.NODEMAİLER_USER} `,
            to: e_posta,
            subject: "Verify your email",
            html: `<h1>${name}! thanks for registering on our site</h1>
                    <a href="${process.env.BASE_URL}/user/verify/${token}">Verify your email</a>
            `
        }

        /* In order to verify the user trying to become a member of the system,
        we are doing the stages of sending e-mail to direct our e-mail. */
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.log(error)
                } else {
                    res.status(400).json({ message: 'something went wrong', sucess: false })
                }
            }
            if (info) {
                res.json({
                    message: 'verfication email is sent to your gmail account',
                    success: true
                })
            }
        })

    } catch (error) {
        if (error) {
            res.status(404).json({ message: 'something went wrong', sucess: false })
        }
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        }
    }
}

exports.email_decode_token = async (req, res) => {
    try {
        const { token } = req.params;
        const { name, phone_number, location, password, e_posta } = jwt.decode(token);

        const find_eposta = await User.findOne({ e_posta })
        if (find_eposta) {
            return res.json({ message: "there is this email please try something different" })
        }
        await jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: 'Expired Token. Signup again',
                    success: false
                })
            }
            if (decoded) {
                const user = new User({
                    name,
                    phone_number,
                    location,
                    password,
                    e_posta
                })
                const newUser = user.save()
                if (newUser) {
                    return res.json({
                        message: "Email Address Verified",
                        success: true,
                        e_posta,
                        name
                    })
                } else {
                    return res.status(400).json({
                        message: 'Email Address Could Not Be Verified',
                        success: false
                    })
                }
            }
        })
    } catch (error) {
        return res.status(400).json({
            message: 'something went wrong',
            success: false
        })
    }
}