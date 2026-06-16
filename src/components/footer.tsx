import Link from 'next/link';
import LogoMark from '@/components/shared/logo-mark';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <LogoMark />
              <span className="text-sm font-semibold tracking-tight">Vibes.List</span>
            </Link>
            <p className="text-sm text-white/50 max-w-sm leading-[1.6]">
              A hand-checked, high-vibe index of modern AI programming environments, code assistants, and prompt-to-app engines.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white/40 tracking-wider uppercase">Directory</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#tools" className="hover:text-white transition-colors">All Tools</a>
              </li>
              <li>
                <a href="#submit" className="hover:text-white transition-colors">Submit a Tool</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white/40 tracking-wider uppercase">Categories</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#tools" className="hover:text-white transition-colors">AI Code Editors</a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">Agentic Coders</a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">Prompt-to-App</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Vibes.List. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
