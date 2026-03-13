export const AIpkgLifecycle = () => {
  const phases = [
    {
      phase: '01',
      title: 'Stopped at the gate',
      description: 'The multi-layer pipeline catches vulnerabilities, malicious binaries, and prompt injection before a package ever reaches the registry. Bad packages are rejected — not quarantined, not flagged. Rejected.',
      color: '#B32C38',
      icon: '\u26D4',
    },
    {
      phase: '02',
      title: 'Threats found later get handled',
      description: 'When new vulnerabilities surface post-publication, affected packages are flagged, publishers are notified, and packages are de-listed. The supply chain heals itself.',
      color: '#B98112',
      icon: '\u26A0',
    },
    {
      phase: '03',
      title: 'Platforms keep users safe',
      description: 'AI platforms check installed packages against the live vulnerability feed. Users are warned automatically — no manual checking, no stale installs sitting in the dark.',
      color: '#0E8077',
      icon: '\u2713',
    },
  ];

  return (
    <section style={{
      height: '100vh',
      background: '#06060A',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 48px',
    }}>
      {/* Subtle warm glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 1000, height: 1000, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(185,129,18,0.04) 0%, rgba(179,44,56,0.02) 40%, transparent 60%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
      }} />

      <div className="lifecycle-content" style={{
        position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', width: '100%',
        textAlign: 'center',
      }}>
        {/* Eyebrow */}
        <div className="lifecycle-eyebrow" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase',
          letterSpacing: '0.18em', color: 'rgba(238,237,245,0.25)', marginBottom: 20,
        }}>Full lifecycle security</div>

        {/* Headline */}
        <h2 className="lifecycle-headline" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.15,
          color: '#EEEDF5', margin: '0 0 16px', border: 'none',
        }}>Protection at every stage.</h2>

        <div className="lifecycle-subline" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
          fontWeight: 400, color: 'rgba(238,237,245,0.35)', lineHeight: 1.7,
          marginBottom: 56, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto',
        }}>
          The pipeline is just the beginning. Security extends from the moment
          a package is submitted through every day it remains installed.
        </div>

        {/* Three phase cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {phases.map((phase, i) => (
            <div key={i} className={`lifecycle-card lifecycle-card-${i}`} style={{
              textAlign: 'left', padding: '32px 28px',
              background: 'rgba(238,237,245,0.02)',
              border: '1px solid rgba(238,237,245,0.06)',
              borderRadius: 16,
              display: 'flex', flexDirection: 'column',
            }}>
              {/* Phase number + icon row */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 20,
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em',
                  color: phase.color, background: `${phase.color}12`,
                  border: `1px solid ${phase.color}30`, borderRadius: 6,
                  padding: '4px 10px',
                }}>{phase.phase}</div>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `${phase.color}10`, border: `1px solid ${phase.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', color: phase.color,
                }}>{phase.icon}</div>
              </div>

              {/* Title */}
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.15rem', fontWeight: 700,
                color: '#EEEDF5', letterSpacing: '-0.02em',
                lineHeight: 1.25, marginBottom: 12,
              }}>{phase.title}</div>

              {/* Description */}
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.85rem', fontWeight: 400,
                color: 'rgba(238,237,245,0.35)', lineHeight: 1.65,
                flex: 1,
              }}>{phase.description}</div>

              {/* Phase color accent bar at bottom */}
              <div style={{
                marginTop: 24, height: 2, borderRadius: 1,
                background: `linear-gradient(90deg, ${phase.color}50, transparent)`,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
