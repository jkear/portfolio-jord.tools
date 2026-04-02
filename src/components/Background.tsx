export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#060a12]" />

      {/* Fine noise grain */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px',
        }}
      />

      {/* ── Aurora Layer 1 · Teal-Green · top-left ── */}
      <div
        className="aurora-a absolute"
        style={{
          top: '-8%',
          left: '-6%',
          width: '68vw',
          height: '65vh',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse 55% 50% at 30% 35%, rgba(0,210,170,0.22) 0%, rgba(0,180,200,0.10) 45%, transparent 72%)',
        }}
      />

      {/* ── Aurora Layer 2 · Electric Blue · top-right ── */}
      <div
        className="aurora-b absolute"
        style={{
          top: '-5%',
          right: '-8%',
          width: '62vw',
          height: '60vh',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse 52% 48% at 65% 30%, rgba(40,100,255,0.20) 0%, rgba(60,140,255,0.09) 45%, transparent 72%)',
        }}
      />

      {/* ── Aurora Layer 3 · Violet-Purple · right-center ── */}
      <div
        className="aurora-c absolute"
        style={{
          top: '30%',
          right: '-10%',
          width: '55vw',
          height: '62vh',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse 50% 55% at 70% 55%, rgba(130,50,250,0.18) 0%, rgba(160,80,255,0.08) 45%, transparent 72%)',
        }}
      />

      {/* ── Aurora Layer 4 · Magenta · bottom ── */}
      <div
        className="aurora-d absolute"
        style={{
          bottom: '-5%',
          left: '15%',
          width: '72vw',
          height: '50vh',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse 60% 45% at 50% 80%, rgba(220,50,210,0.13) 0%, rgba(200,80,200,0.06) 50%, transparent 72%)',
        }}
      />

      {/* ── Aurora Layer 5 · Cyan shimmer · center (hue-shifts) ── */}
      <div
        className="aurora-hue absolute"
        style={{
          top: '22%',
          left: '28%',
          width: '50vw',
          height: '50vh',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          background:
            'radial-gradient(ellipse 48% 44% at 50% 50%, rgba(0,200,255,0.12) 0%, rgba(100,200,255,0.06) 50%, transparent 72%)',
        }}
      />
    </div>
  )
}
