export const AIpkgHero = () => {
  const CMD = 'aipkg install @example/my-mcp-server';
  const [started,   setStarted]   = React.useState(false);
  const [charCount, setCharCount] = React.useState(0);
  const [termStep,  setTermStep]  = React.useState(0);

  React.useEffect(() => {
    setStarted(true);
    let char = 0;
    let typeInterval = null;
    const postTypeTimers = [];

    const startDelay = setTimeout(() => {
      typeInterval = setInterval(() => {
        char++;
        setCharCount(char);
        if (char >= CMD.length) {
          clearInterval(typeInterval);
          typeInterval = null;
          postTypeTimers.push(
            setTimeout(() => setTermStep(1), 380),
            setTimeout(() => setTermStep(2), 980),
            setTimeout(() => setTermStep(3), 1600),
            setTimeout(() => setTermStep(4), 2200),
            setTimeout(() => setTermStep(5), 2900),
          );
        }
      }, 44);
    }, 420);

    return () => {
      clearTimeout(startDelay);
      if (typeInterval) clearInterval(typeInterval);
      postTypeTimers.forEach(clearTimeout);
    };
  }, []);

  const platforms = [
    { name: 'Claude Code',    color: '#0E8077' },
    { name: 'GitHub Copilot', color: '#3061A6' },
    { name: 'Cursor',         color: '#8A57C6' },
    { name: 'Windsurf',       color: '#B98112' },
    { name: 'OpenCode',       color: '#B32C38' },
    { name: 'Zed AI',         color: '#666680' },
    { name: '+ more',         color: '#444450' },
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
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes heroGlowPulse {
          0%, 100% { box-shadow: 0 0 60px rgba(194,121,240,0.25), 0 0 120px rgba(120,64,174,0.12); }
          50% { box-shadow: 0 0 80px rgba(194,121,240,0.38), 0 0 160px rgba(120,64,174,0.18); }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes cursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes pillReveal {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes topLineGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .aipkg-pill {
          padding: 5px 14px; border-radius: 100px;
          font-family: 'Cascadia Code', 'Courier New', monospace;
          font-size: 0.75rem; letter-spacing: 0.02em; font-weight: 500;
          border: 1px solid; opacity: 0; display: inline-block;
        }
        .aipkg-pill.visible { animation: pillReveal 0.45s ease forwards; }
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px;
          background: linear-gradient(135deg, #7840AE 0%, #C279F0 100%);
          color: #fff !important; font-weight: 700; font-size: 0.92rem;
          border-radius: 6px; text-decoration: none !important;
          letter-spacing: 0.02em; border: none;
          transition: box-shadow 0.2s ease, transform 0.15s ease;
        }
        .hero-btn-primary:hover {
          box-shadow: 0 0 32px rgba(194,121,240,0.5), 0 4px 20px rgba(120,64,174,0.4);
          transform: translateY(-1px);
          color: #fff !important;
        }
        .hero-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px; color: #C0C0CC !important;
          font-weight: 600; font-size: 0.92rem; border-radius: 6px;
          text-decoration: none !important;
          border: 1px solid rgba(255,255,255,0.12);
          transition: border-color 0.18s ease, background 0.18s ease;
        }
        .hero-btn-ghost:hover {
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
          color: #fff !important;
        }
        .metric-item:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .logo-float {
          animation: heroFloat 5s ease-in-out infinite, heroGlowPulse 5s ease-in-out infinite;
        }
      `}</style>

      {/* â”€â”€ Hero â”€â”€ */}
      <section style={{
        background: '#080808',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '140px 24px 100px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Minimal glow â€” far corner only, barely visible */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,64,174,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* Top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #7840AE 35%, #C279F0 65%, transparent 100%)',
          animation: started ? 'topLineGlow 3s ease-in-out infinite' : 'none',
        }} />

        {/* Two-column hero layout */}
        <div style={{
          width: '100%', maxWidth: '1180px',
          display: 'flex', gap: '48px', alignItems: 'center',
          flexWrap: 'wrap', justifyContent: 'center',
        }}>

          {/* â”€â”€ Left column: copy + terminal â”€â”€ */}
          <div style={{ flex: '1 1 480px', maxWidth: 620 }}>

            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', ...anim(0.1) }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%', background: '#C279F0', flexShrink: 0,
                animation: started ? 'dotPulse 2.5s ease-in-out infinite' : 'none',
              }} />
              <span style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.72rem',
                letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C279F0', fontWeight: 600,
              }}>Universal AI Package Registry</span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.6rem)',
              fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em',
              margin: '0 0 20px 0',
              color: '#F0EEF8', border: 'none', padding: 0,
              ...anim(0.2),
            }}>
              One Package.<br />
              <span style={{
                background: 'linear-gradient(135deg, #C279F0 0%, #7840AE 60%, #9A66E2 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Every AI Platform.</span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: '1.05rem', lineHeight: 1.7, color: '#888896',
              maxWidth: '540px', margin: '0 0 48px 0', ...anim(0.35),
            }}>
              Every AI platform ships its own config format, directory conventions, and plugin system.
              AIpkg packages your skills, MCP servers, commands, and prompts once â€” then automatically
              adapts them to every platform your users run.
            </p>

            {/* Terminal */}
            <div style={{
              width: '100%', maxWidth: '620px', borderRadius: '10px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)', background: '#050505',
              boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
              marginBottom: '40px', ...anim(0.45),
            }}>
              {/* Topbar */}
              <div style={{
                background: '#0E0E0E', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map((c, i) => (
                    <div key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, opacity: 0.65 }} />
                  ))}
                </div>
                <span style={{
                  flex: 1, textAlign: 'center', fontSize: '0.73rem',
                  fontFamily: "'Cascadia Code', monospace", color: '#444450', letterSpacing: '0.05em',
                }}>Terminal â€” aipkg cli</span>
              </div>

              {/* Terminal body */}
              <div style={{
                padding: '20px 24px 28px',
                fontFamily: "'Cascadia Code', 'Courier New', monospace",
                fontSize: '0.875rem', lineHeight: 2.1, minHeight: '160px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E8E8F0' }}>
                  <span style={{ color: '#C279F0', userSelect: 'none' }}>â¯</span>
                  <span>{CMD.substring(0, charCount)}</span>
                  {charCount < CMD.length && (
                    <span style={{
                      display: 'inline-block', width: '2px', height: '15px', background: '#C279F0',
                      animation: 'cursorBlink 0.75s ease-in-out infinite', verticalAlign: 'middle',
                    }} />
                  )}
                </div>
                <div style={termAnim(1)}>
                  <span style={{ color: '#0E8077' }}>âœ“</span>
                  <span style={{ color: '#444450' }}> Resolving </span>
                  <span style={{ color: '#D0D0DC' }}>@example/my-mcp-server@2.1.0</span>
                  <span style={{ color: '#7840AE' }}>  verified âœ¦</span>
                </div>
                <div style={termAnim(2)}>
                  <span style={{ color: '#0E8077' }}>âœ“</span>
                  <span style={{ color: '#444450' }}> Detecting platform </span>
                  <span style={{ color: '#C279F0' }}>claude-code</span>
                  <span style={{ color: '#444450' }}> â†’ APM fallback resolved</span>
                </div>
                <div style={termAnim(3)}>
                  <span style={{ color: '#0E8077' }}>âœ“</span>
                  <span style={{ color: '#444450' }}> Installing </span>
                  <span style={{ color: '#D0D0DC' }}>3 assets</span>
                  <span style={{ color: '#444450' }}> into </span>
                  <span style={{ color: '#9A66E2' }}>~/.claude/plugins/</span>
                </div>
                <div style={termAnim(4)}>
                  <span style={{ color: '#C279F0' }}>âœ¦</span>
                  <span style={{ color: '#C279F0' }}> my-mcp-server ready</span>
                  <span style={{ color: '#444450' }}>  Â· signature verified Â· 14.2 KB</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: '14px', marginBottom: '48px',
              flexWrap: 'wrap', ...anim(0.55),
            }}>
              <a href="/quickstart" className="hero-btn-primary">Get Started â†’</a>
              <a href="/why-aipkg" className="hero-btn-ghost">Why AIpkg?</a>
            </div>

            {/* Platform pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '560px', ...anim(0.65) }}>
              {platforms.map((p, i) => (
                <div
                  key={p.name}
                  className={`aipkg-pill ${started ? 'visible' : ''}`}
                  style={{
                    animationDelay: `${0.7 + i * 0.08}s`,
                    borderColor: `${p.color}50`,
                    background: `${p.color}10`,
                    color: p.color,
                  }}
                >{p.name}</div>
              ))}
            </div>
          </div>

          {/* â”€â”€ Right column: floating logo â”€â”€ */}
          <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', ...anim(0.3) }}>
            <img
              src="/images/aipkg.box.purple.svg"
              alt="AIpkg"
              className="logo-float"
              style={{
                width: 300, height: 300,
                borderRadius: '24px',
              }}
            />
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to bottom, transparent, #080808)',
          pointerEvents: 'none',
        }} />
      </section>

      {/* â”€â”€ Metrics strip â”€â”€ */}
      <div style={{
        background: '#0C0C0C',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '44px 24px',
        display: 'flex', justifyContent: 'center',
        opacity: started ? 1 : 0,
        transition: 'opacity 0.6s ease 0.7s',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '700px', width: '100%' }}>
          {metrics.map((m) => (
            <div key={m.label} className="metric-item" style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '0 28px' }}>
              <div style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '2.4rem', fontWeight: 800,
                background: 'linear-gradient(135deg, #C279F0, #7840AE)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                lineHeight: 1, marginBottom: '10px',
              }}>{m.value}</div>
              <div style={{
                fontSize: '0.75rem', color: '#555560',
                textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600,
              }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
