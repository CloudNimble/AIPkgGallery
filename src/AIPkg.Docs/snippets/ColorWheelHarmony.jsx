// Displays brand hue positions on an HSL color wheel with angular separation lines
export const ColorWheelHarmony = () => {
  const [activeId, setActiveId] = React.useState(null);

  const cx = 150, cy = 150;
  const dotRadius = 108; // distance of dots from center
  const innerRadius = 48; // white "donut hole"
  const wheelRadius = 130; // outer edge of color wheel

  // Convert HSL hue (0-360) to SVG x,y coordinates
  // 0° = Red at top (12 o'clock), clockwise
  const hueToXY = (hue, r) => {
    const angleRad = (hue - 90) * Math.PI / 180;
    return {
      x: cx + r * Math.cos(angleRad),
      y: cy + r * Math.sin(angleRad),
    };
  };

  const brandColors = [
    { id: 'purple', name: 'Core Purple', hue: 270, hex: '#7840AE', label: '270°', note: 'Box & structure' },
    { id: 'teal', name: 'Teal (Servers)', hue: 175, hex: '#0E8077', label: '175°', note: 'Infrastructure' },
    { id: 'amber', name: 'Amber (Database)', hue: 40, hex: '#B98112', label: '40°', note: 'Storage & data' },
    { id: 'blue', name: 'Blue (Prompt)', hue: 215, hex: '#3061A6', label: '215°', note: 'Interaction' },
    { id: 'red', name: 'Red (Code)', hue: 355, hex: '#B32C38', label: '355°', note: 'Creation' },
  ];

  const separations = [
    { from: 'teal', to: 'amber', deg: 135, label: '135°' },
    { from: 'teal', to: 'blue', deg: 40, label: '40°' },
    { from: 'teal', to: 'red', deg: 180, label: '180°' },
    { from: 'amber', to: 'blue', deg: 175, label: '175°' },
    { from: 'amber', to: 'red', deg: 45, label: '45°' },
    { from: 'blue', to: 'red', deg: 140, label: '140°' },
  ];

  const colorMap = Object.fromEntries(brandColors.map(c => [c.id, c]));

  const getLineStatus = (sep) => {
    if (!activeId) return 'idle';
    if (sep.from === activeId || sep.to === activeId) return 'active';
    return 'dim';
  };

  const getDotStatus = (c) => {
    if (!activeId) return 'idle';
    if (c.id === activeId) return 'active';
    const linked = separations.some(s => (s.from === activeId || s.to === activeId) && (s.from === c.id || s.to === c.id));
    if (linked) return 'linked';
    return 'dim';
  };

  // Generate color wheel conic gradient stops
  const stops = Array.from({ length: 37 }, (_, i) => {
    const hue = i * 10;
    return `hsl(${hue}, 75%, 58%) ${hue}deg`;
  }).join(', ');

  return (
    <div className="not-prose" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        .cw-dot { cursor: pointer; transition: transform 0.15s; transform-origin: center; }
        .cw-dot:hover { transform: scale(1.25); }
        .cw-sep-line { transition: opacity 0.15s, stroke-width 0.15s; }
        .cw-legend-row {
          display: flex; align-items: center; gap: 10px;
          padding: 7px 10px; border-radius: 7px; cursor: pointer;
          transition: background 0.15s; font-size: 13px;
        }
        .cw-legend-row:hover { background: rgba(120,64,174,0.07); }
      `}</style>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Color wheel SVG */}
        <div style={{ flexShrink: 0 }}>
          <svg width="300" height="300" viewBox="0 0 300 300">
            {/* Color wheel via foreignObject conic gradient */}
            <foreignObject x="20" y="20" width="260" height="260">
              <div style={{
                width: 260, height: 260, borderRadius: '50%',
                background: `conic-gradient(from -90deg, ${stops})`,
              }} />
            </foreignObject>

            {/* White donut hole */}
            <circle cx={cx} cy={cy} r={innerRadius} fill="white" />

            {/* Center label */}
            <text x={cx} y={cy - 4} textAnchor="middle" fontSize="10" fill="#471B78" fontWeight="700">HSL</text>
            <text x={cx} y={cy + 10} textAnchor="middle" fontSize="9" fill="#888">Wheel</text>

            {/* Separation lines between icon colors (not including purple) */}
            {separations.map((sep, i) => {
              const fromColor = colorMap[sep.from];
              const toColor = colorMap[sep.to];
              const fromPt = hueToXY(fromColor.hue, dotRadius);
              const toPt = hueToXY(toColor.hue, dotRadius);
              const status = getLineStatus(sep);
              return (
                <line
                  key={i}
                  className="cw-sep-line"
                  x1={fromPt.x} y1={fromPt.y}
                  x2={toPt.x} y2={toPt.y}
                  stroke={status === 'active' ? '#471B78' : 'rgba(71,27,120,0.2)'}
                  strokeWidth={status === 'active' ? 1.5 : 0.75}
                  strokeDasharray={status === 'active' ? '4 3' : '3 4'}
                  opacity={status === 'dim' ? 0.2 : 1}
                />
              );
            })}

            {/* Color dots */}
            {brandColors.map(c => {
              const pt = hueToXY(c.hue, dotRadius);
              const status = getDotStatus(c);
              const r = c.id === 'purple' ? 13 : 10;
              return (
                <g
                  key={c.id}
                  className="cw-dot"
                  onMouseEnter={() => setActiveId(c.id)}
                  onMouseLeave={() => setActiveId(null)}
                  style={{ opacity: status === 'dim' ? 0.35 : 1 }}
                >
                  {/* White border ring */}
                  <circle cx={pt.x} cy={pt.y} r={r + 2} fill="white" opacity={0.9} />
                  {/* Color fill */}
                  <circle cx={pt.x} cy={pt.y} r={r} fill={c.hex} />
                  {/* Active ring */}
                  {status === 'active' && (
                    <circle cx={pt.x} cy={pt.y} r={r + 4} fill="none" stroke={c.hex} strokeWidth={1.5} opacity={0.6} />
                  )}
                  {/* Degree label */}
                  <text
                    x={hueToXY(c.hue, dotRadius + 20).x}
                    y={hueToXY(c.hue, dotRadius + 20).y + 3}
                    textAnchor="middle"
                    fontSize="8"
                    fill={status === 'active' ? c.hex : '#666'}
                    fontWeight={status === 'active' ? '700' : '400'}
                    fontFamily="monospace"
                  >{c.label}</text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', marginBottom: 8 }}>Brand Hue Positions</div>
          {brandColors.map(c => (
            <div
              key={c.id}
              className="cw-legend-row"
              style={{ background: activeId === c.id ? `${c.hex}12` : 'transparent' }}
              onMouseEnter={() => setActiveId(c.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: c.hex, flexShrink: 0, border: '2px solid rgba(255,255,255,0.4)', boxShadow: `0 0 0 1px ${c.hex}40` }} />
              <div style={{ flex: 1 }}>
                <span style={{ fontWeight: 600, color: activeId === c.id ? c.hex : '#333' }}>{c.name}</span>
                <span style={{ color: '#888', marginLeft: 6, fontSize: 11 }}>{c.note}</span>
              </div>
              <code style={{ fontSize: 11, color: '#888', background: 'rgba(0,0,0,0.05)', padding: '1px 5px', borderRadius: 3 }}>{c.label}</code>
            </div>
          ))}

          <div style={{ marginTop: 16, borderTop: '1px solid rgba(120,64,174,0.1)', paddingTop: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', marginBottom: 8 }}>Icon-to-Icon Separations</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {separations.map((s, i) => (
                <span key={i} style={{
                  fontSize: 11, padding: '3px 8px', borderRadius: 12,
                  background: 'rgba(120,64,174,0.07)', color: '#7840AE',
                  border: '1px solid rgba(120,64,174,0.15)',
                  fontFamily: 'monospace',
                }}>
                  {s.label}
                </span>
              ))}
            </div>
            <p style={{ margin: '8px 0 0', fontSize: 11, color: '#999', lineHeight: 1.5 }}>
              Minimum 40° separation between every pair. All ≥ 30° from core purple (270°).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
