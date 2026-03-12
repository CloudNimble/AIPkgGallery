export const AIpkgCrisis = () => {
  const [started, setStarted] = React.useState(false);
  const [highlightAttack, setHighlightAttack] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setHighlightAttack(true), 1800);
    return () => clearTimeout(t);
  }, [started]);

  const spring = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const sysFont = "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif";
  const monoFont = "'Cascadia Code', 'Courier New', monospace";

  const anim = (delay = 0) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.7s ${spring} ${delay}s, transform 0.7s ${spring} ${delay}s`,
  });

  const configCards = [
    { name: 'Claude Code',    color: '#0E8077', file: '.claude/settings.json' },
    { name: 'GitHub Copilot', color: '#3061A6', file: '.github/copilot-instructions.md' },
    { name: 'Cursor',         color: '#8A57C6', file: '.cursor/rules/my-tool.mdc' },
    { name: 'Windsurf',       color: '#B98112', file: '.windsurfrules' },
    { name: 'Zed',            color: '#666680', file: '.zed/settings.json' },
    { name: 'OpenCode',       color: '#1A9A90', file: '.opencode/config.yaml' },
  ];

  const platformBadges = [
    { name: 'Claude Code', color: '#0E8077', supported: true },
    { name: 'Copilot',     color: '#3061A6', supported: true },
    { name: 'Cursor',      color: '#8A57C6', supported: true },
    { name: 'Windsurf',    color: '#B98112', supported: true },
    { name: 'Zed',         color: '#666680', supported: true },
    { name: 'Your Platform', color: '#333340', supported: false },
  ];

  const gitLog = [
    { hash: 'a4f81cc', msg: 'feat: add context-aware code review skill', installs: '0 users',    time: '6 weeks ago',  attack: false },
    { hash: 'b2e9d3a', msg: 'docs: add usage examples to SKILL.md',      installs: '2.1K users', time: '5 weeks ago',  attack: false },
    { hash: 'c7f02b1', msg: 'feat: improve prompt quality, add config',   installs: '18K users',  time: '4 weeks ago',  attack: false },
    { hash: 'e1a8891', msg: 'chore: update dependency resolution paths',  installs: '51K users',  time: '11 days ago',  attack: true  },
    { hash: 'f9c3d72', msg: 'docs: minor README wording fix',             installs: '53K users',  time: '3 days ago',   attack: false },
  ];

  const cardStyle = {
    background: '#0E0E0E',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  return (
    <>
      <style>{`
        @keyframes crisisAttackPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(179,44,56,0); }
          50%       { box-shadow: 0 0 18px 4px rgba(179,44,56,0.3); }
        }
        .crisis-attack-active {
          animation: crisisAttackPulse 2s ease-in-out infinite;
        }
        .crisis-git-row {
          display: grid;
          grid-template-columns: 72px 1fr 100px 90px;
          gap: 0 12px;
          padding: 9px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-family: 'Cascadia Code', 'Courier New', monospace;
          font-size: 0.73rem;
          align-items: center;
          transition: background 0.2s;
        }
        .crisis-git-row:last-child { border-bottom: none; }
        .crisis-git-row:hover { background: rgba(255,255,255,0.02); }
      `}</style>

      <section style={{ background: '#06060A', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Eyebrow + Headline */}
          <div style={{ marginBottom: 52, ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              marginBottom: 18, padding: '5px 14px',
              border: '1px solid rgba(179,44,56,0.35)',
              borderRadius: 4, background: 'rgba(179,44,56,0.07)',
            }}>
              <span style={{
                fontFamily: monoFont, fontSize: '0.7rem',
                letterSpacing: '0.13em', textTransform: 'uppercase',
                color: '#B32C38', fontWeight: 600,
              }}>The Crisis</span>
            </div>
            <h2 style={{
              fontFamily: sysFont,
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#E8E8F0',
              letterSpacing: '-0.025em', margin: 0, lineHeight: 1.12,
            }}>Fragmentation is already costing you.</h2>
          </div>

          {/* Two-column grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
            marginBottom: 48,
            ...anim(0.25),
          }}>

            {/* LEFT: Publisher perspective */}
            <div style={cardStyle}>
              {/* Header bar */}
              <div style={{
                background: 'rgba(194,121,240,0.08)',
                borderLeft: '3px solid #7840AE',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(194,121,240,0.1)',
              }}>
                <div style={{
                  fontFamily: monoFont, fontSize: '0.65rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#7840AE', marginBottom: 8, fontWeight: 600,
                }}>For Publishers</div>
                <div style={{
                  fontFamily: sysFont,
                  fontSize: '1.1rem', fontWeight: 700, color: '#C8C8D2', lineHeight: 1.3,
                }}>You built it. Now maintain it six times.</div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px 20px 0' }}>
                <p style={{
                  fontFamily: sysFont,
                  fontSize: '0.87rem', color: '#5A5A68', lineHeight: 1.75, margin: '0 0 20px 0',
                }}>
                  You built an MCP server. Now you maintain 6 different config files &mdash; and when a platform updates their schema, you find out from user bug reports.
                </p>

                {/* Config cards */}
                <div style={{ marginBottom: 20 }}>
                  {configCards.map((card) => (
                    <div key={card.name} style={{
                      background: '#111',
                      border: `1px solid ${card.color}33`,
                      borderRadius: 4,
                      padding: '10px 14px',
                      marginBottom: 6,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                      <div style={{
                        width: 7, height: 7, borderRadius: '50%',
                        background: card.color, flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: sysFont,
                        fontSize: '0.82rem', fontWeight: 600, color: '#C0C0CC', flex: 1,
                      }}>{card.name}</span>
                      <span style={{
                        fontFamily: monoFont, fontSize: '0.7rem',
                        color: card.color, opacity: 0.75, letterSpacing: '0.01em',
                      }}>{card.file}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer warning */}
              <div style={{ padding: '0 20px 20px' }}>
                <div style={{
                  padding: '10px 14px',
                  background: 'rgba(179,44,56,0.07)',
                  border: '1px solid rgba(179,44,56,0.22)',
                  borderRadius: 4,
                }}>
                  <span style={{
                    fontFamily: monoFont, fontSize: '0.75rem',
                    color: '#A04050', lineHeight: 1.5,
                  }}>
                    &#9888; 6 config formats. 6 maintenance burdens.
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: Platform perspective */}
            <div style={cardStyle}>
              {/* Header bar */}
              <div style={{
                background: 'rgba(14,128,119,0.08)',
                borderLeft: '3px solid #0E8077',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(14,128,119,0.1)',
              }}>
                <div style={{
                  fontFamily: monoFont, fontSize: '0.65rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#0E8077', marginBottom: 8, fontWeight: 600,
                }}>For Platforms</div>
                <div style={{
                  fontFamily: sysFont,
                  fontSize: '1.1rem', fontWeight: 700, color: '#C8C8D2', lineHeight: 1.3,
                }}>Developers skip your platform.</div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px 20px 0' }}>
                <p style={{
                  fontFamily: sysFont,
                  fontSize: '0.87rem', color: '#5A5A68', lineHeight: 1.75, margin: '0 0 20px 0',
                }}>
                  Developers publish for the biggest platforms first. Your users ask why the best packages don't work with you.
                </p>

                {/* Platform badge grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 8,
                  marginBottom: 20,
                }}>
                  {platformBadges.map((badge) => (
                    <div key={badge.name} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      padding: '8px 12px',
                      background: badge.supported ? `${badge.color}12` : 'transparent',
                      border: badge.supported
                        ? `1px solid ${badge.color}44`
                        : '1px dashed rgba(51,51,64,0.5)',
                      borderRadius: 20,
                      opacity: badge.supported ? 1 : 0.45,
                    }}>
                      <div style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: badge.supported ? badge.color : '#333340',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: sysFont,
                        fontSize: '0.72rem', fontWeight: 600,
                        color: badge.supported ? '#C0C0CC' : '#444450',
                        whiteSpace: 'nowrap', overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>{badge.name}</span>
                      {badge.supported && (
                        <span style={{ marginLeft: 'auto', color: '#0E8077', fontSize: '0.7rem', fontWeight: 700 }}>&#10003;</span>
                      )}
                      {!badge.supported && (
                        <span style={{ marginLeft: 'auto', fontSize: '0.6rem', color: '#333340', fontFamily: monoFont }}>&mdash;</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer note */}
              <div style={{ padding: '0 20px 20px' }}>
                <div style={{
                  padding: '10px 14px',
                  background: 'rgba(14,128,119,0.07)',
                  border: '1px solid rgba(14,128,119,0.2)',
                  borderRadius: 4,
                }}>
                  <span style={{
                    fontFamily: monoFont, fontSize: '0.75rem',
                    color: '#1A9A90', lineHeight: 1.5,
                  }}>
                    You shouldn't have to fight for package support.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Supply Chain Section */}
          <div style={{ marginTop: 48, ...anim(0.45) }}>
            {/* Amber eyebrow */}
            <div style={{
              fontFamily: monoFont, fontSize: '0.62rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#B98112', marginBottom: 16, fontWeight: 600,
            }}>Supply Chain Risk</div>

            <h3 style={{
              fontFamily: sysFont,
              fontSize: '1.1rem', fontWeight: 700, color: '#C8C8D2',
              margin: '0 0 10px 0', letterSpacing: '-0.01em',
            }}>The Silent Commit Problem</h3>

            <p style={{
              fontFamily: sysFont,
              fontSize: '0.9rem', color: '#5A5A68', lineHeight: 1.75,
              margin: '0 0 24px 0', maxWidth: 760,
            }}>
              Without signing or content addressing, a single malicious commit silently becomes the new version for every user.
            </p>

            {/* Git log visualization */}
            <div style={{
              background: '#0E0E0E',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 8,
              overflow: 'hidden',
            }}>
              {/* Terminal bar */}
              <div style={{
                padding: '10px 16px',
                background: '#161616',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,80,80,0.5)' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,180,0,0.4)' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(40,200,80,0.4)' }} />
                </div>
                <span style={{
                  fontFamily: monoFont, fontSize: '0.72rem',
                  color: '#333340', marginLeft: 4,
                }}>git log --oneline</span>
              </div>

              {/* Column headers */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr 100px 90px',
                gap: '0 12px',
                padding: '7px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: '#0D0D0D',
              }}>
                {['HASH', 'COMMIT MESSAGE', 'INSTALLS', 'DATE'].map((h) => (
                  <span key={h} style={{
                    fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: '#333340',
                    fontFamily: monoFont,
                  }}>{h}</span>
                ))}
              </div>

              {/* Git rows */}
              {gitLog.map((entry) => (
                <div
                  key={entry.hash}
                  className={`crisis-git-row${entry.attack && highlightAttack ? ' crisis-attack-active' : ''}`}
                  style={{
                    background: entry.attack
                      ? (highlightAttack ? 'rgba(179,44,56,0.1)' : 'transparent')
                      : 'transparent',
                    border: entry.attack && highlightAttack
                      ? '1px solid rgba(179,44,56,0.28)'
                      : '1px solid transparent',
                    transition: `background 0.8s ${spring}, border-color 0.8s ${spring}`,
                    borderRadius: entry.attack ? 4 : 0,
                    margin: entry.attack ? '2px 6px' : '0',
                  }}
                >
                  <span style={{
                    color: entry.attack && highlightAttack ? '#B32C38' : '#333340',
                  }}>{entry.hash}</span>

                  <span style={{ color: entry.attack && highlightAttack ? '#E08090' : '#666677' }}>
                    {entry.msg}
                    {entry.attack && highlightAttack && (
                      <span style={{
                        display: 'inline-block', marginLeft: 10,
                        padding: '1px 7px', borderRadius: 3,
                        background: 'rgba(179,44,56,0.2)', color: '#E05060',
                        fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em',
                        textTransform: 'uppercase', verticalAlign: 'middle',
                      }}>&#9888; MALICIOUS</span>
                    )}
                  </span>

                  <span style={{
                    color: entry.attack && highlightAttack
                      ? '#E05060'
                      : (entry.installs.includes('K') ? '#B98112' : '#333340'),
                    fontWeight: entry.installs.includes('K') ? 600 : 400,
                  }}>{entry.installs}</span>

                  <span style={{ color: '#333340' }}>{entry.time}</span>
                </div>
              ))}

              {/* Impact callout */}
              <div style={{
                margin: '12px 16px 16px',
                padding: '12px 16px',
                background: 'rgba(179,44,56,0.07)',
                border: '1px solid rgba(179,44,56,0.18)',
                borderRadius: 5,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ color: '#B32C38', fontSize: '1rem', flexShrink: 0 }}>&#x26A0;</span>
                <span style={{
                  fontFamily: monoFont, fontSize: '0.78rem',
                  color: '#A05060', lineHeight: 1.6,
                }}>
                  Commit <code style={{ color: '#E05060', fontFamily: 'inherit' }}>e1a8891</code> &mdash; routine update disguise &mdash; compromised 51,000 installs. Undetectable without a registry.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
