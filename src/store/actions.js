import { SUBMIT } from './actionTypes';

const submit = (content) => ({
  type: SUBMIT,
  payload: content,
});

export { submit };
