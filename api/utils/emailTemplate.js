const forgotMessage = (token) => {
    return `
            <body 
            <p style={font-size:20px}>If you have forgotten your password, please click on the link below.</p>
            <a href="${process.env.BASE_URL}/forget/newPassword/${token}" style="background-color: black; color: white; padding: 10px; text-decoration: none; display: inline-block; border-radius: 5px;">
                I forgot my password
            </a>
            </body>
        `
}


module.exports = { forgotMessage }