/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Express, Request, Response } from 'express';
import path from 'path';
import Records from './controllers/Records';
import Requests from './controllers/Requests';
import Users from './controllers/Users';

// Get client index.html
const CLIENT_INDEX = path.join(__dirname, '..', '..', 'client', 'build', 'index.html');

const initRoutes = (app: Express, prisma: PrismaClient) => {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!',
  }));

  // User
  app.get('/api/user/all', Users.getAll(prisma));
  app.get('/api/user/all/csv', Users.getAllAsCsv(prisma));
  app.put('/api/user', Users.insert(prisma));
  app.get('/api/user/:id', Users.get(prisma));
  app.post('/api/user/table', Users.table(prisma));
  app.post('/api/user/:id', Users.update(prisma));
  app.delete('/api/user/:id', Users.delete(prisma));
  app.post('/api/user/authenticate', Users.authenticate(prisma));
  app.post('/api/user/:id/change-password', Users.changePassword(prisma));
  app.get('/api/user/:login/send-password-reset-mail', Users.sendPasswordResetEmail(prisma));
  app.get('/api/user/:login/reset-code-check', Users.checkResetCodeValidity(prisma));
  app.post('/api/user/reset-password', Users.resetPassword(prisma));

  // Record
  app.get('/api/record/list', Records.list(prisma));
  app.get('/api/record/all', Records.getAll(prisma));
  app.get('/api/record/all/csv', Records.getAllAsCsv(prisma));
  app.put('/api/record', Records.insert(prisma));
  app.get('/api/record/:id', Records.get(prisma));
  app.post('/api/record/table', Records.table(prisma));
  app.post('/api/record/:id', Records.update(prisma));
  app.delete('/api/record/:id', Records.delete(prisma));

  // Request
  app.get('/api/request/all', Requests.getAll(prisma));
  app.get('/api/request/all/csv', Requests.getAllAsCsv(prisma));
  app.put('/api/request', Requests.insert(prisma));
  app.get('/api/request/:id', Requests.get(prisma));
  app.post('/api/request/table', Requests.table(prisma));
  app.post('/api/request/:id', Requests.update(prisma));
  app.delete('/api/request/:id', Requests.delete(prisma));

  // Client index
  app.get('/', (req, res) => {
    res.sendFile(CLIENT_INDEX);
  });
};

export default initRoutes;
