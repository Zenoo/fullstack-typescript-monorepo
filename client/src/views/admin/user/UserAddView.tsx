import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import React from 'react';
import UserForm from '../../../components/forms/UserForm';
import Page from '../../../components/Page';

const UserAddView = () => (
  <Page
    title="New user"
  >
    <Card>
      <CardHeader
        subheader="Enter the new user information"
        title="New user"
      />
      <Divider />
      <CardContent>
        <UserForm
          data={{
            id: 0,
            admin: false,
            login: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
          }}
        />
      </CardContent>
    </Card>
  </Page>
);

export default UserAddView;
