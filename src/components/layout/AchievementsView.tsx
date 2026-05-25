import { motion } from 'framer-motion';
import AchievementCard from '../cards/AchievementCard';
import type { Achievement } from '../../types';

interface AchievementsViewProps {
  achievements: Achievement[];
  color: string;
  companyName: string;
}

export default function AchievementsView({ achievements, color, companyName }: AchievementsViewProps) {
  return (
    <div className="h-full overflow-y-auto bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
            주요 성과 및 개선 사례
          </h2>
          <p className="text-sm text-slate-500">
            {companyName}에서 직접 설계·구현하고 문제를 해결한 사례들입니다
          </p>
          <div className="mt-3 h-1 w-16 rounded-full" style={{ backgroundColor: color }} />
        </motion.div>

        <div className="space-y-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <AchievementCard achievement={a} color={color} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
