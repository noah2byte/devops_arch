import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ChevronDown, AlertCircle, Wrench, TrendingUp, Zap } from 'lucide-react';
import type { Achievement } from '../../types';

interface AchievementCardProps {
  achievement: Achievement;
  color: string;
}

export default function AchievementCard({ achievement, color }: AchievementCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden"
      style={{ borderTopColor: color, borderTopWidth: 3 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl flex-shrink-0">{achievement.emoji}</span>
          <div className="min-w-0">
            <h3 className="font-bold text-slate-900 dark:text-slate-50 text-sm leading-tight">{achievement.title}</h3>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {achievement.tags.map(tag => (
                <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}15`, color }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
          <ChevronDown size={16} className="text-slate-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4 border-t border-slate-100 dark:border-slate-800 pt-4">
              <DetailRow icon={AlertCircle} title="문제점" content={achievement.problem} color="#ef4444" />
              <DetailRow icon={Wrench} title="개선 방법" content={achievement.solution} color={color} />
              <DetailRow icon={TrendingUp} title="결과" content={achievement.result} color="#10b981" />
              <DetailRow icon={Zap} title="비즈니스 임팩트" content={achievement.impact} color="#f59e0b" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DetailRow({ icon: Icon, title, content, color }: { icon: LucideIcon; title: string; content: string; color: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${color}15`, color }}>
        <Icon size={13} />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>{title}</div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
