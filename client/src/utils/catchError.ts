import {AlertContextInterface} from '../hooks/useAlert';
import {ErrorType} from './fetcher';

const catchError = (Alert: AlertContextInterface) => (error: ErrorType) => {
  const errorData =
    typeof error === 'string'
      ? error
      : error.message
        ? error.message.includes('<!DOCTYPE html>')
          ? error.statusText
          : error.message
        : error.statusText;
  const errorMessage = errorData.includes('<!DOCTYPE html>')
    ? `Internal Server Error: ${
        errorData.match(/<strong>(.*)<\/strong>/)?.[1] || 'null'
      }`
    : errorData;

  Alert.open('error', errorMessage);
};

export default catchError;
