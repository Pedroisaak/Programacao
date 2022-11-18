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
    if (
      file.mimetype.split("/")[1] === "png" ||
      file.mimetype.split("/")[1] === "jpg" ||
      file.mimetype.split("/")[1] === "jpeg") {
      cb(null, true);
    } else {
      cb(new Error("Not a Image File!!"), false);
    }
  },
});
