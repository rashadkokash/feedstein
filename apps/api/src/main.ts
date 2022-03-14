import app from './app/app';
import { getMongoDBClient } from './app/infra/db';
import logger from './app/infra/logger';
import { PORT } from './app/config';

async function main() {
  try {
    await getMongoDBClient();
    logger.info('Conncted to databaase');
    app.listen(PORT, () => {
      logger.info(`App is listening on port: ${PORT}`);
    });
  } catch (e) {
    logger.error(e);
  }
}

main();
