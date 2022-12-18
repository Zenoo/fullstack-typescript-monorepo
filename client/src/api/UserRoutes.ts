import { Person, User as _User } from '@fullstack-typescript-monorepo/prisma';
import Fetch from '../utils/fetcher';
import Super from './Super';

export interface User extends Omit<_User, 'password'> {
  person: Person;
}

const UserRoutes = {
  ...Super<User>('app-user'),
  authenticate: (login: string, password: string): Promise<User> => Fetch<User>('/api/app-user/authenticate', {
    login,
    password,
  }, 'POST'),
  changePassword: (id: number, password: string) => Fetch(`/api/app-user/${id}/change-password`, { password }, 'POST'),
  sendPasswordResetMail: (
    login: string,
  ) => Fetch(`/api/app-user/${login}/send-password-reset-mail`),
  checkResetCodeValidity: (
    login: string,
    code: string,
  ) => Fetch<boolean>(`/api/app-user/${login}/reset-code-check`, { code }),
  resetPassword: (
    login: string,
    code: string,
    password: string,
  ) => Fetch('/api/app-user/reset-password', { login, code, password }, 'POST'),
};

export default UserRoutes;
