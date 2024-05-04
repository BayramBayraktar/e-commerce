const router = require('express').Router()

/* USER CONTROLLERS */
const {
    login,
    logout,
    signin,
    email_decode_token,
    forget_password,
    newPassword
} = require('../controllers/userContollers');


router.post('/login', login);
router.get('/logout', logout);
router.post('/signin', signin);
router.get('/verify/:token', email_decode_token);
router.post('/forget/password', forget_password);
router.post('/forget/newpassword/:token', newPassword)


module.exports = router;


