export const AIpkgPattern = () => {
  const [nugetCount, setNugetCount] = React.useState(0);
  const [npmCount, setNpmCount] = React.useState(0);
  const [counted, setCounted] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);

          const duration = 1800;
          const nugetTarget = 350000;
          const npmTarget = 2500000;
          const startTime = performance.now();

          const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);

            setNugetCount(Math.round(eased * nugetTarget));
            setNpmCount(Math.round(eased * npmTarget));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [counted]);

  const formatNumber = (n) => n.toLocaleString('en-US');

  const systemFont = "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif";
  const monoFont = "'Cascadia Code', monospace";
  const spring = 'cubic-bezier(0.16, 1, 0.3, 1)';

  const styles = {
    section: {
      background: '#F5F3FF',
      color: '#1A0A2E',
      padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)',
      fontFamily: systemFont,
    },
    inner: {
      maxWidth: '1120px',
      margin: '0 auto',
    },
    eyebrowWrap: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '28px',
    },
    eyebrow: {
      fontFamily: systemFont,
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#1A0A2E',
      border: '1px solid rgba(26,10,46,0.18)',
      borderRadius: '100px',
      padding: '6px 18px',
      display: 'inline-block',
    },
    headline: {
      fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
      fontWeight: 800,
      fontFamily: systemFont,
      color: '#1A0A2E',
      letterSpacing: '-0.03em',
      textAlign: 'center',
      lineHeight: 1.12,
      maxWidth: '720px',
      margin: '0 auto 56px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
    },
    card: {
      background: '#FFFFFF',
      borderRadius: '8px',
      padding: '32px 28px',
      boxShadow: '0 1px 3px rgba(26,10,46,0.06), 0 6px 24px rgba(26,10,46,0.04)',
      display: 'flex',
      flexDirection: 'column',
    },
    divider: {
      height: '1px',
      background: 'rgba(26,10,46,0.08)',
      margin: '20px 0',
    },
  };

  const yearBadge = (color, bgAlpha) => ({
    fontFamily: monoFont,
    fontSize: '0.72rem',
    fontWeight: 600,
    background: bgAlpha,
    color: color,
    padding: '4px 12px',
    borderRadius: '100px',
    display: 'inline-block',
    marginBottom: '14px',
    alignSelf: 'flex-start',
  });

  const cardTitle = (color, isGradient) => {
    const base = {
      fontSize: '1.5rem',
      fontWeight: 800,
      fontFamily: systemFont,
      lineHeight: 1.1,
      marginBottom: '12px',
    };
    if (isGradient) {
      return {
        ...base,
        background: color,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        display: 'inline-block',
      };
    }
    return { ...base, color };
  };

  const problemStyle = {
    fontSize: '0.88rem',
    fontFamily: systemFont,
    color: 'rgba(26,10,46,0.6)',
    lineHeight: 1.5,
    marginBottom: '10px',
  };

  const solutionStyle = {
    fontSize: '0.88rem',
    fontFamily: systemFont,
    color: 'rgba(26,10,46,0.75)',
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const checkmark = (color) => ({
    color: color,
    fontWeight: 700,
    fontSize: '0.95rem',
    flexShrink: 0,
  });

  const statNumber = (color) => ({
    fontFamily: monoFont,
    fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
    fontWeight: 700,
    color: color,
    lineHeight: 1,
    marginBottom: '6px',
  });

  const packagesLabel = (color) => ({
    fontFamily: monoFont,
    fontSize: '0.7rem',
    fontWeight: 600,
    color: color,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '8px',
  });

  const subtextStyle = {
    fontSize: '0.82rem',
    fontFamily: systemFont,
    color: 'rgba(26,10,46,0.45)',
    lineHeight: 1.4,
  };

  return (
    <section style={styles.section} ref={sectionRef}>
      <style>{`
        @keyframes aipkg-pattern-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .aipkg-pattern-qqq {
          animation: aipkg-pattern-pulse 2.4s ease-in-out infinite;
        }
        @media (max-width: 820px) {
          .aipkg-pattern-grid {
            grid-template-columns: 1fr !important;
            max-width: 420px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>

      <div style={styles.inner}>

        {/* Eyebrow */}
        <div style={styles.eyebrowWrap}>
          <span style={styles.eyebrow}>THE PATTERN</span>
        </div>

        {/* Headline */}
        <h2 style={styles.headline}>
          The recipe that built two ecosystems.
        </h2>

        {/* Three-column grid */}
        <div className="aipkg-pattern-grid" style={styles.grid}>

          {/* Card 1 — NuGet */}
          <div style={styles.card}>
            <div style={yearBadge('#3061A6', 'rgba(48,97,166,0.1)')}>2010</div>
            <div style={cardTitle('#3061A6')}>NuGet</div>
            <div style={problemStyle}>.NET had DLL hell.</div>
            <div style={solutionStyle}>
              <span style={checkmark('#3061A6')}>&#10003;</span>
              <span>One registry. One format. One CLI.</span>
            </div>
            <div style={styles.divider} />
            <div style={statNumber('#3061A6')}>
              {counted ? formatNumber(nugetCount) : '0'}+
            </div>
            <div style={packagesLabel('#3061A6')}>packages</div>
            <div style={subtextStyle}>Unified overnight.</div>
          </div>

          {/* Card 2 — npm */}
          <div style={styles.card}>
            <div style={yearBadge('#B98112', 'rgba(185,129,18,0.1)')}>2010</div>
            <div style={cardTitle('#B98112')}>npm</div>
            <div style={problemStyle}>JavaScript had no module system.</div>
            <div style={solutionStyle}>
              <span style={checkmark('#B98112')}>&#10003;</span>
              <span>One registry. One format. One CLI.</span>
            </div>
            <div style={styles.divider} />
            <div style={statNumber('#B98112')}>
              {counted ? formatNumber(npmCount) : '0'}+
            </div>
            <div style={packagesLabel('#B98112')}>packages</div>
            <div style={subtextStyle}>World&apos;s largest ecosystem.</div>
          </div>

          {/* Card 3 — AI•Pkg */}
          <div style={styles.card}>
            <div style={yearBadge('#7840AE', 'rgba(194,121,240,0.12)')}>2025</div>
            <div style={cardTitle('linear-gradient(135deg, #7840AE, #C279F0)', true)}>AI&bull;Pkg</div>
            <div style={problemStyle}>AI tooling has 6 config formats.</div>
            <div style={solutionStyle}>
              <span style={checkmark('#7840AE')}>&#10003;</span>
              <span>One registry. One format. One CLI.</span>
            </div>
            <div style={styles.divider} />
            <div
              className="aipkg-pattern-qqq"
              style={statNumber('#C279F0')}
            >
              ???
            </div>
            <div style={packagesLabel('#7840AE')}>packages</div>
            <div style={subtextStyle}>Doesn&apos;t exist yet.</div>
          </div>

        </div>

      </div>
    </section>
  );
};
