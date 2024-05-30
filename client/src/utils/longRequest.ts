import {RequestStatus} from '@fullstack-typescript-monorepo/prisma';
import RequestRoutes from '../api/RequestRoutes';

const longRequest = async (requestIdPromise: Promise<number>) => {
  const requestId = await requestIdPromise;

  if (!requestId) {
    throw new Error('Request failed');
  }

  const promise = new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      RequestRoutes.get({id: requestId})
        .then(req => {
          if (req.status === RequestStatus.SUCCESS) {
            resolve(req.response);
            clearInterval(interval);

            // Delete request
            RequestRoutes.delete(requestId).catch(() => {
              console.error('Error while deleting request', requestId);
            });
          } else if (req.status === RequestStatus.ERROR) {
            reject(req.response);
            clearInterval(interval);

            // Delete request
            RequestRoutes.delete(requestId).catch(() => {
              console.error('Error while deleting request', requestId);
            });
          }
        })
        .catch(err => {
          reject(err);
          clearInterval(interval);
        });
    }, 1000);
  });

  return promise;
};

export default longRequest;
