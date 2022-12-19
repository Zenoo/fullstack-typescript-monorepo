import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import moment from 'moment';
import auth from '../utils/auth';
import MailUtils from '../utils/MailUtils';
import sendError from '../utils/sendError';
import TableUtils, { TableRequestBody } from '../utils/TableUtils';
import UserUtils from '../utils/UserUtils';
import REST from './REST';

/**
 * Authenticate a user with login and password/token
 * @param prisma
 */
const authenticate = (prisma: PrismaClient) => async (
  req: Request<never, unknown, {
    login?: string;
    password?: string;
  }>,
  res: Response,
) => {
  try {
    const { login, password } = req.body;

    if (!login) {
      throw new Error('Missing Login');
    }

    if (!password) {
      throw new Error('Missing Password');
    }

    const user = await prisma.user.findFirstOrThrow({
      where: {
        login,
        active: true,
      },
      include: { person: true },
    });

    // Check password against connexion token
    const passwordIsToken = password === user.connexionToken;

    // User is aleady logged in with the token
    if (passwordIsToken) {
      // Check if token is expired
      if (moment().isBefore(UserUtils.getTokenExpiration(user))) {
        // Token is not expired, return user
        res.json(user);
        return;
      }

      // Token is expired, throw error
      throw new Error('Token expired');
    }

    // Check password against DB
    const passwordIsCorrect = await bcrypt.compare(password, user.password || '');

    if (passwordIsCorrect) {
      // Check if token is expired
      if (moment().isBefore(UserUtils.getTokenExpiration(user))) {
        // Token is not expired, return user
        res.json(user);
        return;
      }

      // Token is expired, generate a new one (7 days)
      // Random string + | + expiration date
      user.connexionToken = Buffer.from(`${Math.random().toString(36).substring(2, 15)}|${moment().add(7, 'days').toISOString()}`).toString('base64');

      // Save new token
      await prisma.user.update({
        where: { id: user.id },
        data: {
          connexionToken: user.connexionToken,
        },
      });

      // Return user
      res.json(user);
      return;
    }

    throw new Error('Invalid password');
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Change user password
 * @param prisma
 */
const changePassword = (prisma: PrismaClient) => async (
  req: Request<{ id: string }, unknown, { password?: string }>,
  res: Response,
) => {
  try {
    const id = +req.params.id;
    const { password } = req.body;
    const user = await auth(prisma, req);

    const userToUpdate = await prisma.user.findUniqueOrThrow({
      where: { id: user.id },
    });

    // Check if user is self or admin
    if (user.id !== id && !user.admin) {
      throw new Error('Unauthorized');
    }

    // Check if password is provided
    if (!password) {
      throw new Error('Missing password');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user
    await prisma.user.update({
      where: { id: userToUpdate.id },
      data: {
        password: hashedPassword,
      },
    });

    res.status(200).send();
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Send password reset email
 * @param prisma
 */
const sendPasswordResetEmail = (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
) => {
  try {
    const { login } = req.params;

    const user = await prisma.user.findFirstOrThrow({
      where: { login, active: true },
      include: { person: true },
    });

    // Generate token
    const token = await bcrypt.hash(`${user.id}`, 10);

    // Reset URL
    const url = `${req.protocol}://${req.hostname}/login?login=${encodeURIComponent(user.login)}&reset=${encodeURIComponent(token)}`;

    // Mail message
    const message = 'If the button doesn\'t work copy and paste the following in your browser';

    // Send email
    await MailUtils.sendPasswordResetMail(user, url, message);
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Check if reset code is valid
 * @param prisma
 */
const checkResetCodeValidity = (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
) => {
  try {
    const { login, code } = req.params;

    const user = await prisma.user.findFirstOrThrow({
      where: { login, active: true },
      include: { person: true },
    });

    // Check if token is valid
    const tokenIsValid = await bcrypt.compare(`${user.id}`, code);

    if (tokenIsValid) {
      res.send();
    } else {
      throw new Error('Invalid token');
    }
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Reset password
 * @param prisma
 */
const resetPassword = (prisma: PrismaClient) => async (
  req: Request<
    never,
    unknown,
    { code?: string, password?: string, login?: string }
  >,
  res: Response,
) => {
  try {
    const { code, login, password } = req.body;

    if (!code) {
      throw new Error('Missing token');
    }

    if (!login) {
      throw new Error('Missing login');
    }

    if (!password) {
      throw new Error('Missing password');
    }

    const user = await prisma.user.findFirstOrThrow({
      where: { login, active: true },
      include: { person: true },
    });

    // Check if token is valid
    const tokenIsValid = await bcrypt.compare(`${user.id}`, code);

    if (!tokenIsValid) {
      throw new Error('Invalid token');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
      },
    });

    res.send();
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Get users for a paginated table
 * @param model
 */
const table = (prisma: PrismaClient) => async (
  req: Request<never, unknown, TableRequestBody>,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const data = await TableUtils.getData(req, prisma.user, undefined, {
      person: true,
    });
    res.json(data);
  } catch (error) {
    sendError(res, error);
  }
};

export default {
  ...REST('user'),
  authenticate,
  changePassword,
  sendPasswordResetEmail,
  checkResetCodeValidity,
  resetPassword,
  table,
};
