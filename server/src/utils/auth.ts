import { ExpectedError } from '@fullstack-typescript-monorepo/core';
import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Request } from 'express';

const auth = async (prisma: PrismaClient, request: Request) => {
  const { headers: { authorization } } = request;

  if (!authorization) {
    throw new ExpectedError('No authorization header');
  }
  if (typeof authorization !== 'string') {
    throw new ExpectedError('Invalid authorization header');
  }

  const [login, token] = Buffer.from(authorization.split(' ')[1] || '', 'base64')
    .toString().split(':');

  const user = await prisma.user.findFirstOrThrow({
    where: {
      login,
      active: true,
      connexionToken: token,
    },
    select: {
      id: true,
      lang: true,
      admin: true,
    },
  });

  return {
    ...user,
    password: null,
  };
};

export default auth;