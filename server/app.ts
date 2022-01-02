import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';

import { sequelize } from './db';
import { schema } from './graphql/schema';

dotenv.config();
const PORT = process.env.PORT || 5000;

(async () => {
  const app: Application = express();

  if (process.env.NODE_ENV != 'production') {
    sequelize.authenticate().then(async () => {
      console.info('Syncing database');

      try {
        await sequelize.sync();
      } catch (error) {
        console.info(error);
      }
    });
  } else {
    console.info('Production Mode');
  }

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, testing for server');
  });

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );

  app.listen(PORT, () => console.info('Server is running'));
})();
