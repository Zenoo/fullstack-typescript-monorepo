import { ExpectedError } from '@fullstack-typescript-monorepo/core';
import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Request } from 'express';
import i18next from 'i18next';

const auth = async (prisma: PrismaClient, request: Request) => {
  const { headers: { authorization } } = request;

  if (!authorization) {
    throw new ExpectedError('No authorization header');
  }
  if (typeof authorization !== 'string') {
    throw new ExpectedError('Invalid authorization header');
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

  // Change i18n language
  await i18next.changeLanguage(user.lang);

  // Never return the password
  return {
    ...user,
    password: null,
  };
};

export default auth;
