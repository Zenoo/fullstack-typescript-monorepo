import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import UserRoutes from '../../../api/UserRoutes';
import UserForm from '../../../components/forms/UserForm';
import Loader from '../../../components/Loader';
import Page from '../../../components/Page';
import { emptyUser } from '../../../hooks/useAuth';
import useStateAsync from '../../../hooks/useStateAsync';

const UserEditView = () => {
  const { t } = useTranslation('user');
  const { id: _id } = useParams();

  const id = useMemo(() => (_id ? +_id : 0), [_id]);

  const callParams = useMemo(() => ({
    id,
    include: { person: true },
  }), [id]);
  const { data: user } = useStateAsync(
    emptyUser,
    UserRoutes.get,
    callParams,
  );

  return (
    <Page title={id ? t('editUser') : t('newUser')}>
      <Card>
        <CardHeader
          subheader={t('informationCanBeEdited')}
          title={id ? t('editUser') : t('newUser')}
        />
        <Divider />
        <CardContent>
          {(!!id && !user.id)
            ? <Loader />
            : (
              <UserForm
                data={{
                  id: user.id,
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
