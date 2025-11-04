(function () {

  // burgerMenu

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

  // modal


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

  // Tab 

  const tabControls = document.querySelector('.tab__controls')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

    const tabControl = e.target.closest('.tab__controls-link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab__controls-link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab__controls-link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
      activeControl.classList.remove('tab__controls-link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab__controls-link--active')
    tabContent.classList.add('tab-content--show')

  }

  // // Accordion

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(list => {
    list.addEventListener('click', (e) => {
      const control = e.target.closest('.accordion-list__control');
      if (!control) return;

      const item = control.parentElement;
      const content = control.nextElementSibling;
      const isOpen = item.classList.contains('accordion-list__item--opened');


      accordionLists.forEach(l =>
        l.querySelectorAll('.accordion-list__item').forEach(i => {
          i.classList.remove('accordion-list__item--opened');
          i.querySelector('.accordion-list__content').style.maxHeight = null;
        })
      );

      if (!isOpen) {
        item.classList.add('accordion-list__item--opened');
        content.style.maxHeight = content.scrollHeight + 'px';
      }

    });

  });

  // Gallery

  new Swiper('.gallery__slider', {

    spaceBetween: 32,
    slidesPerView: 1,
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
      451: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      601: {
        slidesPerView: 3,
      },
      1001: {
        slidesPerView: 4,
      },
    }
  });

  // Testimonials

  new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
      901: {
        slidesPerView: 1.5,
      },
      1101: {
        slidesPerView: 2,
      },
    }

  });

})();



