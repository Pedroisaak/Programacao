import crypto from "crypto";
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/files');
  },
  filename: (request, file, callback) => {
    const fileHash = crypto.randomBytes(16).toString("hex");
    const fileName = `${fileHash}-${file.originalname}`;
    return callback(null, fileName);
  }
});

export const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const types = /png|jpg|jpeg|webp|gif|webp|svg/.test(file.mimetype)
    if (types) {
      cb(null, true);
    } else {
      cb(new Error("Not a supported File!!"), false);
    }
  },
});
