import { Moon, Sun, Terminal } from 'lucide-react';

interface HeaderProps {
  dark: boolean;
  onToggleDark: () => void;
  subtitle?: string;
}

export default function Header({ dark, onToggleDark, subtitle }: HeaderProps) {
  return (
    <header className="flex-shrink-0 h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center px-6 gap-4">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <Terminal size={14} className="text-white" />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900 dark:text-slate-50 leading-none">
            DevOps Portfolio
          </div>
          <div className="text-[10px] text-slate-400 leading-none mt-0.5">
            {subtitle || 'Infrastructure & Platform Engineering'}
          </div>
        </div>
      </div>

      <div className="flex-1" />

      {/* Skills badges */}
      <div className="hidden md:flex items-center gap-1.5">
        {['Kubernetes', 'Jenkins', 'GitLab', 'Helm', 'Vault', 'Istio'].map(s => (
          <span
            key={s}
            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            {s}
          </span>
        ))}
      </div>

      <button
        onClick={onToggleDark}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </header>
  );
}
