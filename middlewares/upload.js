const multer = require('multer');

const path = require('path')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/category-image')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    },
})


let upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
            callback(null, true);
        } else {
            console.log('file should be png or jpg');
            callback(null, true);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;