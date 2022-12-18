import { Request } from 'express';
import { MOCK_PrismaModel } from '../controllers/REST';

const filterOperatorMapper = {
  or: 'OR',
  and: 'AND',
};
const operatorMapper = {
  contains: 'contains',
  equals: 'equals',
  startsWith: 'startsWith',
  endsWith: 'endsWith',
  '=': 'equals',
  '!=': 'not',
  '>': 'gt',
  '>=': 'gte',
  '<': 'lt',
  '<=': 'lte',
  isAnyOf: 'in',
  is: 'equals',
  not: 'not',
  after: 'gt',
  onOrAfter: 'gte',
  before: 'lt',
  onOrBefore: 'lte',
  isEmpty: 'equals',
  isNotEmpty: 'not',
} as const;

export type TableSortDirection = 'asc' | 'desc';

export interface TableRequestBody {
  state: {
    page: number; // 0 based
    rowsPerPage: number;
    sortOrder?: {
      direction: TableSortDirection;
      name: string;
    };
    filters: {
      value: unknown;
      columnField: string;
      operatorValue: keyof typeof operatorMapper;
    }[];
    filtersOperator: 'or' | 'and';
  }
}

/**
 * Get data for the table request
 * @param req
 * @param prismaModel
 * @param where
 */
const getData = async (
  req: Request<never, unknown, TableRequestBody>,
  prismaModel: MOCK_PrismaModel,
  where?: Record<string, unknown>,
) => {
  const {
    state: {
      page, rowsPerPage, sortOrder, filters, filtersOperator,
    },
  } = req.body;

  if (!page || !rowsPerPage) {
    throw new Error('Missing parameters');
  }

  // Generate prisma filters
  const prismaFilters = filters.map((filter) => {
    const operator = operatorMapper[filter.operatorValue];

    return {
      [filter.columnField]: {
        [operator]: filter.value,
      },
    };
  });

  // Get objects
  const objects = await prismaModel.findMany({
    where: {
      [filterOperatorMapper[filtersOperator]]: prismaFilters,
      ...where,
    },
    orderBy: { [sortOrder?.name || 'id']: sortOrder?.direction || 'asc' },
    skip: page * rowsPerPage,
    take: rowsPerPage,
  }) as Record<string, unknown>[];

  // Get total count
  const count = await prismaModel.count({
    where: {
      [filterOperatorMapper[filtersOperator]]: prismaFilters,
      ...where,
    },
  });

  return {
    data: objects,
    count,
  };
};

export default {
  getData,
};