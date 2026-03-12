// Option B (Chromatic) logo with interactive element anatomy
export const LogoAnatomy = () => {
  const [hovered, setHovered] = React.useState(null);

  const elements = [
    {
      id: 'box',
      label: 'Box Body',
      color: '#7840AE',
      gradient: 'linear-gradient(to bottom, #C279F0, #7840AE)',
      hex: '#C279F0 → #7840AE',
      role: 'Core structural form — the isometric package in the primary purple gradient.',
      zone: { left: '26.8%', top: '24%', width: '46%', height: '36%' },
    },
    {
      id: 'ribbon-left',
      label: 'Left Ribbon',
      color: '#8A57C6',
      gradient: '#8A57C6',
      hex: '#8A57C6',
      role: 'Ribbon wrap sweeping across the left face. Purple Medium — slightly lighter than the box to add depth.',
      zone: { left: '22%', top: '11%', width: '46%', height: '16%' },
    },
    {
      id: 'ribbon-right',
      label: 'Right Ribbon Tab',
      color: '#F1E8F1',
      gradient: 'linear-gradient(to bottom, #F1E8F1, rgba(241,232,241,0.25))',
      hex: '#F1E8F1 → 25%',
      role: 'Vertical right ribbon with a fade-out gradient. Lavender Pale creates contrast without competing with the box.',
      zone: { left: '59.2%', top: '48%', width: '6.4%', height: '20%' },
    },
    {
      id: 'servers',
      label: 'Servers Icon',
      color: '#0E8077',
      gradient: '#0E8077',
      hex: '#0E8077',
      role: 'Infrastructure & hosting capability. Deep teal at 175° — near-complementary to purple, creating strong visual tension.',
      zone: { left: '59.2%', top: '13.2%', width: '13.2%', height: '12.4%' },
    },
    {
      id: 'database',
      label: 'Database Icon',
      color: '#B98112',
      gradient: '#B98112',
      hex: '#B98112',
      role: 'Storage & data capability. Warm amber at 40° — the strongest warm-cool contrast in the icon set.',
      zone: { left: '27.6%', top: '12.8%', width: '13.6%', height: '13.6%' },
    },
    {
      id: 'prompt',
      label: 'Prompt Icon',
      color: '#3061A6',
      gradient: '#3061A6',
      hex: '#3061A6',
      role: 'Interaction & input capability. Royal blue at 215° — bridges the cool-tone range between teal and purple.',
      zone: { left: '43.2%', top: '3.6%', width: '13.6%', height: '13.6%' },
    },
    {
      id: 'code',
      label: 'Code Icon',
      color: '#B32C38',
      gradient: '#B32C38',
      hex: '#B32C38',
      role: 'Creation & syntax capability. Warm crimson at 355° — forms the warm pole of the palette with amber.',
      zone: { left: '43.2%', top: '21.2%', width: '13.6%', height: '13.6%' },
    },
    {
      id: 'wordmark',
      label: 'Wordmark',
      color: '#471B78',
      gradient: '#471B78',
      hex: '#471B78',
      role: 'AI•Pkg letterforms set in Poppins SemiBold. Purple Deep — the darkest value, providing visual "ink" weight.',
      zone: { left: '14%', top: '76%', width: '72%', height: '22%' },
    },
  ];

  const hoveredEl = elements.find(e => e.id === hovered);

  const svgMarkup = `<svg width="100%" height="100%" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="250" height="250" fill="white"/>
<path d="M53.89 193.01H64.76L82.78 231.71H70.57L67.29 224.26H50.24L47.72 231.71H35.87L53.89 193.01ZM63.89 215.72L59.22 203.32L53.64 215.72H63.89Z" fill="#471B78"/>
<path d="M85.81 192.63H96.28V231.71H85.81V192.63Z" fill="#471B78"/>
<path d="M104.27 192.31H122.41C133.28 192.31 139.12 198.79 138.86 206.24C138.61 214.65 132.77 220.94 122.41 220.94H115.12V231.71H104.27V192.31ZM121.16 212.19C126.74 212.19 128.05 208.91 128.05 206.24C128.05 202.96 125.46 200.62 121.16 200.62H114.61V212.19H121.16Z" fill="#471B78"/>
<path d="M143.79 190.36H154.39V211.73L165.13 201.12H177.15L165.46 213.63L178.92 231.71H165.96L157.91 220.01L154.39 223.88V231.71H143.79V190.36Z" fill="#471B78"/>
<path d="M181.04 239.9L185.11 232.63C188.4 235.04 191.92 236.16 195.61 236.16C201.19 236.16 202.63 232.82 202.63 227.92V226.36C200.76 229.16 197.73 230.41 193.79 230.41C184.86 230.41 179.28 223.31 179.28 215.15C179.28 206.99 185.37 201.06 193.28 201.06C197.73 201.06 200.76 202.44 202.63 205.11V201.51H212V226.75C212 237.66 206.42 243.88 195.1 243.88C189.26 243.88 184.59 242.32 181.04 239.9ZM195.61 222.38C200.21 222.38 201.91 218.64 201.91 215.43C201.91 211.76 199.01 208.97 195.35 208.97C190.75 208.97 188.95 212.25 188.95 215.43C188.95 219.1 191.61 222.38 195.61 222.38Z" fill="#471B78"/>
<path d="M145.5 136.5L169.5 126L166.5 121.5L145.5 131V136.5Z" fill="#7840AE" fill-opacity="0.68"/>
<path d="M67.72 82.5V142.68C67.72 146.28 68.71 148.11 72.04 149.73L124.69 173L177.92 148.61C181.08 147.06 182.01 145.07 182.01 141.35V82.5L125.29 60.5L67.72 82.5Z" fill="url(#la_grad0)" stroke="#471B78" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124 112.5L112.18 138.1C111.39 139.73 110.38 139.93 108.73 139.22L69.5 121V115L124 93.5V112.5Z" fill="#7840AE"/>
<path d="M124 113L138.4 136.99C139.19 138.39 140.2 138.96 141.85 138.1L180 121.5V111L124 93.5V113Z" fill="#7840AE"/>
<path d="M148.26 127.5V161.23L163.85 153.72V120.5L148.26 127.5Z" fill="#F1E8F1" stroke="#471B78" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124.69 109.06L141.82 129.39C142.45 130.25 143.08 130.11 144.33 129.39L197.18 105.33C198.12 104.83 197.66 104.04 197.18 103.43L183.76 83.82C182.51 82.2 181.43 82.2 179.21 83.01L124.69 108.11V109.06Z" fill="url(#la_grad1)" stroke="#471B78" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M123.51 108.62L109.86 129.41C108.92 130.88 108.44 130.96 107.03 130.11L52.67 105.33C51.42 104.76 51.89 104.04 52.67 103.02L65.94 84.11C67.19 82.49 68.49 82.06 70.14 82.63L123.51 107.58V108.62Z" fill="url(#la_grad2)" stroke="#471B78" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124 108V172.1" stroke="#471B78" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M163.578 50.0788L158.806 38.5795C155.123 29.7034 144.341 29.0562 135.267 29L129.283 29.2959L83 37.2311L84.7102 37.6475C88.0861 44.1393 97.6932 47.7748 109.688 47.3014C118.837 47.067 137.14 43.9758 150.539 46.1568C156.569 47.2271 161.742 47.2461 163.578 50.0788Z" fill="#8A57C6" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M181.12 35.21C189.98 38.39 194.5 41.24 194.5 49C194.5 52.06 190.96 54.82 187.5 57.5L181.12 52.06V35.21Z" fill="#8A57C6" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M125.29 105.04C124.38 96.11 128.08 83.28 149.41 73.61C153.71 71.61 172.24 66.81 178.89 63.02C184.59 59.88 189.91 57.22 194.31 50.05V60.84C194.31 70.45 184.91 75.77 170.61 79.61C157.51 83.36 141.03 86.13 137.92 99.91L125.29 105.04Z" fill="url(#la_grad3)"/>
<path d="M125.29 106.04C124.38 97.11 128.08 84.28 149.41 74.61C153.71 72.61 170.61 67.81 177.26 64.02C182.96 60.88 189.91 58.22 194.31 51.05V61.84C194.31 71.45 184.91 76.77 170.61 80.61C157.51 84.36 141.03 87.13 137.92 100.91L125.29 106.04Z" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M68.99 35.21C60.13 38.39 56.16 41.52 55.61 48.96C55.36 52.49 57.28 55.33 60.74 58.41L68.99 52.91V35.21Z" fill="#8A57C6" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.61 48.39V60.84C55.61 70.45 63.78 75.18 73.65 78.71L79.95 80.73L105.29 90.71L104.71 82.81C104.08 78.08 101.31 73.93 96.52 72.12C88.78 69.19 69.78 64.16 64.08 59.06C60.01 56.07 56.23 52.81 55.61 48.39Z" fill="#F1E8F1" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M148 43H181V54H148V43Z" fill="#EFF4F4" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M148 54H181V61.2244C181 62.9883 178.958 64 177.675 64H151.416C149.405 64 148 62.4306 148 59.6031V54Z" fill="#0E8077" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M148 43H181V35.7756C181 34.0117 178.958 33 177.675 33H151.416C149.405 33 148 34.5694 148 37.3969V43Z" fill="#EFF4F4" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M152.85 39.9405C154.48 39.9405 155.3 38.0805 154.28 36.6805C153.37 35.3905 151 36.0405 151 37.7405C151 38.9905 151.85 39.9405 152.85 39.9405Z" fill="#471B78"/>
<path d="M152.99 50.05C154.62 50.05 155.44 48.19 154.42 46.79C153.51 45.5 151.14 46.15 151.14 47.85C151.14 49.03 152.05 50.05 152.99 50.05Z" fill="#471B78"/>
<path d="M152.85 60.9405C154.48 60.9405 155.3 59.0805 154.28 57.6805C153.37 56.3905 151 57.0405 151 58.7405C151 59.9905 151.84 60.9405 152.85 60.9405Z" fill="#471B78"/>
<path d="M173 38H176.11" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M173 48H176.11" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M173 59H176.11" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M72.77 32H99.51C101.75 32 102.44 33.83 102.44 35.59V62.77C102.44 64.89 101.13 66.14 98.86 66.14H72.84C70.32 66.14 69 64.89 69 62.52V35.44C69 33.69 70.32 32 72.77 32Z" fill="#EFECE5" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M94.87 39.9V58.06C94.87 60.18 89.96 61.23 85.73 61.23C81.5 61.23 76.11 60.18 76.11 58.06V39.9H94.87Z" fill="#B98112" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M85.2108 44C91.23 44 95 42.3204 95 40.2718C95 38.2136 91.23 37 85.2108 37C79.1917 37 76 38.2136 76 40.2718C76 42.3204 79.1917 44 85.2108 44Z" fill="#F4F3EF" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M76.11 46.23C76.11 48.34 79.95 49.6 85.57 49.6C91.19 49.6 94.87 48.34 94.87 46.23" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M76.11 52.12C76.11 54.23 79.95 55.49 85.57 55.49C91.19 55.49 94.87 54.23 94.87 52.12" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M111.84 9H138.3C140.75 9 141.44 10.83 141.44 12.32V39.91C141.44 42.03 139.95 43.28 137.86 43.28H112.24C109.72 43.28 108 41.96 108 39.3V11.95C108 10.26 109.01 9 111.84 9Z" fill="#E7EAED" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M114.11 20.76H122.02" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M118.62 25.08H128.02" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M119.43 29.11H135.11" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M120.25 33.15H129.03" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M116.16 37.91H122.83" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M108 16.04H141.44V12.3C141.44 10.54 140.13 9 138.24 9H112.24C109.86 9 108 10.33 108 12.59V16.04Z" fill="#3061A6" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112.4 14.0057C113.26 14.0057 113.7 13.0257 113.15 12.2657C112.53 11.4757 111.18 11.9957 111.31 12.9557C111.39 13.5657 111.88 14.0057 112.4 14.0057Z" fill="#471B78"/>
<path d="M115.68 14.0057C116.54 14.0057 116.98 13.0257 116.43 12.2657C115.81 11.4757 114.46 11.9957 114.6 12.9557C114.67 13.5657 115.16 14.0057 115.68 14.0057Z" fill="#471B78"/>
<path d="M118.68 14.0057C119.54 14.0057 119.98 13.0257 119.43 12.2657C118.81 11.4757 117.46 11.9957 117.6 12.9557C117.67 13.5657 118.16 14.0057 118.68 14.0057Z" fill="#471B78"/>
<path d="M112.18 53.12H138.92C141.16 53.12 141.85 54.95 141.85 56.71V83.89C141.85 86.01 140.54 87.26 138.27 87.26H112.25C109.73 87.26 108.41 86.01 108.41 83.64V56.56C108.41 54.81 109.73 53.12 112.18 53.12Z" fill="#EEE6E7" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M108.41 60.16H141.85V56.42C141.85 54.66 140.54 53.12 138.65 53.12H112.65C110.27 53.12 108.41 54.45 108.41 56.71V60.16Z" fill="#B32C38" stroke="#471B78" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112.81 58.1257C113.67 58.1257 114.11 57.1457 113.56 56.3857C112.94 55.5957 111.59 56.1157 111.72 57.0757C111.8 57.6857 112.29 58.1257 112.81 58.1257Z" fill="#471B78"/>
<path d="M116.09 58.1257C116.95 58.1257 117.39 57.1457 116.84 56.3857C116.22 55.5957 114.87 56.1157 115.01 57.0757C115.08 57.6857 115.57 58.1257 116.09 58.1257Z" fill="#471B78"/>
<path d="M119.09 58.1257C119.95 58.1257 120.39 57.1457 119.84 56.3857C119.22 55.5957 117.87 56.1157 118.01 57.0757C118.08 57.6857 118.57 58.1257 119.09 58.1257Z" fill="#471B78"/>
<path d="M119.43 69.05L115.34 74.41L119.43 78.92" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M130.47 69.05L134.56 73.93L130.47 78.92" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M126.79 67.36L122.42 82.2" stroke="#471B78" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="la_grad0" x1="124.866" y1="103.828" x2="124.866" y2="173" gradientUnits="userSpaceOnUse">
<stop stop-color="#C279F0"/>
<stop offset="1" stop-color="#7840AE"/>
</linearGradient>
<linearGradient id="la_grad1" x1="161.454" y1="82.0293" x2="161.454" y2="130.11" gradientUnits="userSpaceOnUse">
<stop stop-color="#C279F0"/>
<stop offset="1" stop-color="#9A66E2"/>
</linearGradient>
<linearGradient id="la_grad2" x1="87.8005" y1="82.3672" x2="87.8005" y2="130.801" gradientUnits="userSpaceOnUse">
<stop stop-color="#C279F0"/>
<stop offset="1" stop-color="#9A66E2"/>
</linearGradient>
<linearGradient id="la_grad3" x1="159.799" y1="50.0469" x2="159.799" y2="105.039" gradientUnits="userSpaceOnUse">
<stop stop-color="#F1E8F1"/>
<stop offset="1" stop-color="#F1E8F1" stop-opacity="0.25"/>
</linearGradient>
</defs>
</svg>`;

  return (
    <div className="not-prose" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        .la-zone {
          position: absolute;
          cursor: crosshair;
          border-radius: 4px;
          transition: background 0.15s ease, outline 0.15s ease;
        }
        .la-zone:hover { background: rgba(120, 64, 174, 0.12); outline: 2px solid rgba(120, 64, 174, 0.5); }
        .la-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 10px; border-radius: 20px; font-size: 11px; font-weight: 500;
          border: 1px solid rgba(255,255,255,0.08); cursor: default;
          transition: opacity 0.15s;
        }
        .la-chip:hover { opacity: 0.8; }
      `}</style>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Logo */}
        <div style={{ width: 280, height: 280, flexShrink: 0, borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(120,64,174,0.15)' }}
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />

        {/* Info / legend panel */}
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{
            background: hoveredEl ? `${hoveredEl.color}14` : 'rgba(120,64,174,0.06)',
            border: `1px solid ${hoveredEl ? `${hoveredEl.color}40` : 'rgba(120,64,174,0.15)'}`,
            borderRadius: 10, padding: '16px 18px', marginBottom: 14,
            minHeight: 90, transition: 'all 0.2s ease',
          }}>
            {hoveredEl ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', background: hoveredEl.gradient, flexShrink: 0, border: '2px solid rgba(255,255,255,0.3)' }} />
                  <span style={{ fontWeight: 700, fontSize: 14, color: hoveredEl.color }}>{hoveredEl.label}</span>
                  <code style={{ fontSize: 11, background: 'rgba(0,0,0,0.08)', padding: '2px 6px', borderRadius: 4, color: '#555', marginLeft: 'auto' }}>{hoveredEl.hex}</code>
                </div>
                <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: '#444' }}>{hoveredEl.role}</p>
              </>
            ) : (
              <p style={{ margin: 0, fontSize: 12, color: '#888', lineHeight: 1.6 }}>
                Hover over a chip below to learn about each logo element.
              </p>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {elements.map(el => (
              <div
                key={el.id}
                className="la-chip"
                style={{
                  background: hovered === el.id ? `${el.color}20` : 'rgba(120,64,174,0.06)',
                  color: hovered === el.id ? el.color : '#555',
                  borderColor: hovered === el.id ? `${el.color}50` : 'rgba(120,64,174,0.15)',
                }}
                onMouseEnter={() => setHovered(el.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: el.color, flexShrink: 0 }} />
                {el.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
