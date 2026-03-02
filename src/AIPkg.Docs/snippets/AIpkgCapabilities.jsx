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
      glyph: '⬡',
      title: 'MCP Server',
      color: '#3CD0E2',
      href: '/specs/08-metadata-schema',
      desc: 'Bundle MCP server launch configuration and per-platform JSON schema overrides. The registry shows which platforms each server targets.',
    },
    {
      glyph: '◆',
      title: 'Skill',
      color: '#7C6EEA',
      href: '/specs/08-metadata-schema',
      desc: 'Reusable AI skill definitions packaged as Markdown files, with platform-specific overrides in the apm/ directory.',
    },
    {
      glyph: '›_',
      title: 'Command',
      color: '#4CAF7A',
      href: '/specs/08-metadata-schema',
      desc: 'Slash command definitions with descriptions, argument schemas, and platform-adaptive behavior for each host tool.',
    },
    {
      glyph: '◉',
      title: 'Agent',
      color: '#E27C3C',
      href: '/specs/08-metadata-schema',
      desc: 'Autonomous agent configurations with system prompts, tool permissions, and per-platform execution parameters.',
    },
    {
      glyph: '❝',
      title: 'Prompt',
      color: '#DBA040',
      href: '/specs/08-metadata-schema',
      desc: 'System prompts and prompt templates distributed as versioned, signable packages with full dependency support.',
    },
    {
      glyph: '⊞',
      title: 'Config',
      color: '#419AC5',
      href: '/specs/08-metadata-schema',
      desc: 'Generic configuration files for tools, linters, or project templates — anything that fits the platform-aware install model.',
    },
  ];

  return (
    <>
      <style>{`
        .cap-card {
          display: block;
          background: #04080F;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.06);
          padding: 24px;
          text-decoration: none !important;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .cap-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }
        .cap-accent {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity 0.2s ease;
        }
        .cap-card:hover .cap-accent { opacity: 1; }
        .cap-icon {
          width: 42px; height: 42px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          font-family: 'Cascadia Code', monospace;
          font-size: 1.1rem; font-weight: 700;
        }
        .cap-title {
          font-size: 1rem; font-weight: 700;
          color: #C8DCF0; margin-bottom: 10px;
          letter-spacing: -0.01em;
          text-decoration: none !important;
        }
        .cap-desc {
          font-size: 0.875rem; color: #4A6A8A;
          line-height: 1.65;
          text-decoration: none !important;
        }
      `}</style>

      <section style={{
        background: '#0A1628', padding: '100px 24px',
        borderTop: '1px solid rgba(60, 208, 226, 0.07)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '56px', ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '18px', padding: '5px 14px',
              border: '1px solid rgba(124, 110, 234, 0.3)',
              borderRadius: '4px', background: 'rgba(124, 110, 234, 0.05)',
            }}>
              <span style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.7rem',
                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#7C6EEA', fontWeight: 600,
              }}>Package Capabilities</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, color: '#E8F4FF',
              letterSpacing: '-0.025em', margin: '0 0 18px 0', lineHeight: 1.12,
            }}>Everything an AI platform can consume.</h2>
            <p style={{ fontSize: '1rem', color: '#6B8FAF', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
              A single{' '}
              <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#3CD0E2', fontSize: '0.88em' }}>.aipkg</code>{' '}
              archive can bundle any combination of capabilities. The{' '}
              <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#3CD0E2', fontSize: '0.88em' }}>capabilities</code>{' '}
              field in the{' '}
              <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#3CD0E2', fontSize: '0.88em' }}>.aispec</code>{' '}
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
                style={{ '--cap-color': cap.color }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cap.color}30`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <div className="cap-accent" style={{ background: cap.color }} />
                <div className="cap-icon" style={{ background: `${cap.color}14`, border: `1px solid ${cap.color}28`, color: cap.color }}>
                  {cap.glyph}
                </div>
                <div className="cap-title">{cap.title}</div>
                <div className="cap-desc">{cap.desc}</div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
