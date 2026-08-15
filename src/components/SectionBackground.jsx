export default function SectionBackground({ variant }) {
  return (
    <svg
      className="section-bg"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {variant === 'circuit' && <CircuitPattern />}
      {variant === 'code' && <CodePattern />}
      {variant === 'hex' && <HexPattern />}
      {variant === 'cap' && <CapPattern />}
      {variant === 'signal' && <SignalPattern />}
      {variant === 'binary' && <BinaryPattern />}
      <style>{`
        .section-bg .draw {
          animation: dashDraw 6s linear infinite;
        }
        .section-bg .pulse {
          animation: bgPulse 3.5s ease-in-out infinite;
        }
        .section-bg .spin-slow {
          animation: bgSpin 22s linear infinite;
          transform-origin: center;
        }
        .section-bg .drift {
          animation: bgDrift 5s ease-in-out infinite;
        }
        @keyframes dashDraw {
          to { stroke-dashoffset: -200; }
        }
        @keyframes bgPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        @keyframes bgSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bgDrift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
    </svg>
  )
}

/* Experience: circuit-board traces */
function CircuitPattern() {
  return (
    <g opacity="0.5" stroke="rgba(244, 63, 142, 0.35)" strokeWidth="2" fill="none">
      <path className="draw" d="M0 120 H180 L220 160 H420" strokeDasharray="8 6" />
      <path className="draw" d="M1200 500 H1020 L980 460 H760" strokeDasharray="8 6" />
      <path className="draw" d="M60 620 H260 L300 580 H520 L560 620 H720" strokeDasharray="8 6" />
      <circle className="pulse" cx="220" cy="160" r="6" fill="rgba(244, 63, 142, 0.6)" stroke="none" />
      <circle className="pulse" cx="420" cy="160" r="6" fill="rgba(244, 63, 142, 0.6)" stroke="none" />
      <circle className="pulse" cx="980" cy="460" r="6" fill="rgba(244, 63, 142, 0.6)" stroke="none" />
      <circle className="pulse" cx="300" cy="580" r="6" fill="rgba(244, 63, 142, 0.6)" stroke="none" />
      <rect x="380" y="130" width="40" height="40" rx="6" opacity="0.4" />
      <rect x="940" y="430" width="40" height="40" rx="6" opacity="0.4" />
    </g>
  )
}

/* Projects: floating code brackets / terminal window (teal/cyan accent) */
function CodePattern() {
  return (
    <g fill="none">
      <text x="80" y="140" fontFamily="ui-monospace, monospace" fontSize="90" fill="rgba(255, 181, 69, 0.16)" className="drift">{'</>'}</text>
      <text x="1000" y="600" fontFamily="ui-monospace, monospace" fontSize="70" fill="rgba(255, 181, 69, 0.13)" className="drift" style={{ animationDelay: '1.2s' }}>{'{ }'}</text>
      <rect x="880" y="60" width="220" height="150" rx="10" stroke="rgba(255, 181, 69, 0.32)" strokeWidth="2" className="pulse" />
      <circle cx="900" cy="82" r="4" fill="rgba(255, 181, 69, 0.45)" />
      <circle cx="915" cy="82" r="4" fill="rgba(255, 181, 69, 0.45)" />
      <circle cx="930" cy="82" r="4" fill="rgba(255, 181, 69, 0.45)" />
      <line x1="900" y1="105" x2="1050" y2="105" stroke="rgba(255, 181, 69, 0.27)" strokeWidth="2" />
      <line x1="900" y1="125" x2="1020" y2="125" stroke="rgba(255, 181, 69, 0.22)" strokeWidth="2" />
      <line x1="900" y1="145" x2="1060" y2="145" stroke="rgba(255, 181, 69, 0.22)" strokeWidth="2" />
      <text x="60" y="560" fontFamily="ui-monospace, monospace" fontSize="14" fill="rgba(255, 181, 69, 0.32)">git commit -m "ship it"</text>
    </g>
  )
}

/* Skills: rotating hex / gear lattice */
function HexPattern() {
  const hex = (cx, cy, r) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
    })
    return pts.join(' ')
  }
  return (
    <g fill="none" stroke="rgba(244, 63, 142, 0.3)" strokeWidth="2">
      <polygon points={hex(150, 140, 70)} className="spin-slow" />
      <polygon points={hex(150, 140, 40)} opacity="0.6" />
      <polygon points={hex(1080, 550, 90)} className="spin-slow" style={{ animationDirection: 'reverse' }} />
      <polygon points={hex(1080, 550, 55)} opacity="0.5" />
      <polygon points={hex(1000, 100, 45)} className="pulse" />
      <polygon points={hex(220, 600, 50)} className="pulse" />
    </g>
  )
}

/* Education: graduation cap outline */
function CapPattern() {
  return (
    <g fill="none">
      <g transform="translate(950,90)" className="drift">
        <path d="M0 20 L90 0 L180 20 L90 40 Z" fill="rgba(244, 63, 142, 0.18)" stroke="rgba(244, 63, 142, 0.35)" strokeWidth="2" />
        <path d="M40 32 L40 62 Q90 82 140 62 L140 32" stroke="rgba(244, 63, 142, 0.3)" strokeWidth="2" />
        <line x1="170" y1="18" x2="170" y2="60" stroke="rgba(244, 63, 142, 0.35)" strokeWidth="2" />
        <circle cx="170" cy="64" r="4" fill="rgba(244, 63, 142, 0.5)" />
      </g>
      <g transform="translate(70,520)" className="drift" style={{ animationDelay: '1.5s' }}>
        <path d="M0 16 L70 0 L140 16 L70 32 Z" fill="rgba(244, 63, 142, 0.14)" stroke="rgba(244, 63, 142, 0.28)" strokeWidth="2" />
      </g>
      <circle cx="600" cy="120" r="3" fill="rgba(244, 63, 142, 0.4)" className="pulse" />
      <circle cx="700" cy="600" r="3" fill="rgba(244, 63, 142, 0.4)" className="pulse" />
    </g>
  )
}

/* Contact: signal / transmission waves */
function SignalPattern() {
  return (
    <g fill="none" stroke="rgba(244, 63, 142, 0.3)" strokeWidth="2">
      <circle cx="1050" cy="150" r="30" className="pulse" />
      <circle cx="1050" cy="150" r="55" className="pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="1050" cy="150" r="80" className="pulse" style={{ animationDelay: '1.2s' }} />
      <circle cx="1050" cy="150" r="4" fill="rgba(244, 63, 142, 0.6)" stroke="none" />
      <circle cx="150" cy="580" r="24" className="pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="150" cy="580" r="46" className="pulse" style={{ animationDelay: '0.9s' }} />
      <path d="M300 100 L340 100 L360 140 L400 60 L420 100 L460 100" opacity="0.35" className="drift" />
    </g>
  )
}

/* Footer: binary drift */
function BinaryPattern() {
  const bits = ['01001', '11010', '00110', '10101', '01110']
  return (
    <g fontFamily="ui-monospace, monospace" fontSize="16" fill="rgba(244, 63, 142, 0.25)">
      {bits.map((b, i) => (
        <text key={b} x={120 + i * 240} y={40 + (i % 2) * 30} className="drift" style={{ animationDelay: `${i * 0.4}s` }}>
          {b}
        </text>
      ))}
    </g>
  )
}
