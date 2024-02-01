const emailValidator = require("deep-email-validator");
async function isEmailValid(email: string) {
  const isValid: boolean = false;
  const { valid, validators } = await emailValidator.validate(email);
  const regex: boolean = await validators.regex.valid;
  const typo: boolean = await validators.typo.valid;
  const disposable: boolean = await validators.disposable.valid;
  const mx: boolean = await validators.mx.valid;
  const smtp: boolean = await validators.smtp.valid;
  if (valid && regex && typo && disposable && mx && smtp) {
    return !isValid;
  } else {
    return isValid;
  }
}

export default isEmailValid;
