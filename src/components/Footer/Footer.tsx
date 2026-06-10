export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-center px-4">
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} jjabda
        </p>
      </div>
    </footer>
  );
}
