import {TableState} from '../components/Datatable';
import Fetch from '../utils/fetcher';

const Super = <Model, Include, Where, Setter extends object>(
  model: string
) => ({
  insert: (data: Setter) => Fetch<Model>(`/api/${model}`, data, 'PUT'),
  get: ({id, include}: {id: number; include?: Include}) =>
    Fetch<Model>(
      `/api/${model}/${id}/get`,
      {
        include,
      },
      'POST'
    ),
  list: (params: {include?: Include; where?: Where}) =>
    Fetch<Model[]>(`/api/${model}/list`, params, 'POST'),
  getAllAsCsv: (title: string) =>
    Fetch<Blob>(`/api/${model}/all/csv`, {
      title,
    }),
  table: (state: TableState, include?: Include) =>
    Fetch<{data: Model[]; count: number}>(
      `/api/${model}/table`,
      {
        state,
        include,
      },
      'POST'
    ),
  update: (id: number, data: Setter, include?: Include) =>
    Fetch<Model>(
      `/api/${model}/${id}/update`,
      {
        data,
        include,
      },
      'POST'
    ),
  delete: (id: number) => Fetch<never>(`/api/${model}/${id}`, {}, 'DELETE'),
});

export default Super;
