import { TableState } from '../components/Datatable';
import Fetch from '../utils/fetcher';

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export interface getProps {
  id: number;
  fetchPath: string;
}

const Super = <Model>(model: string) => ({
  insert: (data: Partial<Model>, fetchPath?: string) => Fetch<Model>(`/api/${model}`, data, 'PUT', { fetchPath }),
  get: ({ id, fetchPath }: getProps) => Fetch<Model>(`/api/${model}/${id}`, {
    fetchPath,
  }),
  getAll: (fetchPath: string) => Fetch<Model[]>(`/api/${model}/all`, {
    fetchPath,
  }),
  getAllAsCsv: (fetchPath: string, title: string) => Fetch<Blob>(`/api/${model}/all/csv`, {
    fetchPath,
    title,
  }),
  table: (
    fetchPath: string,
    state: TableState,
  ) => Fetch<{ data: Model[], count: number }>(`/api/${model}/table`, {
    fetchPath,
    state,
  }, 'POST'),
  update: (id: number, data: RecursivePartial<Model>, fetchPath?: string) => Fetch<Model>(`/api/${model}/${id}`, data, 'POST', { fetchPath }),
  delete: (id: number) => Fetch<never>(`/api/${model}/${id}`, {}, 'DELETE'),
});

export default Super;
