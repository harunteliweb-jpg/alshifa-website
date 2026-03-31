document.addEventListener('DOMContentLoaded', function () {

  // Mobile Navigation
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  var mobileNavClose = document.getElementById('mobileNavClose');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileNavClose) {
      mobileNavClose.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Sticky Header Shadow
  var header = document.getElementById('header');
  if (header) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
          } else {
            header.classList.remove('header--scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Contact Form
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var isValid = true;
      contactForm.querySelectorAll('[required]').forEach(function (field) {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = '#e74c3c';
          isValid = false;
        }
      });
      if (isValid) {
        alert('Thank you! Your message has been sent. We will contact you shortly.');
        contactForm.reset();
      }
    });
  }

});
