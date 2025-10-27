import React from 'react';

const stats = [
  { label: 'Total Volume', value: '$28.4B' },
  { label: 'Users', value: '1.2M+' },
  { label: 'Chains Supported', value: '12' },
  { label: 'Avg. Settlement', value: '450ms' }
];

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#030303] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
