import { Request } from '@fullstack-typescript-monorepo/prisma';
import Super from './Super';

export type RequestUpdate = Partial<Request>;

const RequestRoutes = {
  ...Super<Request, RequestUpdate>('request'),
};

export default RequestRoutes;
