export interface ContactFormData {
  agree: boolean;
  name: string;
  phone: string;
}

export const CONTACT_FORM_DEFAULT: ContactFormData = {
  agree: false,
  name: '',
  phone: '',
};

type ContactFormFieldName = keyof typeof CONTACT_FORM_DEFAULT;

interface ContactFormField {
  name: ContactFormFieldName;
  placeholder: string;
}

export const CONTACT_FORM_FIELDS: ContactFormField[] = [
  {
    name: 'name',
    placeholder: 'Имя',
  },
  {
    name: 'phone',
    placeholder: 'Телефон',
  },
  {
    name: 'agree',
    placeholder: 'Согласен, отказываюсь',
  },
];
