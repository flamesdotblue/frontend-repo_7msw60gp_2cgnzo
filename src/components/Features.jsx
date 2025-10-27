import React from 'react';
import { BarChart3, Coins, Shield, Wallet } from 'lucide-react';

const features = [
  {
    icon: <Coins className="h-5 w-5 text-emerald-400" />,
    title: 'Multi-chain Liquidity',
    desc: 'Aggregate deep liquidity across major L1s and L2s with smart routing and minimal slippage.'
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Audited & Secure',
    desc: 'Battle-tested contracts with continuous monitoring and institutional-grade custody partners.'
  },
  {
    icon: <Wallet className="h-5 w-5 text-emerald-400" />,
    title: 'Non-Custodial',
    desc: 'You own your keys. Connect any popular wallet and retain full control of your assets.'
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-emerald-400" />,
    title: 'Pro Analytics',
    desc: 'Real-time market data, PnL tracking, and alerting to stay ahead of the market.'
  }
];

export default function Features() {
  return (
    <section id="learn-more" className="relative z-10 bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Designed for traders, builders, and institutions
          </h2>
          <p className="mt-3 text-white/70">
            Powerful features wrapped in an elegant, futuristic design. Everything you need to operate at crypto speed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
