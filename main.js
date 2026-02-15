import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-4.js";
import { Eat } from "./products.js";
import { Form } from "./form.js";
import { Modal } from "./modal.js";

//3.Вывоз наследника класса Product

const burger = new Eat("Large", 500, "Fastfood");
burger.showValue();

//4. Работа с модалкой

const regModal = new Modal(".modal");
const regBtn = document.querySelector(".open-modal-btn");

regBtn.addEventListener("click", () => regModal.openModal());

//5. Работа с формой регистарции

let user = {};
const regForm = new Form("reg-form");

regForm.form.addEventListener("submit", function (event) {
  event.preventDefault();

  const isFormValid = regForm.checkValidity();
  const isPasswordCorrect = regForm.checkValues("password","check-password",".error-password",);

  if (isFormValid && isPasswordCorrect) {
    user = regForm.getValues()
    user.registrationDate = new Date();
    console.log("Пользователь:", user);
    alert("Регистрация успешна");
    regForm.reset();
    regModal.closeModal();
  }
});

//5. Работа с формой почты

const emailForm = new Form('email-form');

emailForm.form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!emailForm.checkValidity()) {
    return;
  }

 const data = emailForm.getValues();
  console.log({ email: data.email });
  emailForm.reset();
});