export const AIpkgMoment = () => {
  const [started, setStarted] = React.useState(false);
  const [termStep, setTermStep] = React.useState(0);

  React.useEffect(() => {
    const t = setTimeout(() => setStarted(true), 200);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (!started) return;
    const timers = [];
    for (let i = 1; i <= 9; i++) {
      timers.push(setTimeout(() => setTermStep(i), 800 + i * 500));
    }
    return () => timers.forEach(clearTimeout);
  }, [started]);

  const reveal = (delay) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  const sysFont = "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif";
  const monoFont = "'Cascadia Code', 'Fira Code', monospace";

  const configCards = [
    { file: '.claude/settings.json', color: '#0E8077', rot: -6, x: '8%', y: '12%' },
    { file: '.github/copilot-instructions.md', color: '#3061A6', rot: 3, x: '28%', y: '6%' },
    { file: '.cursor/rules/my-tool.mdc', color: '#8A57C6', rot: -3, x: '14%', y: '44%' },
    { file: '.windsurfrules', color: '#B98112', rot: 7, x: '42%', y: '32%' },
    { file: '.zed/settings.json', color: '#666680', rot: -8, x: '6%', y: '68%' },
    { file: '.opencode/config.yaml', color: '#1A9A90', rot: 4, x: '34%', y: '62%' },
  ];

  const termLines = [
    { text: '\u276F aipkg install my-mcp-server', color: '#EEEDF5' },
    { text: '\u2713 Resolved my-mcp-server@1.0.0', color: '#0E8077' },
    { text: '\u2713 Installing for claude-code', color: '#0E8077' },
    { text: '\u2713 Installing for copilot', color: '#0E8077' },
    { text: '\u2713 Installing for cursor', color: '#0E8077' },
    { text: '\u2713 Installing for windsurf', color: '#0E8077' },
    { text: '\u2713 Installing for zed', color: '#0E8077' },
    { text: '\u2713 Installing for opencode', color: '#0E8077' },
    { text: '\u2726 Done. 6 platforms. 1 command.', color: '#C279F0' },
  ];

  return (
    <>
      <style>{`
        @keyframes aipkg-moment-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .aipkg-moment-pub:hover {
          box-shadow: 0 4px 40px rgba(120,64,174,0.4) !important;
          transform: translateY(-2px) !important;
        }
        .aipkg-moment-plat:hover {
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
        padding: '80px 24px',
      }}>

        {/* Eyebrow */}
        <div style={{
          fontFamily: monoFont,
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(238,237,245,0.18)',
          marginBottom: 28,
          ...reveal(0),
        }}>THE MOMENT</div>

        {/* Headline */}
        <h2 style={{
          fontFamily: sysFont,
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.035em',
          lineHeight: 1.05,
          color: '#EEEDF5',
          margin: '0 0 56px',
          textAlign: 'center',
          maxWidth: 800,
          ...reveal(0.1),
        }}>
          AI tooling is at its pre-npm moment.
        </h2>

        {/* Split Canvas */}
        <div style={{
          width: '100%',
          maxWidth: 1060,
          height: 'clamp(380px, 50vh, 520px)',
          display: 'flex',
          borderRadius: 12,
          border: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          position: 'relative',
          ...reveal(0.25),
        }}>

          {/* LEFT HALF — Before */}
          <div style={{
            flex: 1,
            background: 'rgba(179,44,56,0.03)',
            position: 'relative',
            overflow: 'hidden',
            padding: 24,
          }}>
            {/* Label */}
            <span style={{
              fontFamily: monoFont,
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#B32C38',
            }}>BEFORE</span>

            {/* Scattered config cards */}
            {configCards.map((card, i) => (
              <div key={card.file} style={{
                position: 'absolute',
                left: card.x,
                top: card.y,
                transform: `rotate(${card.rot}deg)`,
                background: '#111',
                border: `1px solid ${card.color}33`,
                borderRadius: 6,
                padding: '10px 14px',
                fontFamily: monoFont,
                fontSize: '0.66rem',
                color: card.color,
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
                opacity: started ? 1 : 0,
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.08}s`,
                zIndex: i,
              }}>
                {card.file}
              </div>
            ))}
          </div>

          {/* CENTER DIVIDER — Gradient line with glow */}
          <div style={{
            width: 1,
            position: 'relative',
            flexShrink: 0,
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, #8A57C6, #0E8077)',
              opacity: 0.6,
            }} />
            <div style={{
              position: 'absolute',
              inset: '-2px -4px',
              background: 'linear-gradient(to bottom, rgba(138,87,198,0.3), rgba(14,128,119,0.3))',
              filter: 'blur(6px)',
              animation: 'aipkg-moment-glow 3s ease-in-out infinite',
              pointerEvents: 'none',
            }} />
          </div>

          {/* RIGHT HALF — After */}
          <div style={{
            flex: 1,
            background: 'rgba(14,128,119,0.03)',
            position: 'relative',
            overflow: 'hidden',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Label */}
            <span style={{
              fontFamily: monoFont,
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#0E8077',
              marginBottom: 16,
            }}>AFTER</span>

            {/* Terminal window */}
            <div style={{
              flex: 1,
              background: '#111',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Terminal title bar */}
              <div style={{
                padding: '10px 14px',
                background: '#161616',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexShrink: 0,
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,80,80,0.5)' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,180,0,0.4)' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(40,200,80,0.4)' }} />
                </div>
                <span style={{
                  fontFamily: monoFont,
                  fontSize: '0.66rem',
                  color: '#333340',
                  marginLeft: 4,
                }}>aipkg cli</span>
              </div>

              {/* Terminal body */}
              <div style={{
                padding: '16px 18px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                {termLines.map((line, i) => (
                  <div key={i} style={{
                    fontFamily: monoFont,
                    fontSize: '0.72rem',
                    lineHeight: 1.7,
                    color: line.color,
                    opacity: termStep > i ? 1 : 0,
                    transform: termStep > i ? 'translateY(0)' : 'translateY(6px)',
                    transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,
                    whiteSpace: 'nowrap',
                    fontWeight: i === termLines.length - 1 ? 600 : 400,
                  }}>
                    {line.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dual CTAs */}
        <div style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: 56,
          ...reveal(0.5),
        }}>
          <a href="/for-publishers" className="aipkg-moment-pub" style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '15px 32px',
            background: 'linear-gradient(135deg, #7840AE, #C279F0)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.92rem',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            fontFamily: sysFont,
            textDecoration: 'none',
            transition: 'all 0.25s ease',
          }}>Package your plugin &#x2192;</a>
          <a href="/for-platforms" className="aipkg-moment-plat" style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '15px 32px',
            background: 'transparent',
            color: '#1A9A90',
            fontWeight: 700,
            fontSize: '0.92rem',
            borderRadius: 8,
            border: '1.5px solid rgba(26,154,144,0.35)',
            cursor: 'pointer',
            fontFamily: sysFont,
            textDecoration: 'none',
            transition: 'all 0.25s ease',
          }}>Integrate the registry &#x2192;</a>
        </div>

      </section>
    </>
  );
};
