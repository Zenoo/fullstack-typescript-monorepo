import { TFunction } from 'react-i18next';
import { AlertContextInterface } from '../hooks/useAlert';
import { ErrorType } from './fetcher';

const catchError = (Alert: AlertContextInterface, t: TFunction) => (error: ErrorType) => {
  const errorData = typeof error === 'string'
    ? error
    : error.message
      ? error.message.includes('<!DOCTYPE html>')
        ? error.statusText
        : error.message
      : error.statusText;
  const errorMessage = errorData.includes('<!DOCTYPE html>')
    ? `${t('common:InternalServerError')}: ${errorData.match(/<strong>(.*)<\/strong>/)?.[1] || 'null'}`
    : errorData;

  if (typeof error !== 'string' && error.statusText === 'Service Unavailable') {
    Alert.open('warning', t('common:processingRequest.pleaseComeBackFewMinutes'));
  } else {
    Alert.open('error', errorMessage);
  }
};

export default catchError;
