import { Card, CardContent } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import Text from '../components/Text';

const HomeView = () => {
  const { t } = useTranslation();

  return (
    <Page title={t('home')}>
      <Card>
        <CardContent><Text>Hello !</Text></CardContent>
      </Card>
    </Page>
  );
};

export default HomeView;
