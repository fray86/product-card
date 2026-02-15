/*5. Создать файл Form.js и реализовать класс для формы под названием Form. Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
  I. Для получения всех значений формы.
 II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
 III. Для сброса значений формы.
Используя данный класс - переписать логику задания №9, связанной с формами. Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и всем, что должна делать модалка.
*/

export class Form {
  constructor(selectorForm) {
    this.form = document.getElementById(selectorForm);
  }

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  checkValidity() {
    return this.form.reportValidity()
  }

  checkValues(passwordInput, passwordConfirm, errorSelector) {
    const values = this.getValues();
    const pass = values[passwordInput];
    const confPass = values[passwordConfirm];
    const errorSpan = document.querySelector(errorSelector);

    if (pass !== confPass) {
    errorSpan.textContent = 'Пароли не совпадают';
    errorSpan.style.color = 'red';
    return false
    }

    errorSpan.textContent = '';
    return true
  }

  reset() {
    if (this.form) {
      this.form.reset();
    }
  }
}


