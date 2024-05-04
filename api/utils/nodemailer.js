const nodemailer = require('nodemailer')

const sendEmail = (options) => {

    const transporter = nodemailer.createTransport({

        service: 'gmail',
        secure: true,
        auth: {
            user: "bayrambayraktar091@gmail.com",
            pass: mysbfbaotmmgwkro
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: `"ES-HOP Team " `,
        to: options.to,
        subject: options.subject,
        html: options.text,
    }

    return transporter.sendMail(mailOptions)
}

module.exports = { sendEmail }