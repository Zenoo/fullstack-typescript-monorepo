/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Express, Request, Response } from 'express';
import path from 'path';
import Users from './controllers/Users';

// Get client index.html
const CLIENT_INDEX = path.join(__dirname, '..', '..', 'client', 'build', 'index.html');

const initRoutes = (app: Express, prisma: PrismaClient) => {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!',
  }));

  // User
  app.get('/api/user/:id', Users.get(prisma));

  // Client index
  app.get('/', (req, res) => {
    res.sendFile(CLIENT_INDEX);
  });
};

export default initRoutes;
