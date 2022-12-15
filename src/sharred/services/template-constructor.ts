import path from "node:path";
import fs from "node:fs";
import handlebars from "handlebars";
import logger from "./logger";

const TEMPLATE_FOLDER = "./src/sharred/templates/email-templates/";
export const templateConstructorService = (
  templateName: string,
  data: any
) => {
  try {
    const emailTemplateSource = fs.readFileSync(
      path.resolve(TEMPLATE_FOLDER, `${templateName}.handlebars`),
      "utf8"
    );
    const template = handlebars.compile(emailTemplateSource);
    logger.info("Template compiled");
    return template(data);
  } catch (error) {
    logger.error(error, "Error to compile template");
  }
};
