import { PrismaInclude } from '@fullstack-typescript-monorepo/core';
import { TableState } from '../components/Datatable';
import Fetch from '../utils/fetcher';

export interface getProps {
  id: number;
  include?: PrismaInclude;
}

const Super = <Model, Setter extends object>(model: string) => ({
  insert: (data: Setter) => Fetch<Model>(`/api/${model}`, data, 'PUT'),
  get: ({ id, include }: getProps) => Fetch<Model>(`/api/${model}/${id}/get`, {
    include,
  }, 'POST'),
  getAll: (include: PrismaInclude) => Fetch<Model[]>(`/api/${model}/all`, {
    include,
  }, 'POST'),
  getAllAsCsv: (title: string) => Fetch<Blob>(`/api/${model}/all/csv`, {
    title,
  }),
  table: (
    state: TableState,
    include?: PrismaInclude,
  ) => Fetch<{ data: Model[], count: number }>(`/api/${model}/table`, {
    state,
    include,
  }, 'POST'),
  update: (
    id: number,
    data: Setter,
    include?: PrismaInclude
  ) => Fetch<Model>(`/api/${model}/${id}/update`, {
    data,
    include,
  }, 'POST'),
  delete: (id: number) => Fetch<never>(`/api/${model}/${id}`, {}, 'DELETE'),
});

export default Super;
