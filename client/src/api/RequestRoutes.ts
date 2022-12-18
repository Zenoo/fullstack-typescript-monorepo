import { Request as _Request } from '@fullstack-typescript-monorepo/prisma';
import Super from './Super';

// Typescript reference error hack
export type Request = {
  [key in keyof _Request]: Request[key];
};

const RequestRoutes = {
  ...Super<Request>('request'),
};

export default RequestRoutes;
