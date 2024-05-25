import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Request, Response } from 'express';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import REST from './REST.js';

/**
 * Get record list
 * @param prisma
 */
const list = (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
) => {
  try {
    const { object } = req.params;

    await auth(prisma, req);

    const records = await prisma.record.findMany({
      where: object ? { object } : undefined,
      include: {
        author: {
          include: {
            person: true,
          },
        },
      },
    });

    res.json(records);
  } catch (error) {
    sendError(res, error);
  }
};

export default {
  ...REST('record'),
  list,
};