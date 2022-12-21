import { Prisma, Request } from '@fullstack-typescript-monorepo/prisma';
import Super from './Super';

const RequestRoutes = {
  ...Super<Request, never, Prisma.RequestWhereInput, Prisma.RequestUpdateInput>('request'),
};

export default RequestRoutes;
