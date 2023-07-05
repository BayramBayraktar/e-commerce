const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/Uploads/img/') // sotrage path
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

//Storage-limit
const Upload = multer({ storage: storage }).array("image");
module.exports = Upload


