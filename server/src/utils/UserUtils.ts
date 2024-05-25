import { User } from '@fullstack-typescript-monorepo/prisma';
import dayjs from 'dayjs';

/**
 * Get the token expiration date
 * @param user
 */
const getTokenExpiration = (user: User) => {
  // Set yesterday as the expiration date
  const expired = dayjs().subtract(1, 'day');

  // No token, automatically expired
  if (!user.connexionToken) {
    return expired;
  }

  // Base 64 decode the token
  const decodedToken = Buffer.from(user.connexionToken, 'base64').toString();

  // Malformed token, automatically expired
  if (!decodedToken.includes('|')) {
    return expired;
  }

  return dayjs(decodedToken.split('|')[1]);
};

export default {
  getTokenExpiration,
};