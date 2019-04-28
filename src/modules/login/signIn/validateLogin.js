import { validate } from "../../../utils/validate";

import {
  LOGIN_VALIDATE_EMAIL_ERROR_MESSAGE,
  LOGIN_VALIDATE_PASSWORD_ERROR_MESSAGE
} from "./constants";

export const validateEmail = email => {
  let regex = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
  return validate(regex, email, LOGIN_VALIDATE_EMAIL_ERROR_MESSAGE);
};

export const validatePassword = password => {
  let regex = "^[A-zA-Z0-9\\(\\)-\\s]{0,30}$";
  return validate(regex, password, LOGIN_VALIDATE_PASSWORD_ERROR_MESSAGE);
};
