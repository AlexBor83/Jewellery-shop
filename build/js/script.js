'use strict';

console.log('Привет');

// Бургер

const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const headerToggle = document.querySelector('.header__toggle');

console.log(header)

const openHeader = () =>{
  header.classList.add('header--opened-menu');
  headerNav.classList.remove('header__nav--closed');
  headerNav.classList.add('header__nav--opened');
};

const closeHeader = () => {
  header.classList.remove('header--opened-menu');
  headerNav.classList.remove('header__nav--opened');
  headerNav.classList.add('header__nav--closed');
};

const menuController = () => {

  if (!header) {
    return;
  }

  headerNav.classList.remove('header__nav--nojs');

  headerToggle.addEventListener('click', () => {
    if (headerNav.classList.contains('header__nav--closed')) {

      openHeader();
      return;
    }

    closeHeader();
  });

};

  menuController();


// modal-login

const body = document.querySelector('body');
const loginModal = document.querySelector('.modal');
const loginModalOpeneds = document.querySelectorAll('.login-opened-js');
const loginModalClosed = document.querySelector('.modal__buton');
const loginModalSend = document.querySelector('.modal__send');
const inputLoginModal = document.querySelector('.modal__label--mail')

const modalOpen = () => {
  loginModal.classList.remove('modal--closed');
  body.classList.add('body__fixed-page');
  loginModal.classList.add('modal--opened');
  inputLoginModal.focus();
};

const modalClose = () => {
  loginModal.classList.remove('modal--opened');
  body.classList.remove('body__fixed-page');
  loginModal.classList.add('modal--closed');
};

const loginModalController = () => {

  if(!loginModal) {
    return;
  }

  loginModalOpeneds.forEach((item) =>{
    item.addEventListener('click', (evt) => {
      evt.preventDefault();

      if(loginModal.classList.contains('modal--closed')) {

        modalOpen();

        document.addEventListener('keydown', (evt) =>{
          if (evt.key === ('Escape' || 'Esc')) {
            evt.preventDefault();
            modalClose();
          }
        });

        loginModal.addEventListener('click', (evt) => {
          if (!evt.target.closest('.modal-wrap')) {
            modalClose();
          }
        });

        loginModalSend.addEventListener('click', (evt) => {
          evt.preventDefault();
          modalClose();
        });
      }
    });
  });

  loginModalClosed.addEventListener('click', () => {
    modalClose();
  });
};

loginModalController();





// const toggleModal = () => {

//   const modal = document.querySelector('.modal');

//   if (!modal) {
//     return;
//   }

//   const buttonOpenForm = document.querySelector('.header__button');
//   const body = document.querySelector('body');
//   const buttonClosedForm = document.querySelector('.form__button--modal');
//   const modalLogin = modal.querySelector('input[type="text"]');

//   const closedModal = () => {
//     modal.classList.remove('modal-show');
//     body.classList.remove('fixed-page');
//     modal.classList.add('modal-closed');
//   };

//   const openModal = () => {
//     modal.classList.remove('modal-closed');
//     modal.classList.add('modal-show');
//     modalLogin.focus();
//     body.classList.add('fixed-page');
//   };


//   buttonOpenForm.addEventListener('click', () => {
//     if (modal.classList.contains('modal-closed')) {
//       openModal();

//       document.addEventListener('keydown', (evt) => {
//         if (evt.key === ('Escape' || 'Esc')) {
//           evt.preventDefault();
//           closedModal();
//         }
//       });

//       modal.addEventListener('click', (evt) => {
//         if (!evt.target.closest('.form')) {
//           closedModal();
//         }
//       });
//     }
//   });

//   buttonClosedForm.addEventListener('click', () => {
//     closedModal();
//   });
// };

// headerLinks.forEach(function (item) {
//   item.addEventListener('click', function () {
//     closeNav();
//   });
// });








