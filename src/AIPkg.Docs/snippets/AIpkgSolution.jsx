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

  // Each node: depth, last (final sibling at this level), type, name, and optional color/hint/tag
  const treeNodes = [
    { depth: 0, last: false, type: 'file',   name: 'my-mcp-server.aispec', tag: 'required', tagColor: '#C279F0' },
    { depth: 0, last: false, type: 'folder', name: 'lib/',        hint: 'AI content' },
    { depth: 1, last: false, type: 'folder', name: 'shared/',     hint: 'all platforms' },
    { depth: 2, last: true,  type: 'folder', name: 'mcp/' },
    { depth: 3, last: true,  type: 'file',   name: 'server-config.json' },
    { depth: 1, last: true,  type: 'folder', name: 'claude-code/', color: '#0E8077', hint: 'overrides shared/' },
    { depth: 2, last: true,  type: 'folder', name: 'mcp/' },
    { depth: 3, last: true,  type: 'file',   name: 'server-config.json', hint: 'claude format' },
    { depth: 0, last: false, type: 'folder', name: 'tools/',      hint: 'executables' },
    { depth: 1, last: false, type: 'folder', name: 'win-x64/' },
    { depth: 2, last: true,  type: 'file',   name: 'my-mcp-server.exe' },
    { depth: 1, last: true,  type: 'folder', name: 'osx-arm64/' },
    { depth: 2, last: true,  type: 'file',   name: 'my-mcp-server' },
    { depth: 0, last: true,  type: 'folder', name: 'images/' },
    { depth: 1, last: true,  type: 'file',   name: 'icon.png' },
  ];

  // Compute box-drawing connector prefix for each row
  const connectors = (() => {
    const open = new Array(8).fill(false);
    return treeNodes.map(node => {
      const d = node.depth;
      let prefix = '';
      for (let a = 0; a < d; a++) {
        prefix += open[a] ? '\u2502   ' : '    ';
      }
      prefix += node.last ? '\u2514\u2500\u2500 ' : '\u251C\u2500\u2500 ';
      open[d] = !node.last;
      for (let x = d + 1; x < 8; x++) open[x] = false;
      return prefix;
    });
  })();

  const apmChain = [
    { label: 'lib/claude-code/', hint: 'platform-specific', color: '#C279F0', bg: 'rgba(194,121,240,0.07)' },
    { label: 'lib/claude/',      hint: 'vendor family',     color: '#9A66E2', bg: 'rgba(154,102,226,0.05)' },
    { label: 'lib/shared/',      hint: 'baseline',          color: '#555560', bg: 'rgba(255,255,255,0.03)' },
  ];

  return (
    <>
      <style>{`
        .apm-node {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 16px; border-radius: 6px; border: 1px solid; margin-bottom: 6px;
        }
      `}</style>

      <section style={{
        background: '#0E0E0E', padding: '100px 24px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '56px', ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '18px', padding: '5px 14px',
              border: '1px solid rgba(194,121,240,0.3)',
              borderRadius: '4px', background: 'rgba(194,121,240,0.06)',
            }}>
              <span style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.7rem',
                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#C279F0', fontWeight: 600,
              }}>The Solution</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, color: '#E8E8F0',
              letterSpacing: '-0.025em', margin: '0 0 18px 0', lineHeight: 1.12,
            }}>Package once. The APM system handles the rest.</h2>
            <p style={{ fontSize: '1rem', color: '#6B6B7A', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
              AI•Pkg introduces the{' '}
              <strong style={{ color: '#C279F0', fontWeight: 600 }}>AI Platform Moniker (APM)</strong>{' '}
              — a hierarchical identifier for every AI platform. Your package targets platform identifiers,
              not specific versions — SDK providers handle per-version schema differences transparently.
              The runtime resolves, adapts, and installs the right assets automatically.
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
              background: '#161616', borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden',
              ...anim(0.3),
            }}>
              <div style={{
                padding: '13px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: '#111111', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{ fontSize: '0.95rem' }}>&#x1F4E6;</span>
                <span style={{
                  fontFamily: "'Cascadia Code', monospace", fontSize: '0.8rem',
                  color: '#C8C8D2', fontWeight: 600,
                }}>my-mcp-server.1.2.0.aipkg</span>
              </div>
              <div style={{
                padding: '14px 18px',
                fontFamily: "'Cascadia Code', monospace",
                fontSize: '0.78rem',
                lineHeight: '1.8',
              }}>
                {treeNodes.map((node, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '5px', minWidth: 0 }}>
                    <span style={{
                      color: '#2E2E3A',
                      whiteSpace: 'pre',
                      flexShrink: 0,
                      userSelect: 'none',
                    }}>{connectors[i]}</span>
                    <span style={{ fontSize: '0.8rem', flexShrink: 0, lineHeight: 1 }}>
                      {node.type === 'folder' ? '\uD83D\uDCC1' : '\uD83D\uDCC4'}
                    </span>
                    <span style={{
                      color: node.color || (node.type === 'folder' ? '#888896' : '#666677'),
                      flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      {node.name}
                    </span>
                    {node.tag && (
                      <span style={{
                        padding: '1px 7px', borderRadius: '100px', fontSize: '0.62rem',
                        border: `1px solid ${node.tagColor}40`,
                        background: `${node.tagColor}12`,
                        color: node.tagColor, letterSpacing: '0.05em', flexShrink: 0,
                      }}>{node.tag}</span>
                    )}
                    {node.hint && !node.tag && (
                      <span style={{
                        color: '#2A2A34', fontSize: '0.68rem', fontStyle: 'italic',
                        flexShrink: 0, paddingLeft: '4px',
                      }}>{node.hint}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* APM fallback graph */}
            <div style={{
              background: '#161616', borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '24px', ...anim(0.45),
            }}>
              <div style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.68rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#333340', marginBottom: '10px', fontWeight: 600,
              }}>APM Fallback Graph</div>
              <p style={{ fontSize: '0.83rem', color: '#555560', lineHeight: 1.6, marginBottom: '24px' }}>
                When installing for{' '}
                <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#C279F0', fontSize: '0.85em' }}>claude-code</code>,
                the runtime checks each{' '}
                <code style={{ fontFamily: "'Cascadia Code', monospace", color: '#888896', fontSize: '0.85em' }}>lib/</code>{' '}
                directory in order — most-specific match wins:
              </p>

              {apmChain.map((node, i) => (
                <div key={node.label}>
                  <div className="apm-node" style={{ borderColor: `${node.color}28`, background: node.bg }}>
                    <span style={{
                      fontFamily: "'Cascadia Code', monospace",
                      fontSize: '0.85rem', color: node.color, fontWeight: 600,
                    }}>{node.label}</span>
                    <span style={{ fontSize: '0.7rem', color: '#333340', letterSpacing: '0.04em' }}>{node.hint}</span>
                  </div>
                  {i < apmChain.length - 1 && (
                    <div style={{
                      textAlign: 'center', color: 'rgba(194,121,240,0.25)',
                      fontSize: '0.85rem', lineHeight: '1.4', margin: '2px 0',
                    }}>&#x2193;</div>
                  )}
                </div>
              ))}

              <div style={{
                marginTop: '20px', padding: '12px 16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '4px', fontSize: '0.78rem', color: '#444450',
                lineHeight: 1.55, fontStyle: 'italic',
              }}>
                SDK providers handle per-version schema differences internally &#x2014; packages target platforms, not versions.
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
