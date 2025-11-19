(function () {

  // Модалка

  const modal = document.querySelector('.modal');
  const modalButtons = document.querySelectorAll('.hero__button, .info__button, .consultation-button, .about__button, .course__button');

  modalButtons.forEach(btn =>
    btn.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.toggle('body--opened-modal');
    })
  );

  modal.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.closest('.modal__cancel') || e.target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal');
    }
  });


  // Маска для телефона

  const telInputs = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs)

  // Скроллбар

  document.addEventListener('DOMContentLoaded', () => {
    const cb = document.querySelector('.switchbar__button input[type="checkbox"]');
    const sec = document.querySelector('#section__advantages');
    if (cb && sec) {
      cb.addEventListener('change', () => {
        if (cb.checked) {
          sec.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => cb.checked = false, 1000);
        }
      });
    }
  });

  // Аккордион

  function scrollToHeader(header) {
    const rect = header.getBoundingClientRect();
    const absoluteY = window.pageYOffset + rect.top;
    window.scrollTo({
      top: absoluteY - 30,
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.accordion__button').forEach(btn => {
    btn.addEventListener('click', () => {
      const header = btn.closest('.accordion__header');
      const list = header.nextElementSibling;
      const isOpen = list.classList.contains('show');

      if (!isOpen) {
        header.style.width = header.offsetWidth + 'px';
        list.style.maxHeight = list.scrollHeight + 'px';
        list.classList.add('show');
        btn.setAttribute('aria-expanded', 'true');

      } else {
        header.style.width = '';
        list.style.maxHeight = '0';
        list.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });


  // Подробнее /Скрыть


  document.querySelectorAll('.article__text').forEach((articleText) => {
    const button = articleText.querySelector('.article__toggle-button');
    const span = articleText.querySelector('.article__more-text');

    button.addEventListener('click', () => {
      span.classList.toggle('hidden');

      // Меняем текст кнопки
      if (span.classList.contains('hidden')) {
        button.textContent = 'Подробнее';
      } else {
        button.textContent = 'Скрыть';
      }
    });
  });


  // Слайдер-обЪявления

  new Swiper('.announcements__slider', {

    spaceBetween: 15,
    slidesPerView: 3,


    navigation: {
      nextEl: '.announcements__next',
      prevEl: '.announcements__prev',
    },

  });

  // Слайдер-вакансии

  new Swiper('.job__slider', {

    spaceBetween: 15,
    slidesPerView: 3,


    navigation: {
      nextEl: '.job__next',
      prevEl: '.job__prev',
    },

  });

})()