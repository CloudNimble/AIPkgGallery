export const AIpkgHero = () => {
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setStarted(true), 200);
    return () => clearTimeout(t);
  }, []);

  const reveal = (delay) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  const platforms = ['Claude Code', 'Copilot', 'Cursor', 'Windsurf', 'Zed', 'OpenCode'];

  return (
    <>
      <style>{`
        @keyframes aipkg-orb {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.45; }
          50% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.7; }
        }
        @keyframes aipkg-scroll {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.2; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 0.45; }
        }
        .aipkg-hero-pub:hover {
          box-shadow: 0 4px 40px rgba(120,64,174,0.4) !important;
          transform: translateY(-2px) !important;
        }
        .aipkg-hero-plat:hover {
          border-color: #1A9A90 !important;
          background: rgba(26,154,144,0.06) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>

      <section style={{
        minHeight: '100vh',
        background: '#06060A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 24px',
      }}>

        {/* Gradient orb */}
        <div style={{
          position: 'absolute',
          top: '48%', left: '50%',
          width: 1000, height: 1000,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,64,174,0.07) 0%, rgba(14,128,119,0.025) 35%, transparent 60%)',
          animation: 'aipkg-orb 8s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Subtle grid texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

          {/* Logo */}
          <div style={{ marginBottom: 44, ...reveal(0) }}>
            <img src="/images/aipkg.box.purple.svg" alt=""
              style={{ width: 68, height: 68, opacity: 0.85 }} />
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif",
            fontSize: 'clamp(3.4rem, 10vw, 8.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.055em',
            lineHeight: 0.92,
            color: '#EEEDF5',
            margin: '0 0 36px',
            padding: 0,
            border: 'none',
            ...reveal(0.12),
          }}>
            One Package.<br />Every AI Platform.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 400,
            color: 'rgba(238,237,245,0.32)',
            margin: '0 0 48px',
            letterSpacing: '0.005em',
            lineHeight: 1.5,
            ...reveal(0.28),
          }}>
            The universal registry for AI platform plugins.
          </p>

          {/* Platform strip */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(14px, 2.5vw, 30px)',
            flexWrap: 'wrap',
            marginBottom: 56,
            ...reveal(0.42),
          }}>
            {platforms.map(p => (
              <span key={p} style={{
                fontFamily: "'Cascadia Code', 'Fira Code', monospace",
                fontSize: '0.68rem',
                color: 'rgba(255,255,255,0.16)',
                letterSpacing: '0.04em',
              }}>{p}</span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 14,
            justifyContent: 'center', flexWrap: 'wrap',
            ...reveal(0.55),
          }}>
            <a href="/for-publishers" className="aipkg-hero-pub" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '15px 32px',
              background: 'linear-gradient(135deg, #7840AE, #C279F0)',
              color: '#fff', fontWeight: 700, fontSize: '0.92rem',
              borderRadius: 8, border: 'none', cursor: 'pointer',
              fontFamily: "-apple-system, 'SF Pro Display', 'Segoe UI', sans-serif",
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}>Start publishing →</a>
            <a href="/for-platforms" className="aipkg-hero-plat" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '15px 32px',
              background: 'transparent',
              color: '#1A9A90', fontWeight: 700, fontSize: '0.92rem',
              borderRadius: 8,
              border: '1.5px solid rgba(26,154,144,0.35)',
              cursor: 'pointer',
              fontFamily: "-apple-system, 'SF Pro Display', 'Segoe UI', sans-serif",
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}>Integrate the SDK →</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%',
          animation: 'aipkg-scroll 2.5s ease-in-out infinite',
          pointerEvents: 'none',
          ...reveal(1.0),
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 7l6 6 6-6" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </section>
    </>
  );
};
