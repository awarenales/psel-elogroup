const NO_EMPTY_FIELD_MSG = 'Campo obrigatório.';
const STRONG_PASSWORD_MSG =
  'A senha deve conter pelo menos 8 caracteres, com pelo menos 1 caracter especial, 1 caracter numérico e 1 caracter alfanumérico';
const SAME_PASSWORD_MSG = 'A senha confirmada difere da senha.';

const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-z0-9])(?!.*\s).{8,}$/i; // any number, any letter (case insensitive), any character that is not a number or a letter, cannot match white spaces, 8 or more matches

const checkFormInputs = (
  formInputs = { user: '', password: '', confirmPassword: '' }
) => {
  let formErrors = { user: '', password: '', confirmPassword: '' };

  if (!formInputs.user) {
    formErrors.user = NO_EMPTY_FIELD_MSG;
  }

  if (!formInputs.password) {
    formErrors.password = NO_EMPTY_FIELD_MSG;
  } else if (!formInputs.password.match(passwordCheck)) {
    formErrors.password = STRONG_PASSWORD_MSG;
  }

  if (!formInputs.confirmPassword) {
    formErrors.confirmPassword = NO_EMPTY_FIELD_MSG;
  } else if (formInputs.password !== formInputs.confirmPassword) {
    formErrors.confirmPassword = SAME_PASSWORD_MSG;
  }

  return formErrors;
};

export { checkFormInputs };
