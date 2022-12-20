import { Prisma } from '@fullstack-typescript-monorepo/prisma';
import { LoadingButton } from '@mui/lab';
import { Box, Checkbox, Divider, FormControlLabel, Grid, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import UserRoutes from '../../api/UserRoutes';
import { useAlert } from '../../hooks/useAlert';
import useForm from '../../hooks/useForm';
import { useLoader } from '../../hooks/useLoader';
import catchError from '../../utils/catchError';

interface Data {
  id?: number;
  admin: boolean;
  login: string;
  password: string;
  idperson?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
interface Props {
  data: Data;
}
/**
 * User form
 */
const UserForm = ({ data }: Props) => {
  const Alert = useAlert();
  const Loader = useLoader();
  const { t } = useTranslation('user');
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Data>('user', {
    defaultValues: data,
  });

  // Submit user data
  const onSubmit = async (formData: Data) => {
    const processedData: Prisma.UserUpdateInput = {
      admin: formData.admin,
      login: formData.login,
      active: true,
    };

    const personData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    };

    Loader.open();
    if (formData.id) { // Edition
      if (formData.password.length) {
        await UserRoutes.changePassword(formData.id, formData.password);
      }

      await UserRoutes.update(formData.id, {
        ...processedData,
        person: {
          update: personData,
        },
      }).then(() => {
        Alert.open('success', t('common:saved'));
      }).catch(catchError(Alert));
      Loader.close();
    } else { // Addition
      processedData.password = formData.password;
      await UserRoutes.insert({
        ...processedData,
        connexionToken: '',
        person: {
          create: personData,
        },
      }).then(() => {
        Alert.open('success', t('newUserAdded'));
        navigate('/app/admin/user/list');
        reset();
      }).catch(catchError(Alert));
      Loader.close();
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} sx={{ pb: 2 }}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox {...register('admin', 'checkbox')} defaultChecked={data.admin} />}
            label={t('giveAdminRights')}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField {...register('login', 'text', { required: true })} fullWidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField {...register('password')} fullWidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField {...register('lastName', 'text', { required: true })} fullWidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField {...register('firstName', 'text', { required: true })} fullWidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField {...register('email', 'email', { required: true })} fullWidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField {...register('phone', 'tel', { required: true })} fullWidth />
        </Grid>
      </Grid>
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
    </form>
  );
};

export default UserForm;
