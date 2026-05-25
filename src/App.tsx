import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import { companies } from './data';
import type { Company } from './types';

export default function App() {
  const [dark, setDark] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden">
      <Header
        dark={dark}
        onToggleDark={() => setDark(d => !d)}
        subtitle={
          selectedCompany
            ? `${selectedCompany.name} · ${selectedCompany.subtitle}`
            : 'Infrastructure & Platform Engineering'
        }
      />

      <div className="flex-1 flex overflow-hidden">
        <AnimatePresence mode="wait">
          {selectedCompany ? (
            <motion.div
              key={selectedCompany.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 overflow-hidden"
            >
              <CompanyPage
                company={selectedCompany}
                onBack={() => setSelectedCompany(null)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 overflow-hidden"
            >
              <HomePage companies={companies} onSelect={setSelectedCompany} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
