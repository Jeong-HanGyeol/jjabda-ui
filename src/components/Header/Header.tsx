import Link from "next/link";

const navLinks = [
  { href: "/lotto", label: "Lotto" },
  { href: "/memo", label: "Memo" },
  { href: "/calc", label: "Calc" },
];

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          jjabda
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
