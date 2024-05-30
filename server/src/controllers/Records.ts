import {PrismaClient} from '@fullstack-typescript-monorepo/prisma';
import {Request, Response} from 'express';
import auth from '../utils/auth';
import sendError from '../utils/sendError';
import REST from './REST';

/**
 * Get record list
 * @param prisma
 */
const list = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const {object} = req.params;

    await auth(prisma, req);

    const records = await prisma.record.findMany({
      where: object ? {object} : undefined,
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
