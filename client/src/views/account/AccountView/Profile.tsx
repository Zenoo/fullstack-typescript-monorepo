import { Avatar, Box, Card, CardActions, CardContent, Divider } from '@mui/material';
import moment from 'moment';
import React from 'react';
import Text from '../../../components/Text';
import { useAuth } from '../../../hooks/useAuth';

const Profile = ({ ...rest }) => {
  const auth = useAuth();

  return (
    <Card
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            sx={{
              height: 100,
              width: 100,
            }}
          />
          <Text
            color="textPrimary"
            gutterBottom
            h3
          >
            {auth.user.person.firstName}
            {' '}
            {auth.user.person.lastName}
          </Text>
          <Text
            body1
            color="textSecondary"
          >
            {`${moment().format('HH:mm')}`}
          </Text>
        </Box>
      </CardContent>
      <Divider />
      <CardActions />
    </Card>
  );
};

Profile.propTypes = {
};

Profile.defaultProps = {
};

export default Profile;
