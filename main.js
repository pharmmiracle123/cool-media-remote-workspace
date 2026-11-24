/* ============================================
   Cool Media Remote Workspace — Core Interactions
   Particles, scroll reveals, nav, tabs
   ============================================ */

(function () {
  'use strict';

  // ---------- Particle System ----------
  function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let width, height;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.size = Math.random() * 1.8 + 0.4;
        this.speedY = Math.random() * 0.35 + 0.08;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.55 + 0.2;
        this.fade = Math.random() * 0.003 + 0.0008;
        this.hue = Math.random() > 0.7 ? (Math.random() > 0.5 ? '255,107,44' : '0,212,200') : '255,255,255';
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity -= this.fade * 0.3;

        if (this.y < -10 || this.opacity <= 0) {
          this.reset();
          this.opacity = Math.random() * 0.5 + 0.2;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.hue || '255,255,255'}, ${this.opacity})`;
        ctx.fill();
      }
    }

    function createParticles() {
      const count = Math.min(Math.floor((width * height) / 14000), 120);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        createParticles();
      }, 150);
    });
  }

  // ---------- Navbar scroll effect ----------
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- Mobile nav toggle ----------
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.classList.toggle('active');
    });
  }

  // ---------- Scroll Reveal ----------
  function initReveal() {
    const elements = document.querySelectorAll('.reveal, .stagger');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after reveal for performance
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // ---------- Dashboard Tabs ----------
  function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('[data-panel]');
    if (!tabs.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        panels.forEach((panel) => {
          if (panel.dataset.panel === target) {
            panel.style.display = 'grid';
            // re-trigger animation
            panel.classList.remove('visible');
            void panel.offsetWidth;
            panel.classList.add('visible');
          } else {
            panel.style.display = 'none';
          }
        });
      });
    });
  }

  // ---------- Membership form (demo) ----------
  function initMembershipForm() {
    const form = document.getElementById('membership-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = 'Processing...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '✓ Enrollment Successful';
        btn.style.background = 'linear-gradient(135deg, #00d4c8, #5eead4)';

        // Simulate redirect to dashboard
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1200);
      }, 1800);
    });
  }

  // ---------- Auth forms (demo) ----------
  function initAuthForms() {
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Please wait...';
        btn.disabled = true;

        setTimeout(() => {
          // Demo: redirect based on form type
          if (form.id === 'signup-form') {
            window.location.href = 'membership.html';
          } else {
            window.location.href = 'dashboard.html';
          }
        }, 1400);
      });
    });
  }

  // ---------- Smooth number counters (optional) ----------
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const duration = 1600;
            const start = performance.now();

            function update(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target).toLocaleString();
              if (progress < 1) requestAnimationFrame(update);
              else el.textContent = target.toLocaleString() + (el.dataset.suffix || '');
            }

            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
  }

  // ---------- Init everything ----------
  document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initMobileNav();
    initReveal();
    initTabs();
    initMembershipForm();
    initAuthForms();
    initCounters();
  });
})();
