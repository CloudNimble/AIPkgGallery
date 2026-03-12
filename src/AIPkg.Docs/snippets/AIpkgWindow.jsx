export const AIpkgWindow = () => {
  const [started, setStarted] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [counting, setCounting] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const t = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counting) {
          setCounting(true);
          const target = 47;
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [counting]);

  const spring = (delay = 0) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  });

  const systemFont = "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif";
  const monoFont = "'Cascadia Code', 'Fira Code', 'JetBrains Mono', monospace";

  const styles = {
    section: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(160deg, #1A0A2E 0%, #0D0618 50%, #06060A 100%)',
      padding: '120px 24px',
      textAlign: 'center',
    },
    glowOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(194,121,240,0.06) 0%, transparent 70%)',
      pointerEvents: 'none',
    },
    inner: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    eyebrow: {
      display: 'inline-block',
      border: '1px solid rgba(194,121,240,0.5)',
      borderRadius: '100px',
      padding: '6px 18px',
      fontSize: '0.65rem',
      fontWeight: 700,
      letterSpacing: '0.2em',
      color: 'rgba(194,121,240,0.8)',
      textTransform: 'uppercase',
      fontFamily: monoFont,
      marginBottom: '64px',
    },
    counterWrap: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '64px',
    },
    counterGlow: {
      position: 'absolute',
      width: '400px',
      height: '400px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(194,121,240,0.12) 0%, rgba(120,64,174,0.06) 40%, transparent 70%)',
      pointerEvents: 'none',
    },
    counterNumber: {
      position: 'relative',
      display: 'block',
      fontSize: 'clamp(5rem, 14vw, 9rem)',
      fontWeight: 900,
      fontFamily: monoFont,
      lineHeight: 1,
      background: 'linear-gradient(135deg, #C279F0 0%, #7840AE 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'counterPulseGlow 2.5s ease-in-out infinite',
    },
    counterLabel: {
      display: 'block',
      fontSize: '0.75rem',
      fontFamily: monoFont,
      color: 'rgba(194,121,240,0.55)',
      letterSpacing: '0.06em',
      marginTop: '14px',
    },
    headline: {
      fontSize: 'clamp(2.8rem, 6vw, 5rem)',
      fontWeight: 900,
      letterSpacing: '-0.035em',
      color: '#F0EEF8',
      margin: '0 0 48px 0',
      lineHeight: 1.1,
      fontFamily: systemFont,
    },
    body: {
      maxWidth: '620px',
      margin: '0 auto 56px auto',
      color: 'rgba(240,238,248,0.45)',
      fontSize: '1.05rem',
      lineHeight: 1.7,
      fontFamily: systemFont,
      fontWeight: 400,
      textAlign: 'center',
    },
    ctaRow: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px',
    },
    publisherBtn: {
      background: 'linear-gradient(135deg, #7840AE, #C279F0)',
      color: '#fff',
      padding: '14px 28px',
      borderRadius: '6px',
      fontWeight: 700,
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontFamily: systemFont,
      display: 'inline-block',
      border: 'none',
      cursor: 'pointer',
    },
    platformBtn: {
      background: 'transparent',
      border: '2px solid #0E8077',
      color: '#0E8077',
      padding: '12px 28px',
      borderRadius: '6px',
      fontWeight: 700,
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontFamily: systemFont,
      display: 'inline-block',
      cursor: 'pointer',
    },
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <style>{`
        @keyframes counterPulseGlow {
          0%, 100% { text-shadow: 0 0 40px rgba(194,121,240,0.25), 0 0 80px rgba(194,121,240,0.1); }
          50%       { text-shadow: 0 0 60px rgba(194,121,240,0.5), 0 0 120px rgba(194,121,240,0.2); }
        }
      `}</style>

      <div style={styles.glowOverlay} />

      <div style={styles.inner}>

        {/* Eyebrow */}
        <div style={spring(0)}>
          <span style={styles.eyebrow}>The Window</span>
        </div>

        {/* Counter */}
        <div style={spring(100)}>
          <div style={styles.counterWrap}>
            <div style={styles.counterGlow} />
            <span style={styles.counterNumber}>{count}</span>
            <span style={styles.counterLabel}>AI platforms launched since 2023</span>
          </div>
        </div>

        {/* Headline */}
        <div style={spring(200)}>
          <h2 style={styles.headline}>The standard isn't set yet.</h2>
        </div>

        {/* Body */}
        <div style={spring(300)}>
          <p style={styles.body}>
            Every ecosystem has a moment where the package format gets set — or
            fragments permanently. JavaScript had it. .NET had it. AI tooling is
            having it right now.
          </p>
        </div>

        {/* CTAs */}
        <div style={spring(420)}>
          <div style={styles.ctaRow}>
            <a href="/for-publishers" style={styles.publisherBtn}>
              Publish once. Every platform.
            </a>
            <a href="/for-platforms" style={styles.platformBtn}>
              Join the open standard.
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
