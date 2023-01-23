import app from "./server";
import { AppMessages } from "./sharred/consts/AppMessages";
import logger from "./sharred/services/logger";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  logger.info(`${AppMessages.AppListening} ${port}`)
});
