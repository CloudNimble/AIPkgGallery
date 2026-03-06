// Shows the named gradients used on the AIPkg isometric box
export const BrandGradientShowcase = () => {
  const [copied, setCopied] = React.useState(null);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  const gradients = [
    {
      id: 'front',
      name: 'Box Front Face',
      surface: 'Main isometric front face',
      start: { hex: '#C279F0', name: 'Purple Light', label: 'Top' },
      end: { hex: '#7840AE', name: 'Purple Primary', label: 'Bottom' },
      direction: 'to bottom',
      css: 'linear-gradient(to bottom, #C279F0, #7840AE)',
    },
    {
      id: 'lid',
      name: 'Box Lids (Left & Right)',
      surface: 'Both isometric lid panels',
      start: { hex: '#C279F0', name: 'Purple Light', label: 'Top' },
      end: { hex: '#9A66E2', name: 'Purple Soft', label: 'Bottom' },
      direction: 'to bottom',
      css: 'linear-gradient(to bottom, #C279F0, #9A66E2)',
    },
    {
      id: 'ribbon',
      name: 'Right Ribbon Fade',
      surface: 'Right ribbon wrap — fades to transparent',
      start: { hex: '#F1E8F1', name: 'Lavender Pale 100%', label: 'Top' },
      end: { hex: '#F1E8F1', name: 'Lavender Pale 25%', label: 'Bottom' },
      direction: 'to bottom',
      css: 'linear-gradient(to bottom, #F1E8F1, rgba(241,232,241,0.25))',
      checkered: true,
    },
  ];

  return (
    <div className="not-prose" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        @keyframes fadeCheck { 0%,100%{opacity:0} 20%,80%{opacity:1} }
        .grad-card {
          background: rgba(120,64,174,0.05);
          border: 1px solid rgba(120,64,174,0.12);
          border-radius: 12px; overflow: hidden;
          transition: border-color 0.2s;
        }
        .grad-card:hover { border-color: rgba(120,64,174,0.3); }
        .grad-copy-btn {
          background: none; border: 1px solid rgba(120,64,174,0.2);
          border-radius: 5px; padding: 3px 9px; font-size: 11px;
          cursor: pointer; color: #7840AE; transition: all 0.15s;
          font-family: 'JetBrains Mono', monospace;
        }
        .grad-copy-btn:hover { background: rgba(120,64,174,0.1); border-color: #7840AE; }
      `}</style>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        {gradients.map(g => (
          <div key={g.id} className="grad-card">
            {/* Gradient preview strip */}
            <div style={{ position: 'relative', height: 120 }}>
              {g.checkered && (
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'repeating-conic-gradient(#ddd 0% 25%, white 0% 50%)',
                  backgroundSize: '16px 16px',
                }} />
              )}
              <div style={{
                position: 'absolute', inset: 0,
                background: g.css,
              }} />
              {/* Color stop markers */}
              <div style={{
                position: 'absolute', top: 10, left: 0, right: 0,
                display: 'flex', justifyContent: 'center',
              }}>
                <span style={{
                  background: 'rgba(0,0,0,0.45)', color: '#fff', fontSize: 10,
                  padding: '2px 8px', borderRadius: 20, fontFamily: 'monospace',
                  backdropFilter: 'blur(4px)',
                }}>{g.start.hex}</span>
              </div>
              <div style={{
                position: 'absolute', bottom: 10, left: 0, right: 0,
                display: 'flex', justifyContent: 'center',
              }}>
                <span style={{
                  background: 'rgba(0,0,0,0.45)', color: '#fff', fontSize: 10,
                  padding: '2px 8px', borderRadius: 20, fontFamily: 'monospace',
                  backdropFilter: 'blur(4px)',
                }}>{g.end.hex}</span>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: '12px 14px' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#471B78', marginBottom: 3 }}>{g.name}</div>
              <div style={{ fontSize: 11, color: '#888', marginBottom: 10 }}>{g.surface}</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 10 }}>
                {[g.start, g.end].map((stop, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: stop.hex, flexShrink: 0, border: '1px solid rgba(0,0,0,0.1)' }} />
                    <span style={{ fontSize: 11, color: '#666', flex: 1 }}>{stop.name}</span>
                    <span style={{ fontSize: 10, color: '#999', fontFamily: 'monospace' }}>{stop.label}</span>
                  </div>
                ))}
              </div>

              <button
                className="grad-copy-btn"
                onClick={() => copy(g.css, g.id)}
                style={{ width: '100%' }}
              >
                {copied === g.id ? '✓ Copied!' : 'Copy CSS'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
