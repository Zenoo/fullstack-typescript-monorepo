import Fetch from '../utils/fetcher';
import Super from './Super';
import { User } from './UserRoutes';

export interface Record {
  id: number;
  actionTime: string;
  actionType: string;
  objectType: string;
  author: User;
}

interface RecordListProps {
  object?: string;
  fetchPath: string;
}

const RecordRoutes = {
  ...Super<Record>('record'),
  list: ({
    object,
    fetchPath,
  }: RecordListProps) => Fetch<Record[]>('/api/record/list', {
    object,
    fetchPath,
  }),
};

export default RecordRoutes;
