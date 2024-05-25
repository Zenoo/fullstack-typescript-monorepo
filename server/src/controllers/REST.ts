import { ExpectedError, PrismaInclude } from '@fullstack-typescript-monorepo/core';
import { PrismaClient } from '@fullstack-typescript-monorepo/prisma';
import { Request, Response } from 'express';
import { t } from 'i18next';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import TableUtils, { TableRequestBody } from '../utils/TableUtils.js';

export interface GenericPrisma extends PrismaClient {
  [key: string]: unknown;
}

export interface MOCK_PrismaModel {
  create: (prop: { data: unknown }) => Promise<unknown>;
  findUniqueOrThrow: (prop?: object) => Promise<unknown>;
  findMany: (prop?: object) => Promise<unknown[]>;
  count: (prop: object) => Promise<number>;
  update: (prop: object) => Promise<unknown>;
  delete: (prop: object) => Promise<unknown>;
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
    const prismaModel = (prisma as GenericPrisma)[model] as MOCK_PrismaModel;

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
const get = (model: string) => (prisma: PrismaClient) => async (
  req: Request<{ id: string }, unknown, { include?: PrismaInclude }>,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const { id } = req.params;
    const { include } = req.body;

    if (!id) {
      throw new ExpectedError(t('noIDProvided'));
    }

    const prismaModel = (prisma as GenericPrisma)[model] as MOCK_PrismaModel;

    const object = await prismaModel.findUniqueOrThrow({
      where: { id },
      include,
    });

    res.json(object);
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * List objects from the database
 * @param model
 */
const list = (model: string) => (prisma: PrismaClient) => async (
  req: Request<never, unknown, { include?: PrismaInclude, where?: object }>,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const { include, where } = req.body;

    const prismaModel = (prisma as GenericPrisma)[model] as MOCK_PrismaModel;

    const objects = await prismaModel.findMany({
      where,
      include,
    });

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

    const prismaModel = (prisma as GenericPrisma)[model] as MOCK_PrismaModel;

    const objects = await prismaModel.findMany() as Record<string, unknown>[];

    if (!objects.length) {
      throw new ExpectedError(t('nothingToExport'));
    }

    // Create CSV file
    let csv = '';

    // Add headers
    const headers = Object.keys(objects[0] ?? {});
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

/**
 * Get objects for a paginated table
 * @param model
 */
const table = (model: string) => (prisma: PrismaClient) => async (
  req: Request<never, unknown, TableRequestBody>,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const prismaModel = (prisma as GenericPrisma)[model] as MOCK_PrismaModel;

    const data = await TableUtils.getData(req, prismaModel, undefined, req.body.include);
    res.json(data);
  } catch (error) {
    sendError(res, error);
  }
};

/**
 * Update an object in the database
 * @param model
 */
const update = (model: string) => (prisma: PrismaClient) => async (
  req: Request<{ id: string }, unknown, { data: object, include: PrismaInclude }>,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const { id } = req.params;
    const { data, include } = req.body;
    const prismaModel = (prisma as GenericPrisma)[model] as MOCK_PrismaModel;

    const updatedObject = await prismaModel.update({
      where: { id },
      data,
      include,
    });

    res.json(updatedObject);
  } catch (error) {
    sendError(res, error);
  }
};

const deleteObject = (model: string) => (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
) => {
  try {
    await auth(prisma, req);

    const { id } = req.params;
    const prismaModel = (prisma as GenericPrisma)[model] as MOCK_PrismaModel;

    await prismaModel.delete({
      where: { id },
    });

    res.send({ success: true });
  } catch (error) {
    sendError(res, error);
  }
};

const REST = (model: string) => ({
  insert: insert(model),
  get: get(model),
  list: list(model),
  getAllAsCsv: getAllAsCsv(model),
  table: table(model),
  update: update(model),
  delete: deleteObject(model),
});

export default REST;