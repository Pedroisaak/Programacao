import app from "./server";
import logger from "./sharred/services/logger";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  logger.info(`🚀 App listening on port ${port}`)
});
