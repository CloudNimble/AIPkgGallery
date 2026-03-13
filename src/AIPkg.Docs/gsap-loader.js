// AI•Pkg Cinematic Scroll — GSAP loader + animation controller
// Mintlify MDX does not run React useEffect hooks, so all animation
// initialization must happen here in a plain script.
(function () {
  if (window.__gsapLoaded) return;
  window.__gsapLoaded = true;

  function load(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Only run on custom-mode (cinematic) pages
    if (!document.querySelector('.custom-mode')) return;

    var sections = document.querySelectorAll('.custom-mode section');
    if (sections.length < 7) return;

    // ═══════════════════════════════════════════
    // Section 1: Statement (Hero)
    // ═══════════════════════════════════════════
    var stmtSection = sections[0];
    if (stmtSection) {
      // Hero content is visible by default (CSS handles initial state).
      // Use CSS animations for the staggered entrance, GSAP only for scroll exit.
      // Set scroll indicator to visible
      gsap.set('.stmt-scroll', { opacity: 0.4 });

      // Scroll-driven exit
      var stmtTl = gsap.timeline({
        scrollTrigger: {
          trigger: stmtSection,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
      stmtTl.to({}, { duration: 0.5 })
            .to('.stmt-content', { scale: 0.88, opacity: 0, duration: 0.5, ease: 'power1.in' })
            .to('.stmt-scroll', { opacity: 0, duration: 0.2 }, '<');
    }

    // ═══════════════════════════════════════════
    // Section 2: Fragmentation → Compression into .aipkg box
    // ═══════════════════════════════════════════
    var fragSection = sections[1];
    if (fragSection) {
      gsap.set('.frag-card', { opacity: 0, x: 0, y: 0, scale: 0.3, rotation: 0 });
      gsap.set('.frag-center', { opacity: 0, scale: 0.8 });
      gsap.set('.frag-light', { opacity: 0, scale: 0, y: 0 });
      gsap.set('.frag-box', { opacity: 0, scale: 0.3, y: 0 });
      gsap.set('.frag-box-label', { opacity: 0, y: 20 });

      // Pre-calculate scatter positions using golden angle
      var cardEls = fragSection.querySelectorAll('.frag-card');
      var goldenAngle = 2.399963;
      var positions = [];
      for (var i = 0; i < cardEls.length; i++) {
        var angle = i * goldenAngle;
        var ring = Math.floor(i / 7);
        var radius = 180 + ring * 100;
        positions.push({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius * 0.65,
          r: ((i % 2 === 0) ? 1 : -1) * (2 + (i % 5) * 2),
        });
      }

      var fragTl = gsap.timeline({
        scrollTrigger: {
          trigger: fragSection,
          start: 'top top',
          end: '+=500%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Phase 0: Counter appears FIRST, alone (0.00 → 0.10)
      fragTl.to('.frag-center', { opacity: 1, scale: 1, duration: 0.08, ease: 'power2.out' }, 0.02);

      // Phase 1: Cards scatter outward AROUND the counter (0.10 → 0.25)
      for (var j = 0; j < cardEls.length; j++) {
        (function(el, pos, idx) {
          fragTl.to(el, {
            opacity: 1, x: pos.x, y: pos.y, rotation: pos.r, scale: 1,
            duration: 0.12, ease: 'power2.out',
          }, 0.10 + idx * 0.005);
        })(cardEls[j], positions[j], j);
      }

      // Phase 2: Hold the chaos — counter stays visible (0.25 → 0.38)
      fragTl.to({}, { duration: 0.13 });

      // Phase 3: Counter fades, cards converge above box (0.38 → 0.50)
      fragTl.to('.frag-center', { opacity: 0, scale: 0.5, duration: 0.06 }, 0.38);

      for (var k = 0; k < cardEls.length; k++) {
        (function(el, idx) {
          fragTl.to(el, {
            x: 0, y: -80, rotation: 0, scale: 0.08, opacity: 0.6,
            duration: 0.14, ease: 'power3.in',
          }, 0.38 + idx * 0.002);
        })(cardEls[k], k);
      }

      // Phase 4: Cards vanish, ball of light appears at convergence point (0.54 → 0.60)
      // Delayed to 0.54 so ALL staggered cards finish converging first
      fragTl.to('.frag-card', { opacity: 0, scale: 0, duration: 0.04, stagger: 0 }, 0.54);
      fragTl.to('.frag-light', { opacity: 1, scale: 1.2, duration: 0.06, ease: 'power2.out' }, 0.54);

      // Phase 5: Box zooms in from background (0.56 → 0.64)
      fragTl.to('.frag-box', { opacity: 1, scale: 1, duration: 0.10, ease: 'back.out(1.4)' }, 0.56);

      // Phase 6: Ball of light drops down into the box (0.62 → 0.70)
      fragTl.to('.frag-light', { y: 80, scale: 0.3, opacity: 0.8, duration: 0.07, ease: 'power2.in' }, 0.62);
      fragTl.to('.frag-light', { scale: 0, opacity: 0, duration: 0.03, ease: 'power1.in' }, 0.69);

      // Phase 7: Box pulses on impact, label fades in (0.69 → 0.78)
      fragTl.to('.frag-box img', { scale: 1.08, duration: 0.03, ease: 'power2.out' }, 0.69);
      fragTl.to('.frag-box img', { scale: 1, duration: 0.05, ease: 'elastic.out(1, 0.5)' }, 0.72);
      fragTl.to('.frag-box-label', { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.74);

      // Phase 8: Hold the result (0.75 → 0.85)
      fragTl.to({}, { duration: 0.10 });

      // Phase 9: Exit (0.85 → 1.0)
      fragTl.to('.frag-field', { opacity: 0, scale: 0.92, duration: 0.15, ease: 'power1.in' }, 0.85);
    }

    // ═══════════════════════════════════════════
    // Section 3: Compression (Proven Pattern)
    // ═══════════════════════════════════════════
    var compSection = sections[2];
    if (compSection) {
      gsap.set('.comp-icon', { opacity: 0, scale: 0.4 });
      gsap.set('.comp-eyebrow', { opacity: 0, y: 30 });
      gsap.set('.comp-headline', { opacity: 0, y: 40 });
      gsap.set('.comp-card', { opacity: 0, y: 60 });
      gsap.set('.comp-punch', { opacity: 0, y: 30 });

      var compTl = gsap.timeline({
        scrollTrigger: {
          trigger: compSection,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      compTl.to('.comp-icon', { opacity: 1, scale: 1, duration: 0.1, ease: 'back.out(1.7)' })
            .to('.comp-eyebrow', { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.08)
            .to('.comp-headline', { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.14)
            .to('.comp-card-0', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.24)
            .to('.comp-card-1', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.36)
            .to('.comp-card-2', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.48)
            .to('.comp-punch', { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.62)
            .to({}, { duration: 0.15 })
            .to('.comp-content', { opacity: 0, scale: 0.94, duration: 0.15, ease: 'power1.in' }, 0.82);
    }

    // ═══════════════════════════════════════════
    // Section 4: Trust (Security Pipeline) — two-column
    // ═══════════════════════════════════════════
    var trustSection = sections[3];
    if (trustSection) {
      gsap.set('.trust-left', { opacity: 0, x: -40 });
      gsap.set('.trust-right', { opacity: 0, x: 40 });
      gsap.set('.trust-eyebrow', { opacity: 0, y: 20 });
      gsap.set('.trust-headline', { opacity: 0, y: 30 });
      gsap.set('.trust-subline', { opacity: 0, y: 20 });
      gsap.set('.trust-stage', { opacity: 0, x: 30 });
      gsap.set('.trust-connector', { scaleY: 0, transformOrigin: 'top' });
      gsap.set('.trust-badge', { opacity: 0, scale: 0.5 });
      gsap.set('.trust-callout', { opacity: 0, y: 20 });

      var trustTl = gsap.timeline({
        scrollTrigger: {
          trigger: trustSection,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Left column slides in
      trustTl.to('.trust-left', { opacity: 1, x: 0, duration: 0.12, ease: 'power2.out' }, 0.02);
      trustTl.to('.trust-eyebrow', { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.04);
      trustTl.to('.trust-headline', { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.08);
      trustTl.to('.trust-subline', { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.14);

      // Right column slides in
      trustTl.to('.trust-right', { opacity: 1, x: 0, duration: 0.12, ease: 'power2.out' }, 0.10);

      // 6 pipeline stages stagger in from right
      for (var si = 0; si < 6; si++) {
        var t = 0.18 + si * 0.08;
        trustTl.to('.trust-stage-' + si, { opacity: 1, x: 0, duration: 0.08, ease: 'power2.out' }, t);
        trustTl.to('.trust-badge-' + si, { opacity: 1, scale: 1, duration: 0.06, ease: 'back.out(2)' }, t + 0.04);
        if (si < 5) {
          trustTl.to('.trust-conn-' + si, { scaleY: 1, duration: 0.05, ease: 'power1.out' }, t + 0.05);
        }
      }

      // Callout fades in on left side
      trustTl.to('.trust-callout', { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.72);
      trustTl.to({}, { duration: 0.1 });
      trustTl.to('.trust-content', { opacity: 0, duration: 0.1, ease: 'power1.in' }, 0.88);
    }

    // ═══════════════════════════════════════════
    // Section 5: Lifecycle (Security Outcomes)
    // ═══════════════════════════════════════════
    var lifecycleSection = sections[4];
    if (lifecycleSection) {
      gsap.set('.lifecycle-eyebrow', { opacity: 0, y: 20 });
      gsap.set('.lifecycle-headline', { opacity: 0, y: 30 });
      gsap.set('.lifecycle-subline', { opacity: 0, y: 20 });
      gsap.set('.lifecycle-card', { opacity: 0, y: 50 });

      var lifeTl = gsap.timeline({
        scrollTrigger: {
          trigger: lifecycleSection,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      lifeTl.to('.lifecycle-eyebrow', { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.02);
      lifeTl.to('.lifecycle-headline', { opacity: 1, y: 0, duration: 0.10, ease: 'power2.out' }, 0.08);
      lifeTl.to('.lifecycle-subline', { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.16);

      // Cards stagger in
      lifeTl.to('.lifecycle-card-0', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.28);
      lifeTl.to('.lifecycle-card-1', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.40);
      lifeTl.to('.lifecycle-card-2', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.52);

      // Hold
      lifeTl.to({}, { duration: 0.18 });

      // Exit
      lifeTl.to('.lifecycle-content', { opacity: 0, scale: 0.94, duration: 0.15, ease: 'power1.in' }, 0.82);
    }

    // ═══════════════════════════════════════════
    // Section 6: Fire Flower (Empowerment beat)
    // ═══════════════════════════════════════════
    var ffSection = sections[5];
    if (ffSection) {
      gsap.set('.ff-line', { opacity: 0, y: 30 });

      var ffTl = gsap.timeline({
        scrollTrigger: {
          trigger: ffSection,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Three lines stagger in
      ffTl.to('.ff-line-1', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.05);
      ffTl.to('.ff-line-2', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.20);
      ffTl.to('.ff-line-3', { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.35);

      // Hold
      ffTl.to({}, { duration: 0.30 });

      // Exit
      ffTl.to('.ff-content', { opacity: 0, scale: 0.92, duration: 0.15, ease: 'power1.in' }, 0.80);
    }

    // ═══════════════════════════════════════════
    // Section 7: Fork (Publisher / Platform split)
    // ═══════════════════════════════════════════
    var forkSection = sections[6];
    if (forkSection) {
      gsap.set('.fork-divider', { scaleY: 0, transformOrigin: 'center' });
      gsap.set('.fork-logo', { opacity: 0, scale: 0.5 });
      gsap.set('.fork-left', { opacity: 0, x: -80 });
      gsap.set('.fork-right', { opacity: 0, x: 80 });
      gsap.set('.fork-bottom', { opacity: 0, y: 20 });

      var forkTl = gsap.timeline({
        scrollTrigger: {
          trigger: forkSection,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      forkTl.to('.fork-divider', { scaleY: 1, duration: 0.2, ease: 'power2.inOut' })
            .to('.fork-logo', { opacity: 1, scale: 1, duration: 0.12, ease: 'back.out(1.7)' }, 0.15)
            .to('.fork-left', { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' }, 0.25)
            .to('.fork-right', { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' }, 0.35)
            .to('.fork-bottom', { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.55)
            .to({}, { duration: 0.25 });
    }

    // Refresh after all triggers are set up
    ScrollTrigger.refresh();
  }

load('https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js')
    .then(function () {
      return load('https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js');
    })
    .then(function () {
      // Wait for DOM to be fully ready
      if (document.readyState === 'complete') {
        initAnimations();
      } else {
        window.addEventListener('load', initAnimations);
      }
      // Also try after a delay in case Mintlify hydration is still running
      setTimeout(function () {
        if (ScrollTrigger.getAll().length === 0) {
          initAnimations();
        }
      }, 1500);
    })
    .catch(function (e) {
      console.error('GSAP load failed:', e);
    });
})();
