'use strict';

//console.log('Привет');

// Бургер

const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const headerToggle = document.querySelector('.header__toggle');

console.log(header);

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
const loginModalClosed = document.querySelector('.modal__button');
const loginModalSend = document.querySelector('.modal__send');
const inputLoginModal = document.querySelector('.modal__label--mail');

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


//asked-questions--active Показать ответ в блоке вопросы и ответы

const askedQuestionsList = document.querySelector('.asked-questions__list');
const askedQuestionsButtons = document.querySelectorAll('.asked-questions__button');
const askedQuestionsAnswers = document.querySelectorAll('.asked-questions__answer');

const answerShowItem = (i) => {
  askedQuestionsButtons[i].classList.add('asked-questions__button--active');
  askedQuestionsAnswers[i].classList.remove('asked-questions__answer--close');
  askedQuestionsAnswers[i].classList.add('asked-questions__answer--active');
};

const answerCloseItem = (i) => {
  askedQuestionsButtons[i].classList.remove('asked-questions__button--active');
  askedQuestionsAnswers[i].classList.remove('asked-questions__answer--active');
  askedQuestionsAnswers[i].classList.add('asked-questions__answer--close');
};

const answerClose = () =>{

  askedQuestionsAnswers.forEach((i) => {
    i.classList.remove('asked-questions__answer--active');
    i.classList.add('asked-questions__answer--close');
  });

  askedQuestionsButtons.forEach((i) => {
    i.classList.remove('asked-questions__button--active');
  });
};

const toggleAnswer = () => {

  if (!askedQuestionsList) {
    return;
  }

  askedQuestionsButtons.forEach((item, number) => {
    item.addEventListener('click', (evt) => {

      if (evt.target === item) {
        if (askedQuestionsAnswers[number].classList.contains('asked-questions__answer--close')) {
          answerClose();
          answerShowItem(number);
        } else {
          answerCloseItem(number);
        }
        }
    });
  });
};

toggleAnswer();


// const toggleFooterMenu = () => {
//   if (!footerSection) {
//     return;
//   }
//   footerButtons.forEach((item, number) =>{
//     item.addEventListener('click', (evt) => {

//       if (evt.target === item) {
//         if (footerLists[number].classList.contains('close-menu')) {
//           closeFooterMenu();
//           showFooterMenuItem(number);
//         } else {
//           closeFooterMenuItem(number);
//         }
//       }
//     });
//   });
// };




// const footerButtons = document.querySelectorAll('.footer__button');
// const footerSection = document.querySelectorAll('.footer__section');
// const footerLists = document.querySelectorAll('.footer__list');

// const showFooterMenuItem = (i) => {

//   footerLists[i].classList.remove('close-menu');
//   footerLists[i].classList.add('open-menu');
//   footerButtons[i].classList.remove('footer__button--clouse');
// };

// const closeFooterMenuItem = (i) => {
//   footerLists[i].classList.add('close-menu');
//   footerLists[i].classList.remove('open-menu');
//   footerButtons[i].classList.add('footer__button--clouse');
// };

// const closeFooterMenu = () => {
//   footerLists.forEach((i) => {
//     i.classList.add('close-menu');
//     i.classList.remove('open-menu');
//   });

//   footerButtons.forEach((i) =>{
//     i.classList.add('footer__button--clouse');
//   });
// };


