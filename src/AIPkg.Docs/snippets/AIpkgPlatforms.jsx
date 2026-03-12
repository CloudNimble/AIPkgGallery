export const AIpkgPlatforms = () => {
  const [s1, setS1] = React.useState(false);
  const [s2, setS2] = React.useState(false);
  const [s3, setS3] = React.useState(false);
  const [s4, setS4] = React.useState(false);
  const [s5, setS5] = React.useState(false);
  const r2 = React.useRef(null);
  const r3 = React.useRef(null);
  const r4 = React.useRef(null);
  const r5 = React.useRef(null);

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
    const o5 = setup(r5, setS5);
    return () => { o2.disconnect(); o3.disconnect(); o4.disconnect(); o5.disconnect(); };
  }, []);

  const spring = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const reveal = (vis, delay) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.9s ${spring} ${delay}s, transform 0.9s ${spring} ${delay}s`,
  });

  const apmNodes = [
    { id: 'ai', label: 'ai', x: 400, y: 40, color: '#7840AE', desc: 'Root — all platforms' },
    { id: 'claude', label: 'claude', x: 200, y: 140, color: '#C279F0', desc: 'All Claude variants' },
    { id: 'copilot', label: 'copilot', x: 400, y: 140, color: '#3061A6', desc: 'All Copilot variants' },
    { id: 'cursor', label: 'cursor', x: 600, y: 140, color: '#B98112', desc: 'Cursor editor' },
    { id: 'claude-code', label: 'claude-code', x: 120, y: 240, color: '#C279F0', desc: 'Claude Code CLI' },
    { id: 'claude-desktop', label: 'claude-desktop', x: 280, y: 240, color: '#C279F0', desc: 'Claude Desktop' },
    { id: 'copilot-vscode', label: 'copilot-vscode', x: 400, y: 240, color: '#3061A6', desc: 'VS Code Copilot' },
    { id: 'copilot-vs', label: 'copilot-vs', x: 520, y: 240, color: '#3061A6', desc: 'Visual Studio' },
  ];

  const apmEdges = [
    ['ai', 'claude'], ['ai', 'copilot'], ['ai', 'cursor'],
    ['claude', 'claude-code'], ['claude', 'claude-desktop'],
    ['copilot', 'copilot-vscode'], ['copilot', 'copilot-vs'],
  ];

  const getNode = (id) => apmNodes.find(n => n.id === id);

  const integrationSteps = [
    {
      num: '01',
      title: 'Add the SDK',
      code: 'npm install @aipkg/sdk',
      desc: 'A single dependency. The SDK handles registry communication, package resolution, manifest translation, and secure installation. Available for every major language runtime.',
      color: '#0E8077',
    },
    {
      num: '02',
      title: 'Declare your APM',
      code: null,
      desc: 'Register your platform\'s moniker in the AI Platform Moniker graph. Like .NET declaring a new TFM — it inherits from its parent, gaining access to everything already published for parent monikers.',
      color: '#3061A6',
    },
    {
      num: '03',
      title: 'Wire resolution',
      code: null,
      desc: 'The SDK resolves packages using the APM inheritance chain. If a package has content for your exact moniker, great. If not, it walks up the graph — claude-code → claude → ai — until it finds compatible content.',
      color: '#B98112',
    },
    {
      num: '04',
      title: 'Ship it',
      code: null,
      desc: 'Your users see a native plugin browser inside your platform. They search, click install, done. No CLI. No config editing. The entire aipkg.org ecosystem is immediately available.',
      color: '#7840AE',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,400;0,500;1,400&display=swap');
        .plat-cta {
          transition: all 0.25s ease !important;
        }
        .plat-cta:hover {
          box-shadow: 0 6px 40px rgba(14,128,119,0.4) !important;
          transform: translateY(-2px) !important;
        }
        .plat-node {
          transition: all 0.3s ease !important;
          cursor: default;
        }
        .plat-node:hover {
          filter: brightness(1.3) !important;
          transform: scale(1.08) !important;
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
          background: 'radial-gradient(circle, rgba(14,128,119,0.1) 0%, rgba(26,154,144,0.04) 40%, transparent 65%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 20,
            background: 'rgba(14,128,119,0.08)',
            border: '1px solid rgba(14,128,119,0.2)',
            marginBottom: 32,
            ...reveal(s1, 0),
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A9A90' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem', fontWeight: 500,
              textTransform: 'uppercase', letterSpacing: '0.16em',
              color: '#1A9A90',
            }}>For Platforms</span>
          </div>

          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
            fontWeight: 900, letterSpacing: '-0.04em',
            lineHeight: 1.05, color: '#EEEDF5',
            margin: '0 0 24px', border: 'none',
            ...reveal(s1, 0.12),
          }}>
            Your users want plugins.<br />
            <span style={{
              background: 'linear-gradient(135deg, #1A9A90, #0E8077)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Give them the ecosystem.</span>
          </h1>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            fontWeight: 400, color: 'rgba(238,237,245,0.4)',
            lineHeight: 1.6, margin: 0, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto',
            ...reveal(s1, 0.26),
          }}>
            Integrate the AI{'\\u2022'}Pkg SDK and your platform gets instant access to the
            entire plugin ecosystem. No marketplace to build. No curation to maintain.
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
          }}>The build-or-starve dilemma</p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontWeight: 800, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: '#EEEDF5',
            margin: '0 0 24px', border: 'none',
            ...reveal(s2, 0.08),
          }}>
            Building an ecosystem from zero<br />is a years-long bet.
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.95rem', fontWeight: 400,
            color: 'rgba(238,237,245,0.4)', lineHeight: 1.7,
            margin: '0 0 40px', maxWidth: 600,
            ...reveal(s2, 0.16),
          }}>
            Every AI platform faces the same chicken-and-egg problem: users want plugins,
            but plugin developers won't build until there's an audience. Meanwhile, your
            competitors are growing their ecosystems. You need plugins yesterday — and
            building a marketplace from scratch takes years.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
            ...reveal(s2, 0.24),
          }}>
            {[
              { label: 'Marketplace cost', value: '$2M+', sub: 'to build & maintain' },
              { label: 'Plugin recruitment', value: '18+', sub: 'months to critical mass' },
              { label: 'Security audit', value: '$$$', sub: 'per package, ongoing' },
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

      {/* ═══ APM GRAPH ═══ */}
      <section ref={r3} style={{
        background: '#06060A', position: 'relative', overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 140px) 32px',
      }}>
        <div style={{
          position: 'absolute', top: '40%', left: '50%',
          width: 800, height: 800, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,128,119,0.05) 0%, transparent 55%)',
          transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: '#0E8077', marginBottom: 20,
            ...reveal(s3, 0),
          }}>AI Platform Monikers</p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontWeight: 800, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: '#EEEDF5',
            margin: '0 0 16px', border: 'none',
            ...reveal(s3, 0.08),
          }}>
            TFMs, but for AI platforms.
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.95rem', fontWeight: 400,
            color: 'rgba(238,237,245,0.4)', lineHeight: 1.7,
            margin: '0 0 48px', maxWidth: 620,
            ...reveal(s3, 0.14),
          }}>
            NuGet solved multi-framework targeting with TFMs and an inheritance graph.
            AI{'\\u2022'}Pkg does the same with APMs. Your platform declares a moniker,
            inherits from its parent, and immediately gains access to every package
            published for any ancestor in the graph.
          </p>

          {/* APM inheritance graph visualization */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 700,
            height: 310,
            margin: '0 auto 48px',
            ...reveal(s3, 0.22),
          }}>
            {/* SVG edges */}
            <svg style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              overflow: 'visible',
            }} viewBox="0 0 700 310">
              {apmEdges.map(([fromId, toId], i) => {
                const from = getNode(fromId);
                const to = getNode(toId);
                const scale = 700 / 800;
                const fx = from.x * scale;
                const fy = from.y + 18;
                const tx = to.x * scale;
                const ty = to.y - 2;
                return (
                  <line
                    key={i}
                    x1={fx} y1={fy} x2={tx} y2={ty}
                    stroke={to.color}
                    strokeWidth="1.5"
                    strokeOpacity={s3 ? 0.35 : 0}
                    style={{
                      transition: `stroke-opacity 0.6s ease ${0.4 + i * 0.08}s`,
                    }}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {apmNodes.map((node, i) => {
              const scale = 700 / 800;
              return (
                <div
                  key={node.id}
                  className="plat-node"
                  style={{
                    position: 'absolute',
                    left: node.x * scale,
                    top: node.y,
                    transform: 'translate(-50%, 0)',
                    textAlign: 'center',
                    opacity: s3 ? 1 : 0,
                    transition: `opacity 0.5s ease ${0.3 + i * 0.06}s`,
                  }}
                >
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: node.id === 'ai' ? '0.82rem' : '0.72rem',
                    fontWeight: 500,
                    color: node.color,
                    background: `${node.color}10`,
                    border: `1px solid ${node.color}30`,
                    borderRadius: 8,
                    padding: '6px 14px',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                  }}>
                    {node.label}
                  </div>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.6rem', fontWeight: 400,
                    color: 'rgba(238,237,245,0.25)',
                    marginTop: 4,
                    whiteSpace: 'nowrap',
                  }}>
                    {node.desc}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{
            padding: '20px 24px',
            background: 'rgba(14,128,119,0.06)',
            border: '1px solid rgba(14,128,119,0.15)',
            borderRadius: 12,
            ...reveal(s3, 0.5),
          }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.88rem', fontWeight: 500,
              color: '#0E8077', margin: 0, lineHeight: 1.5,
            }}>
              A package published for <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
              }}>lib/ai/</span> is installable on every platform in the graph.
              A package with <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
              }}>lib/claude-code/</span> overrides only run on Claude Code.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATION ═══ */}
      <section ref={r4} style={{
        background: '#06060A', position: 'relative', overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 140px) 32px',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: '#3061A6', marginBottom: 20,
            ...reveal(s4, 0),
          }}>Integration</p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontWeight: 800, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: '#EEEDF5',
            margin: '0 0 48px', border: 'none',
            ...reveal(s4, 0.08),
          }}>
            Four steps to a full ecosystem.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {integrationSteps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: 24, alignItems: 'flex-start',
                padding: '28px 24px',
                background: 'rgba(238,237,245,0.02)',
                border: '1px solid rgba(238,237,245,0.06)',
                borderRadius: 14,
                ...reveal(s4, 0.16 + i * 0.12),
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

      {/* ═══ SECURITY + CTA ═══ */}
      <section ref={r5} style={{
        minHeight: '70vh',
        background: '#06060A', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(80px, 12vh, 140px) 32px',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,128,119,0.07) 0%, transparent 55%)',
          transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 640 }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: '#B98112', marginBottom: 20,
            ...reveal(s5, 0),
          }}>Security included</p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: '#EEEDF5',
            margin: '0 0 20px', border: 'none',
            ...reveal(s5, 0.08),
          }}>
            Every package is verified<br />
            <span style={{ color: '#B98112' }}>before your users see it.</span>
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.95rem', fontWeight: 400,
            color: 'rgba(238,237,245,0.4)', lineHeight: 1.6,
            margin: '0 0 24px',
            ...reveal(s5, 0.16),
          }}>
            Code signing, vulnerability scanning, and prompt injection detection
            happen server-side before publication. Your platform inherits the entire
            security pipeline — no audit infrastructure to build or maintain.
          </p>

          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
            marginBottom: 48,
            ...reveal(s5, 0.24),
          }}>
            {[
              { label: 'Code Signed', color: '#0E8077' },
              { label: 'Vuln Scanned', color: '#3061A6' },
              { label: 'Prompt Checked', color: '#B32C38' },
              { label: 'AV Cleared', color: '#B98112' },
            ].map((badge, i) => (
              <div key={i} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem', fontWeight: 500,
                color: badge.color,
                background: `${badge.color}10`,
                border: `1px solid ${badge.color}25`,
                borderRadius: 8, padding: '6px 14px',
                letterSpacing: '0.05em',
              }}>{badge.label}</div>
            ))}
          </div>

          <a href="/specs/12-security" className="plat-cta" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '15px 36px',
            background: 'linear-gradient(135deg, #0E8077, #1A9A90)',
            color: '#fff', fontFamily: "'Poppins', sans-serif",
            fontWeight: 700, fontSize: '0.95rem',
            borderRadius: 10, textDecoration: 'none',
            border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 24px rgba(14,128,119,0.3)',
            ...reveal(s5, 0.32),
          }}>
            Read the security spec →
          </a>
        </div>
      </section>
    </>
  );
};
