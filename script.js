document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animation]');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const element = entry.target;
            const delay = element.getAttribute('data-delay') || 0;
            setTimeout(() => {
                element.classList.add('is-visible');
            }, delay);
            observer.unobserve(element);
        });
    }, appearOptions);

    animatedElements.forEach(el => appearOnScroll.observe(el));
});





const animatedElements = document.querySelectorAll('[data-animation]');

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -100px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const delay = element.getAttribute('data-delay') || 0;
        setTimeout(() => element.classList.add('is-visible'), delay);
        observer.unobserve(element);
    });
}, appearOptions);

animatedElements.forEach(el => appearOnScroll.observe(el));


// article -----------

  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let el of reveals) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);





  // Observe elements with fade-up class
const faders = document.querySelectorAll('.fade-up');

const appearsOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearsOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const delay = entry.target.getAttribute('data-delay') || '0s';
    entry.target.style.transitionDelay = delay;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});




// logo

document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll("[data-animation]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, { threshold: 0.2 });

  animatedSections.forEach(el => observer.observe(el));
});




// packages



  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".row-animate").forEach((row) => {
      observer.observe(row);
    });
  });



// contact
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  });



// why tech

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // play once
        }
      });
    }, { threshold: 0.25 });

    document.querySelectorAll('.tech-card').forEach(card => observer.observe(card));
  });

