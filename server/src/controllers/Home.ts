import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Request, Response } from 'express';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

/**
 * Get home stats
 */
const stats = (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const userCount = await prisma.user.count({
      where: { active: true },
    });

    res.json({
      users: userCount,
      stat2: Math.floor(Math.random() * 100),
      stat3: Math.floor(Math.random() * 100),
    });
  } catch (error) {
    sendError(res, error);
  }
};

export default {
  stats,
};