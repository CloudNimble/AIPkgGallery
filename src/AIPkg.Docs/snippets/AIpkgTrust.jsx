export const AIpkgTrust = () => {
  const stages = [
    { icon: '\u2191', label: 'Upload', detail: 'Package pushed to registry', color: '#7840AE' },
    { icon: '\u2298', label: 'Static Analysis', detail: 'Archive integrity, path traversal, ZIP bomb detection', color: '#3061A6' },
    { icon: '\u25C9', label: 'Vulnerability Scan', detail: 'Known CVEs, malicious binary detection, AV engine', color: '#B98112' },
    { icon: '\u2B26', label: 'Prompt Injection Detection', detail: 'AI-powered analysis of skill and prompt content', color: '#B32C38' },
    { icon: '\u2726', label: 'Code Signing', detail: 'Cryptographic signature verification and timestamping', color: '#0E8077' },
    { icon: '\u2713', label: 'Published', detail: 'Content-addressed, signed, available to all platforms', color: '#C279F0' },
  ];

  return (
    <section style={{
      height: '100vh',
      background: '#040407',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 32px',
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(179,44,56,0.15), transparent)',
      }} />

      <div className="trust-content" style={{
        position: 'relative', zIndex: 1, maxWidth: 880, margin: '0 auto', width: '100%',
      }}>
        {/* Eyebrow */}
        <div className="trust-eyebrow" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24,
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%', background: '#B32C38',
            boxShadow: '0 0 10px rgba(179,44,56,0.5)',
          }} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem', fontWeight: 500, textTransform: 'uppercase',
            letterSpacing: '0.16em', color: '#B32C38',
          }}>Supply Chain Security</span>
        </div>

        <h2 className="trust-headline" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
          fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.1,
          color: '#EEEDF5', margin: '0 0 16px', border: 'none',
        }}>No package reaches users unchecked.</h2>

        <div className="trust-subline" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
          fontWeight: 400, color: 'rgba(238,237,245,0.35)', lineHeight: 1.6,
          marginBottom: 48, maxWidth: 600,
        }}>
          AI packages control model behavior directly. A malicious prompt is as dangerous
          as a malicious binary. Every package passes a multi-layer security pipeline
          <em style={{ color: 'rgba(238,237,245,0.5)' }}> before</em> publication.
        </div>

        {/* Pipeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {stages.map((stage, i) => {
            const isLast = i === stages.length - 1;
            return (
              <div key={i} style={{ display: 'contents' }}>
                <div className={`trust-stage trust-stage-${i}`} style={{
                  display: 'flex', alignItems: 'center', gap: 20, padding: '16px 0',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${stage.color}10`, border: `1px solid ${stage.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, fontSize: '1.1rem', color: stage.color,
                  }}>{stage.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem',
                      fontWeight: 700, color: '#EEEDF5', marginBottom: 2,
                    }}>{stage.label}</div>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem',
                      fontWeight: 400, color: 'rgba(238,237,245,0.3)', lineHeight: 1.4,
                    }}>{stage.detail}</div>
                  </div>
                  <div className={`trust-badge trust-badge-${i}`} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem', fontWeight: 500, color: stage.color,
                    letterSpacing: '0.05em',
                  }}>{isLast ? 'VERIFIED' : 'PASS'}</div>
                </div>
                {!isLast && (
                  <div className={`trust-connector trust-conn-${i}`} style={{
                    marginLeft: 21, width: 2, height: 20,
                    background: `linear-gradient(to bottom, ${stage.color}40, ${stages[i + 1].color}40)`,
                    borderRadius: 1,
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="trust-callout" style={{
          marginTop: 48, padding: '24px 28px',
          background: 'rgba(14,128,119,0.06)',
          border: '1px solid rgba(14,128,119,0.15)', borderRadius: 14,
        }}>
          <div style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            fontWeight: 700, color: '#0E8077', letterSpacing: '-0.015em',
            lineHeight: 1.4,
          }}>Every package verified before it reaches any platform.</div>
        </div>
      </div>
    </section>
  );
};
