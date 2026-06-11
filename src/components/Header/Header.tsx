import Link from "next/link";
import "./Header.style.css";
import { navLinks } from "./navLinks";

export default function Header() {
  return (
    <header className="h-12 w-full bg-[#1c1c1f]">
      <div className="flex h-full w-full items-center">
        <Link
          href="/"
          className="flex h-full shrink-0 items-center px-6 text-base font-bold tracking-tight text-white"
        >
          JJabda
        </Link>
        <nav className="flex flex-1 items-center gap-1">
          {navLinks.filter(({ enabled }) => enabled).map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="nav-link flex items-center gap-1.5 rounded px-2 py-1.5"
            >
              {icon}
              <span className="text-sm text-[#ffffff]">
                {label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 px-4">
          {/* 로그인, 언어 선택 등 추가 예정 */}
        </div>
      </div>
    </header>
  );
}
