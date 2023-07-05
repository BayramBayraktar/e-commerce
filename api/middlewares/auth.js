const jwt = require('jsonwebtoken')
const User_schma = require('../models/user.model')

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.userSession
        if (token) {
            const decoded = jwt.decode(token)
            if (decoded?.User) {
                await User_schma.findById({ _id: decoded.User._id }).then((currentUser) => {
                    if (currentUser) {
                        req.user = currentUser
                        next()
                    } else {
                        res.status(204).json({ success: false, message: "Something Went Wrong!" })
                    }
                })
            }
        } else {
            res.json({ success: false, message: "please login!" })
        }
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.log(error)
        } else {
            error && res.status(404).json({ success: false, message: "Something Went Wrong!" })
        }
    }
}