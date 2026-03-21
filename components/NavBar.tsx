"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function slowScrollToHash(e: React.MouseEvent<HTMLAnchorElement>, hash: string, pathname: string) {
  if (pathname !== "/") return; // Let Next.js handle cross-page navigation

  e.preventDefault();
  const targetId = hash.replace(/.*\#/, "");
  const element = document.getElementById(targetId);

  if (!element) return;

  const targetY = element.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 1500; // milliseconds (1.5s - very smooth and slow)
  let startTime: number | null = null;

  // Temporarily disable native CSS smooth scrolling to prevent jank
  const originalBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Ease-in-out cubic function for a cinematic slow scroll
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Re-enable native CSS smooth scrolling
      document.documentElement.style.scrollBehavior = originalBehavior;
      window.history.pushState(null, "", hash);
    }
  }

  requestAnimationFrame(animation);
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-6 w-full  fixed top-0 left-0 z-40">
      <Link
        href="/#home"
        onClick={(e) => slowScrollToHash(e, "/#home", pathname)}
        className="text-sm font-bold tracking-widest uppercase text-white/80"
      >
        Yatichapat
      </Link>
      <div className="hidden md:flex items-center gap-10 text-sm text-white/60">
        <Link
          href="/#home"
          onClick={(e) => slowScrollToHash(e, "/#home", pathname)}
          className="hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          href="/#about"
          onClick={(e) => slowScrollToHash(e, "/#about", pathname)}
          className="hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="/#projects"
          onClick={(e) => slowScrollToHash(e, "/#projects", pathname)}
          className="hover:text-white transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          onClick={(e) => slowScrollToHash(e, "/#contact", pathname)}
          className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all"
        >
          Get in touch
          <span className="w-5 h-5 rounded-full bg-orange-500 inline-flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </span>
        </Link>
      </div>
    </nav>
  );
}