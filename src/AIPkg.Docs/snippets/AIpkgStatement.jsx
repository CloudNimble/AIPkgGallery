export const AIpkgStatement = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,400;0,500;1,400&display=swap');
        @keyframes aipkg-orb-drift {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes aipkg-orb2-drift {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          33% { transform: translate(-48%, -52%) scale(1.03) rotate(2deg); }
          66% { transform: translate(-52%, -48%) scale(0.97) rotate(-2deg); }
        }
        @keyframes stmt-fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes stmt-fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 0.9; transform: scale(1); }
        }
        .stmt-logo  { animation: stmt-fade-in 0.8s 0.15s ease-out both; }
        .stmt-line-1 { animation: stmt-fade-up 0.7s 0.35s ease-out both; }
        .stmt-line-2 { animation: stmt-fade-up 0.7s 0.55s ease-out both; }
        .stmt-line-3 { animation: stmt-fade-up 0.7s 0.75s ease-out both; }
      `}</style>

      <section style={{
        height: '100vh',
        background: '#06060A',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: '0 32px',
      }}>
        {/* Gradient orbs */}
        <div style={{
          position: 'absolute', top: '42%', left: '50%',
          width: 1100, height: 1100, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,64,174,0.09) 0%, rgba(14,128,119,0.035) 35%, transparent 60%)',
          animation: 'aipkg-orb-drift 10s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '55%', left: '62%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185,129,18,0.04) 0%, rgba(179,44,56,0.02) 40%, transparent 65%)',
          animation: 'aipkg-orb2-drift 14s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Grain */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          pointerEvents: 'none', opacity: 0.5,
        }} />

        {/* Content wrapper for exit animation */}
        <div className="stmt-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 1200 }}>
          {/* Logo */}
          <div className="stmt-logo" style={{ marginBottom: 48, display: 'flex', justifyContent: 'center' }}>
            <img src="/images/aipkg.logo.full.svg" alt="AI Pkg"
              style={{ width: 200, height: 200 }} />
          </div>

          {/* Three-line statement */}
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800, letterSpacing: '-0.04em',
            lineHeight: 1.15, margin: 0, padding: 0, border: 'none',
          }}>
            <span className="stmt-line stmt-line-1" style={{ display: 'block', color: '#EEEDF5' }}>
              One Package.
            </span>
            <span className="stmt-line stmt-line-2" style={{ display: 'block', color: '#EEEDF5' }}>
              Every AI Platform.
            </span>
            <span className="stmt-line stmt-line-3" style={{
              display: 'block',
              background: 'linear-gradient(135deg, #C279F0 0%, #9A66E2 40%, #7840AE 70%, #8A57C6 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Verified by Default.
            </span>
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="stmt-scroll" style={{
          position: 'absolute', bottom: 36, left: '50%',
          transform: 'translateX(-50%)', pointerEvents: 'none',
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 8l6 6 6-6" stroke="rgba(238,237,245,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </>
  );
};
