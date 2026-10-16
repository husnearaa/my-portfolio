export default function BackgroundAnimation() {
  return (
    <>
      {/* Dot grid */}
      <div aria-hidden="true" className="dot-grid" />

      {/* Subtle drifting glow orbs */}
      <div aria-hidden="true" className="orb orb-white" />
      <div aria-hidden="true" className="orb orb-gray" />
      <div aria-hidden="true" className="orb orb-light" />

      <style>{`
        .dot-grid,
        .orb {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* Subtle white dot grid */
        .dot-grid {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.22) 1px,
            transparent 1px
          );
          background-size: 28px 28px;
          opacity: 0.35;
        }

        /* Shared glow settings */
        .orb {
          border-radius: 50%;
          opacity: 0;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }

        /* White glow — top-left */
        .orb-white {
          width: 55vw;
          height: 55vw;
          top: -15vw;
          left: -10vw;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.065) 0%,
            transparent 70%
          );
          animation-name: drift-white;
          animation-duration: 22s;
          animation-delay: 0s;
        }

        /* Gray glow — bottom-right */
        .orb-gray {
          width: 45vw;
          height: 45vw;
          bottom: -10vw;
          right: -8vw;
          background: radial-gradient(
            circle,
            rgba(156, 163, 175, 0.065) 0%,
            transparent 70%
          );
          animation-name: drift-gray;
          animation-duration: 28s;
          animation-delay: -8s;
        }

        /* Soft silver glow — center */
        .orb-light {
          width: 40vw;
          height: 40vw;
          top: 30vh;
          left: 30vw;
          background: radial-gradient(
            circle,
            rgba(209, 213, 219, 0.04) 0%,
            transparent 70%
          );
          animation-name: drift-light;
          animation-duration: 34s;
          animation-delay: -14s;
        }

        /* Smooth GPU-friendly drifting animations */
        @keyframes drift-white {
          0% {
            opacity: 0.6;
            transform: translate(0, 0);
          }
          50% {
            opacity: 0.9;
            transform: translate(6vw, 8vh);
          }
          100% {
            opacity: 0.6;
            transform: translate(3vw, 14vh);
          }
        }

        @keyframes drift-gray {
          0% {
            opacity: 0.5;
            transform: translate(0, 0);
          }
          50% {
            opacity: 0.8;
            transform: translate(-8vw, -6vh);
          }
          100% {
            opacity: 0.5;
            transform: translate(-4vw, -12vh);
          }
        }

        @keyframes drift-light {
          0% {
            opacity: 0.4;
            transform: translate(0, 0);
          }
          50% {
            opacity: 0.7;
            transform: translate(5vw, -8vh);
          }
          100% {
            opacity: 0.4;
            transform: translate(-5vw, 6vh);
          }
        }

        /* Respect reduced-motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .dot-grid {
            opacity: 0.2;
          }

          .orb {
            animation: none;
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
}