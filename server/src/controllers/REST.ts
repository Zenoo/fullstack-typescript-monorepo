import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Request, Response } from 'express';
import auth from '../utils/auth';
import sendError from '../utils/sendError';

interface GenericPrisma extends PrismaClient {
  [key: string]: unknown;
}

interface PrismaModel {
  create: (prop: { data: unknown }) => Promise<unknown>;
  findUniqueOrThrow: (prop: { where: { id: number } }) => Promise<unknown>;
  findMany: () => Promise<unknown[]>;
}

/**
 * Insert a new object in the database
 * @param model
 */
const insert = (model: string) => (prisma: PrismaClient) => async (
  req: Request<never, unknown, unknown>,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const { body } = req;
    const prismaModel = (prisma as GenericPrisma)[model] as PrismaModel;

    const object = await prismaModel.create({
      data: body,
    });

    res.json(object);
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Get an object from the database
 * @param model
 */
const get = (model: string) => (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    await auth(prisma, req);

    const { id } = req.params;
    const prismaModel = (prisma as GenericPrisma)[model] as PrismaModel;

    const object = await prismaModel.findUniqueOrThrow({
      where: { id: +id },
    });

    res.json(object);
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Get all objects from the database
 * @param model
 */
const getAll = (model: string) => (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    await auth(prisma, req);

    const prismaModel = (prisma as GenericPrisma)[model] as PrismaModel;

    const objects = await prismaModel.findMany();

    res.json(objects);
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Get all objects from the database as a CSV
 * @param model
 */
const getAllAsCsv = (model: string) => (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const prismaModel = (prisma as GenericPrisma)[model] as PrismaModel;

    const objects = await prismaModel.findMany() as Record<string, unknown>[];

    if (!objects.length) {
      throw new Error('Nothing to export');
    }

    // Create CSV file
    let csv = '';

    // Add headers
    const headers = Object.keys(objects[0]);
    csv += `${headers.join(';')}\n`;

    // Add rows
    objects.forEach((object) => {
      const row = headers.map((header) => object[header]);
      csv += `${row.join(';')}\n`;
    });

    // Send CSV file
    res.header('Content-Type', 'text/csv').send(csv);
  } catch (error) {
    sendError(res, error);
  }
};

const REST = (model: string) => ({
  insert: insert(model),
  get: get(model),
  getAll: getAll(model),
  getAllAsCsv: getAllAsCsv(model),
});

export default REST;