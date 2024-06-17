import {DEFAULT_LANGUAGE, Language} from '@fullstack-typescript-monorepo/core';
import {Lang} from '@fullstack-typescript-monorepo/prisma';
import {LoadingButton} from '@mui/lab';
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router';
import UserRoutes from '../../api/UserRoutes';
import {useAlert} from '../../hooks/useAlert';
import {useAuth} from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import catchError from '../../utils/catchError';

interface Data {
  id?: number;
  admin: boolean;
  lang: Language;
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
function UserForm({data}: Props) {
  const Alert = useAlert();
  const {t} = useTranslation('user');
  const navigate = useNavigate();
  const {user, updateData} = useAuth();

  const [loading, setLoading] = React.useState(false);
  const {register, handleSubmit, reset} = useForm<Data>('user', {
    defaultValues: data,
  });

  // Submit user data
  const onSubmit = async (formData: Data) => {
    const processedData = {
      admin: formData.admin,
      lang: formData.lang,
      login: formData.login,
      active: true,
    };

    const personData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    };

    setLoading(true);
    if (formData.id) {
      // Edition
      if (formData.password.length) {
        await UserRoutes.changePassword(formData.id, formData.password);
      }

      await UserRoutes.update(formData.id, {
        ...processedData,
        person: {
          update: personData,
        },
      })
        .then(() => {
          // Update user data if it's the current user
          if (user.id === formData.id) {
            updateData(prev => ({
              ...prev,
              ...processedData,
              person: {
                ...prev.person,
                ...personData,
              },
            }));
          }

          Alert.open('success', t('common:saved'));
        })
        .catch(catchError(Alert));
      setLoading(false);
    } else {
      // Addition
      await UserRoutes.insert({
        ...processedData,
        password: formData.password,
        connexionToken: '',
        person: {
          create: personData,
        },
      })
        .then(() => {
          Alert.open('success', t('newUserAdded'));
          navigate('/app/admin/user/list');
          reset();
        })
        .catch(catchError(Alert));
      setLoading(false);
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={() => {
        handleSubmit(onSubmit);
      }}
    >
      <Grid container spacing={3} sx={{pb: 2}}>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                {...register('admin', 'checkbox')}
                defaultChecked={data.admin}
              />
            }
            label={t('giveAdminRights')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>{t('lang')}</InputLabel>
            <Select
              {...register('lang', 'select', {required: true})}
              defaultValue={data.lang || DEFAULT_LANGUAGE}
            >
              {Object.keys(Lang).map(lang => (
                <MenuItem key={lang} value={lang}>
                  {t(lang)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            {...register('login', 'text', {required: true})}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField {...register('password')} fullWidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            {...register('lastName', 'text', {required: true})}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            {...register('firstName', 'text', {required: true})}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            {...register('email', 'email', {required: true})}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            {...register('phone', 'tel', {required: true})}
            fullWidth
          />
        </Grid>
      </Grid>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <LoadingButton
          color="primary"
          loading={loading}
          type="submit"
          variant="contained"
        >
          {t('common:save')}
        </LoadingButton>
      </Box>
    </form>
  );
}

export default UserForm;
