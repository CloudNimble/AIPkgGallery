// Live type scale specimen using Poppins (AIPkg primary typeface)
export const TypographySpecimen = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    // Inject Poppins from Google Fonts if not already present
    const linkId = 'aipkg-poppins-font';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap';
      document.head.appendChild(link);
      link.onload = () => setLoaded(true);
    } else {
      setLoaded(true);
    }
  }, []);

  const scale = [
    { level: 'Display', size: '36px', lineHeight: '1.2', weight: '700', weightName: 'Bold', sample: 'Ship your AI packages.', usage: 'Hero sections, landing pages' },
    { level: 'H1', size: '28px', lineHeight: '1.3', weight: '700', weightName: 'Bold', sample: 'AIPkg Brand Guidelines', usage: 'Page titles' },
    { level: 'H2', size: '22px', lineHeight: '1.35', weight: '600', weightName: 'SemiBold', sample: 'Color Palette', usage: 'Section headers' },
    { level: 'H3', size: '18px', lineHeight: '1.4', weight: '600', weightName: 'SemiBold', sample: 'Core Purple Palette', usage: 'Subsection headers' },
    { level: 'Body', size: '16px', lineHeight: '1.6', weight: '400', weightName: 'Regular', sample: 'AIPkg manages your AI platform plugins across Claude Code, Cursor, Windsurf, and more with a single package format.', usage: 'Paragraphs, descriptions' },
    { level: 'Small', size: '14px', lineHeight: '1.5', weight: '500', weightName: 'Medium', sample: 'Published March 2026 · Palette variant: Chromatic', usage: 'Captions, labels, metadata' },
  ];

  const mono = { level: 'Code', size: '14px', lineHeight: '1.6', weight: '400', weightName: 'Regular', sample: 'aipkg install @example/my-plugin@1.2.0', usage: 'Code snippets, CLI, API refs' };

  return (
    <div className="not-prose" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        .ts-row {
          border-bottom: 1px solid rgba(120,64,174,0.08);
          padding: 16px 0;
          transition: background 0.15s;
        }
        .ts-row:last-child { border-bottom: none; }
        .ts-row:hover { background: rgba(120,64,174,0.03); }
        .ts-tag {
          display: inline-block; padding: 2px 7px; border-radius: 4px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.05em;
          text-transform: uppercase; background: rgba(120,64,174,0.1);
          color: #7840AE; font-family: monospace; white-space: nowrap;
        }
      `}</style>

      {!loaded && (
        <div style={{ textAlign: 'center', padding: 32, color: '#888', fontSize: 13 }}>Loading Poppins font…</div>
      )}

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s', background: 'rgba(120,64,174,0.04)', border: '1px solid rgba(120,64,174,0.12)', borderRadius: 12, padding: '4px 20px 12px' }}>

        <div style={{ display: 'flex', gap: 6, padding: '12px 0 8px', borderBottom: '1px solid rgba(120,64,174,0.12)', marginBottom: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', width: 64, flexShrink: 0 }}>Level</span>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', flex: 1 }}>Specimen</span>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', width: 160, flexShrink: 0, textAlign: 'right' }}>Spec</span>
        </div>

        {scale.map(s => (
          <div key={s.level} className="ts-row" style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
            <div style={{ width: 64, flexShrink: 0, paddingTop: 4 }}>
              <span className="ts-tag">{s.level}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: s.size, lineHeight: s.lineHeight,
                fontWeight: s.weight, color: '#1a1a2e',
              }}>
                {s.sample}
              </div>
              <div style={{ fontSize: 11, color: '#aaa', marginTop: 3 }}>{s.usage}</div>
            </div>
            <div style={{ width: 160, flexShrink: 0, textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: '#7840AE', fontFamily: 'monospace' }}>{s.size} / {s.lineHeight}</div>
              <div style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>{s.weightName} ({s.weight})</div>
            </div>
          </div>
        ))}

        {/* Monospace row */}
        <div className="ts-row" style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
          <div style={{ width: 64, flexShrink: 0, paddingTop: 4 }}>
            <span className="ts-tag" style={{ background: 'rgba(14,128,119,0.1)', color: '#0E8077' }}>{mono.level}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', 'Cascadia Code', monospace",
              fontSize: mono.size, lineHeight: mono.lineHeight,
              fontWeight: mono.weight, color: '#1a1a2e',
              background: 'rgba(14,128,119,0.06)', padding: '6px 10px', borderRadius: 6,
              border: '1px solid rgba(14,128,119,0.12)',
            }}>
              {mono.sample}
            </div>
            <div style={{ fontSize: 11, color: '#aaa', marginTop: 3 }}>{mono.usage}</div>
          </div>
          <div style={{ width: 160, flexShrink: 0, textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: '#0E8077', fontFamily: 'monospace' }}>{mono.size} / {mono.lineHeight}</div>
            <div style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>JetBrains Mono</div>
          </div>
        </div>
      </div>

      {/* Poppins character showcase */}
      <div style={{ marginTop: 16, padding: '14px 20px', background: 'rgba(120,64,174,0.04)', border: '1px solid rgba(120,64,174,0.1)', borderRadius: 12 }}>
        <div style={{ fontSize: 11, color: '#888', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Poppins — Characteristic Letterforms
        </div>
        <div style={{
          fontFamily: "'Poppins', system-ui, sans-serif",
          fontSize: 42, fontWeight: 600, color: '#7840AE',
          letterSpacing: '-0.01em', lineHeight: 1.1,
          opacity: loaded ? 1 : 0, transition: 'opacity 0.4s',
        }}>
          Ag&nbsp;&nbsp;Pk&nbsp;&nbsp;Ii
        </div>
        <div style={{ fontSize: 11, color: '#aaa', marginTop: 6, lineHeight: 1.6 }}>
          Pointed A apex · Open single-story g · Rounded P bowl · Angular k arms · High x-height
        </div>
      </div>
    </div>
  );
};
