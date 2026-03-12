export const AIpkgFork = () => {
  return (
    <>
      <style>{`
        .aipkg-fork-cta-pub, .aipkg-fork-cta-plat {
          transition: all 0.25s ease !important;
        }
        .aipkg-fork-cta-pub:hover {
          box-shadow: 0 6px 40px rgba(120,64,174,0.35) !important;
          transform: translateY(-2px) !important;
        }
        .aipkg-fork-cta-plat:hover {
          box-shadow: 0 6px 40px rgba(14,128,119,0.35) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>

      <section style={{
        height: '100vh',
        background: '#06060A',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px 32px',
      }}>
        {/* Split gradient backgrounds */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '50%',
          background: 'radial-gradient(ellipse at 70% 50%, rgba(120,64,174,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: '50%',
          background: 'radial-gradient(ellipse at 30% 50%, rgba(14,128,119,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Center divider line */}
        <div className="fork-divider" style={{
          position: 'absolute', top: '10%', bottom: '10%',
          left: '50%', width: 1,
          background: 'linear-gradient(to bottom, transparent, rgba(238,237,245,0.1), transparent)',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }} />

        {/* Logo at center */}
        <div className="fork-logo" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', zIndex: 10,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: '#06060A', border: '1px solid rgba(238,237,245,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src="/images/aipkg.boxonly.svg" alt=""
              style={{ width: 28, height: 28 }} />
          </div>
        </div>

        {/* Content grid */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          maxWidth: 1000, width: '100%', alignItems: 'center',
        }}>
          {/* Publisher side */}
          <div className="fork-left" style={{ textAlign: 'right', padding: '48px 40px' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem', fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.18em', color: '#7840AE', marginBottom: 20,
            }}>For Publishers</div>
            <h3 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.2rem, 2.8vw, 2rem)',
              fontWeight: 800, color: '#EEEDF5', letterSpacing: '-0.025em',
              lineHeight: 1.2, margin: '0 0 12px', border: 'none',
            }}>You build plugins.</h3>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.9rem', fontWeight: 400,
              color: 'rgba(238,237,245,0.4)', lineHeight: 1.6, marginBottom: 32,
            }}>Publish once. Reach every platform.</div>
            <a href="/for-publishers" className="aipkg-fork-cta-pub" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '13px 28px',
              background: 'linear-gradient(135deg, #7840AE, #C279F0)',
              color: '#fff', fontFamily: "'Poppins', sans-serif",
              fontWeight: 700, fontSize: '0.88rem',
              borderRadius: 10, textDecoration: 'none', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 24px rgba(120,64,174,0.25)',
            }}>Start publishing &rarr;</a>
          </div>

          {/* Platform side */}
          <div className="fork-right" style={{ textAlign: 'left', padding: '48px 40px' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem', fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.18em', color: '#0E8077', marginBottom: 20,
            }}>For Platforms</div>
            <h3 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.2rem, 2.8vw, 2rem)',
              fontWeight: 800, color: '#EEEDF5', letterSpacing: '-0.025em',
              lineHeight: 1.2, margin: '0 0 12px', border: 'none',
            }}>You build platforms.</h3>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.9rem', fontWeight: 400,
              color: 'rgba(238,237,245,0.4)', lineHeight: 1.6, marginBottom: 32,
            }}>Give your users the entire ecosystem.</div>
            <a href="/for-platforms" className="aipkg-fork-cta-plat" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '13px 28px',
              background: 'linear-gradient(135deg, #0E8077, #1A9A90)',
              color: '#fff', fontFamily: "'Poppins', sans-serif",
              fontWeight: 700, fontSize: '0.88rem',
              borderRadius: 10, textDecoration: 'none', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 24px rgba(14,128,119,0.25)',
            }}>Integrate the SDK &rarr;</a>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="fork-bottom" style={{
          position: 'relative', zIndex: 1, marginTop: 80, textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.82rem', fontWeight: 500,
            color: 'rgba(238,237,245,0.2)', letterSpacing: '0.01em',
          }}>
            AI{'\u2022'}Pkg is open source. The registry is for everyone.
          </div>
        </div>
      </section>
    </>
  );
};
