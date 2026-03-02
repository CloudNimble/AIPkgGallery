export const AIpkgProblem = () => {
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

  const platforms = [
    {
      name: 'Claude Code', color: '#3CD0E2',
      file: '.claude/settings.json',
      code: `{
  "mcpServers": {
    "my-tool": {
      "command": "my-tool",
      "args": ["--mcp"]
    }
  }
}`,
    },
    {
      name: 'GitHub Copilot', color: '#4CAF7A',
      file: '.github/copilot-instructions.md',
      code: `---
mcp:
  servers:
    my-tool:
      command: my-tool
      args: [--mcp]
---
# Copilot Instructions...`,
    },
    {
      name: 'Cursor', color: '#7C6EEA',
      file: '.cursor/rules/my-tool.mdc',
      code: `---
description: My Tool Rules
globs: ["**/*.ts"]
alwaysApply: false
---

Always use my-tool when
working with TypeScript.`,
    },
    {
      name: 'Windsurf', color: '#419AC5',
      file: '.windsurfrules',
      code: `# Global Rules
Always use my-tool
for all operations.

mcp_server: my-tool
path: ./bin/my-tool`,
    },
  ];

  return (
    <>
      <style>{`
        .frag-card {
          background: #060E1A;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.2s ease;
        }
        .frag-card:hover { border-color: rgba(255,255,255,0.14); }
        .frag-pre {
          margin: 0 !important;
          padding: 16px 18px !important;
          background: #020810 !important;
          font-family: 'Cascadia Code', 'Courier New', monospace !important;
          font-size: 0.77rem !important;
          line-height: 1.75 !important;
          color: #7A9AB8 !important;
          border: none !important;
          border-radius: 0 !important;
          white-space: pre !important;
          overflow-x: auto !important;
          min-height: 110px;
        }
      `}</style>

      <section style={{ background: '#0A1628', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '56px', ...anim(0.1) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '18px', padding: '5px 14px',
              border: '1px solid rgba(226, 100, 60, 0.35)',
              borderRadius: '4px', background: 'rgba(226, 100, 60, 0.06)',
            }}>
              <span style={{
                fontFamily: "'Cascadia Code', monospace", fontSize: '0.7rem',
                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#E2643C', fontWeight: 600,
              }}>The Problem</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, color: '#E8F4FF',
              letterSpacing: '-0.025em', margin: '0 0 18px 0', lineHeight: 1.12,
            }}>AI tooling is fragmented.</h2>
            <p style={{ fontSize: '1rem', color: '#6B8FAF', maxWidth: '580px', lineHeight: 1.7, margin: 0 }}>
              To reach users across major AI platforms, you must maintain a different config file,
              directory layout, and update process for each one — and keep them all in sync, forever.
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
            ...anim(0.3),
          }}>
            {platforms.map((p) => (
              <div key={p.name} className="frag-card">
                {/* Top accent */}
                <div style={{ height: '3px', background: p.color, opacity: 0.75 }} />

                <div style={{ padding: '16px 18px 12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                    <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#C0D8F0' }}>{p.name}</span>
                  </div>
                  <div style={{
                    fontFamily: "'Cascadia Code', monospace", fontSize: '0.7rem',
                    color: p.color, opacity: 0.75, letterSpacing: '0.02em',
                    marginBottom: '12px',
                  }}>{p.file}</div>
                </div>

                <pre className="frag-pre">{p.code}</pre>
              </div>
            ))}
          </div>

          {/* Warning callout */}
          <div style={{
            marginTop: '28px', padding: '16px 22px',
            background: 'rgba(226, 100, 60, 0.05)',
            border: '1px solid rgba(226, 100, 60, 0.2)',
            borderRadius: '6px', ...anim(0.5),
          }}>
            <span style={{
              fontFamily: "'Cascadia Code', monospace", fontSize: '0.83rem',
              color: '#C07050', lineHeight: 1.6,
            }}>
              ⚠ Four platforms. Four config formats. Four maintenance burdens. That's before any new platforms ship.
            </span>
          </div>

        </div>
      </section>
    </>
  );
}
