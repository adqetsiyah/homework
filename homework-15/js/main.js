// const modal = document.querySelector('.modal');
// const btnOpen = document.querySelector('.header__btn-open');
// const btnClose = document.querySelector('.modal__btn-close');

// btnOpen.addEventListener('click', () => {
//   modal.classList.add('active');
// });

// btnClose.addEventListener('click', () => {
//   modal.classList.remove('active');
// });


// modal.addEventListener('click', (event) => {
//   if (event.target === modal) {
//     modal.classList.remove('active');
//   }
// });

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape' && modal.classList.contains('active')) {
//     modal.classList.remove('active');
//   }
// });



const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.header__btn-open');
const btnClose = document.querySelector('.modal__btn-close');


const openModal = () => {
  modal.classList.add('active');
};
const closeModal = () => {
  modal.classList.remove('active');
};


btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);


modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});