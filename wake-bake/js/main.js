(function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('nav');

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
  });

  const navLinks = nav.querySelectorAll('a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__preview-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
    }

  }

})();
