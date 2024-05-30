import ExpectedError from './utils/ExpectedError';
import pad from './utils/pad';

export {ExpectedError, pad};

export const LANGUAGES = ['en', 'fr'] as const;
export const DEFAULT_LANGUAGE = LANGUAGES[0];
export type Language = (typeof LANGUAGES)[number];

export type PrismaInclude = {
  [key: string]: boolean | PrismaInclude;
};
