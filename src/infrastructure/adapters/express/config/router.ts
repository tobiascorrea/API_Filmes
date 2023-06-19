import { Router, Express } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  load(router);
};

/**
 *Load all files from src/infrastructure/adapters/express/routers/filename.ts,
 these files are the routers from application by Express
 * @param router Router from express
 */
function load(router: Router) {
  readdirSync(join(__dirname, '../../../http/routers')).map(async (file) => {
    if (!file.endsWith('.map')) {
      (await import(`../../../http/routers/${file}`)).default(router);
    }
  });
}
