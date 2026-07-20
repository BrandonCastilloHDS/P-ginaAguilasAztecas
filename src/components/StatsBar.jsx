const stats = [];

function StatsBar() {
  return (
    <div className="bg-[#006847] py-6 relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
        {stats.map((s, i) => (
          <div key={i} className="text-center px-4 py-2">
            <p className="text-white text-4xl md:text-5xl font-black leading-none tracking-tight">
              {s.number}
            </p>
            <p className="text-[#f4f0e8]/75 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
