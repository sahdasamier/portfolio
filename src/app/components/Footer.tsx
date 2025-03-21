export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Sahda Samier. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/sahdasamier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sahdasamier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
} 