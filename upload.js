const multer = require("multer");

module.exports = (destination) => {
    const fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destination);
        },

        filename: (req, file, cb) => {
            const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);             
            const ext = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
            cb(null, file.fieldname + "-" + unique + ext);
        },
    });

    return multer({ storage: fileStorage });
};
