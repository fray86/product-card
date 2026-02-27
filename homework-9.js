import { Form } from "./form.js";
import { Modal } from "./modal.js";
import { RegForm } from "./reg-form.js";
import { Food } from "./food.js";

//3.Вывоз наследника класса Product (относится к 10 заданию!)

const burger = new Food("Large", 500, "Fastfood");
burger.showValue();

//4. Работа с модалкой

const regModal = new Modal(".modal");
const regBtn = document.querySelector(".open-modal-btn");

regBtn.addEventListener("click", () => regModal.openModal());

//5. Работа с формой регистарции

let user = {};
const regForm = new RegForm("reg-form");

regForm.form.addEventListener("submit", function (event) {
  event.preventDefault();

  const isFormValid = regForm.isValid();
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

  if (!emailForm.isValid()) {
    return;
  }

 const data = emailForm.getValues();
  console.log({ email: data.email });
  emailForm.reset();
});