export const AIpkgPublishers = () => {
  const [s1, setS1] = React.useState(false);
  const [s2, setS2] = React.useState(false);
  const [s3, setS3] = React.useState(false);
  const [s4, setS4] = React.useState(false);
  const r1 = React.useRef(null);
  const r2 = React.useRef(null);
  const r3 = React.useRef(null);
  const r4 = React.useRef(null);

  React.useEffect(() => {
    const t = setTimeout(() => setS1(true), 300);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const setup = (ref, setter) => {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setter(true); },
        { threshold: 0.15 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    };
    const o2 = setup(r2, setS2);
    const o3 = setup(r3, setS3);
    const o4 = setup(r4, setS4);
    return () => { o2.disconnect(); o3.disconnect(); o4.disconnect(); };
  }, []);

  const spring = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const reveal = (vis, delay) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.9s ${spring} ${delay}s, transform 0.9s ${spring} ${delay}s`,
  });

  const steps = [
    {
      num: '01',
      title: 'Pack',
      code: 'aipkg pack',
      desc: 'The CLI reads your existing project — MCP configs, skills, commands, agents, prompts — and produces a single .aipkg package with a semantic .aispec manifest.',
      color: '#7840AE',
    },
    {
      num: '02',
      title: 'Review',
      code: null,
      desc: 'The generated manifest declares your package capabilities semantically. One canonical format — no platform-specific config files. Adjust if needed.',
      color: '#3061A6',
    },
    {
      num: '03',
      title: 'Push',
      code: 'aipkg push',
      desc: 'Authenticated, CI-friendly. The registry runs static analysis, vulnerability scanning, and prompt injection detection before publishing. Code-signed automatically.',
      color: '#0E8077',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,400;0,500;1,400&display=swap');
        .pub-cta {
          transition: all 0.25s ease !important;
        }
        .pub-cta:hover {
          box-shadow: 0 6px 40px rgba(120,64,174,0.4) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: '100vh',
        background: '#06060A',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: '0 32px',
      }}>
        <div style={{
          position: 'absolute', top: '45%', left: '50%',
          width: 900, height: 900, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,64,174,0.1) 0%, rgba(154,102,226,0.04) 40%, transparent 65%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 20,
            background: 'rgba(120,64,174,0.08)',
            border: '1px solid rgba(120,64,174,0.2)',
            marginBottom: 32,
            ...reveal(s1, 0),
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C279F0' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem', fontWeight: 500,
              textTransform: 'uppercase', letterSpacing: '0.16em',
              color: '#C279F0',
            }}>For Publishers</span>
          </div>

          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
            fontWeight: 900, letterSpacing: '-0.04em',
            lineHeight: 1.05, color: '#EEEDF5',
            margin: '0 0 24px', border: 'none',
            ...reveal(s1, 0.12),
          }}>
            You built something great.<br />
            <span style={{
              background: 'linear-gradient(135deg, #C279F0, #7840AE)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Ship it everywhere.</span>
          </h1>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            fontWeight: 400, color: 'rgba(238,237,245,0.4)',
            lineHeight: 1.6, margin: 0, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto',
            ...reveal(s1, 0.26),
          }}>
            AI{'\u2022'}Pkg reads your existing plugin and packages it for every AI platform.
            No config format expertise required.
          </p>
        </div>
      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section ref={r2} style={{
        background: '#06060A', position: 'relative', overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 140px) 32px',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: '#B32C38', marginBottom: 20,
            ...reveal(s2, 0),
          }}>The maintenance trap</p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontWeight: 800, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: '#EEEDF5',
            margin: '0 0 24px', border: 'none',
            ...reveal(s2, 0.08),
          }}>
            You built it for one platform.<br />Now maintain it for six.
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.95rem', fontWeight: 400,
            color: 'rgba(238,237,245,0.4)', lineHeight: 1.7,
            margin: '0 0 40px', maxWidth: 600,
            ...reveal(s2, 0.16),
          }}>
            Every new AI platform means another config format to learn, another directory structure
            to maintain, another set of bugs to chase. Your MCP server works perfectly on Claude Code.
            Getting it onto Cursor, Copilot, Windsurf, Zed, and OpenCode? That's five more config formats.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
            ...reveal(s2, 0.24),
          }}>
            {[
              { label: 'Config formats', value: '6+', sub: 'and counting' },
              { label: 'Hours per port', value: '4\u201312', sub: 'per platform' },
              { label: 'Bug surface', value: '6\u00d7', sub: 'multiplied' },
            ].map((m, i) => (
              <div key={i} style={{
                padding: '20px 16px', textAlign: 'center',
                background: 'rgba(179,44,56,0.04)',
                border: '1px solid rgba(179,44,56,0.1)',
                borderRadius: 12,
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '1.6rem', fontWeight: 500,
                  color: '#B32C38', lineHeight: 1, marginBottom: 4,
                }}>{m.value}</div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.72rem', fontWeight: 600,
                  color: 'rgba(238,237,245,0.5)', marginBottom: 2,
                }}>{m.label}</div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.65rem', fontWeight: 400,
                  color: 'rgba(238,237,245,0.2)',
                }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE WORKFLOW ═══ */}
      <section ref={r3} style={{
        background: '#06060A', position: 'relative', overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 140px) 32px',
      }}>
        <div style={{
          position: 'absolute', top: '40%', left: '50%',
          width: 800, height: 800, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,64,174,0.05) 0%, transparent 55%)',
          transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: '#7840AE', marginBottom: 20,
            ...reveal(s3, 0),
          }}>Three commands</p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontWeight: 800, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: '#EEEDF5',
            margin: '0 0 48px', border: 'none',
            ...reveal(s3, 0.08),
          }}>
            Pack. Review. Push.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: 24, alignItems: 'flex-start',
                padding: '28px 24px',
                background: 'rgba(238,237,245,0.02)',
                border: '1px solid rgba(238,237,245,0.06)',
                borderRadius: 14,
                ...reveal(s3, 0.16 + i * 0.12),
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem', fontWeight: 500,
                  color: step.color, letterSpacing: '0.05em',
                  flexShrink: 0, paddingTop: 2,
                }}>{step.num}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.1rem', fontWeight: 700,
                    color: '#EEEDF5', marginBottom: 8,
                  }}>{step.title}</div>
                  {step.code && (
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.78rem', fontWeight: 500,
                      color: step.color,
                      background: `${step.color}10`,
                      border: `1px solid ${step.color}25`,
                      borderRadius: 8, padding: '8px 14px',
                      display: 'inline-block', marginBottom: 12,
                    }}>{step.code}</div>
                  )}
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.85rem', fontWeight: 400,
                    color: 'rgba(238,237,245,0.4)', lineHeight: 1.6,
                    margin: 0,
                  }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE REACH + CTA ═══ */}
      <section ref={r4} style={{
        minHeight: '70vh',
        background: '#06060A', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(80px, 12vh, 140px) 32px',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,64,174,0.07) 0%, transparent 55%)',
          transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 600 }}>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: '#EEEDF5',
            margin: '0 0 20px', border: 'none',
            ...reveal(s4, 0),
          }}>
            Publish once.<br />
            <span style={{ color: '#C279F0' }}>Reach every platform.</span>
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.95rem', fontWeight: 400,
            color: 'rgba(238,237,245,0.4)', lineHeight: 1.6,
            margin: '0 0 40px',
            ...reveal(s4, 0.1),
          }}>
            Your plugin becomes installable on every supported AI platform the moment
            you push it. No extra work. No platform-specific maintenance.
          </p>

          <a href="/quickstart" className="pub-cta" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '15px 36px',
            background: 'linear-gradient(135deg, #7840AE, #C279F0)',
            color: '#fff', fontFamily: "'Poppins', sans-serif",
            fontWeight: 700, fontSize: '0.95rem',
            borderRadius: 10, textDecoration: 'none',
            border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 24px rgba(120,64,174,0.3)',
            ...reveal(s4, 0.2),
          }}>
            Start publishing →
          </a>
        </div>
      </section>
    </>
  );
};
