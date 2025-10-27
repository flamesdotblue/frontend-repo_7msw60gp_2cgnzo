import React from 'react';
import { Github, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="get-started" className="relative bg-black py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="text-xl font-semibold">HoloCoin</div>
            <p className="mt-1 text-sm text-white/60">Future-forward crypto platform for everyone.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">
              <Globe className="h-4 w-4" />
              Docs
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">
              <Twitter className="h-4 w-4" />
              Twitter
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} HoloCoin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
