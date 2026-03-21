import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between px-8 md:px-16 py-6 w-full relative z-40">
            <Link href="/#home" className="text-sm font-bold tracking-widest uppercase text-white/80">
              Yatichapat
            </Link>
            <div className="hidden md:flex items-center gap-10 text-sm text-white/60">
              <Link href="/#home" className="hover:text-white transition-colors">Home</Link>
              <Link href="/#about" className="hover:text-white transition-colors">About</Link>
              <Link href="/#projects" className="hover:text-white transition-colors">Projects</Link>
              <Link
                href="/#contact"
                className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all"
              >
                Get in touch
                <span className="w-5 h-5 rounded-full bg-orange-500 inline-flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
              </Link>
            </div>
          </nav>
    );
}