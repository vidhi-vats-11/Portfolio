export default function HeroBackground() {
  return (
    <div className="hero-background hero-blobs" aria-hidden="true">
      <span className="hero-blob hero-blob-1" />
      <span className="hero-blob hero-blob-2" />
      <span className="hero-blob hero-blob-3" />
      <span className="hero-sparkle hero-sparkle-1">✦</span>
      <span className="hero-sparkle hero-sparkle-2">✦</span>
      <span className="hero-sparkle hero-sparkle-3">✧</span>
      <style>{`
        .hero-blobs {
          overflow: hidden;
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.55;
          will-change: transform;
        }

        .hero-blob-1 {
          width: 480px;
          height: 480px;
          top: -160px;
          left: -120px;
          background: radial-gradient(circle at 30% 30%, rgba(244, 63, 142, 0.55), transparent 70%);
          animation: blobDrift1 16s ease-in-out infinite;
        }

        .hero-blob-2 {
          width: 420px;
          height: 420px;
          bottom: -140px;
          right: -100px;
          background: radial-gradient(circle at 60% 40%, rgba(255, 181, 69, 0.45), transparent 70%);
          animation: blobDrift2 20s ease-in-out infinite;
        }

        .hero-blob-3 {
          width: 340px;
          height: 340px;
          top: 40%;
          left: 50%;
          background: radial-gradient(circle at 50% 50%, rgba(255, 143, 192, 0.35), transparent 70%);
          animation: blobDrift3 18s ease-in-out infinite;
        }

        @keyframes blobDrift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.08); }
        }

        @keyframes blobDrift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -40px) scale(1.1); }
        }

        @keyframes blobDrift3 {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-50%, -25px) scale(0.92); }
        }

        .hero-sparkle {
          position: absolute;
          color: rgba(255, 212, 121, 0.7);
          font-size: 1.1rem;
          animation: sparkleTwinkle 3.4s ease-in-out infinite;
        }

        .hero-sparkle-1 { top: 18%; left: 12%; font-size: 1.4rem; animation-delay: 0s; }
        .hero-sparkle-2 { top: 28%; right: 14%; animation-delay: 1.1s; color: rgba(244, 63, 142, 0.6); }
        .hero-sparkle-3 { bottom: 22%; left: 20%; font-size: 0.9rem; animation-delay: 2s; }

        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.25; transform: scale(0.85) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1.15) rotate(12deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-blob, .hero-sparkle {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .hero-blob-1 { width: 300px; height: 300px; top: -100px; left: -80px; }
          .hero-blob-2 { width: 260px; height: 260px; bottom: -90px; right: -70px; }
          .hero-blob-3 { width: 220px; height: 220px; }
          .hero-sparkle { display: none; }
        }
      `}</style>
    </div>
  )
}
