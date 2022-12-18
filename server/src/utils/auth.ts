import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Request } from 'express';

const auth = async (prisma: PrismaClient, request: Request) => {
  const { headers: { authorization } } = request;

  if (!authorization) {
    throw new Error('No authorization header');
  }
  if (typeof authorization !== 'string') {
    throw new Error('Invalid authorization header');
  }

  const [login, token] = Buffer.from(authorization.split(' ')[1], 'base64')
    .toString().split(':');

  const user = await prisma.user.findFirstOrThrow({
    where: {
      login,
      active: true,
      connexionToken: token,
    },
    include: {
      person: true,
    },
  });

  // Never return the password
  return {
    ...user,
    password: null,
  };
};

export default auth;
