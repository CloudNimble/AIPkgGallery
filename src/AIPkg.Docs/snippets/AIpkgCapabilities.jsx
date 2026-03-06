export const AIpkgCapabilities = () => {
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay = 0) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const caps = [
    {
      glyph: '\u2B21',
      title: 'MCP Server',
      color: '#0E8077',
      href: '/specs/03-metadata-schema',
      desc: 'Bundle MCP server launch configuration and per-platform JSON schema overrides. The registry shows which platforms each server targets.',
    },
    {
      glyph: '\u2726',
      title: 'Skill',
      color: '#3061A6',
      href: '/specs/03-metadata-schema',
      desc: 'Reusable AI skill definitions packaged as Markdown files, with platform-specific overrides in lib/{moniker}/.',
    },
    {
      glyph: '>_',
      title: 'Command',
      color: '#8A57C6',
      href: '/specs/03-metadata-schema',
      desc: 'Slash command definitions with descriptions, argument schemas, and platform-adaptive behavior for each host tool.',
    },
    {
      glyph: '\u229B',
      title: 'Agent',
      color: '#B98112',
      href: '/specs/03-metadata-schema',
      desc: 'Autonomous agent configurations with system prompts, tool permissions, and per-platform execution parameters.',
    },
    {
      glyph: '\u270E',
      title: 'Prompt',
      color: '#B32C38',
      href: '/specs/03-metadata-schema',
      desc: 'System prompts and prompt templates distributed as versioned, signable packages with full dependency support.',
    },
    {
      glyph: '{}',
      title: 'Config',
      color: '#7840AE',
      href: '/specs/03-metadata-schema',
      desc: 'Generic configuration files for tools, linters, or project templates — anything that fits the platform-aware install model.',
    },
  ];

  return (
    <>
      <style>{`
        .cap-card {
          display: block;
          background: #111111;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.07);
          padding: 24px;
          text-decoration: none !important;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .cap-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        }
        .cap-accent {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity 0.2s ease;
        }
        .cap-card:hover .cap-accent { opacity: 1; }
        .cap-header {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px;
        }
        .cap-icon {
          font-family: 'Cascadia Code', monospace;
          font-size: 1.5rem; font-weight: 700;
          line-height: 1; flex-shrink: 0;
        }
        .cap-title {
          font-size: 1rem; font-weight: 700;
          color: #C8C8D2; margin: 0;
          letter-spacing: -0.01em;
          text-decoration: none !important;
        }
        .cap-desc {
          font-size: 0.875rem; color: #555560;
          line-height: 1.65;
          text-decoration: none !important;
        }
      `}</style>

      <section style={{
        background: '#080808', padding: '100px 24px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '56px', ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '18px', padding: '5px 14px',
              border: '1px solid rgba(138,87,198,0.35)',
              borderRadius: '4px', background: 'rgba(138,87,198,0.07)',
            }}>
              <span style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.7rem',
                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#8A57C6', fontWeight: 600,
              }}>Package Capabilities</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, color: '#E8E8F0',
              letterSpacing: '-0.025em', margin: '0 0 18px 0', lineHeight: 1.12,
            }}>Everything an AI platform can consume.</h2>
            <p style={{ fontSize: '1rem', color: '#6B6B7A', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
              A single{' '}
              <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#C279F0', fontSize: '0.88em' }}>.aipkg</code>{' '}
              archive can bundle any combination of capabilities. The{' '}
              <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#C279F0', fontSize: '0.88em' }}>capabilities</code>{' '}
              field in the{' '}
              <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#C279F0', fontSize: '0.88em' }}>.aispec</code>{' '}
              manifest declares what the package contains.
            </p>
          </div>

          {/* Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '14px',
            ...anim(0.3),
          }}>
            {caps.map((cap) => (
              <a
                key={cap.title}
                href={cap.href}
                className="cap-card"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cap.color}40`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div className="cap-accent" style={{ background: cap.color }} />
                <div className="cap-header">
                  <span className="cap-icon" style={{ color: cap.color }}>{cap.glyph}</span>
                  <span className="cap-title">{cap.title}</span>
                </div>
                <div className="cap-desc">{cap.desc}</div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
