import { Person, Prisma, User as _User } from '@fullstack-typescript-monorepo/prisma';
import { TableState } from '../components/Datatable';
import Fetch from '../utils/fetcher';
import Super from './Super';

export type User = Omit<_User, 'password'>;

export type UserWithPerson = User & {
  person: Person;
};

const UserRoutes = {
  ...Super<User, Prisma.UserInclude, Prisma.UserWhereInput, Prisma.UserUpdateInput>('user'),
  table: (
    state: TableState,
    include?: Prisma.UserInclude,
  ) => Fetch<{ data: UserWithPerson[], count: number }>('/api/user/table', {
    state,
    include,
  }, 'POST'),
  authenticate: (login: string, password: string) => Fetch<UserWithPerson>('/api/user/authenticate', {
    login,
    password,
  }, 'POST'),
  changePassword: (id: number, password: string) => Fetch(`/api/user/${id}/change-password`, { password }, 'POST'),
  sendPasswordResetMail: (
    login: string,
  ) => Fetch(`/api/user/${login}/send-password-reset-mail`),
  checkResetCodeValidity: (
    login: string,
    code: string,
  ) => Fetch<boolean>(`/api/user/${login}/reset-code-check`, { code }),
  resetPassword: (
    login: string,
    code: string,
    password: string,
  ) => Fetch('/api/user/reset-password', { login, code, password }, 'POST'),
};

export default UserRoutes;
