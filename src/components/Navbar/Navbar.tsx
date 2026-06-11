"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../Header/navLinks";

interface NavbarProps {
  color?: string;
}

export default function Navbar({ color = "#666666" }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="h-11 w-full" style={{ backgroundColor: color }}>
      <div className="mx-auto flex h-full max-w-270 items-end px-6">
        {navLinks.filter(({ enabled }) => enabled).map(({ href, label }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex h-full items-center px-4 text-[15px] transition-colors"
              style={{
                color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                borderBottom: isActive ? "3px solid #ffffff" : "3px solid transparent",
                paddingBottom: "9px",
                paddingTop: "12px",
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
