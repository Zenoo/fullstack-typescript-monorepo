import { Lang } from '@fullstack-typescript-monorepo/prisma';

export * from './types';
export * from './Version';
export * from './utils/ExpectedError';

export const DEFAULT_LANGUAGE = Lang.en;

export type PrismaInclude = {
  [key: string]: boolean | PrismaInclude;
};