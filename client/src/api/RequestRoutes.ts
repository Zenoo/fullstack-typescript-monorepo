import { Request } from '@fullstack-typescript-monorepo/prisma';
import Super from './Super';

const RequestRoutes = {
  ...Super<Request>('request'),
};

export default RequestRoutes;
