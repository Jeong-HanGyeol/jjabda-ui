export const navLinks = [
  {
    href: "/lotto",
    label: "Lotto",
    enabled: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" stroke="#f59e0b" strokeWidth="1.5" />
        <circle cx="5" cy="8" r="1.5" fill="#f59e0b" />
        <circle cx="11" cy="8" r="1.5" fill="#f59e0b" />
        <circle cx="8" cy="5" r="1.5" fill="#f59e0b" />
      </svg>
    ),
  },
  {
    href: "/memo",
    label: "Memo",
    enabled: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#60a5fa" strokeWidth="1.5" />
        <line x1="5" y1="5.5" x2="11" y2="5.5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="8" x2="11" y2="8" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="10.5" x2="8" y2="10.5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/calc",
    label: "Calc",
    enabled: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#34d399" strokeWidth="1.5" />
        <line x1="8" y1="5" x2="8" y2="11" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="8" x2="11" y2="8" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];
