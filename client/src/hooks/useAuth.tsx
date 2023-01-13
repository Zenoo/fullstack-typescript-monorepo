import { DEFAULT_LANGUAGE } from '@fullstack-typescript-monorepo/core';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import UserRoutes, { UserWithPerson } from '../api/UserRoutes';
import { useLanguage } from './useLanguage';

interface AuthContextInterface {
  user: UserWithPerson,
  authed: boolean,
  signin: (login: string, password: string) => Promise<UserWithPerson | null>,
  signout: () => void,
  updateData: (data: React.SetStateAction<UserWithPerson>) => void,
}

export const emptyUser: UserWithPerson = {
  id: 0,
  login: '',
  lang: DEFAULT_LANGUAGE,
  admin: false,
  active: true,
  connexionToken: '',
  personId: 0,
  person: {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    phone2: '',
    email: '',
    addressId: 0,
  },
};

const AuthContext = React.createContext<AuthContextInterface>({
  user: emptyUser,
  authed: false,
  signin: () => Promise.resolve(null),
  signout: () => {
    console.error('AuthContext.signout() not implemented');
  },
  updateData: () => {
    console.error('AuthContext.updateData() not implemented');
  },
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { setLanguage } = useLanguage();
  const [user, setUser] = useState<UserWithPerson>(emptyUser);
  const [authed, setAuthed] = useState(false);

  // Update language when necessary
  useEffect(() => {
    setLanguage(user.lang);
  }, [user.lang, setLanguage]);

  const signin = useCallback((
    login: string,
    password: string,
  ) => UserRoutes.authenticate(login, password).then((response) => {
    localStorage.setItem('user', response.login);
    localStorage.setItem('token', response.connexionToken);

    setUser(response);
    if (response) setAuthed(true);
    return response;
  }), []);

  const signout = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuthed(false);
    setUser(emptyUser);
  }, []);

  const updateData = useCallback((data: React.SetStateAction<UserWithPerson>) => {
    setUser(data);
  }, []);

  const methods = useMemo(() => ({
    user,
    authed,
    signin,
    signout,
    updateData,
  }), [authed, signin, signout, updateData, user]);

  return (
    <AuthContext.Provider value={methods}>
      {children}
    </AuthContext.Provider>
  );
};
