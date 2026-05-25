import { motion } from 'framer-motion';
import { ChevronLeft, LayoutGrid, Trophy } from 'lucide-react';
import type { Company, ArchView } from '../../types';

interface SidebarProps {
  company: Company;
  activeViewId: string;
  showAchievements: boolean;
  onSelectView: (view: ArchView) => void;
  onShowAchievements: () => void;
  onBack: () => void;
}

export default function Sidebar({
  company,
  activeViewId,
  showAchievements,
  onSelectView,
  onShowAchievements,
  onBack,
}: SidebarProps) {
  return (
    <div className="w-60 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full">
      {/* Back + Company Header */}
      <div className="px-4 py-4 border-b border-slate-100 dark:border-slate-800">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-3 font-medium"
        >
          <ChevronLeft size={14} />
          포트폴리오 홈
        </button>
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: company.color }}
          >
            {company.name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-slate-50 text-sm leading-tight">
              {company.name}
            </div>
            <div className="text-xs text-slate-500 leading-tight mt-0.5">{company.period}</div>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2 mb-2">
          아키텍처
        </div>

        {company.views.map((view, i) => {
          const isActive = !showAchievements && activeViewId === view.id;
          return (
            <motion.button
              key={view.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onSelectView(view)}
              className={`
                w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                flex items-center gap-2 group
                ${isActive
                  ? 'text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                }
              `}
              style={isActive ? { backgroundColor: company.color } : {}}
            >
              <LayoutGrid size={13} className="flex-shrink-0 opacity-70" />
              <span className="leading-tight text-xs">{view.title}</span>
            </motion.button>
          );
        })}

        {/* Achievements */}
        {company.achievements.length > 0 && (
          <>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2 mt-4 mb-2">
              성과
            </div>
            <motion.button
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: company.views.length * 0.05 }}
              onClick={onShowAchievements}
              className={`
                w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                flex items-center gap-2
                ${showAchievements
                  ? 'text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                }
              `}
              style={showAchievements ? { backgroundColor: company.color } : {}}
            >
              <Trophy size={13} className="flex-shrink-0 opacity-70" />
              <span className="text-xs">주요 성과 및 개선 사례</span>
            </motion.button>
          </>
        )}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800">
        <div className="text-[10px] text-slate-400 leading-relaxed">
          {company.subtitle}
        </div>
      </div>
    </div>
  );
}
