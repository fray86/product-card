// Задание 1.4 (Логика формы "Подписаться" в футере)

function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}

const emailForm = document.querySelector('.email-form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!emailForm.checkValidity()) {
    emailForm.reportValidity();
    return;
  }
  const data = getFormData(emailForm);
  console.log({ email: data.email });

  emailForm.reset();
});

//Задание 2.5 Создание модального окна. Закрытие оверлея/модалки 

const regBtn = document.querySelector('.open-modal-btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close-btn')

function openModal() {
  modal.classList.add('modal-showed');
  overlay.classList.add('modal-showed');
};

function closeModal() {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('modal-showed');
}

regBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

//Задание 2.6 Работа с формой регистрации нового пользователя.

let user = {};

const passwordInput = document.querySelector('#password-input');
const confirmPasswrod = document.querySelector('#check-password-input');
const regForm = document.querySelector('#reg-form');
const errorSpan = document.querySelector('.error-password');

regForm.addEventListener('submit', function(event) {
  event.preventDefault();
  errorSpan.textContent = '';

  if (!regForm.checkValidity()) {
    regForm.reportValidity();
    return;
  }

  if (passwordInput.value !== confirmPasswrod.value) {
    errorSpan.textContent = 'Пароли не совпадают';
    errorSpan.style.color = 'red';
    return;
  }

  user = getFormData(regForm);
  user.registrationDate = new Date();
  console.log('Пользователь:', user);
  alert('Регистрация успешна');
  regForm.reset();
});

