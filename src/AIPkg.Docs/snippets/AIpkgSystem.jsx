export const AIpkgSystem = () => {
  const [started, setStarted] = React.useState(false);
  const [sdkTab, setSdkTab] = React.useState('dotnet');
  const [hoveredCap, setHoveredCap] = React.useState(null);

  React.useEffect(() => {
    const t = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const spring = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const sysFont = "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif";
  const monoFont = "'Cascadia Code', monospace";

  const anim = (delay = 0) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ${spring} ${delay}s, transform 0.7s ${spring} ${delay}s`,
  });

  const treeNodes = [
    { depth: 0, last: false, type: 'file',   name: 'my-mcp-server.aispec', tag: 'required', tagColor: '#C279F0' },
    { depth: 0, last: false, type: 'folder', name: 'lib/' },
    { depth: 1, last: false, type: 'folder', name: 'shared/' },
    { depth: 2, last: true,  type: 'folder', name: 'mcp/' },
    { depth: 3, last: true,  type: 'file',   name: 'server-config.json' },
    { depth: 1, last: true,  type: 'folder', name: 'claude-code/' },
    { depth: 2, last: true,  type: 'folder', name: 'mcp/' },
    { depth: 3, last: true,  type: 'file',   name: 'server-config.json', hint: 'claude format' },
    { depth: 0, last: false, type: 'folder', name: 'tools/' },
    { depth: 1, last: false, type: 'folder', name: 'win-x64/' },
    { depth: 2, last: true,  type: 'file',   name: 'my-mcp-server.exe' },
    { depth: 1, last: true,  type: 'folder', name: 'osx-arm64/' },
    { depth: 2, last: true,  type: 'file',   name: 'my-mcp-server' },
    { depth: 0, last: true,  type: 'folder', name: 'images/' },
    { depth: 1, last: true,  type: 'file',   name: 'icon.png' },
  ];

  const connectors = (() => {
    const open = new Array(8).fill(false);
    return treeNodes.map(node => {
      const d = node.depth;
      let prefix = '';
      for (let a = 0; a < d; a++) { prefix += open[a] ? '\u2502   ' : '    '; }
      prefix += node.last ? '\u2514\u2500\u2500 ' : '\u251C\u2500\u2500 ';
      open[d] = !node.last;
      for (let x = d + 1; x < 8; x++) open[x] = false;
      return prefix;
    });
  })();

  const apmChain = [
    { label: 'lib/claude-code/', hint: 'platform-specific', color: '#C279F0', bg: 'rgba(194,121,240,0.07)' },
    { label: 'lib/claude/',      hint: 'vendor',            color: '#9A66E2', bg: 'rgba(154,102,226,0.05)' },
    { label: 'lib/shared/',      hint: 'baseline',          color: '#555560', bg: 'rgba(255,255,255,0.03)' },
  ];

  const sdkSnippets = {
    dotnet: `var client = new AIPkgClient();
var results = await client.SearchAsync("mcp-server",
    apm: "claude-code");
foreach (var pkg in results.Packages)
    Console.WriteLine($"{pkg.Id} {pkg.Version}");
await client.InstallAsync("my-mcp-server",
    apm: "claude-code",
    targetPath: platformInstallPath);`,
    typescript: `const client = new AIPkgClient();
const results = await client.search("mcp-server", {
  apm: "claude-code"
});
for (const pkg of results.packages) {
  console.log(\`\${pkg.id} \${pkg.version}\`);
}
await client.install("my-mcp-server", {
  apm: "claude-code",
  targetPath: platformInstallPath
});`,
    python: `client = AIPkgClient()
results = client.search("mcp-server",
    apm="claude-code")
for pkg in results.packages:
    print(f"{pkg.id} {pkg.version}")
client.install("my-mcp-server",
    apm="claude-code",
    target_path=platform_install_path)`,
  };

  const sdkTabs = [
    { key: 'dotnet',     label: '.NET' },
    { key: 'typescript', label: 'TypeScript' },
    { key: 'python',     label: 'Python' },
  ];

  const capabilities = [
    { glyph: '\u2B21', title: 'MCP Server',  color: '#0E8077' },
    { glyph: '\u2726', title: 'Skill',       color: '#3061A6' },
    { glyph: '>_',     title: 'Command',     color: '#8A57C6' },
    { glyph: '\u229B', title: 'Agent',       color: '#B98112' },
    { glyph: '\u270E', title: 'Prompt',      color: '#B32C38' },
    { glyph: '{}',     title: 'Config',      color: '#7840AE' },
  ];

  return (
    <>
      <style>{`
        .aipkg-sys-apm-node {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          border-radius: 6px;
          border: 1px solid;
          margin-bottom: 6px;
        }
        .aipkg-sys-cap-card {
          background: #111111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 20px 22px;
          cursor: default;
          transition: border-color 0.25s cubic-bezier(0.16,1,0.3,1), transform 0.25s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .aipkg-sys-cap-card:hover {
          transform: translateY(-3px);
        }
        .aipkg-sys-cap-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .aipkg-sys-cap-card:hover .aipkg-sys-cap-accent {
          opacity: 1;
        }
      `}</style>

      <section style={{
        background: '#0A0A0E',
        padding: '100px 24px',
        fontFamily: sysFont,
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '52px', ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              marginBottom: '18px', padding: '5px 14px',
              border: '1px solid rgba(194,121,240,0.3)',
              borderRadius: '4px',
              background: 'rgba(194,121,240,0.06)',
            }}>
              <span style={{
                fontFamily: monoFont,
                fontSize: '0.7rem',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: '#C279F0',
                fontWeight: 600,
              }}>The System</span>
            </div>
            <h2 style={{
              fontFamily: sysFont,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#E8E8F0',
              letterSpacing: '-0.025em',
              margin: '0 0 16px 0',
              lineHeight: 1.1,
            }}>One format. Both sides benefit.</h2>
            <p style={{
              fontFamily: sysFont,
              fontSize: '1.05rem',
              color: '#6B6B7A',
              maxWidth: '600px',
              lineHeight: 1.6,
              margin: 0,
            }}>
              Publish once with APM. Every platform gets the right files.
            </p>
          </div>

          {/* Three-panel grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
            marginBottom: '52px',
          }}>

            {/* Panel 1: Package Anatomy */}
            <div style={{
              background: '#161616',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.07)',
              overflow: 'hidden',
              ...anim(0.2),
            }}>
              <div style={{
                background: '#111111',
                padding: '12px 18px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{ fontSize: '0.95rem' }}>&#x1F4E6;</span>
                <span style={{
                  fontFamily: monoFont,
                  fontSize: '0.8rem',
                  color: '#C8C8D2',
                  fontWeight: 600,
                }}>my-mcp-server.1.2.0.aipkg</span>
              </div>
              <div style={{
                padding: '14px 18px',
                fontFamily: monoFont,
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
                      flex: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                      {node.name}
                    </span>
                    {node.tag && (
                      <span style={{
                        padding: '1px 7px',
                        borderRadius: '100px',
                        fontSize: '0.62rem',
                        border: `1px solid ${node.tagColor}40`,
                        background: `${node.tagColor}12`,
                        color: node.tagColor,
                        letterSpacing: '0.05em',
                        flexShrink: 0,
                      }}>{node.tag}</span>
                    )}
                    {node.hint && !node.tag && (
                      <span style={{
                        color: '#2A2A34',
                        fontSize: '0.68rem',
                        fontStyle: 'italic',
                        flexShrink: 0,
                        paddingLeft: '4px',
                      }}>{node.hint}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Panel 2: APM Fallback Graph */}
            <div style={{
              background: '#161616',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '24px',
              ...anim(0.35),
            }}>
              <div style={{
                fontFamily: monoFont,
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#333340',
                marginBottom: '10px',
                fontWeight: 600,
              }}>APM Fallback Graph</div>
              <p style={{
                fontFamily: sysFont,
                fontSize: '0.85rem',
                color: '#555560',
                lineHeight: 1.5,
                marginBottom: '24px',
                marginTop: 0,
              }}>
                Most-specific platform match wins.
              </p>

              {apmChain.map((node, i) => (
                <div key={node.label}>
                  <div className="aipkg-sys-apm-node" style={{
                    borderColor: `${node.color}47`,
                    background: node.bg,
                  }}>
                    <span style={{
                      fontFamily: monoFont,
                      fontSize: '0.85rem',
                      color: node.color,
                      fontWeight: 600,
                    }}>{node.label}</span>
                    <span style={{
                      fontFamily: sysFont,
                      fontSize: '0.7rem',
                      color: '#333340',
                      letterSpacing: '0.04em',
                    }}>{node.hint}</span>
                  </div>
                  {i < apmChain.length - 1 && (
                    <div style={{
                      textAlign: 'center',
                      color: 'rgba(194,121,240,0.25)',
                      fontSize: '0.85rem',
                      lineHeight: '1.4',
                      margin: '2px 0',
                    }}>&#x2193;</div>
                  )}
                </div>
              ))}

              <p style={{
                fontFamily: sysFont,
                marginTop: '20px',
                marginBottom: 0,
                fontSize: '0.75rem',
                color: '#444450',
                lineHeight: 1.55,
                fontStyle: 'italic',
              }}>
                Packages target platforms, not versions.
              </p>
            </div>

            {/* Panel 3: Platform SDK */}
            <div style={{
              background: '#161616',
              borderRadius: '8px',
              border: '1px solid rgba(14,128,119,0.25)',
              padding: '24px',
              ...anim(0.5),
            }}>
              <div style={{
                fontFamily: monoFont,
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0E8077',
                marginBottom: '4px',
                fontWeight: 600,
              }}>Platform SDK</div>
              <div style={{
                fontFamily: sysFont,
                fontSize: '0.8rem',
                color: '#555560',
                marginBottom: '18px',
              }}>.NET &middot; TypeScript &middot; Python</div>

              {/* Tab switcher */}
              <div style={{ display: 'inline-flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                {sdkTabs.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setSdkTab(tab.key)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      fontFamily: monoFont,
                      cursor: 'pointer',
                      border: sdkTab === tab.key ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      background: sdkTab === tab.key ? '#0E8077' : 'transparent',
                      color: sdkTab === tab.key ? '#fff' : '#555560',
                      transition: `background 0.2s ${spring}, color 0.2s ${spring}`,
                    }}
                  >{tab.label}</button>
                ))}
              </div>

              {/* Code block */}
              <pre style={{
                background: '#050505',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: monoFont,
                fontSize: '0.72rem',
                color: '#888896',
                margin: '0 0 16px 0',
                overflowX: 'auto',
                lineHeight: 1.7,
                whiteSpace: 'pre',
              }}><code>{sdkSnippets[sdkTab]}</code></pre>

              {/* Teal note */}
              <p style={{
                fontFamily: sysFont,
                margin: 0,
                fontSize: '0.75rem',
                color: '#1A9A90',
                lineHeight: 1.55,
                padding: '10px 14px',
                background: 'rgba(14,128,119,0.06)',
                border: '1px solid rgba(14,128,119,0.18)',
                borderRadius: '5px',
              }}>
                Any platform can integrate, regardless of tech stack.
              </p>
            </div>
          </div>

          {/* Capabilities Section */}
          <div style={{ ...anim(0.6) }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '28px',
              flexWrap: 'wrap',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 12px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.03)',
              }}>
                <span style={{
                  fontFamily: monoFont,
                  fontSize: '0.65rem',
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: '#555560',
                  fontWeight: 600,
                }}>Capabilities</span>
              </div>
              <span style={{
                fontFamily: sysFont,
                margin: 0,
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#9090A0',
                letterSpacing: '-0.01em',
              }}>What the CLI detects automatically</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
            }}>
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="aipkg-sys-cap-card"
                  onMouseEnter={() => setHoveredCap(i)}
                  onMouseLeave={() => setHoveredCap(null)}
                  style={{
                    borderColor: hoveredCap === i
                      ? `${cap.color}66`
                      : undefined,
                  }}
                >
                  <div
                    className="aipkg-sys-cap-accent"
                    style={{ background: cap.color }}
                  />
                  <span style={{
                    fontSize: '1.35rem',
                    color: cap.color,
                    fontFamily: monoFont,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}>{cap.glyph}</span>
                  <span style={{
                    fontFamily: sysFont,
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#D0D0DE',
                    letterSpacing: '-0.01em',
                  }}>{cap.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
