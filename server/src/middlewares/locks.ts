import { ExpectedError } from '@fullstack-typescript-monorepo/core';
import type { Request, Response, NextFunction } from 'express';
import sendError from '../utils/sendError.js';

const locks = new Map<string, NodeJS.Timeout>();

function deleteLock(key: string) {
  if (locks.has(key)) {
    clearTimeout(locks.get(key));
    locks.delete(key);
  }
}

export default function lockMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, path } = req;

  const { headers: { authorization } } = req;

  if (authorization) {
    const [id] = Buffer.from(authorization.split(' ')[1] || '', 'base64').toString().split(':');

    if (!id || id === 'null') {
      return sendError(res, new ExpectedError('Invalid authorization header content'));
    }

    const key = `${method}:${path.toLowerCase().replace(/\//g, '')}:${id}`;

    if (locks.has(key)) {
      return sendError(res, new ExpectedError('Too many requests'));
    }

    locks.set(key, setTimeout(() => {
      deleteLock(key);
    }, 10000));

    res.on('close', () => {
      deleteLock(key);
    });

    res.on('error', () => {
      deleteLock(key);
    });

    res.on('finish', () => {
      deleteLock(key);
    });
  }

  return next();
}
