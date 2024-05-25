import {
  PrismaClient
} from '@fullstack-typescript-monorepo/prisma';
import { DISCORD } from './context.js';

const dailyJob = (prisma: PrismaClient) => async () => {
  try {
    // Daily tasks here
  } catch (error: unknown) {
    if (!(error instanceof Error)) {
      throw error;
    }
    DISCORD.sendError(error);
  }
};

export default dailyJob;
