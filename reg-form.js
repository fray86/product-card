import { Form } from "./form.js";

export class RegForm extends Form {
  constructor(selectorForm) {
    super(selectorForm);
  }
  checkValues(passwordInput, passwordConfirm, errorSelector) {
    const values = this.getValues();
    const pass = values[passwordInput];
    const confPass = values[passwordConfirm];
    const errorSpan = document.querySelector(errorSelector);

    if (pass !== confPass) {
      errorSpan.textContent = "Пароли не совпадают";
      errorSpan.style.color = "red";
      return false;
    }

    errorSpan.textContent = "";
    return true;
  }
}
