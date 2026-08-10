export default function HeroBackground() {
  return (
    <svg
      className="hero-background"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(99, 102, 241, 0.15)" />
          <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
        </linearGradient>
        <linearGradient id="gradDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(129, 140, 248, 0.2)" />
          <stop offset="100%" stopColor="rgba(129, 140, 248, 0.05)" />
        </linearGradient>
        <pattern id="dots" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="40" r="2" fill="rgba(99, 102, 241, 0.1)" />
        </pattern>
      </defs>

      {/* Background gradient */}
      <rect width="1200" height="600" fill="url(#gradLight)" className="hero-grad" />
      <rect width="1200" height="600" fill="url(#dots)" />

      {/* Animated circles and tech elements */}
      <g className="tech-elements">
        {/* Large circles */}
        <circle cx="100" cy="100" r="150" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="2" className="circle-lg" />
        <circle cx="1100" cy="500" r="200" fill="none" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="2" className="circle-lg" />

        {/* Connected nodes - network visualization */}
        <circle cx="200" cy="150" r="8" fill="rgba(99, 102, 241, 0.3)" className="node" />
        <circle cx="400" cy="200" r="8" fill="rgba(99, 102, 241, 0.3)" className="node" />
        <circle cx="600" cy="300" r="8" fill="rgba(99, 102, 241, 0.3)" className="node" />
        <circle cx="800" cy="250" r="8" fill="rgba(99, 102, 241, 0.3)" className="node" />
        <circle cx="1000" cy="350" r="8" fill="rgba(99, 102, 241, 0.3)" className="node" />

        {/* Connection lines */}
        <line x1="200" y1="150" x2="400" y2="200" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" />
        <line x1="400" y1="200" x2="600" y2="300" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" />
        <line x1="600" y1="300" x2="800" y2="250" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" />
        <line x1="800" y1="250" x2="1000" y2="350" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" />
        <line x1="600" y1="300" x2="200" y2="150" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1" strokeDasharray="5,5" />

        {/* Code/Data visualization elements */}
        <g opacity="0.1">
          <text x="50" y="500" fontSize="12" fill="rgba(99, 102, 241, 0.5)" fontFamily="monospace" className="code-text">
            &lt;algorithm&gt;
          </text>
          <text x="1000" y="150" fontSize="12" fill="rgba(99, 102, 241, 0.5)" fontFamily="monospace" className="code-text">
            $ build_system()
          </text>
          <text x="100" y="450" fontSize="12" fill="rgba(99, 102, 241, 0.5)" fontFamily="monospace" className="code-text">
            [ data flow ]
          </text>
        </g>

        {/* Small decorative elements */}
        <rect x="150" y="500" width="60" height="60" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" rx="5" className="square" />
        <rect x="950" y="100" width="80" height="80" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" rx="5" className="square" />

        {/* Floating nodes */}
        <circle cx="300" cy="450" r="6" fill="rgba(99, 102, 241, 0.25)" className="float-node" />
        <circle cx="900" cy="450" r="6" fill="rgba(99, 102, 241, 0.25)" className="float-node" />
      </g>

      <style>{`
        @media (prefers-color-scheme: dark) {
          .hero-grad {
            opacity: 0.6;
          }
        }

        [data-theme="dark"] .hero-grad {
          fill: url(#gradDark);
        }

        .circle-lg {
          animation: pulse 4s ease-in-out infinite;
        }

        .node {
          animation: glow 3s ease-in-out infinite;
        }

        .float-node {
          animation: float 4s ease-in-out infinite;
        }

        .square {
          animation: rotate-slow 8s linear infinite;
        }

        @keyframes pulse {
          0%, 100% { r: 140; opacity: 0.1; }
          50% { r: 160; opacity: 0.15; }
        }

        @keyframes glow {
          0%, 100% { r: 8; opacity: 0.3; }
          50% { r: 12; opacity: 0.5; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-20px); opacity: 0.4; }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  )
}
