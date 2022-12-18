import { Box, Container } from '@mui/material';
import React from 'react';
import Page from '../../components/Page';
import Text from '../../components/Text';

const NotFoundView = () => (
  <Page
    title="404"
  >
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Text
          align="center"
          color="textPrimary"
          h1
        >
          404: The page you are looking for isn&apos;t here
        </Text>
        <Text
          align="center"
          color="textPrimary"
          subtitle2
        >
          ou either tried some shady route or you came here by mistake.{' '}
          Whichever it is, try using the navigation
        </Text>
        <Box textAlign="center">
          <Box
            alt="Under development"
            component="img"
            src="/static/images/undraw_page_not_found_su7k.svg"
            sx={{
              mt: '50px',
              display: 'inline-block',
              maxWidth: '100%',
              width: 560,
            }}
          />
        </Box>
      </Container>
    </Box>
  </Page>
);

export default NotFoundView;
