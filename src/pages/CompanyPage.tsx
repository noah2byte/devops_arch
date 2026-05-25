import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/layout/Sidebar';
import ArchFlowView from '../components/layout/ArchFlowView';
import AchievementsView from '../components/layout/AchievementsView';
import type { Company, ArchView } from '../types';

interface CompanyPageProps {
  company: Company;
  onBack: () => void;
}

export default function CompanyPage({ company, onBack }: CompanyPageProps) {
  const [activeView, setActiveView] = useState<ArchView>(company.views[0]);
  const [showAchievements, setShowAchievements] = useState(false);

  const handleSelectView = (view: ArchView) => {
    setActiveView(view);
    setShowAchievements(false);
  };

  const handleShowAchievements = () => {
    setShowAchievements(true);
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar
        company={company}
        activeViewId={activeView.id}
        showAchievements={showAchievements}
        onSelectView={handleSelectView}
        onShowAchievements={handleShowAchievements}
        onBack={onBack}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* View Header */}
        <div
          className="flex-shrink-0 px-6 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3"
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: company.color }}
          />
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-slate-50">
              {showAchievements ? '주요 성과 및 개선 사례' : activeView.title}
            </h2>
            {!showAchievements && (
              <p className="text-xs text-slate-500">{activeView.description}</p>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {showAchievements ? (
              <motion.div
                key="achievements"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <AchievementsView
                  achievements={company.achievements}
                  color={company.color}
                  companyName={company.name}
                />
              </motion.div>
            ) : (
              <motion.div
                key={activeView.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <ArchFlowView
                  view={activeView}
                  companyColor={company.color}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
