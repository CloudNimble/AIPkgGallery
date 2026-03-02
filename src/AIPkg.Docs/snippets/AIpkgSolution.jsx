export const AIpkgSolution = () => {
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

  const treeRows = [
    { depth: 0, icon: '📋', name: 'my-mcp-server.aispec', tag: 'required', tagColor: '#3CD0E2' },
    { depth: 0, icon: '📁', name: 'shared/', hint: 'all platforms' },
    { depth: 1, icon: '📄', name: 'shared/mcp/config.json' },
    { depth: 0, icon: '📁', name: 'apm/', hint: 'platform overrides' },
    { depth: 1, icon: '📁', name: 'apm/claude-code/', color: '#3CD0E2' },
    { depth: 2, icon: '📄', name: 'mcp/config.json', hint: 'claude format' },
    { depth: 1, icon: '📁', name: 'apm/copilot/', color: '#4CAF7A' },
    { depth: 2, icon: '📄', name: 'copilot-instructions.md' },
  ];

  const apmChain = [
    { label: 'claude-code-2', hint: 'most specific',  color: '#3CD0E2', bg: 'rgba(60,208,226,0.09)' },
    { label: 'claude-code',   hint: 'version family', color: '#56B8D8', bg: 'rgba(86,184,216,0.07)' },
    { label: 'claude',        hint: 'vendor family',  color: '#7C6EEA', bg: 'rgba(124,110,234,0.07)' },
    { label: 'ai',            hint: 'root family',    color: '#9B8EEF', bg: 'rgba(155,142,239,0.05)' },
    { label: 'shared/',       hint: 'baseline',       color: '#5A7A9A', bg: 'rgba(90,122,154,0.05)' },
  ];

  return (
    <>
      <style>{`
        .tree-row { display: flex; align-items: center; gap: 8px; padding: 5px 0; }
        .apm-node {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 16px; border-radius: 6px; border: 1px solid; margin-bottom: 6px;
        }
      `}</style>

      <section style={{
        background: '#060E1A', padding: '100px 24px',
        borderTop: '1px solid rgba(60, 208, 226, 0.07)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '56px', ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '18px', padding: '5px 14px',
              border: '1px solid rgba(60, 208, 226, 0.3)',
              borderRadius: '4px', background: 'rgba(60, 208, 226, 0.05)',
            }}>
              <span style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.7rem',
                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#3CD0E2', fontWeight: 600,
              }}>The Solution</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, color: '#E8F4FF',
              letterSpacing: '-0.025em', margin: '0 0 18px 0', lineHeight: 1.12,
            }}>Package once. The APM system handles the rest.</h2>
            <p style={{ fontSize: '1rem', color: '#6B8FAF', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
              AIpkg introduces the{' '}
              <strong style={{ color: '#3CD0E2', fontWeight: 600 }}>AI Platform Moniker (APM)</strong>{' '}
              — a hierarchical identifier for every AI platform. Your package ships platform-specific
              assets in the standard{' '}
              <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#3CD0E2', fontSize: '0.88em' }}>.aipkg</code>{' '}
              archive. The registry and CLI resolve, adapt, and install the right assets automatically.
            </p>
          </div>

          {/* Two-column layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}>

            {/* Package anatomy */}
            <div style={{
              background: '#04080F', borderRadius: '8px',
              border: '1px solid rgba(60, 208, 226, 0.12)', overflow: 'hidden',
              ...anim(0.3),
            }}>
              <div style={{
                padding: '13px 20px', borderBottom: '1px solid rgba(60, 208, 226, 0.08)',
                background: '#060E1A', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{ fontSize: '1rem' }}>📦</span>
                <span style={{
                  fontFamily: "'Cascadia Code', monospace", fontSize: '0.8rem',
                  color: '#C0D8F0', fontWeight: 600,
                }}>my-mcp-server.1.2.0.aipkg</span>
              </div>
              <div style={{
                padding: '18px 20px',
                fontFamily: "'Cascadia Code', monospace",
                fontSize: '0.8rem',
              }}>
                {treeRows.map((row, i) => (
                  <div key={i} className="tree-row" style={{ paddingLeft: `${row.depth * 18}px` }}>
                    <span>{row.icon}</span>
                    <span style={{ color: row.color || '#A0C0DC', flex: 1 }}>{row.name}</span>
                    {row.tag && (
                      <span style={{
                        padding: '1px 8px', borderRadius: '100px', fontSize: '0.66rem',
                        border: `1px solid ${row.tagColor}40`,
                        background: `${row.tagColor}10`,
                        color: row.tagColor, letterSpacing: '0.05em',
                      }}>{row.tag}</span>
                    )}
                    {row.hint && (
                      <span style={{ color: '#3A5A7A', fontSize: '0.72rem', fontStyle: 'italic' }}>{row.hint}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* APM fallback graph */}
            <div style={{
              background: '#04080F', borderRadius: '8px',
              border: '1px solid rgba(60, 208, 226, 0.12)',
              padding: '24px', ...anim(0.45),
            }}>
              <div style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.68rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#3A5A7A', marginBottom: '10px', fontWeight: 600,
              }}>APM Fallback Graph</div>
              <p style={{ fontSize: '0.83rem', color: '#4A6A8A', lineHeight: 1.6, marginBottom: '24px' }}>
                When installing for{' '}
                <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#3CD0E2', fontSize: '0.85em' }}>claude-code-2</code>,
                the full chain resolves — most-specific match wins:
              </p>

              {apmChain.map((node, i) => (
                <div key={node.label}>
                  <div className="apm-node" style={{ borderColor: `${node.color}28`, background: node.bg }}>
                    <span style={{
                      fontFamily: "'Cascadia Code', monospace",
                      fontSize: '0.85rem', color: node.color, fontWeight: 600,
                    }}>{node.label}</span>
                    <span style={{ fontSize: '0.7rem', color: '#3A5A7A', letterSpacing: '0.04em' }}>{node.hint}</span>
                  </div>
                  {i < apmChain.length - 1 && (
                    <div style={{
                      textAlign: 'center', color: 'rgba(60,208,226,0.3)',
                      fontSize: '0.85rem', lineHeight: '1.4', margin: '2px 0',
                    }}>↓</div>
                  )}
                </div>
              ))}

              <div style={{
                marginTop: '20px', padding: '12px 16px',
                background: 'rgba(60, 208, 226, 0.04)',
                border: '1px solid rgba(60, 208, 226, 0.1)',
                borderRadius: '4px', fontSize: '0.78rem', color: '#4A6A8A',
                lineHeight: 1.55, fontStyle: 'italic',
              }}>
                Unknown future platform versions fall back automatically — no republication needed.
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
