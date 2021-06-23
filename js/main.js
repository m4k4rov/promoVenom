const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');
menuButton.addEventListener('click', function () {
  menu.classList.add('is-active');
  menuClose.classList.add('is-active');
});
menuClose.addEventListener('click', function () {
  menu.classList.remove('is-active');
  menuClose.classList.remove('is-active');
});
const li = document.createElement('li');
li.classList.add('nav-menu-item');
if (document.documentElement.clientWidth < 576) {
  li.innerHTML = '<a href=\"index.html\" class="nav-menu-link">главная</a>';
  menu.prepend(li);
} else {
  li.remove();
};
window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 576) {
    li.innerHTML = '<a href=\"index.html\" class="nav-menu-link">главная</a>';
    menu.prepend(li);
  } else {
    li.remove();
  };
});

//Всплывающая форма
const hideForm = document.querySelector('.hide-form');
const orderTicket = document.querySelector('.order-ticket');
const orderTrigger = document.querySelector('.order-trigger');
const orderTicketForm = document.querySelector('.order-ticket__form');
const orderTicketFormWrapper = document.querySelector('.order-ticket__form-wrapper')
const orderTicketPreloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper')
const orderTicketThanksWrapper = document.querySelector('.order-ticket__thanks-wrapper')
const orderTicketThanksName = document.querySelector('.order-ticket__thanks-name')

setTimeout(() => {
  const heightForm = orderTicket.offsetHeight; // высота формы
  hideForm.style.bottom = -heightForm + 'px';
}, 1000);

const sendData = (data, callback, callBefore) => {

  if (callBefore) callBefore();
  fetch('https://jsonplaceholder.typicode.com/posts', { //отправка на фейковый сервер
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
    .then(callback);

}

const showPreloader = () => {
  orderTicketFormWrapper.style.display = 'none';
  orderTicketPreloaderWrapper.style.display = 'block';
}

const showThankYou = (data) => {
  orderTicketPreloaderWrapper.style.display = 'none';
  orderTicketThanksWrapper.style.display = 'block';
  orderTicketThanksName.innerHTML = data.name;

}

orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active');//добавляет класс если его нет и убирает, если есть
});

orderTicketForm.addEventListener('change', (event) => { // Проверка на введёный текст
  const target = event.target;
  const label = target.labels[0];
  if (label && target.value) {
    label.classList.add('order-ticket__label-focus');
  } else {
    label.classList.remove('order-ticket__label-focus');
  }
})

orderTicketForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(orderTicketForm);
  const data = {};
  for (const [name, value] of formData) {
    data[name] = value;
  }
  sendData(data, showThankYou, showPreloader);
})

