const router = require('express').Router()

/* USER CONTROLLERS */
const {
    login,
    logout,
    signin,
    email_decode_token
} = require('../controllers/userContollers');

/*login*/
router.post('/login', login);
router.get('/logout', logout);
router.post('/signin', signin);
router.get('/verify/:token', email_decode_token);

module.exports = router;


