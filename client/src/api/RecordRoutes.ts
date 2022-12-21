import { Prisma, Record } from '@fullstack-typescript-monorepo/prisma';
import Super from './Super';
import { User, UserWithPerson } from './UserRoutes';

export type RecordWithAuthor = Record & {
  author: User;
};
export type RecordWithAuthorWithPerson = Record & {
  author: UserWithPerson;
};

const RecordRoutes = {
  ...Super<Record, Prisma.RecordInclude, Prisma.RecordWhereInput, Prisma.RecordUpdateInput>('record'),
};

export default RecordRoutes;
