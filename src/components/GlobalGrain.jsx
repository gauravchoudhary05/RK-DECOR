'use client';

export default function GlobalGrain() {
  return (
    <>
      <style>{`
        @keyframes globalGrain {
          0%, 100% { transform: translate(0, 0); }
          10%      { transform: translate(-1%, -2%); }
          20%      { transform: translate(2%, 1%); }
          30%      { transform: translate(-1%, 3%); }
          40%      { transform: translate(1%, -1%); }
          50%      { transform: translate(-2%, 2%); }
          60%      { transform: translate(2%, -2%); }
          70%      { transform: translate(-1%, 1%); }
          80%      { transform: translate(1%, 2%); }
          90%      { transform: translate(-2%, -1%); }
        }
        .global-grain-overlay {
          position: fixed;
          inset: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.025;
          animation: globalGrain 8s steps(1) infinite;
          pointer-events: none;
          z-index: 1; /* Sits behind standard z-10 content but above base backgrounds */
          will-change: transform;
        }
      `}</style>
      <div className="global-grain-overlay" aria-hidden="true" />
    </>
  );
}
