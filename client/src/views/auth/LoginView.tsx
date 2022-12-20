import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material';
import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import UserRoutes from '../../api/UserRoutes';
import Logo from '../../components/Logo';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import { useLoader } from '../../hooks/useLoader';
import catchError from '../../utils/catchError';
import { ErrorType } from '../../utils/fetcher';

interface FormData {
  login: string;
  password: string;
}
interface ResetFormData {
  password: string;
  passwordConfirm: string;
}

const LoginView = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const Alert = useAlert();
  const Loader = useLoader();
  const { t } = useTranslation('login');

  const { register, handleSubmit, formState: { isSubmitting }, control, setValue, setFocus } = useForm<FormData>('user');
  const login = useWatch({ name: 'login', control });

  /**
   * Login handler
   */
  const onSubmit = (formData: FormData) => {
    Loader.open();
    auth.signin(formData.login, formData.password).then(() => {
      Loader.close();
      navigate('/app/home', { replace: true });
    }).catch((response: string) => {
      catchError(Alert)(response);
      Loader.close();
    });
  };

  // Restore previous session from localStorage
  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token') || '';
    if (!auth.authed && user) {
      Loader.open();
      auth.signin(user, token).catch((error: ErrorType) => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
        catchError(Alert)(error);
      }).finally(() => {
        Loader.close();
      });
    }
    if (auth.authed) {
      navigate('/app/home', { replace: true });
    }
  }, [Alert, Loader, auth, navigate, t]);

  // Password reset
  const resetPassword = useCallback(async () => {
    if (!login) {
      Alert.open('error', t('pleaseEnterLogin'));
      return;
    }
    Loader.open();
    await UserRoutes.sendPasswordResetMail(login).then(() => {
      Alert.open('success', t('passwordResetMailSent'));
    }).catch(catchError(Alert));
    Loader.close();
  }, [Alert, Loader, login, t]);

  // Password reset form
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const {
    register: resetRegister,
    handleSubmit: resetHandleSubmit,
    formState: { isSubmitting: resetIsSubmitting },
    control: resetControl,
    reset: resetForm,
  } = useForm<ResetFormData>('user');
  const password = useWatch({ name: 'password', control: resetControl });

  const closeResetDialog = useCallback((_: MouseEvent, reason?: string) => {
    if (reason !== 'backdropClick') {
      setResetDialogOpen(false);
    }
  }, []);

  const checkPasswords = useCallback((value: string) => password === value, [password]);

  const resetOnSubmit = (formData: ResetFormData) => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('reset');

    UserRoutes.resetPassword(login, code || '', formData.password).then(() => {
      Alert.open('success', t('passwordResetSuccess'));
    }).catch(catchError(Alert)).finally(() => {
      setResetDialogOpen(false);
      resetForm();
    });
  };

  // Check for password reset code on load
  useEffect(() => {
    const checkCode = async () => {
      const url = new URL(window.location.href);
      const code = url.searchParams.get('reset');
      const log = url.searchParams.get('login');
      if (code) {
        // Prefill login field
        setValue('login', log || '');
        setFocus('login');

        const isValid = await UserRoutes.checkResetCodeValidity(log || '', code).catch(catchError(Alert));
        if (!isValid) {
          Alert.open('error', t('invalidResetCode'));
          // Remove code and login from URL
          url.searchParams.delete('reset');
          url.searchParams.delete('login');
          window.history.replaceState({}, '', url.href);

          return;
        }
        // Open reset password dialog
        setResetDialogOpen(true);
      }
    };
    checkCode().catch(catchError(Alert));
  }, [Alert, setFocus, setValue, t]);

  return (
    <Page
      title={`Eurodecision - ${t('login')}`}
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
      >
        <Container
          maxWidth="sm"
          sx={{ textAlign: 'center' }}
        >
          <Logo sx={{ maxWidth: 200 }} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={3}>
              <Text
                color="textPrimary"
                h2
              >
                {t('signIn')}
              </Text>
              <Text
                body2
                color="textSecondary"
                gutterBottom
              >
                {t('signInOnFTM')}
              </Text>
            </Box>
            <TextField {...register('login', 'text', { required: true })} fullWidth sx={{ mb: 2 }} />
            <TextField {...register('password', 'password', { required: true })} fullWidth />
            <Box my={2}>
              <LoadingButton
                color="primary"
                loading={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {t('signInNow')}
              </LoadingButton>
              <Button size="small" sx={{ mt: 2 }} onClick={resetPassword}>
                {t('passwordForgotten')}
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
      <Dialog
        open={resetDialogOpen}
        onClose={closeResetDialog}
        disableEscapeKeyDown
      >
        <form onSubmit={resetHandleSubmit(resetOnSubmit)}>
          <DialogTitle>{t('changePassword')}</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <DialogContentText>
                {t('pleaseEnterNewPassword')}
              </DialogContentText>
              <TextField {...resetRegister('password', 'password', { required: true })} fullWidth />
              <TextField {...resetRegister('passwordConfirm', 'password', { required: true, validate: { mustMatch: checkPasswords } })} fullWidth />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeResetDialog}>{t('common:cancel')}</Button>
            <LoadingButton
              color="primary"
              loading={resetIsSubmitting}
              type="submit"
              variant="contained"
            >
              {t('common:save')}
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </Page>
  );
};

export default LoginView;
