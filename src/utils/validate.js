export const validate = (regex, value, errorMessage) => {
  let regExp = new RegExp(regex);
  return regExp.test(value)
    ? { isValid: true }
    : { errorMessage: errorMessage, isValid: false };
};
