export const AIpkgClosing = () => {
  const allPackages = [
    { id: 'github-copilot-skills', version: '2.3.1', author: 'microsoft',           platforms: ['copilot', 'vscode'],           capability: 'Skill'      },
    { id: 'claude-code-reviewer',  version: '1.4.0', author: 'anthropic-labs',       platforms: ['claude', 'claude-code'],       capability: 'Agent'      },
    { id: 'cursor-rules-ts',       version: '3.0.2', author: 'cursor-community',     platforms: ['cursor'],                      capability: 'Config'     },
    { id: 'mcp-filesystem',        version: '1.1.5', author: 'modelcontextprotocol', platforms: ['claude-code','cursor','copilot'], capability: 'MCP Server' },
    { id: 'openapi-agent',         version: '0.9.3', author: 'openai-labs',          platforms: ['copilot', 'cursor'],           capability: 'Agent'      },
    { id: 'pr-review-skill',       version: '2.1.0', author: 'gh-actions-team',      platforms: ['copilot-github'],              capability: 'Skill'      },
    { id: 'sql-query-mcp',         version: '1.0.8', author: 'datatools-io',         platforms: ['claude-code','windsurf'],      capability: 'MCP Server' },
    { id: 'windsurf-flow',         version: '1.2.4', author: 'codeium',              platforms: ['windsurf'],                    capability: 'Command'    },
    { id: 'test-generator',        version: '1.5.2', author: 'jest-community',       platforms: ['cursor','copilot','claude'],   capability: 'Skill'      },
    { id: 'docker-mcp',            version: '2.0.0', author: 'docker-inc',           platforms: ['claude-code','cursor'],        capability: 'MCP Server' },
    { id: 'security-scanner',      version: '0.8.1', author: 'snyk-labs',            platforms: ['copilot','cursor','windsurf'], capability: 'Agent'      },
    { id: 'zed-extensions',        version: '1.0.3', author: 'zed-industries',       platforms: ['zed'],                        capability: 'Config'     },
    { id: 'aider-prompts',         version: '2.2.0', author: 'aider-community',      platforms: ['aider'],                      capability: 'Prompt'     },
    { id: 'docs-writer-agent',     version: '1.3.7', author: 'writewise-ai',         platforms: ['claude-code','copilot'],       capability: 'Agent'      },
    { id: 'lint-mcp-server',       version: '1.1.0', author: 'eslint-team',          platforms: ['cursor','windsurf','copilot'], capability: 'MCP Server' },
    { id: 'opencode-starter',      version: '0.5.2', author: 'opencode-labs',        platforms: ['opencode'],                   capability: 'Skill'      },
    { id: 'k8s-operator-mcp',      version: '1.0.1', author: 'cloud-native-labs',    platforms: ['claude-code','cursor'],        capability: 'MCP Server' },
    { id: 'refactor-agent',        version: '3.1.0', author: 'jetbrains-ai',         platforms: ['cursor','copilot','windsurf'], capability: 'Agent'      },
    { id: 'git-commit-skill',      version: '2.0.5', author: 'conventional-crew',    platforms: ['claude-code','copilot'],       capability: 'Skill'      },
    { id: 'figma-mcp',             version: '1.2.0', author: 'figma-community',      platforms: ['cursor','copilot'],            capability: 'MCP Server' },
  ];

  const platformColors = {
    'claude-code':    '#0E8077',
    'claude':         '#0E8077',
    'copilot':        '#3061A6',
    'copilot-github': '#3061A6',
    'vscode':         '#3061A6',
    'cursor':         '#8A57C6',
    'windsurf':       '#B98112',
    'zed':            '#666680',
    'opencode':       '#1A9A90',
    'aider':          '#555560',
  };

  const capabilityColors = {
    'Skill':      { color: '#C279F0', border: 'rgba(194,121,240,0.4)' },
    'Agent':      { color: '#1A9A90', border: 'rgba(26,154,144,0.4)'  },
    'MCP Server': { color: '#3A8FD4', border: 'rgba(58,143,212,0.4)'  },
    'Config':     { color: '#7A7A9A', border: 'rgba(122,122,154,0.4)' },
    'Command':    { color: '#B98112', border: 'rgba(185,129,18,0.4)'  },
    'Prompt':     { color: '#B36022', border: 'rgba(179,96,34,0.4)'   },
  };

  const systemFont = "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif";
  const monoFont = "'Cascadia Code', monospace";
  const spring = 'cubic-bezier(0.16, 1, 0.3, 1)';

  const [visibleIds, setVisibleIds] = React.useState(
    allPackages.slice(0, 12).map(p => p.id)
  );
  const [fadingOut, setFadingOut] = React.useState({});
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setStarted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIds(prev => {
        const allIds = allPackages.map(p => p.id);
        const available = allIds.filter(id => !prev.includes(id));
        if (available.length === 0) return prev;
        const outIdx = Math.floor(Math.random() * prev.length);
        const outId = prev[outIdx];
        const inId = available[Math.floor(Math.random() * available.length)];

        setFadingOut(f => ({ ...f, [outId]: true }));

        setTimeout(() => {
          setVisibleIds(curr => {
            const next = [...curr];
            const idx = next.indexOf(outId);
            if (idx !== -1) next[idx] = inId;
            return next;
          });
          setFadingOut(f => {
            const n = { ...f };
            delete n[outId];
            return n;
          });
        }, 500);

        return prev;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const anim = (delay = 0) => ({
    opacity:    started ? 1 : 0,
    transform:  started ? 'none' : 'translateY(24px)',
    transition: `opacity 0.7s ${spring} ${delay}s, transform 0.7s ${spring} ${delay}s`,
  });

  const packageMap = Object.fromEntries(allPackages.map(p => [p.id, p]));

  const styles = `
    @keyframes closingCardEnter {
      from { opacity: 0; transform: scale(0.97) translateY(6px); }
      to   { opacity: 1; transform: scale(1) translateY(0);       }
    }
    @keyframes closingPulse {
      0%, 100% { opacity: 1; box-shadow: 0 0 4px #1A9A90; }
      50%      { opacity: 0.5; box-shadow: 0 0 8px #1A9A90; }
    }
    .aipkg-closing-card {
      animation: closingCardEnter 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
      background: #111;
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 6px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease;
      cursor: default;
    }
    .aipkg-closing-card:hover {
      border-color: rgba(194,121,240,0.22);
      transform: translateY(-2px);
    }
    .aipkg-closing-card.fading {
      opacity: 0;
      transform: scale(0.96);
    }
    .aipkg-closing-cta-pub {
      background: linear-gradient(135deg, #7840AE 0%, #C279F0 100%);
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 16px 36px;
      font-weight: 700;
      font-size: 1.05rem;
      font-family: -apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .aipkg-closing-cta-pub:hover { opacity: 0.88; transform: translateY(-1px); }
    .aipkg-closing-cta-plat {
      background: transparent;
      color: #0E8077;
      border: 2px solid #0E8077;
      border-radius: 6px;
      padding: 16px 36px;
      font-weight: 700;
      font-size: 1.05rem;
      font-family: -apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
    }
    .aipkg-closing-cta-plat:hover {
      background: rgba(14,128,119,0.1);
      transform: translateY(-1px);
    }
    @media (max-width: 768px) {
      .aipkg-closing-grid { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 480px) {
      .aipkg-closing-grid { grid-template-columns: 1fr !important; }
      .aipkg-closing-ctas { flex-direction: column !important; align-items: stretch !important; }
      .aipkg-closing-cta-pub, .aipkg-closing-cta-plat { text-align: center; }
    }
  `;

  return (
    <section style={{
      background: '#06060A',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{styles}</style>

      {/* Top accent line: purple to teal */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, transparent, #7840AE 20%, #C279F0 45%, #0E8077 75%, transparent)',
      }} />

      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        top: '18%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(120,64,174,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content wrapper — flex-grows to fill, pushes CTAs toward bottom */}
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        padding: '120px 24px 100px',
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* Headline block */}
        <div style={{ textAlign: 'center', ...anim(0) }}>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.035em',
            color: '#F0EEF8',
            margin: 0,
            lineHeight: 1.1,
            fontFamily: systemFont,
          }}>
            The foundation of the<br />AI tooling ecosystem.
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#555560',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '16px auto 0',
            lineHeight: 1.7,
            fontFamily: systemFont,
          }}>
            Built on a proven pattern. Open to everyone.
          </p>
        </div>

        {/* 64px gap between subtitle and registry */}
        <div style={{ height: '64px', flexShrink: 0 }} />

        {/* Live registry grid */}
        <div style={{ flex: 1, ...anim(0.15) }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#1A9A90',
              boxShadow: '0 0 6px #1A9A90',
              animation: 'closingPulse 2s ease infinite',
            }} />
            <span style={{
              color: '#333340',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              fontFamily: monoFont,
            }}>
              LIVE REGISTRY — 20 PACKAGES
            </span>
          </div>

          <div
            className="aipkg-closing-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
            }}
          >
            {visibleIds.map((id, index) => {
              const pkg = packageMap[id];
              if (!pkg) return null;
              const isFading = !!fadingOut[id];
              const cap = capabilityColors[pkg.capability] || { color: '#888', border: 'rgba(136,136,136,0.3)' };

              return (
                <div
                  key={id}
                  className={`aipkg-closing-card${isFading ? ' fading' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Package name + version */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      color: '#C8C8D2',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      fontFamily: monoFont,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      flex: 1,
                      minWidth: 0,
                    }}>
                      {pkg.id}
                    </span>
                    <span style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: '#666677',
                      fontSize: '0.68rem',
                      fontFamily: monoFont,
                      padding: '1px 6px',
                      borderRadius: '3px',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}>
                      v{pkg.version}
                    </span>
                  </div>

                  {/* Author */}
                  <div style={{
                    color: '#444450',
                    fontSize: '0.72rem',
                    fontFamily: monoFont,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    by {pkg.author}
                  </div>

                  {/* Capability badge */}
                  <div>
                    <span style={{
                      color: cap.color,
                      border: `1px solid ${cap.border}`,
                      padding: '2px 8px',
                      borderRadius: '100px',
                      fontSize: '0.68rem',
                      fontFamily: monoFont,
                      display: 'inline-block',
                    }}>
                      {pkg.capability}
                    </span>
                  </div>

                  {/* Platform dots */}
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '2px' }}>
                    {pkg.platforms.map(platform => (
                      <div
                        key={platform}
                        title={platform}
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: platformColors[platform] || '#555560',
                          opacity: 0.85,
                          flexShrink: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTAs — 64px above bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '64px',
          flexWrap: 'wrap',
          ...anim(0.3),
        }}
          className="aipkg-closing-ctas"
        >
          <a href="/for-publishers" className="aipkg-closing-cta-pub">
            Publish your first package →
          </a>
          <a href="/for-platforms" className="aipkg-closing-cta-plat">
            Integrate the platform SDK →
          </a>
        </div>

        {/* Bottom tagline */}
        <p style={{
          fontSize: '0.82rem',
          color: '#333340',
          textAlign: 'center',
          marginTop: '24px',
          fontFamily: monoFont,
          ...anim(0.4),
        }}>
          AI•Pkg is open source. The registry is for everyone.
        </p>

      </div>
    </section>
  );
};
