export const AIpkgFireFlower = () => {
  return (
    <section style={{
      height: '100vh',
      background: '#06060A',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 32px',
    }}>
      {/* Warm gradient — shifting from security tones to invitation */}
      <div style={{
        position: 'absolute', top: '45%', left: '50%',
        width: 1000, height: 1000, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(120,64,174,0.07) 0%, rgba(194,121,240,0.03) 40%, transparent 60%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
      }} />

      <div className="ff-content" style={{
        position: 'relative', zIndex: 1, textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
          fontWeight: 800, letterSpacing: '-0.04em',
          lineHeight: 1.2, margin: 0, padding: 0, border: 'none',
        }}>
          <span className="ff-line ff-line-1" style={{ display: 'block', color: '#EEEDF5' }}>
            Publish once.
          </span>
          <span className="ff-line ff-line-2" style={{ display: 'block', color: '#EEEDF5' }}>
            Millions of users.
          </span>
          <span className="ff-line ff-line-3" style={{
            display: 'block',
            background: 'linear-gradient(135deg, #C279F0 0%, #9A66E2 50%, #7840AE 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Zero extra effort.
          </span>
        </h2>
      </div>
    </section>
  );
};
