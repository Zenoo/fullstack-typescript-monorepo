import { Person, User as _User } from '@fullstack-typescript-monorepo/prisma';
import Fetch from '../utils/fetcher';
import Super from './Super';

export interface User extends Omit<_User, 'password'> {
  person: Person;
}

const UserRoutes = {
  ...Super<User>('user'),
  authenticate: (login: string, password: string): Promise<User> => Fetch<User>('/api/user/authenticate', {
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
