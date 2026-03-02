export const AIpkgQuickStart = () => {
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay = 0) => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const steps = [
    { num: '01', title: 'Install the CLI', cmd: 'winget install aipkg.cli' },
    { num: '02', title: 'Search packages',  cmd: 'aipkg search mcp-server' },
    { num: '03', title: 'Install on any platform', cmd: 'aipkg install my-mcp-server' },
  ];

  return (
    <>
      <style>{`
        .qs-card {
          background: #060E1A;
          border: 1px solid rgba(60, 208, 226, 0.1);
          border-radius: 6px;
          padding: 28px 28px 24px;
          position: relative;
          transition: border-color 0.2s ease;
        }
        .qs-card:hover { border-color: rgba(60, 208, 226, 0.22); }
        .qs-cmd-block {
          font-family: 'Cascadia Code', 'Courier New', monospace !important;
          font-size: 0.82rem !important;
          color: #3CD0E2 !important;
          background: #020810 !important;
          border: 1px solid rgba(60, 208, 226, 0.15) !important;
          border-radius: 4px !important;
          padding: 12px 16px !important;
          margin: 0 !important;
          white-space: nowrap !important;
          overflow-x: auto !important;
        }
        .qs-btn-primary {
          display: inline-flex; align-items: center;
          padding: 13px 28px; background: #3CD0E2;
          color: #0A1628 !important; font-weight: 700; font-size: 0.9rem;
          border-radius: 4px; text-decoration: none !important;
          letter-spacing: 0.02em;
          transition: background 0.18s ease, box-shadow 0.18s ease;
        }
        .qs-btn-primary:hover {
          background: #5DDAEC;
          box-shadow: 0 0 24px rgba(60, 208, 226, 0.4);
          color: #0A1628 !important;
        }
        .qs-btn-ghost {
          display: inline-flex; align-items: center;
          padding: 12px 28px; color: #3CD0E2 !important;
          font-weight: 600; font-size: 0.9rem;
          border-radius: 4px; text-decoration: none !important;
          border: 1px solid rgba(60, 208, 226, 0.3);
          transition: border-color 0.18s ease, background 0.18s ease;
        }
        .qs-btn-ghost:hover {
          border-color: #3CD0E2;
          background: rgba(60, 208, 226, 0.07);
        }
      `}</style>

      <section style={{
        background: '#060E1A', padding: '100px 24px 120px',
        borderTop: '1px solid rgba(60, 208, 226, 0.07)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '56px', ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '18px', padding: '5px 14px',
              border: '1px solid rgba(60, 208, 226, 0.3)',
              borderRadius: '4px', background: 'rgba(60, 208, 226, 0.05)',
            }}>
              <span style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.7rem',
                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#3CD0E2', fontWeight: 600,
              }}>Quick Start</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, color: '#E8F4FF',
              letterSpacing: '-0.025em', margin: '0 0 18px 0', lineHeight: 1.12,
            }}>Ready in 60 seconds.</h2>
          </div>

          {/* Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px',
            marginBottom: '48px',
            ...anim(0.25),
          }}>
            {steps.map((step) => (
              <div key={step.num} className="qs-card">
                {/* Step number */}
                <div style={{
                  fontFamily: "'Cascadia Code', monospace",
                  fontSize: '3rem', fontWeight: 800,
                  color: 'rgba(60, 208, 226, 0.12)', lineHeight: 1,
                  marginBottom: '16px', letterSpacing: '-0.04em',
                }}>{step.num}</div>
                <div style={{
                  fontSize: '0.92rem', fontWeight: 700,
                  color: '#A0C0DC', marginBottom: '14px',
                  letterSpacing: '-0.01em',
                }}>{step.title}</div>
                <pre className="qs-cmd-block">{step.cmd}</pre>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', ...anim(0.4) }}>
            <a href="/quickstart" className="qs-btn-primary">Full Quickstart Guide →</a>
            <a href="/specs" className="qs-btn-ghost">Read the Specs</a>
          </div>

        </div>
      </section>
    </>
  );
}
