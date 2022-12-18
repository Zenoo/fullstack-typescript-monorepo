import { Container, Grid } from '@mui/material';
import React from 'react';
import Page from '../../../components/Page';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';

const Account = () => (
  <Page
    title="Account"
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
        >
          <Profile />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
        >
          <ProfileDetails />
        </Grid>
      </Grid>
    </Container>
  </Page>
);

export default Account;
