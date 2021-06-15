const menuButton=document.querySelector('.menu-button');
const menu=document.querySelector('.nav-menu');
const menuClose=document.querySelector('.menu-close');
menuButton.addEventListener('click', function () {
  menu.classList.add('is-active');
  menuClose.classList.add('is-active');
});
menuClose.addEventListener('click', function () {
  menu.classList.remove('is-active');
  menuClose.classList.remove('is-active');
});
const li=document.createElement('li');
li.classList.add('nav-menu-item');
if (document.documentElement.clientWidth < 576) {
    li.innerHTML='<a href=\"index.html\" class="nav-menu-link">главная</a>';
    menu.prepend(li);
  } else {
    li.remove();
  };
window.addEventListener ("resize",()=> {
  if (document.documentElement.clientWidth < 576) {
    li.innerHTML='<a href=\"index.html\" class="nav-menu-link">главная</a>';
    menu.prepend(li);
  } else {
    li.remove();
  };
});
