import React, { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, Shield } from 'lucide-react';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}

export default function Hero() {
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    // Detect WebGL support at runtime and gracefully fallback if unavailable
    setWebgl(isWebGLAvailable());
  }, []);

  const headline = useMemo(
    () => 'The next evolution of crypto finance',
    []
  );

  const subcopy = useMemo(
    () => 'Trade, earn, and build with lightning-fast settlement and a holographic-grade UI. Built for speed, safety, and scale.',
    []
  );

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background or Fallback */}
      <div className="absolute inset-0">
        {webgl ? (
          <Spline
            // Auto-enhanced Spline animation
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(120%_120%_at_0%_0%,#0b0b0b_10%,#0a0a0a_35%,#0f172a_70%,#020617_100%)]">
            {/* Animated aurora fallback */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -left-20 top-1/3 h-64 w-64 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute right-0 top-10 h-72 w-72 animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-fuchsia-500/20 blur-3xl" />
            </div>
          </div>
        )}
      </div>

      {/* Soft gradient overlays to boost contrast (never block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-medium tracking-wide text-white/80">Institutional-grade security</span>
        </div>

        <h1 className="mt-6 max-w-4xl bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          {subcopy}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
          >
            <Rocket className="h-4 w-4" />
            Launch App
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>

        {!webgl && (
          <p className="mt-6 max-w-xl text-xs text-white/50">
            Your browser or environment has WebGL disabled. Showing an animated fallback instead of the 3D scene.
          </p>
        )}
      </div>
    </section>
  );
}
