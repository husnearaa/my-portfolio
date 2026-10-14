"use client";
// components/BackgroundAnimation.jsx
// Subtle CSS-only dot grid with a slow drifting radial glow
// Performance: zero JS animation loop — pure CSS, GPU-composited only
// Color palette: #0f0f0d base, #00E676 green accent, #00BCD4 cyan, #E040FB purple

export default function BackgroundAnimation() {
  return (
    <>
      {/* ── 1. Dot grid ── */}
      <div
        aria-hidden="true"
        className="dot-grid"
      />

      {/* ── 2. Slow drifting glow orbs ── */}
      <div aria-hidden="true" className="orb orb-green" />
      <div aria-hidden="true" className="orb orb-cyan" />
      <div aria-hidden="true" className="orb orb-purple" />

      <style>{`
        /* shared: fixed, full viewport, no pointer events */
        .dot-grid,
        .orb {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Dot grid ──
           SVG data-URI: 1px green dot on transparent, 28px repeat
           Opacity kept very low so it reads as texture, not pattern */
        .dot-grid {
          background-image: radial-gradient(
            circle,
            rgba(0, 230, 118, 0.30) 1px,
            transparent 1px
          );
          background-size: 28px 28px;
          opacity: 0.45;
        }

        /* ── Orb base ──
           Large radial blur — no canvas, no JS, GPU opacity only */
        .orb {
          border-radius: 50%;
         
          opacity: 0;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }

        /* Green orb — top-left drift */
        .orb-green {
          width: 55vw;
          height: 55vw;
          top: -15vw;
          left: -10vw;
          background: radial-gradient(
            circle,
            rgba(0, 230, 118, 0.07) 0%,
            transparent 70%
          );
          animation-name: drift-green;
          animation-duration: 22s;
          animation-delay: 0s;
        }

        /* Cyan orb — bottom-right drift */
        .orb-cyan {
          width: 45vw;
          height: 45vw;
          bottom: -10vw;
          right: -8vw;
          background: radial-gradient(
            circle,
            rgba(0, 188, 212, 0.06) 0%,
            transparent 70%
          );
          animation-name: drift-cyan;
          animation-duration: 28s;
          animation-delay: -8s;
        }

        /* Purple orb — center drift */
        .orb-purple {
          width: 40vw;
          height: 40vw;
          top: 30vh;
          left: 30vw;
          background: radial-gradient(
            circle,
            rgba(224, 64, 251, 0.045) 0%,
            transparent 70%
          );
          animation-name: drift-purple;
          animation-duration: 34s;
          animation-delay: -14s;
        }

        /* Keyframes — translate only (GPU compositor, no repaints) */
        @keyframes drift-green {
          0%   { opacity: 0.6; transform: translate(0,    0);    }
          50%  { opacity: 0.9; transform: translate(6vw,  8vh);  }
          100% { opacity: 0.6; transform: translate(3vw,  14vh); }
        }

        @keyframes drift-cyan {
          0%   { opacity: 0.5; transform: translate(0,    0);     }
          50%  { opacity: 0.8; transform: translate(-8vw, -6vh);  }
          100% { opacity: 0.5; transform: translate(-4vw, -12vh); }
        }

        @keyframes drift-purple {
          0%   { opacity: 0.4; transform: translate(0,   0);    }
          50%  { opacity: 0.7; transform: translate(5vw, -8vh); }
          100% { opacity: 0.4; transform: translate(-5vw, 6vh); }
        }

        /* Reduce motion: freeze everything */
        @media (prefers-reduced-motion: reduce) {
          .dot-grid { opacity: 0.2; }
          .orb { animation: none; opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
