const stats = [];

function StatsBar() {
  return (
    <div className="bg-[#fdc400] py-6 relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#00296b]/20">
        {stats.map((s, i) => (
          <div key={i} className="text-center px-4 py-2">
            <p className="text-[#00296b] text-4xl md:text-5xl font-black leading-none tracking-tight">
              {s.number}
            </p>
            <p className="text-[#003f87] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
