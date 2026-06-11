"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  color?: string;
  links?: NavLink[];
}

export default function Navbar({ color = "#666666", links = [] }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="h-11 w-full" style={{ backgroundColor: color }}>
      <div className="mx-auto flex h-full max-w-270 items-end px-6">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`box-border flex items-center border-b-[3px] mx-3 pb-2.25 pt-3 text-[15px] leading-6 transition-colors hover:border-b-white hover:text-white ${
                isActive
                  ? "border-b-white text-white"
                  : "border-transparent text-white/60"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
