const User = require('../models/user.model')/* user schme */
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    try {
        const { e_posta, password } = req.body
        const findedUser = await User.findOne({ e_posta })
        if (!findedUser) {
            return res.status(400).json({ sucess: false, message: "This e-mail is not registered in the system!" })
        }

        const bcryptPass = await bcrypt.compare(password, findedUser.password)

        if (bcryptPass) {
            const token = await jwt.sign({ User: findedUser }, process.env.JWT_SECRET_KEY)
            if (!token) {
                return res.status(400).json({ success: false, message: 'not created token!' })
            }
            if (token) {
                return res.cookie("userSession", token, { httpOnly: process.env.NODE_ENV !== "development" }).status(200).json({ success: true, message: 'successful' })
            }
        } else {
            return res.status(401).json({ success: false, message: 'invalid Password' })
        }

    } catch (error) {
        return res.status(404).json({ message: 'something went wrong', success: false })
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
        pass: "rexozgtlctcneegr"
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
                return res.status(400).json({ message: 'something went wrong', sucess: false })
            }
            return res.status(200).json({
                message: 'verfication email is sent to your gmail account',
                success: true
            })
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

exports.forget_password = async (req, res) => {
    try {
        const findedUser = await User.findOne({ e_posta: req.body.email });
        if (!findedUser) {
            return res.status(400).json({ success: false, message: "Your e-mail address is not registered in the system, please check it." });
        }

        const token = jwt.sign(
            { id: findedUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '5m' }
        );

        if (!token) {
            return res.status(500).json({ success: false, message: 'Something went wrong!' });
        }


        var mailOptions = {
            from: `bayrambayraktar091@gmail.com`,
            to: req.body.email,
            subject: "If you have forgotten your password, please click on the link below.",
            html: `
                <p style="font-size:20px">If you have forgotten your password, please click on the link below.</p>
                <a href="${process.env.BASE_URL}/forget/newPassword/${token}" style="background-color: black; color: white; padding: 10px; text-decoration: none; display: inline-block; border-radius: 5px;">
                    I forgot my password
                </a>
            `
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ success: false, message: 'Something went wrong!' });
            } else {
                return res.status(200).json({ success: true, message: 'Please check your email address so we can make sure it\'s you.' });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Something went wrong!' });
    }
};
exports.newPassword = async (req, res) => {
    try {
        const { token } = req.params
        const { newpassword } = req.body

        const jwtResponse = jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(400).json({ success: false, message: 'Please request tokens to your email address again.' })
            } else if (decoded) {
                return decoded
            }
        })

        if (jwtResponse.id) {
            const findedUser = await User.findById(jwtResponse.id)
            if (newpassword.length > 5) {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(newpassword, salt)
                findedUser.password = hashPassword
                await findedUser.save()
                return res.json({ success: true, message: 'Your password has been successfully updated' })
            } else {
                res.status(400).json({ success: false, message: 'The length of your password must be more than 5' })
            }
        }

    } catch (error) {
        res.status(400).json({ success: false, message: 'something went wrong!!' })
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


