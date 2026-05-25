import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Building2 } from 'lucide-react';
import type { Company } from '../types';

interface HomePageProps {
  companies: Company[];
  onSelect: (company: Company) => void;
}

const techStack = [
  'NCP', 'AWS', 'Kubernetes', 'Docker', 'Helm', 'Jenkins',
  'GitLab', 'GitHub Actions', 'ArgoCD', 'Vault', 'Istio',
  'Prometheus', 'Grafana', 'Loki', 'Mimir', 'Kafka', 'Elasticsearch',
];

const stats = [
  { label: '운영 클러스터', value: '9+' },
  { label: '관리 서비스', value: '46+' },
  { label: '배포 시간 단축', value: '97%' },
  { label: '경력', value: '5Y+' },
];

export default function HomePage({ companies, onSelect }: HomePageProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
              DevOps / Platform Engineering
            </span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3 tracking-tight font-display">
            Infrastructure & CI/CD
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">
              {' '}Portfolio
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            대규모 K8S 클러스터 설계부터 CI/CD 파이프라인 표준화까지.
            각 회사 카드를 클릭하여 아키텍처와 설계 배경을 탐색하세요.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-4 gap-4 mb-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-violet-600 mb-1">
                {s.value}
              </div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mb-4"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
            <Building2 size={12} />
            경력 회사별 아키텍처
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {companies.map((company, i) => (
              <motion.button
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 300, damping: 24 }}
                onClick={() => onSelect(company)}
                className="group text-left bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
                style={{ borderTopColor: company.color, borderTopWidth: 3 }}
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at top right, ${company.color}08 0%, transparent 70%)`,
                  }}
                />

                <div className="relative">
                  {/* Company initial badge */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4"
                    style={{ backgroundColor: company.color }}
                  >
                    {company.name.charAt(0)}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">
                    {company.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                    <Calendar size={11} />
                    {company.period}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {company.description}
                  </p>

                  {/* View count */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {company.views.slice(0, 3).map(v => (
                        <span
                          key={v.id}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${company.color}15`, color: company.color }}
                        >
                          {v.title.replace(' 아키텍처', '').replace(' 구조', '')}
                        </span>
                      ))}
                      {company.views.length > 3 && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                          +{company.views.length - 3}
                        </span>
                      )}
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-slate-300 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-200"
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            기술 스택
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.02 }}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 shadow-sm hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
