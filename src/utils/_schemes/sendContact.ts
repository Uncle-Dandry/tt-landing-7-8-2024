import * as yup from 'yup';

import { PhoneRegex } from 'utils/regex';

const sendContactScheme = yup.object({
  name: yup
    .string()
    .required('Введите имя')
    .test('name', 'Введите имя', (value) => {
      return Boolean(value && value.trim());
    }),
  phone: yup
    .string()
    .required('Введите номер')
    .matches(PhoneRegex, 'Неверный номер'),
  agree: yup
    .bool()
    .required()
    .oneOf([true], 'Соглашайся'),
});

export default sendContactScheme;
