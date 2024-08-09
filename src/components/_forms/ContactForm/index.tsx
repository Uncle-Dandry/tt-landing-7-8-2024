import React, {
  type FC,
  memo,
  useCallback,
} from 'react';
import {
  useForm,
  FormProvider,
  Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import cancelIconSrc from 'assets/icons/cancel.svg';
import checkIconSrc from 'assets/icons/check-circle.svg';

import { trimFormValues } from 'utils';
import { sendContact as sendContactScheme } from 'utils/_schemes';

import { useAppDispatch } from 'store';

import { Checkbox, TextField } from 'components/_controls';
import { Button } from 'components/_controls/_buttons';

import {
  type ContactFormData,
  CONTACT_FORM_DEFAULT,
  CONTACT_FORM_FIELDS,
} from './ContactForm.constants';

import styles from './ContactForm.module.scss';

interface ContactFormProps {
  className?: string;
  id?: string;
}

const ContactForm: FC<ContactFormProps> = ({
  className = '',
  id,
}) => {
  const formContext = useForm<ContactFormData>({
    resolver: yupResolver(sendContactScheme),
    defaultValues: CONTACT_FORM_DEFAULT,
  });

  const {
    control,
    formState: {
      isSubmitted,
    },
    handleSubmit,
  } = formContext;

  const handleSubmitForm = useCallback(
    async (values: ContactFormData) => {
      const trimmedValues = trimFormValues(values);
    },
    [],
  );

  return (
    <FormProvider {...formContext}>
      <form
        className={classNames(
          styles.contactFormContainer,
          className,
        )}
        id={id}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {CONTACT_FORM_FIELDS.map(({
          name,
          placeholder,
        }) => (
          <Controller
            key={name}
            name={name}
            control={control}
            render={({
              field: {
                value,
                ...field
              },
              fieldState: {
                error,
              },
            }) => {
              if (name === 'agree') {
                return (
                  <Checkbox
                    {...field}
                    error={Boolean(error?.message)}
                    label={placeholder}
                    helperText={error?.message || ''}
                  />
                );
              }

              return (
                <TextField
                  {...field}
                  error={Boolean(error?.message)}
                  iconSrc={isSubmitted && (
                    error?.message
                      ? cancelIconSrc
                      : checkIconSrc
                  )}
                  value={value as string}
                  placeholder={placeholder}
                  helperText={error?.message || ''}
                />
              );
            }}
          />
        ))}

        <Button
          className={styles.contactFormSubmitButton}
          variant="primary"
          type="submit"
        >
          Отправить
        </Button>
      </form>
    </FormProvider>
  );
};

export default memo(ContactForm);
