import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientValidationError,
} from '@fullstack-typescript-monorepo/prisma/runtime';
import { Response } from 'express';

const sendError = (res: Response, error: unknown) => {
  res.status(500);
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2025': {
        res.send(error.message);
        break;
      }
      default: {
        console.error(error.message);
        res.send(`Wrong data format: ${error.code}`);
        break;
      }
    }
  } else if (error instanceof PrismaClientUnknownRequestError) {
    res.send(error.message);
  } else if (error instanceof PrismaClientInitializationError) {
    res.send(error.message);
  } else if (error instanceof PrismaClientValidationError) {
    console.error(error.message);
    res.send('Wrong data format');
  } else if (error instanceof Error) {
    res.send(error.message);
  } else {
    res.send(error);
  }
};

export default sendError;