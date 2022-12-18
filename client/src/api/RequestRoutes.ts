import Super from './Super';

export interface Request {
  id: number;
  status: 'pending' | 'success' | 'error';
  response: object;
}

const RequestRoutes = {
  ...Super<Request>('request'),
};

export default RequestRoutes;
