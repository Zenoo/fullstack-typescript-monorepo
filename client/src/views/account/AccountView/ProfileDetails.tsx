import { DEFAULT_LANGUAGE } from '@fullstack-typescript-monorepo/core';
import { Lang } from '@fullstack-typescript-monorepo/prisma';
import { LoadingButton } from '@mui/lab';
import { Box, Card, CardContent, CardHeader, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import UserRoutes, { UserWithPerson } from '../../../api/UserRoutes';
import { useAlert } from '../../../hooks/useAlert';
import { useAuth } from '../../../hooks/useAuth';
import useForm from '../../../hooks/useForm';
import catchError from '../../../utils/catchError';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  lang: Lang;
};

const ProfileDetails = ({ ...rest }) => {
  const auth = useAuth();
  const Alert = useAlert();
  const { t } = useTranslation('user');

  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, control } = useForm<FormData>('user', {
    defaultValues: {
      firstName: auth.user.person.firstName,
      lastName: auth.user.person.lastName,
      email: auth.user.person.email,
      phone: auth.user.person.phone || '',
      lang: auth.user.lang,
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
        setLoading(true);
        await UserRoutes.changePassword(auth.user.id, data.password).catch(catchError(Alert));
      }
    }

    setLoading(true);
    await UserRoutes.update(auth.user.id, {
      lang: data.lang,
      person: { update: processedData }
    }, { person: true }).then((newData) => {
      auth.updateData(newData as UserWithPerson);
      Alert.open('success', t('common:saved'));
    }).catch(catchError(Alert));
    setLoading(false);
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
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>{t('lang')}</InputLabel>
                <Select {...register('lang', 'select', { required: true })} defaultValue={auth.user.lang || DEFAULT_LANGUAGE}>
                  {Object.keys(Lang).map((lang) => (
                    <MenuItem key={lang} value={lang}>{t(lang)}</MenuItem>
                  ))}
                </Select>
              </FormControl>
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
            loading={loading}
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
