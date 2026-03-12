export const AIpkgCompression = () => {
  const ecosystems = [
    { problem: '.NET had DLL hell.', solver: 'NuGet', solverColor: '#3061A6', stat: '502,000+', statLabel: 'packages', year: '2010' },
    { problem: 'JavaScript had no module system.', solver: 'npm', solverColor: '#B32C38', stat: '3,900,000+', statLabel: 'packages', year: '2010' },
    { problem: 'AI tooling has config fragmentation.', solver: 'AI\u2022Pkg', solverColor: '#7840AE', stat: '\u221E', statLabel: 'potential', year: '2026' },
  ];

  return (
    <section style={{
      height: '100vh',
      background: '#06060A',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 32px',
    }}>
      {/* Subtle purple glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(120,64,174,0.05) 0%, transparent 55%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
      }} />

      <div className="comp-content" style={{
        position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', textAlign: 'center',
      }}>
        {/* .aipkg icon */}
        <div className="comp-icon" style={{ marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            padding: '14px 28px',
            background: 'rgba(120,64,174,0.08)',
            border: '1px solid rgba(120,64,174,0.2)',
            borderRadius: 12, boxShadow: '0 0 60px rgba(120,64,174,0.1)',
          }}>
            <img src="/images/aipkg.boxonly.svg" alt="" style={{ width: 24, height: 'auto' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem', fontWeight: 500, color: '#C279F0', letterSpacing: '0.02em',
            }}>.aipkg</span>
          </div>
        </div>

        <div className="comp-eyebrow" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem', fontWeight: 500, textTransform: 'uppercase',
          letterSpacing: '0.18em', color: 'rgba(238,237,245,0.25)', marginBottom: 20,
        }}>A proven recipe</div>

        <h2 className="comp-headline" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
          fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.1,
          color: '#EEEDF5', margin: '0 0 60px', border: 'none',
        }}>This pattern has worked twice.</h2>

        {/* Three ecosystem cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 64 }}>
          {ecosystems.map((eco, i) => (
            <div key={i} className={`comp-card comp-card-${i}`} style={{
              textAlign: 'left', padding: '28px 24px',
              background: 'rgba(238,237,245,0.02)',
              border: '1px solid rgba(238,237,245,0.06)',
              borderRadius: 14,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                display: 'inline-block', fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em',
                color: eco.solverColor, background: `${eco.solverColor}12`,
                border: `1px solid ${eco.solverColor}30`, borderRadius: 6,
                padding: '3px 10px', marginBottom: 18, alignSelf: 'flex-start',
              }}>{eco.year}</div>
              <div style={{
                fontFamily: "'Poppins', sans-serif", fontSize: '0.88rem', fontWeight: 400,
                color: 'rgba(238,237,245,0.45)', lineHeight: 1.55, marginBottom: 20,
                flex: 1,
              }}>{eco.problem}</div>
              <div style={{
                fontFamily: "'Poppins', sans-serif", fontSize: '1.3rem', fontWeight: 800,
                color: eco.solverColor, letterSpacing: '-0.02em', marginBottom: 6,
              }}>{eco.solver}</div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '1.5rem', fontWeight: 500,
                color: 'rgba(238,237,245,0.8)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 4,
              }}>{eco.stat}</div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(238,237,245,0.2)',
              }}>{eco.statLabel}</div>
            </div>
          ))}
        </div>

        <div className="comp-punch" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontWeight: 700, letterSpacing: '-0.025em',
          color: 'rgba(238,237,245,0.55)', lineHeight: 1.3,
        }}>
          Same recipe. <span style={{ color: '#C279F0' }}>Third time.</span>
        </div>
      </div>
    </section>
  );
};
