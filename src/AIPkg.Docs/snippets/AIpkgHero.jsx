export const AIpkgHero = () => {
  const [started, setStarted] = React.useState(false);
  const [termStep, setTermStep] = React.useState(0);

  React.useEffect(() => {
    setStarted(true);
    const timers = [
      setTimeout(() => setTermStep(1), 800),
      setTimeout(() => setTermStep(2), 1500),
      setTimeout(() => setTermStep(3), 2100),
      setTimeout(() => setTermStep(4), 2700),
      setTimeout(() => setTermStep(5), 3300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const platforms = [
    { name: 'Claude Code',    color: '#3CD0E2' },
    { name: 'GitHub Copilot', color: '#4CAF7A' },
    { name: 'Cursor',         color: '#7C6EEA' },
    { name: 'Windsurf',       color: '#419AC5' },
    { name: 'OpenCode',       color: '#E2813C' },
    { name: 'Zed AI',         color: '#E24D4D' },
    { name: '+ more',         color: '#5A7A9A' },
  ];

  const metrics = [
    { value: '6+', label: 'AI Platforms' },
    { value: '6',  label: 'Package Types' },
    { value: '1',  label: 'Install Command' },
    { value: '0',  label: 'Config Files' },
  ];

  const anim = (delay = 0) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const termAnim = (step) => ({
    opacity: termStep >= step ? 1 : 0,
    transform: termStep >= step ? 'translateY(0)' : 'translateY(8px)',
    transition: 'opacity 0.35s ease, transform 0.35s ease',
  });

  return (
    <>
      <style>{`
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes cursorBlink {
          0%, 49%  { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes pillReveal {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes topLineGlow {
          0%, 100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
        .aipkg-pill {
          padding: 5px 14px;
          border-radius: 100px;
          font-family: 'Cascadia Code', 'Courier New', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.02em;
          font-weight: 500;
          border: 1px solid;
          opacity: 0;
          display: inline-block;
        }
        .aipkg-pill.visible {
          animation: pillReveal 0.45s ease forwards;
        }
        .aipkg-btn-primary {
          display: inline-flex; align-items: center;
          padding: 13px 28px;
          background: #3CD0E2;
          color: #0A1628 !important;
          font-weight: 700; font-size: 0.92rem;
          border-radius: 4px;
          text-decoration: none !important;
          letter-spacing: 0.02em;
          transition: background 0.18s ease, box-shadow 0.18s ease;
        }
        .aipkg-btn-primary:hover {
          background: #5DDAEC;
          box-shadow: 0 0 24px rgba(60, 208, 226, 0.45);
          color: #0A1628 !important;
        }
        .aipkg-btn-ghost {
          display: inline-flex; align-items: center;
          padding: 12px 28px;
          color: #3CD0E2 !important;
          font-weight: 600; font-size: 0.92rem;
          border-radius: 4px;
          text-decoration: none !important;
          border: 1px solid rgba(60, 208, 226, 0.35);
          transition: border-color 0.18s ease, background 0.18s ease;
        }
        .aipkg-btn-ghost:hover {
          border-color: #3CD0E2;
          background: rgba(60, 208, 226, 0.07);
        }
        .metric-item:not(:last-child) {
          border-right: 1px solid rgba(60, 208, 226, 0.1);
        }
      `}</style>

      {/* ── Hero ── */}
      <section style={{
        background: '#0A1628',
        backgroundImage: `
          linear-gradient(rgba(60, 208, 226, 0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(60, 208, 226, 0.055) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #3CD0E2 50%, transparent 100%)',
          animation: started ? 'topLineGlow 3s ease-in-out infinite' : 'none',
        }} />

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', ...anim(0.1) }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%', background: '#3CD0E2', flexShrink: 0,
            animation: started ? 'dotPulse 2.5s ease-in-out infinite' : 'none',
          }} />
          <span style={{
            fontFamily: "'Cascadia Code', monospace", fontSize: '0.72rem',
            letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3CD0E2', fontWeight: 600,
          }}>Universal AI Package Registry</span>
        </div>

        {/* Heading */}
        <h1 style={{
          textAlign: 'center',
          fontSize: 'clamp(2.8rem, 7vw, 5rem)',
          fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em',
          margin: '0 0 20px 0', maxWidth: '780px',
          color: '#E8F4FF', border: 'none', padding: 0,
          ...anim(0.2),
        }}>
          One Package.<br />
          <span style={{
            background: 'linear-gradient(135deg, #3CD0E2 0%, #419AC5 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Every AI Platform.</span>
        </h1>

        {/* Subtext */}
        <p style={{
          textAlign: 'center', fontSize: '1.05rem', lineHeight: 1.7, color: '#7BA3C4',
          maxWidth: '570px', margin: '0 0 52px 0', ...anim(0.35),
        }}>
          Every AI platform ships its own config format, directory conventions, and plugin system.
          AIpkg packages your skills, MCP servers, commands, and prompts once — then automatically
          adapts them to every platform your users run.
        </p>

        {/* Terminal */}
        <div style={{
          width: '100%', maxWidth: '660px', borderRadius: '8px', overflow: 'hidden',
          border: '1px solid rgba(60, 208, 226, 0.18)', background: '#04080F',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(60,208,226,0.04) inset',
          marginBottom: '44px', ...anim(0.45),
        }}>
          {/* Topbar */}
          <div style={{
            background: '#0A1422', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px',
            borderBottom: '1px solid rgba(60, 208, 226, 0.08)',
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#FF5F57', '#FEBC2E', '#28C840'].map((c, i) => (
                <div key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, opacity: 0.65 }} />
              ))}
            </div>
            <span style={{
              flex: 1, textAlign: 'center', fontSize: '0.73rem',
              fontFamily: "'Cascadia Code', monospace", color: '#4A6A8A', letterSpacing: '0.05em',
            }}>Terminal — bash</span>
          </div>

          {/* Terminal body */}
          <div style={{
            padding: '20px 24px 28px',
            fontFamily: "'Cascadia Code', 'Courier New', monospace",
            fontSize: '0.875rem', lineHeight: 2.1, minHeight: '130px',
          }}>
            {/* Command line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E8F4FF' }}>
              <span style={{ color: '#3CD0E2', userSelect: 'none' }}>❯</span>
              <span>aipkg install my-mcp-server</span>
              {termStep < 1 && (
                <span style={{
                  display: 'inline-block', width: '2px', height: '15px', background: '#3CD0E2',
                  animation: 'cursorBlink 1s ease-in-out infinite', verticalAlign: 'middle',
                }} />
              )}
            </div>
            {/* Output lines */}
            <div style={termAnim(1)}>
              <span style={{ color: '#3CD0E2' }}>✓</span>
              <span style={{ color: '#6B8FAF' }}> Detected platform: </span>
              <span style={{ color: '#E8F4FF', fontWeight: 600 }}>claude-code</span>
            </div>
            <div style={termAnim(2)}>
              <span style={{ color: '#3CD0E2' }}>✓</span>
              <span style={{ color: '#6B8FAF' }}> Resolving APM chain: </span>
              <span style={{ color: '#419AC5' }}>claude-code → claude → ai → shared</span>
            </div>
            <div style={termAnim(3)}>
              <span style={{ color: '#3CD0E2' }}>✓</span>
              <span style={{ color: '#6B8FAF' }}> Collecting </span>
              <span style={{ color: '#E8F4FF', fontWeight: 600 }}>4</span>
              <span style={{ color: '#6B8FAF' }}> shared files, </span>
              <span style={{ color: '#E8F4FF', fontWeight: 600 }}>2</span>
              <span style={{ color: '#6B8FAF' }}> claude-code overrides</span>
            </div>
            <div style={termAnim(4)}>
              <span style={{ color: '#4CAF7A' }}>✓</span>
              <span style={{ color: '#4CAF7A' }}> my-mcp-server@1.2.0 installed → .claude/settings.json</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '14px', marginBottom: '52px',
          flexWrap: 'wrap', justifyContent: 'center', ...anim(0.55),
        }}>
          <a href="/quickstart" className="aipkg-btn-primary">Get Started →</a>
          <a href="/why-aipkg" className="aipkg-btn-ghost">Why AIpkg?</a>
        </div>

        {/* Platform pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '660px' }}>
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className={`aipkg-pill ${termStep >= 5 ? 'visible' : ''}`}
              style={{
                animationDelay: `${i * 0.09}s`,
                borderColor: `${p.color}50`,
                background: `${p.color}10`,
                color: p.color,
              }}
            >{p.name}</div>
          ))}
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
          background: 'linear-gradient(to bottom, transparent, #0A1628)',
          pointerEvents: 'none',
        }} />
      </section>

      {/* ── Metrics strip ── */}
      <div style={{
        background: '#060E1A',
        borderTop: '1px solid rgba(60, 208, 226, 0.09)',
        borderBottom: '1px solid rgba(60, 208, 226, 0.09)',
        padding: '44px 24px',
        display: 'flex', justifyContent: 'center',
        opacity: started ? 1 : 0,
        transition: 'opacity 0.6s ease 0.7s',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '700px', width: '100%' }}>
          {metrics.map((m) => (
            <div key={m.label} className="metric-item" style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '0 28px' }}>
              <div style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '2.5rem', fontWeight: 800,
                color: '#3CD0E2', lineHeight: 1, marginBottom: '10px',
              }}>{m.value}</div>
              <div style={{
                fontSize: '0.75rem', color: '#4A6A8A',
                textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600,
              }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
