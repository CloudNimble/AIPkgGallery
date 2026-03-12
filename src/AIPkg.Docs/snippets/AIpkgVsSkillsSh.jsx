export const AIpkgVsSkillsSh = () => {
  const [started, setStarted] = React.useState(false);
  const [activeRow, setActiveRow] = React.useState(null);
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

  const anim = (delay = 0) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const gitLog = [
    { hash: 'a4f81cc', message: 'feat: add context-aware code review skill', author: 'owner', time: '6 weeks ago', installs: '0 users', safe: true },
    { hash: 'b2e9d3a', message: 'docs: add usage examples to SKILL.md', author: 'owner', time: '5 weeks ago', installs: '2.1K users', safe: true },
    { hash: 'c7f02b1', message: 'feat: improve prompt quality, add config', author: 'contributor', time: '4 weeks ago', installs: '18K users', safe: true },
    { hash: 'e1a8891', message: 'chore: update dependency resolution paths', author: 'owner', time: '11 days ago', installs: '51K users', safe: false, attack: true },
    { hash: 'f9c3d72', message: 'docs: minor README wording fix', author: 'owner', time: '3 days ago', installs: '53K users', safe: true },
  ];

  const compareRows = [
    { feature: 'Package Format', github: { v: false, label: 'Markdown + YAML only' }, aipkg: { v: true, label: '.aipkg archive' } },
    { feature: 'MCP Server Support', github: { v: false, label: 'Not supported' }, aipkg: { v: true, label: 'Native + per-platform' } },
    { feature: 'Platform Adaptation', github: { v: false, label: 'Manual, error-prone' }, aipkg: { v: true, label: 'APM fallback graph' } },
    { feature: 'Immutable Versions', github: { v: false, label: 'Git is mutable' }, aipkg: { v: true, label: 'Content-addressed' } },
    { feature: 'Code Signing', github: { v: false, label: 'None' }, aipkg: { v: true, label: 'Sigstore-compatible' } },
    { feature: 'Post-Install Tampering', github: { v: false, label: 'Possible, silent' }, aipkg: { v: true, label: 'Cryptographically prevented' } },
    { feature: 'Dependency Resolution', github: { v: false, label: 'Not supported' }, aipkg: { v: true, label: 'Semver graph' } },
    { feature: 'Deterministic Installs', github: { v: false, label: 'No lock files' }, aipkg: { v: true, label: 'Lock file + hashes' } },
    { feature: 'Automated Scanning', github: { v: false, label: 'None' }, aipkg: { v: true, label: 'AV + AI content audit' } },
    { feature: 'Private Packages', github: { v: false, label: 'GitHub private repos only' }, aipkg: { v: true, label: 'First-class registry support' } },
  ];

  return (
    <>
      <style>{`
        @keyframes attackPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(179,44,56,0); }
          50% { box-shadow: 0 0 18px 4px rgba(179,44,56,0.3); }
        }
        .attack-row-active {
          animation: attackPulse 2s ease-in-out infinite;
        }
        .compare-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background 0.15s;
          cursor: default;
        }
        .compare-row:last-child { border-bottom: none; }
        .compare-row:hover { background: rgba(255,255,255,0.02); }
        .compare-cell {
          padding: 12px 16px;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          gap: 8px;
          line-height: 1.4;
        }
        .compare-cell + .compare-cell {
          border-left: 1px solid rgba(255,255,255,0.05);
        }
        .git-row {
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
        .git-row:last-child { border-bottom: none; }
        .git-row:hover { background: rgba(255,255,255,0.02); }
      `}</style>

      <section style={{
        background: '#0E0E0E', padding: '100px 24px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '64px', ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '18px', padding: '5px 14px',
              border: '1px solid rgba(185,129,18,0.35)',
              borderRadius: '4px', background: 'rgba(185,129,18,0.07)',
            }}>
              <span style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.7rem',
                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#B98112', fontWeight: 600,
              }}>Thought Leadership</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, color: '#E8E8F0',
              letterSpacing: '-0.025em', margin: '0 0 18px 0', lineHeight: 1.12,
            }}>Going Beyond GitHub:<br />The Case for Packaging</h2>
            <p style={{ fontSize: '1.05rem', color: '#6B6B7A', maxWidth: '680px', lineHeight: 1.75, margin: 0 }}>
              GitHub repos are a fine starting point for distributing AI skills. But as your tooling becomes
              critical infrastructure, you need guarantees that a git repository fundamentally cannot provide.
              The difference between a GitHub file and a package is the difference between a shared drive and
              a production dependency.
            </p>
          </div>

          {/* Supply chain attack section */}
          <div style={{ marginBottom: '72px', ...anim(0.25) }}>
            <h3 style={{
              fontSize: '1.15rem', fontWeight: 700, color: '#C8C8D2',
              marginBottom: '8px', letterSpacing: '-0.01em',
            }}>The Silent Commit Problem</h3>
            <p style={{ fontSize: '0.9rem', color: '#6B6B7A', lineHeight: 1.7, marginBottom: '24px', maxWidth: '680px' }}>
              A GitHub-distributed skill is a live pointer to a git repository. Once your package gains 50,000
              installs, a single push &#x2014; by the owner, a compromised account, or a malicious contributor &#x2014;
              silently becomes the new version for every user who re-installs or auto-updates. No notification.
              No review gate. No hash check.
            </p>

            {/* Git log visualization */}
            <div style={{
              background: '#111111', borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}>
              {/* Terminal bar */}
              <div style={{
                padding: '10px 16px',
                background: '#161616',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,80,80,0.5)' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,180,0,0.4)' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(40,200,80,0.4)' }} />
                </div>
                <span style={{ fontFamily: "'Cascadia Code', monospace", fontSize: '0.72rem', color: '#333340', marginLeft: 4 }}>
                  git log --oneline  # popular-skill-repo
                </span>
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
                {['HASH', 'COMMIT MESSAGE', 'INSTALLS', 'DATE'].map(h => (
                  <span key={h} style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333340', fontFamily: "'Cascadia Code', monospace" }}>{h}</span>
                ))}
              </div>

              {gitLog.map((entry) => (
                <div
                  key={entry.hash}
                  className={`git-row${entry.attack && highlightAttack ? ' attack-row-active' : ''}`}
                  style={{
                    background: entry.attack
                      ? (highlightAttack ? 'rgba(179,44,56,0.1)' : 'transparent')
                      : 'transparent',
                    border: entry.attack && highlightAttack ? '1px solid rgba(179,44,56,0.28)' : '1px solid transparent',
                    transition: 'background 0.8s ease, border-color 0.8s ease',
                    borderRadius: entry.attack ? '4px' : '0',
                    margin: entry.attack ? '2px 6px' : '0',
                  }}
                >
                  <span style={{ color: entry.attack && highlightAttack ? '#B32C38' : '#333340' }}>{entry.hash}</span>
                  <span style={{ color: entry.attack && highlightAttack ? '#E08090' : '#666677' }}>
                    {entry.message}
                    {entry.attack && highlightAttack && (
                      <span style={{
                        display: 'inline-block', marginLeft: '10px',
                        padding: '1px 7px', borderRadius: '3px',
                        background: 'rgba(179,44,56,0.2)', color: '#E05060',
                        fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em',
                        textTransform: 'uppercase', verticalAlign: 'middle',
                      }}>&#9888; MALICIOUS</span>
                    )}
                  </span>
                  <span style={{
                    color: entry.attack && highlightAttack ? '#E05060' : (entry.installs.includes('K') && parseInt(entry.installs) > 10 ? '#B98112' : '#333340'),
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
                borderRadius: '5px',
                display: 'flex', alignItems: 'flex-start', gap: '10px',
              }}>
                <span style={{ color: '#B32C38', fontSize: '1rem', flexShrink: 0, marginTop: 1 }}>&#x26A0;</span>
                <div>
                  <span style={{ fontFamily: "'Cascadia Code', monospace", fontSize: '0.78rem', color: '#A05060', lineHeight: 1.6 }}>
                    Commit <code style={{ color: '#E05060' }}>e1a8891</code> &#x2014; disguised as a routine path update &#x2014; was pushed while 51,000 users had this skill installed.
                    Every fresh install or update now silently runs attacker-controlled prompt injection. GitHub has no mechanism to detect, block, or roll this back at the registry layer.
                  </span>
                </div>
              </div>
            </div>

            {/* skills.sh quote */}
            <div style={{
              marginTop: '20px',
              padding: '18px 22px',
              background: 'rgba(185,129,18,0.05)',
              border: '1px solid rgba(185,129,18,0.18)',
              borderLeft: '3px solid #B98112',
              borderRadius: '0 6px 6px 0',
            }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#B98112', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Cascadia Code', monospace" }}>
                skills.sh &#x2014; from their official documentation
              </div>
              <blockquote style={{ margin: 0, fontSize: '0.9rem', color: '#666650', lineHeight: 1.7, fontStyle: 'italic' }}>
                &#x201C;We cannot guarantee the quality or security of every skill listed in the directory.&#x201D;
              </blockquote>
              <p style={{ margin: '10px 0 0', fontSize: '0.78rem', color: '#444440', lineHeight: 1.6 }}>
                This isn&#39;t a knock on skills.sh &#x2014; it&#39;s an honest acknowledgment of what&#39;s architecturally possible
                when GitHub repos are the distribution mechanism. Without content addressing and signing,
                security guarantees aren&#39;t possible at the directory layer.
              </p>
            </div>
          </div>

          {/* Feature comparison table */}
          <div style={{ ...anim(0.4) }}>
            <h3 style={{
              fontSize: '1.15rem', fontWeight: 700, color: '#C8C8D2',
              marginBottom: '20px', letterSpacing: '-0.01em',
            }}>GitHub-Based Skills vs. AI•Pkg Registry</h3>

            <div style={{
              background: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}>
              {/* Table header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                background: '#161616',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ padding: '12px 16px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#333340' }}>Feature</div>
                <div style={{ padding: '12px 16px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#664444', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                  GitHub Skill Files
                </div>
                <div style={{ padding: '12px 16px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#C279F0', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                  AI•Pkg Registry
                </div>
              </div>

              {/* Rows */}
              {compareRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="compare-row"
                  onMouseEnter={() => setActiveRow(i)}
                  onMouseLeave={() => setActiveRow(null)}
                >
                  <div className="compare-cell" style={{ color: '#666677', fontWeight: 500 }}>
                    {row.feature}
                  </div>
                  <div className="compare-cell" style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(179,44,56,0.12)',
                      color: '#B32C38',
                      fontSize: '0.75rem', fontWeight: 700,
                    }}>&#10007;</span>
                    <span style={{ color: '#554444', fontSize: '0.8rem' }}>{row.github.label}</span>
                  </div>
                  <div className="compare-cell" style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(14,128,119,0.15)',
                      color: '#0E8077',
                      fontSize: '0.75rem', fontWeight: 700,
                    }}>&#10003;</span>
                    <span style={{ color: '#667766', fontSize: '0.8rem' }}>{row.aipkg.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{
              marginTop: '32px',
              padding: '24px 28px',
              background: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap',
            }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#C8C8D2', marginBottom: '6px' }}>
                  GitHub repos are great. Packages are better.
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#555560', lineHeight: 1.65 }}>
                  AI•Pkg doesn&#39;t compete with GitHub &#x2014; it complements it. Your source stays on GitHub.
                  Your distribution gets the integrity guarantees it deserves.
                </p>
              </div>
              <a
                href="/specs/12-security"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '11px 22px',
                  background: 'linear-gradient(135deg, #7840AE, #C279F0)',
                  color: '#fff', fontWeight: 700, fontSize: '0.88rem',
                  borderRadius: '4px', textDecoration: 'none',
                  letterSpacing: '0.02em', flexShrink: 0,
                  transition: 'box-shadow 0.18s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(194,121,240,0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                Read the Security Spec &#x2192;
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
