document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var menuBtn = document.querySelector(".nav-button"),
    menuCloseIcon = document.querySelector(".nav__icon-close"),
    menuList = document.querySelector(".main-nav"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu
  ======================================================= */
  menuBtn.addEventListener("click", () => {
    menuOpen();
  });

  menuCloseIcon.addEventListener("click", () => {
    menuClose();
  });

  function menuOpen() {
    menuList.classList.add("is-open");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function menuClose() {
    menuList.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }



  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off), .project-content iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page__content img, .post__content img, .project-content img, .gallery__image img"),
  imageLink = document.querySelectorAll(".page__content a img, .post__content a img, .project-content a img, .gallery__image a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .project-content img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }


  /* ============================
  // Testimonials Slider
  ============================ */
  if (document.querySelector(".my-slider")) {
    var slider = tns({
      container: ".my-slider",
      items: 3,
      slideBy: 1,
      gutter: 32,
      nav: true,
      mouseDrag: true,
      autoplay: false,
      controls: false,
      speed: 500,
      responsive: {
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        0: {
          items: 1,
        }
      }
    });
  }


  /* =======================
  // Subscribe Modal
  ======================= */
  const modal = document.querySelector('[data-subscribe-modal]');
  const modalOpen = document.querySelector('[data-subscribe-modal-open]');

  if (modal && modalOpen) {
    modalOpen.addEventListener('click', function () {
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    });

    modal.querySelectorAll('[data-subscribe-modal-close]').forEach(function (el) {
      el.addEventListener('click', function () {
        closeModal();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
    });

    function closeModal() {
      modal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  }


  /* =======================
  // Subscribe Form
  ======================= */
  const WORKER_URL = 'https://green-silence-a1a7.snowy-sea-570e.workers.dev/';

  document.querySelectorAll('[data-subscribe-form]').forEach(function (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const success = form.nextElementSibling;
      const btn = form.querySelector('button[type="submit"]');
      const email = input.value.trim();

      btn.disabled = true;
      btn.textContent = 'Subscribing…';

      try {
        const res = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        if (res.ok) {
          form.hidden = true;
          if (success) success.removeAttribute('hidden');
        } else {
          btn.disabled = false;
          btn.textContent = 'Subscribe →';
          alert('Something went wrong. Please try again.');
        }
      } catch {
        btn.disabled = false;
        btn.textContent = 'Subscribe →';
        alert('Something went wrong. Please try again.');
      }
    });
  });


  /* =======================
  // Scroll Top Button
  ======================= */
  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

});