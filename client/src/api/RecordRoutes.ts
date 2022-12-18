import { Record } from '@fullstack-typescript-monorepo/prisma';
import Fetch from '../utils/fetcher';
import Super from './Super';
import { User } from './UserRoutes';

export type RecordWithAuthor = Record & {
  author: User;
};

const RecordRoutes = {
  ...Super<Record>('record'),
  list: (object?: string) => Fetch<RecordWithAuthor[]>('/api/record/list', {
    object,
  }),
};

export default RecordRoutes;
