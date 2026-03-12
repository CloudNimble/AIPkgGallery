export const AIpkgBuild = () => {
  const [publisherVisible, setPublisherVisible] = React.useState(0);
  const [platformVisible, setPlatformVisible] = React.useState(0);
  const [tableStarted, setTableStarted] = React.useState(false);

  const publisherRef = React.useRef(null);
  const platformRef = React.useRef(null);
  const tableRef = React.useRef(null);

  const sysFont = "-apple-system, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif";
  const monoFont = "'Cascadia Code', monospace";
  const spring = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const purpleAccent = '#7840AE';
  const purpleLight = '#C279F0';
  const tealAccent = '#0E8077';
  const tealLight = '#1A9A90';

  const publisherSteps = [
    {
      num: '01',
      title: 'Analyze',
      cmd: 'aipkg pack .',
      desc: 'The CLI detects MCP servers, skills, commands, agents, and prompts.',
    },
    {
      num: '02',
      title: 'Review',
      cmd: null,
      desc: 'Generated .aispec written to disk. Adjust if needed.',
    },
    {
      num: '03',
      title: 'Push',
      cmd: 'aipkg push',
      desc: 'Authenticated. CI-integrated. Server-validated.',
    },
    {
      num: '04',
      title: 'Done',
      cmd: null,
      desc: 'Live on the registry. Every APM platform gets it.',
    },
  ];

  const platformSteps = [
    {
      num: '01',
      title: 'Pick your SDK',
      cmd: null,
      desc: 'Install the AI\u2022Pkg SDK package.',
      langs: ['.NET', 'TypeScript', 'Python'],
    },
    {
      num: '02',
      title: 'Implement APM',
      cmd: null,
      desc: 'Wire up search, browse, and install to our APIs.',
    },
    {
      num: '03',
      title: 'Declare your moniker',
      cmd: null,
      desc: "Register your platform\u2019s APM identifier.",
    },
    {
      num: '04',
      title: 'Ship',
      cmd: null,
      desc: 'Your users get the entire AI\u2022Pkg registry, natively.',
    },
  ];

  const tableRows = [
    { feature: 'Package Format', github: 'Markdown + YAML only', aipkg: '.aipkg archive' },
    { feature: 'MCP Server Support', github: 'Not supported', aipkg: 'Native + per-platform' },
    { feature: 'Platform Adaptation', github: 'Manual, error-prone', aipkg: 'APM fallback graph' },
    { feature: 'Immutable Versions', github: 'Git is mutable', aipkg: 'Content-addressed' },
    { feature: 'Code Signing', github: 'None', aipkg: 'Sigstore-compatible' },
    { feature: 'Post-Install Tampering', github: 'Possible, silent', aipkg: 'Cryptographically prevented' },
    { feature: 'Dependency Resolution', github: 'Not supported', aipkg: 'Semver graph' },
    { feature: 'Deterministic Installs', github: 'No lock files', aipkg: 'Lock file + hashes' },
    { feature: 'Automated Scanning', github: 'None', aipkg: 'AV + AI content audit' },
    { feature: 'Private Packages', github: 'GitHub private repos only', aipkg: 'First-class registry support' },
  ];

  const runCascade = (setFn, total, intervalMs) => {
    let count = 0;
    const id = setInterval(() => {
      count += 1;
      setFn(count);
      if (count >= total) clearInterval(id);
    }, intervalMs);
  };

  React.useEffect(() => {
    const observerOptions = { threshold: 0.15 };

    const publisherObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        publisherObs.disconnect();
        runCascade(setPublisherVisible, publisherSteps.length, 200);
      }
    }, observerOptions);

    const platformObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        platformObs.disconnect();
        runCascade(setPlatformVisible, platformSteps.length, 200);
      }
    }, observerOptions);

    const tableObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        tableObs.disconnect();
        setTableStarted(true);
      }
    }, observerOptions);

    if (publisherRef.current) publisherObs.observe(publisherRef.current);
    if (platformRef.current) platformObs.observe(platformRef.current);
    if (tableRef.current) tableObs.observe(tableRef.current);

    return () => {
      publisherObs.disconnect();
      platformObs.disconnect();
      tableObs.disconnect();
    };
  }, []);

  /* ── Styles ── */

  const sectionStyle = {
    background: '#06060A',
    padding: '100px 24px',
    fontFamily: sysFont,
  };

  const innerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const eyebrowStyle = {
    display: 'inline-block',
    fontFamily: monoFont,
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    color: purpleAccent,
    textTransform: 'uppercase',
    border: '1px solid rgba(120,64,174,0.35)',
    borderRadius: '999px',
    padding: '5px 14px',
    marginBottom: '20px',
  };

  const headlineStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 800,
    fontFamily: sysFont,
    color: '#E8E8F0',
    margin: '0 0 48px 0',
    lineHeight: 1.15,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  };

  const laneBaseStyle = {
    borderRadius: '8px',
    padding: '28px',
  };

  const publisherLaneStyle = {
    ...laneBaseStyle,
    background: 'rgba(120,64,174,0.06)',
    border: '1px solid rgba(194,121,240,0.15)',
    borderLeft: '4px solid ' + purpleAccent,
  };

  const platformLaneStyle = {
    ...laneBaseStyle,
    background: 'rgba(14,128,119,0.06)',
    border: '1px solid rgba(14,128,119,0.15)',
    borderLeft: '4px solid ' + tealAccent,
  };

  const laneLabelStyle = (color) => ({
    fontFamily: monoFont,
    fontSize: '0.65rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color,
    marginBottom: '8px',
  });

  const laneHeaderStyle = (color) => ({
    fontSize: '1.1rem',
    fontWeight: 700,
    fontFamily: sysFont,
    color,
    marginBottom: '24px',
    lineHeight: 1.4,
  });

  const stepCardStyle = (accent) => ({
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid ' + accent,
    borderRadius: '6px',
    padding: '16px 18px',
    marginBottom: '8px',
  });

  const stepNumStyle = (color) => ({
    fontFamily: monoFont,
    fontSize: '0.65rem',
    color,
    letterSpacing: '0.1em',
    marginBottom: '2px',
  });

  const stepTitleStyle = {
    fontSize: '0.92rem',
    fontWeight: 700,
    fontFamily: sysFont,
    color: '#C8C8D2',
    marginBottom: '4px',
  };

  const stepCmdStyle = (accentColor) => ({
    display: 'inline-block',
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '3px',
    padding: '6px 10px',
    color: accentColor,
    fontFamily: monoFont,
    fontSize: '0.8rem',
    marginTop: '6px',
    marginBottom: '6px',
  });

  const stepDescStyle = {
    fontSize: '0.82rem',
    fontFamily: sysFont,
    color: '#555560',
    lineHeight: 1.6,
    margin: 0,
  };

  const langPillStyle = {
    display: 'inline-block',
    fontFamily: monoFont,
    fontSize: '0.7rem',
    color: tealLight,
    border: '1px solid rgba(26,154,144,0.4)',
    borderRadius: '4px',
    padding: '3px 8px',
    marginRight: '6px',
    marginTop: '6px',
  };

  const ctaPurpleStyle = {
    display: 'block',
    marginTop: '20px',
    padding: '14px',
    borderRadius: '6px',
    fontWeight: 700,
    fontFamily: sysFont,
    textAlign: 'center',
    background: 'linear-gradient(135deg, ' + purpleAccent + ' 0%, ' + purpleLight + ' 100%)',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer',
    border: 'none',
  };

  const ctaTealStyle = {
    display: 'block',
    marginTop: '20px',
    padding: '14px',
    borderRadius: '6px',
    fontWeight: 700,
    fontFamily: sysFont,
    textAlign: 'center',
    background: 'transparent',
    color: tealAccent,
    textDecoration: 'none',
    fontSize: '0.9rem',
    border: '2px solid ' + tealAccent,
    cursor: 'pointer',
  };

  /* ── Table styles ── */

  const tableSectionHeaderStyle = {
    fontSize: '1.1rem',
    fontWeight: 700,
    fontFamily: sysFont,
    color: '#C8C8D2',
    marginBottom: '20px',
    marginTop: '48px',
  };

  const tableWrapStyle = {
    background: '#111',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    overflow: 'hidden',
    opacity: tableStarted ? 1 : 0,
    transform: tableStarted ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.6s ' + spring + ', transform 0.6s ' + spring,
  };

  const tableGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  };

  const headerCellBase = {
    padding: '14px 18px',
    fontSize: '0.75rem',
    fontWeight: 700,
    fontFamily: monoFont,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  };

  const featureHeaderStyle = {
    ...headerCellBase,
    color: 'rgba(200,200,210,0.4)',
  };

  const githubHeaderStyle = {
    ...headerCellBase,
    color: 'rgba(220,80,80,0.7)',
    background: 'rgba(220,80,80,0.05)',
    borderLeft: '1px solid rgba(255,255,255,0.06)',
  };

  const aipkgHeaderStyle = {
    ...headerCellBase,
    color: purpleLight,
    background: 'rgba(120,64,174,0.08)',
    borderLeft: '1px solid rgba(255,255,255,0.06)',
  };

  const dataCellBase = (idx) => ({
    padding: '13px 18px',
    fontSize: '0.83rem',
    fontFamily: sysFont,
    lineHeight: 1.5,
    borderBottom: idx < tableRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  });

  const featureCellStyle = (idx) => ({
    ...dataCellBase(idx),
    color: '#7A7A8A',
    fontSize: '0.82rem',
  });

  const githubCellStyle = (idx) => ({
    ...dataCellBase(idx),
    color: 'rgba(200,100,100,0.7)',
    background: 'rgba(220,80,80,0.03)',
    borderLeft: '1px solid rgba(255,255,255,0.04)',
  });

  const aipkgCellStyle = (idx) => ({
    ...dataCellBase(idx),
    color: 'rgba(80,180,160,0.8)',
    background: 'rgba(14,128,119,0.04)',
    borderLeft: '1px solid rgba(255,255,255,0.04)',
  });

  const iconCircleBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    fontSize: '0.65rem',
    fontWeight: 700,
    flexShrink: 0,
  };

  const xCircleStyle = {
    ...iconCircleBase,
    background: 'rgba(220,60,60,0.25)',
    color: '#E05555',
  };

  const checkCircleStyle = {
    ...iconCircleBase,
    background: 'rgba(14,128,119,0.3)',
    color: tealLight,
  };

  const getStepStyle = (idx, visible, direction) => ({
    opacity: idx < visible ? 1 : 0,
    transform: idx < visible
      ? 'translateX(0)'
      : 'translateX(' + (direction === 'left' ? '-20px' : '20px') + ')',
    transition: 'opacity 0.5s ' + spring + ', transform 0.5s ' + spring,
  });

  /* ── Render ── */

  return (
    React.createElement('section', { style: sectionStyle },
      React.createElement('style', null,
        '@media (max-width: 768px) { .aipkg-build-grid { grid-template-columns: 1fr !important; } .aipkg-build-table-grid { grid-template-columns: 1fr !important; } }'
      ),
      React.createElement('div', { style: innerStyle },

        /* Header */
        React.createElement('div', { style: eyebrowStyle }, 'THE BUILD'),

        React.createElement('h2', { style: headlineStyle }, 'Everything you need, for either side.'),

        /* Two swim lanes */
        React.createElement('div', { style: gridStyle, className: 'aipkg-build-grid' },

          /* ── Publisher Lane ── */
          React.createElement('div', { style: publisherLaneStyle, ref: publisherRef },
            React.createElement('div', { style: laneLabelStyle(purpleAccent) }, 'FOR PUBLISHERS'),
            React.createElement('div', { style: laneHeaderStyle(purpleLight) },
              'The CLI reads your code. The manifest writes itself.'
            ),

            publisherSteps.map((step, idx) =>
              React.createElement('div', {
                key: step.num,
                style: Object.assign(
                  {},
                  stepCardStyle('rgba(194,121,240,0.1)'),
                  getStepStyle(idx, publisherVisible, 'left')
                ),
              },
                React.createElement('div', { style: stepNumStyle('rgba(194,121,240,0.4)') }, 'STEP ' + step.num),
                React.createElement('div', { style: stepTitleStyle }, step.title),
                step.cmd && React.createElement('div', { style: stepCmdStyle(purpleLight) }, step.cmd),
                React.createElement('p', { style: stepDescStyle }, step.desc)
              )
            ),

            React.createElement('a', { href: '/for-publishers', style: ctaPurpleStyle },
              'Start publishing \u2192'
            )
          ),

          /* ── Platform Lane ── */
          React.createElement('div', { style: platformLaneStyle, ref: platformRef },
            React.createElement('div', { style: laneLabelStyle(tealAccent) }, 'FOR PLATFORMS'),
            React.createElement('div', { style: laneHeaderStyle(tealAccent) },
              'Your stack, our registry.'
            ),

            platformSteps.map((step, idx) =>
              React.createElement('div', {
                key: step.num,
                style: Object.assign(
                  {},
                  stepCardStyle('rgba(14,128,119,0.15)'),
                  getStepStyle(idx, platformVisible, 'right')
                ),
              },
                React.createElement('div', { style: stepNumStyle('rgba(14,128,119,0.5)') }, 'STEP ' + step.num),
                React.createElement('div', { style: stepTitleStyle }, step.title),
                step.langs && React.createElement('div', { style: { marginTop: '6px', marginBottom: '4px' } },
                  step.langs.map((lang) =>
                    React.createElement('span', { key: lang, style: langPillStyle }, lang)
                  )
                ),
                React.createElement('p', { style: stepDescStyle }, step.desc)
              )
            ),

            React.createElement('a', { href: '/for-platforms', style: ctaTealStyle },
              'Implement the SDK \u2192'
            )
          )
        ),

        /* ── Comparison Table ── */
        React.createElement('div', { ref: tableRef },
          React.createElement('h3', { style: tableSectionHeaderStyle },
            'GitHub-Based Skills vs. AI\u2022Pkg'
          ),

          React.createElement('div', { style: tableWrapStyle },
            React.createElement('div', { style: tableGridStyle, className: 'aipkg-build-table-grid' },
              React.createElement('div', { style: featureHeaderStyle }, 'Feature'),
              React.createElement('div', { style: githubHeaderStyle }, 'GitHub Skill Files'),
              React.createElement('div', { style: aipkgHeaderStyle }, 'AI\u2022Pkg Registry')
            ),

            tableRows.map((row, idx) =>
              React.createElement('div', { key: row.feature, style: tableGridStyle, className: 'aipkg-build-table-grid' },
                React.createElement('div', { style: featureCellStyle(idx) }, row.feature),

                React.createElement('div', { style: githubCellStyle(idx) },
                  React.createElement('span', { style: xCircleStyle }, '\u2717'),
                  row.github
                ),

                React.createElement('div', { style: aipkgCellStyle(idx) },
                  React.createElement('span', { style: checkCircleStyle }, '\u2713'),
                  row.aipkg
                )
              )
            )
          )
        )

      )
    )
  );
};
