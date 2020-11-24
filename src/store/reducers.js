import { SUBMIT } from './actionTypes';
import { checkFormInputs } from './utils';

const initialState = {
  formInputs: {
    user: '',
    password: '',
    confirmPassword: '',
  },
  formErrors: {
    user: '',
    password: '',
    confirmPassword: '',
  },
  isLogged: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT: {
      return {
        ...state,
        formInputs: { ...action.payload },
        formErrors: { ...checkFormInputs(action.payload) },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
