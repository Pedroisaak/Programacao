import crypto from "crypto";
import fs from "node:fs/promises";
import { UPLOAD_DIR } from "../consts/files";
import logger from "./logger";

const getFileName = (file: any) => {
  const fileHash = crypto.randomBytes(16).toString("hex");
  const fileType = file.mimetype.split('/')[1]
  const clearName = file.name.replace(fileType, '').replace(/[\s|\.]/g,'')
  return `${clearName}-${fileHash}.${fileType}`;
};

const createFolderIfNotExists = async () => {
  if (await !fs.access(UPLOAD_DIR)) {
    try {
      await fs.mkdir(UPLOAD_DIR, { recursive: true });
      logger.info(`${UPLOAD_DIR} created!`);
    } catch (error) {
      logger.error(error, "Error to create UPLOAD DIR");
    }
    logger.info("UPLOAD DIR exists");
  }
};

export const upload = async (file: any) => {
  let errorMsg = ""
  let fileName = ""
  try {    
    await createFolderIfNotExists();
  
    fileName = getFileName(file);
    file.mv(`${UPLOAD_DIR}/${fileName}`, (err: any) => {
      if (err) {
        logger.error(err, "Error to upload");
        errorMsg = "Error to upload"
      }
      logger.info(`File uploaded: ${fileName}`)
    });
  
    return { fileName, error: errorMsg }
  } catch (err) {
    errorMsg = "Error to upload"
    logger.error(err, errorMsg);
    return { fileName, error: errorMsg }
  }

};
