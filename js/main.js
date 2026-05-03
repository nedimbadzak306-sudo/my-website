/* ==============================
   Transfer Zona - Main JS
   ============================== */

(function() {
  'use strict';

  // Breaking news ticker
  const breakingItems = [
    { text: 'Fabrizio Romano: Kylian Mbappé sve bliže potpisu za Real Madrid!', time: 'prije 5 min' },
    { text: 'BREAKING: Arsenal aktivirao klauzulu od 115M€ za Anthonyja Gordona!', time: 'prije 12 min' },
    { text: 'Victor Osimhen prihvatio ličnu ponudu Chelseaja - transfer na čekanju', time: 'prije 18 min' },
    { text: 'Bayern München sprema rekordnu ponudu za Floriana Wirtza!', time: 'prije 25 min' },
  ];

  let currentBreaking = 0;
  const breakingText = document.getElementById('breakingText');
  const breakingBar = document.querySelector('.breaking-bar');

  function updateBreaking(index) {
    if (!breakingText) return;
    const item = breakingItems[index];
    breakingText.innerHTML = '<a href="article.html">' + item.text + '</a>';
    const timeEl = breakingBar.querySelector('.breaking-time');
    if (timeEl) timeEl.textContent = item.time;
  }

  window.nextBreaking = function() {
    currentBreaking = (currentBreaking + 1) % breakingItems.length;
    updateBreaking(currentBreaking);
  };

  window.prevBreaking = function() {
    currentBreaking = (currentBreaking - 1 + breakingItems.length) % breakingItems.length;
    updateBreaking(currentBreaking);
  };

  // Auto-rotate breaking news
  setInterval(function() {
    window.nextBreaking();
  }, 6000);

  // Mobile menu toggle
  var toggle = document.getElementById('mobileToggle');
  if (toggle) {
    toggle.addEventListener('click', function() {
      var nav = document.querySelector('.nav-links');
      if (nav) {
        if (nav.style.display === 'flex') {
          nav.style.display = 'none';
        } else {
          nav.style.display = 'flex';
          nav.style.flexDirection = 'column';
          nav.style.position = 'absolute';
          nav.style.top = '64px';
          nav.style.left = '0';
          nav.style.right = '0';
          nav.style.background = '#111827';
          nav.style.padding = '20px';
          nav.style.gap = '16px';
          nav.style.borderBottom = '1px solid #1f2937';
          nav.style.zIndex = '999';
        }
      }
    });
  }

  // Animate probability bars on scroll
  var probBars = document.querySelectorAll('.rumour-prob-fill');
  if (probBars.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.style.width;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    probBars.forEach(function(bar) {
      var w = bar.style.width;
      bar.style.width = '0%';
      bar.dataset.width = w;
      observer.observe(bar);
    });

    var observer2 = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width;
          observer2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    probBars.forEach(function(bar) {
      observer2.observe(bar);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = this.getAttribute('href');
      if (target === '#') {
        e.preventDefault();
        return;
      }
      var el = document.querySelector(target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // AI probability counter animation on article page
  var probValue = document.querySelector('.ai-prob-value');
  if (probValue) {
    var targetVal = parseInt(probValue.textContent);
    var currentVal = 0;
    probValue.textContent = '0%';

    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var interval = setInterval(function() {
            currentVal += 1;
            probValue.innerHTML = currentVal + '<span>%</span>';
            if (currentVal >= targetVal) {
              clearInterval(interval);
            }
          }, 15);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(probValue);
  }

  // Share buttons
  document.querySelectorAll('.share-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var title = btn.getAttribute('title');
      if (title === 'Kopiraj link') {
        navigator.clipboard.writeText(window.location.href).then(function() {
          btn.textContent = '✓';
          setTimeout(function() { btn.innerHTML = '&#128279;'; }, 2000);
        });
      }
    });
  });

})();
