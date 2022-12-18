import { Prisma, Record } from '@fullstack-typescript-monorepo/prisma';
import Fetch from '../utils/fetcher';
import Super from './Super';
import { User } from './UserRoutes';

export type RecordWithAuthor = Record & {
  author: User;
};

export type RecordUpdate = Partial<Record> & {
  author?: {
    create?: Prisma.RecordCreateWithoutAuthorInput;
    update?: Prisma.RecordUpdateWithoutAuthorInput;
  }
};

const RecordRoutes = {
  ...Super<Record, RecordUpdate>('record'),
  list: (object?: string) => Fetch<RecordWithAuthor[]>('/api/record/list', {
    object,
  }),
};

export default RecordRoutes;
