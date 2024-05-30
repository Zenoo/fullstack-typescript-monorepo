import {
  FieldValues,
  LiteralUnion,
  Path,
  RegisterOptions,
  UnPackAsyncDefaultValues,
  useForm as __useForm,
  UseFormProps,
} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

const useForm = <FormData extends FieldValues>(
  namespace?: string | null,
  props?: UseFormProps<FormData>
) => {
  const {t} = useTranslation(namespace || undefined);
  const form = __useForm<FormData>(props);

  const getErrorMessage = (
    type:
      | LiteralUnion<
          | 'required'
          | 'min'
          | 'max'
          | 'maxLength'
          | 'minLength'
          | 'pattern'
          | 'validate'
          | 'valueAsNumber'
          | 'valueAsDate'
          | 'value'
          | 'setValueAs'
          | 'shouldUnregister'
          | 'onChange'
          | 'onBlur'
          | 'disabled'
          | 'deps',
          string
        >
      | undefined,
    options: RegisterOptions | undefined,
    customErrors?: {[key: string]: string}
  ) => {
    if (type && customErrors && customErrors[type]) {
      return customErrors[type];
    }
    switch (type) {
      case 'required':
        return t('common:input.required');
      case 'min':
        return t('common:number.min', {number: options?.min});
      case 'max':
        return t('common:number.max', {number: options?.max});
      case 'minLength':
        return t('common:input.min', {number: options?.minLength});
      case 'maxLength':
        return t('common:input.max', {number: options?.maxLength});
      case 'pattern':
        return t('common:input.match', {match: options?.pattern});
      case 'mustMatch':
        return t('common:mustMatch');
      default:
        return '';
    }
  };

  const register = (
    name: Path<UnPackAsyncDefaultValues<FormData>>,
    type?: string,
    options?: RegisterOptions,
    customErrors?: {[key: string]: string}
  ) => {
    const {
      formState: {errors},
    } = form;

    if (type === 'checkbox') {
      return form.register(name, options);
    }
    if (type === 'select') {
      return {
        ...form.register(name, options),
        label: t(name),
        error: !!form.formState.errors[name],
      };
    }

    return {
      ...form.register(name, {
        ...options,
        valueAsNumber: type === 'number',
        pattern:
          type === 'email'
            ? options?.pattern || {
                value: /^\S+@\S+\.\S+$/,
                message: t('common:email.valid'),
              }
            : options?.pattern,
      }),
      error: !!form.formState.errors[name],
      helperText:
        errors[name]?.message ||
        getErrorMessage(
          errors[name]?.type as
            | LiteralUnion<
                | 'required'
                | 'min'
                | 'max'
                | 'maxLength'
                | 'minLength'
                | 'pattern'
                | 'validate'
                | 'valueAsNumber'
                | 'valueAsDate'
                | 'value'
                | 'setValueAs'
                | 'shouldUnregister'
                | 'onChange'
                | 'onBlur'
                | 'disabled'
                | 'deps',
                string
              >
            | undefined,
          options,
          customErrors
        ),
      type: type || 'text',
      label: t(name),
    };
  };

  return {
    ...form,
    register,
  };
};

export default useForm;
