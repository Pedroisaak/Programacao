import app from "./server";
import logger from "./sharred/helpers/logger";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`🚀 App listening on port ${port}`)
});
