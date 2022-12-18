import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import UserRoutes from '../../../api/UserRoutes';
import UserForm from '../../../components/forms/UserForm';
import Loader from '../../../components/Loader';
import Page from '../../../components/Page';
import useStateAsync from '../../../hooks/useStateAsync';

const UserEditView = () => {
  const { id } = useParams();

  const callParams = useMemo(() => ({
    id: id ? +id : 0,
    fetchPath: '(id, admin, login, person(id, firstName, lastName, phone, email))',
  }), [id]);
  const { data: user } = useStateAsync(
    null,
    UserRoutes.get,
    callParams,
  );

  return (
    <Page
      title="New user"
    >
      <Card>
        <CardHeader
          subheader="Edit the user information"
          title="Edit user"
        />
        <Divider />
        <CardContent>
          {!user
            ? <Loader />
            : (
              <UserForm
                data={{
                  id: id ? +id : 0,
                  admin: user.admin,
                  login: user.login,
                  idperson: user.person.id ? +user.person.id : 0,
                  firstName: user.person.firstName,
                  lastName: user.person.lastName,
                  email: user.person.email || '',
                  phone: user.person.phone || '',
                  password: '',
                }}
              />
            )}
        </CardContent>
      </Card>
    </Page>
  );
};

export default UserEditView;
