'use strict';

// Бургер

const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const headerItems = document.querySelectorAll('.header__item');
const headerToggle = document.querySelector('.header__toggle');

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
  header.classList.remove('header--nojs');

  headerToggle.addEventListener('click', () => {
    if (headerNav.classList.contains('header__nav--closed')) {

      openHeader();
      return;
    }
    closeHeader();
  });

  headerItems.forEach((i) => {
    i.addEventListener('click', () => {
      closeHeader();
    });
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

// swiper
new Swiper('.swiper', {

  //стрелки
  navigation: {
    nextEl: `.swiper-button-prev`,
    prevEl: `.swiper-button-next`,
  },

  //Пагинация
  pagination: {
    el: '.swiper-pagination',

    clickable: true,

    // пвгинация цифрми
    renderBullet: function (index, className) {
      return '<span class ="' + className + '">' + (index + 1) + '</span>';
    },
  },

  //колличество показываемыхслайдов
  slidesPerView: 2,

  //количество перелистываемых слайдов
  slidesPerGroup: 2,

  //брекпоинты
  breakpoints: {
    1023: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },

  //отключить тач на компе
  simulateTouch: false,

  //упрравление слйдером с клавиатуры
  keyboard: {

    //включить управление
    enabled: true,

    //управление когда слайдер видим
    onlyInViewport: true,

    //добавить в управление PageUp b PageDown
    pageUpDown: true,
  },

  //Отступ между слайдами
  spaceBetween: 30,

  //Бесконечная прокрутка
  loop: true,

  //скорость переключения слайдов
  speed: 1000,
});

//фильтр

const filter = document.querySelector('.filter');
const filterModal = document.querySelector('.filter__modal');
const filterOpen = document.querySelector('.filter__open');
const filterClose = document.querySelector('.filter__close');
const filterForm = document.querySelector('.filter__form');
const filterLegends = document.querySelectorAll('.filter__legend');
const filterButtonClear = document.querySelector('.filter__button--clear');
const filterButtonPush = document.querySelector('.filter__button--active');
const filterCheckbox = document.querySelectorAll('.filter-checkbox-input');

// Открытие пунктов меню фильтра

const filterLegendShow = (i) => {
  filterLegends[i].classList.remove('filter__legend--close');
  filterLegends[i].classList.add('filter__legend--active');
};

const filterLegendClose = (i) => {
  filterLegends[i].classList.remove('filter__legend--active');
  filterLegends[i].classList.add('filter__legend--close');
};

const filterLegendCloseAll = () => {
  filterLegends.forEach((i) =>{
    i.classList.remove('filter__legend--active');
    i.classList.add('filter__legend--close');
  });
};

const toggleFilterLegend = () => {
  if(!filter) {
    return;
  }

  filterLegends.forEach((item, number) => {
    item.addEventListener('click', (evt) => {
      if(evt.target === item) {

        if(filterLegends[number].classList.contains('filter__legend--close')) {
          filterLegendCloseAll();
          filterLegendShow(number);

        } else {
          filterLegendClose(number);
        }
      }
    });
  });
};

toggleFilterLegend();

// сброс чекбоксов

const filterCheckboxClearAll = () => {

  if(!filter) {
    return;
  }

  filterButtonClear.addEventListener('click', () => {
    filterCheckbox.forEach((i) =>{
      i.checked=false;
    });
  });
};

filterCheckboxClearAll();

// фильтр modal

const filterModalOpen = () => {
  filterModal.classList.remove('filter__modal--passive');
  filterModal.classList.add('filter__modal--active');
  filterForm.classList.remove('filter__form--closed');
  filterForm.classList.add('filter__form--opened');
  body.classList.add('body__fixed-page');
};

const filterModalClose = () => {
  filterModal.classList.remove('filter__modal--active');
  filterModal.classList.add('filter__modal--passive');
  filterForm.classList.remove('filter__form--opened');
  filterForm.classList.add('filter__form--closed');
  body.classList.remove('body__fixed-page');
};

const filterModalController = () => {
  if (!filter) {
    return;
  }

  filterOpen.addEventListener('click', () =>{

    if (filterModal.classList.contains('filter__modal--passive')) {

      filterModalOpen();

      document.addEventListener('keydown', (evt) =>{
        if (evt.key === ('Escape' || 'Esc')) {
          evt.preventDefault();
          filterModalClose();
        }
      });

      filterModal.addEventListener('click', (evt) => {
        if (!evt.target.closest('.filter__form')) {
          filterModalClose();
        }
      });

      filterButtonPush.addEventListener('click', () => {
        filterModalClose();
      });
    }
  });

  filterClose.addEventListener('click', () => {
    filterModalClose();
  });
};

filterModalController();
