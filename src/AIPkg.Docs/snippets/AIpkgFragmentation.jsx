export const AIpkgFragmentation = () => {
  const cards = [
    { file: '.claude/settings.json', color: '#0E8077' },
    { file: '.mcp.json', color: '#7840AE' },
    { file: '.cursor/mcp.json', color: '#3061A6' },
    { file: '.github/copilot/mcp.json', color: '#B98112' },
    { file: '.windsurf/mcp_config.json', color: '#0E8077' },
    { file: '.continue/config.json', color: '#B32C38' },
    { file: 'settings.json', color: '#3061A6' },
    { file: '.cline/mcp_settings.json', color: '#B98112' },
    { file: 'opencode.yaml', color: '#0E8077' },
    { file: '.aider/config.yml', color: '#B32C38' },
    { file: '.bolt/mcp.json', color: '#7840AE' },
    { file: '.codex/config.yaml', color: '#B98112' },
    { file: '.devin/config.yaml', color: '#3061A6' },
    { file: '.replit/agents.json', color: '#0E8077' },
    { file: '.sourcegraph/cody.json', color: '#B32C38' },
    { file: '.tabnine/config.json', color: '#B98112' },
    { file: '.codeium/config.json', color: '#7840AE' },
    { file: '.aide/config.json', color: '#0E8077' },
    { file: '.pear/mcp.json', color: '#3061A6' },
    { file: '.roo/mcp_settings.json', color: '#B32C38' },
    { file: '.mentat/config.json', color: '#3061A6' },
    { file: '.sweep/config.yaml', color: '#B98112' },
    { file: 'mcp-config.json', color: '#7840AE' },
    { file: '.v0/settings.json', color: '#0E8077' },
    { file: '.qodo/config.json', color: '#B32C38' },
    { file: '.copilot-cli/mcp-config.json', color: '#B98112' },
    { file: '.zed/settings.json', color: '#3061A6' },
    { file: '.amp/config.json', color: '#7840AE' },
  ];

  return (
    <section style={{
      height: '100vh',
      background: '#06060A',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Red-shifted danger gradient */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 1000, height: 1000, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(179,44,56,0.06) 0%, rgba(185,129,18,0.03) 35%, transparent 60%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
      }} />

      {/* Card scatter field */}
      <div className="frag-field" style={{
        position: 'relative', width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Cards positioned from center origin */}
        <div style={{ position: 'relative', width: 0, height: 0 }}>
          {cards.map((card, i) => (
            <div key={i} className="frag-card" style={{
              position: 'absolute',
              left: -75, top: -18,
              zIndex: 10,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 14px',
                background: 'rgba(6,6,10,0.85)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, whiteSpace: 'nowrap',
                boxShadow: '0 2px 16px rgba(0,0,0,0.4)',
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: card.color, flexShrink: 0,
                  boxShadow: `0 0 8px ${card.color}44`,
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem', color: 'rgba(238,237,245,0.5)',
                  letterSpacing: '0.01em',
                }}>{card.file}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Center counter (visible during scatter) */}
        <div className="frag-center" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 20,
          pointerEvents: 'none',
        }}>
          {/* Dark vignette backdrop for readability */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 420, height: 280, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(6,6,10,0.85) 0%, rgba(6,6,10,0.6) 40%, transparent 70%)',
            pointerEvents: 'none', zIndex: -1,
          }} />
          <div style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1,
            color: 'rgba(238,237,245,0.35)', marginBottom: 16,
          }}>47+</div>
          <div style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
            fontWeight: 500, color: 'rgba(238,237,245,0.5)',
            lineHeight: 1.5, maxWidth: 360,
          }}>
            AI platforms launched since 2023.<br />
            <span style={{ color: 'rgba(238,237,245,0.7)' }}>
              Every one invented its own config format.
            </span>
          </div>
        </div>

        {/* Ball of light (cards converge into this above the box) */}
        <div className="frag-light" style={{
          position: 'absolute', top: 'calc(50% - 80px)', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 40, height: 40, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194,121,240,0.9) 0%, rgba(120,64,174,0.6) 40%, transparent 70%)',
          boxShadow: '0 0 60px rgba(194,121,240,0.5), 0 0 120px rgba(120,64,174,0.3)',
          zIndex: 30, pointerEvents: 'none',
        }} />

        {/* The real box from the brand logo */}
        <div className="frag-box" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', zIndex: 25,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0,
        }}>
          <img src="/images/aipkg.boxonly.svg" alt=""
            style={{
              width: 180, height: 'auto',
              filter: 'drop-shadow(0 0 60px rgba(120,64,174,0.4)) drop-shadow(0 0 120px rgba(194,121,240,0.15))',
            }}
          />
          <div className="frag-box-label" style={{ textAlign: 'center', marginTop: 28 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              fontWeight: 500, color: '#C279F0',
              letterSpacing: '0.02em', marginBottom: 16,
            }}>your-plugin.1.2.0.aipkg</div>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#EEEDF5', lineHeight: 1.2, marginBottom: 10,
            }}>One package. All platforms.</div>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
              fontWeight: 400, color: 'rgba(238,237,245,0.35)',
              lineHeight: 1.5,
            }}>28 config files become one universal archive.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
