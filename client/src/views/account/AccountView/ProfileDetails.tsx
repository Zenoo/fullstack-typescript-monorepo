import { LoadingButton } from '@mui/lab';
import { Box, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';
import React from 'react';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import UserRoutes from '../../../api/UserRoutes';
import { useAlert } from '../../../hooks/useAlert';
import { useAuth } from '../../../hooks/useAuth';
import useForm from '../../../hooks/useForm';
import { useLoader } from '../../../hooks/useLoader';
import catchError from '../../../utils/catchError';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
};

const ProfileDetails = ({ ...rest }) => {
  const auth = useAuth();
  const Alert = useAlert();
  const Loader = useLoader();
  const { t } = useTranslation('user');

  const { register, handleSubmit, formState: { isSubmitting }, control } = useForm<FormData>('user', {
    defaultValues: {
      firstName: auth.user.person.firstName,
      lastName: auth.user.person.lastName,
      email: auth.user.person.email,
      phone: auth.user.person.phone || '',
    },
  });

  const password = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  });

  const onSubmit = async (data: FormData) => {
    const processedData = {
      id: auth.user.person.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };

    if (data.password) {
      if (data.passwordConfirm) {
        Loader.open();
        await UserRoutes.changePassword(auth.user.id, data.password).catch(catchError(Alert, t));
      }
    }

    Loader.open();
    await UserRoutes.update(auth.user.id, {
      person: { update: processedData }
    }, { person: true }).then((newData) => {
      auth.updateData(newData);
      Alert.open('success', 'Saved');
    }).catch(catchError(Alert, t));
    Loader.close();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} {...rest}>
      <Card>
        <CardHeader
          subheader={t('informationCanBeEdited')}
          title={t('profile')}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField {...register('firstName', 'text', { required: true })} fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField {...register('lastName', 'text', { required: true })} fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField {...register('email', 'email', { required: true })} fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField {...register('phone', 'tel')} fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField {...register('password', 'password')} fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                {...register('passwordConfirm', 'password', { validate: { mustMatch: (value) => value === password } })}
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <LoadingButton
            color="primary"
            loading={isSubmitting}
            type="submit"
            variant="contained"
          >
            {t('common:save')}
          </LoadingButton>
        </Box>
      </Card>
    </form>
  );
};

export default ProfileDetails;
