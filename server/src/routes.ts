import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import type { Express, Request, Response } from 'express';
import path from 'path';
import Users from './controllers/Users.js';
import Records from './controllers/Records.js';
import Requests from './controllers/Requests.js';
import Home from './controllers/Home.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get client index.html
const CLIENT_INDEX = path.join(__dirname, '..', '..', 'client', 'build', 'index.html');

export default function initRoutes(app: Express, prisma: PrismaClient) {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!',
  }));

  // Home
  app.get('/api/home/stats', Home.stats(prisma));

  // User
  app.post('/api/user/authenticate', Users.authenticate(prisma));
  app.post('/api/user/reset-password', Users.resetPassword(prisma));
  app.post('/api/user/list', Users.list(prisma));
  app.get('/api/user/all/csv', Users.getAllAsCsv(prisma));
  app.put('/api/user', Users.insert(prisma));
  app.post('/api/user/:id/get', Users.get(prisma));
  app.post('/api/user/table', Users.table(prisma));
  app.post('/api/user/:id/update', Users.update(prisma));
  app.delete('/api/user/:id', Users.delete(prisma));
  app.post('/api/user/:id/change-password', Users.changePassword(prisma));
  app.get('/api/user/:login/send-password-reset-mail', Users.sendPasswordResetEmail(prisma));
  app.get('/api/user/:login/reset-code-check', Users.checkResetCodeValidity(prisma));

  // Record
  app.post('/api/record/list', Records.list(prisma));
  app.get('/api/record/all/csv', Records.getAllAsCsv(prisma));
  app.put('/api/record', Records.insert(prisma));
  app.post('/api/record/:id/get', Records.get(prisma));
  app.post('/api/record/table', Records.table(prisma));
  app.post('/api/record/:id/update', Records.update(prisma));
  app.delete('/api/record/:id', Records.delete(prisma));

  // Request
  app.post('/api/request/list', Requests.list(prisma));
  app.get('/api/request/all/csv', Requests.getAllAsCsv(prisma));
  app.put('/api/request', Requests.insert(prisma));
  app.post('/api/request/:id/get', Requests.get(prisma));
  app.post('/api/request/table', Requests.table(prisma));
  app.post('/api/request/:id/update', Requests.update(prisma));
  app.delete('/api/request/:id', Requests.delete(prisma));

  // Client index
  app.get('*', (req, res) => {
    res.sendFile(CLIENT_INDEX);
  });
}
