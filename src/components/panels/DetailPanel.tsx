import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { X, Target, Lightbulb, Settings, Activity, AlertTriangle, TrendingUp, Tag } from 'lucide-react';
import type { FlowNode } from '../../types';

interface DetailPanelProps {
  node: FlowNode | null;
  onClose: () => void;
}

const Section = ({ icon: Icon, title, content, color }: {
  icon: LucideIcon; title: string; content: string; color: string;
}) => (
  <div className="mb-5">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
        <Icon size={13} style={{ color }} />
      </div>
      <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color }}>{title}</h4>
    </div>
    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-8 whitespace-pre-line">{content}</p>
  </div>
);

export default function DetailPanel({ node, onClose }: DetailPanelProps) {
  return (
    <AnimatePresence>
      {node && (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="h-full flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          {/* Header */}
          <div className="flex-shrink-0 px-6 py-5 border-b border-slate-100 dark:border-slate-800"
            style={{ borderTopColor: node.data.color, borderTopWidth: 3 }}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold"
                  style={{ backgroundColor: `${node.data.color || '#6366f1'}15`, color: node.data.color || '#6366f1' }}
                >
                  {node.data.label.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-slate-50 text-base leading-tight truncate">
                    {node.data.label}
                  </h3>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full capitalize mt-1 inline-block"
                    style={{ backgroundColor: `${node.data.color || '#6366f1'}15`, color: node.data.color || '#6366f1' }}
                  >
                    {node.data.category}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-5 scrollbar-thin">
            <Section icon={Activity} title="개요" content={node.data.detail.overview} color={node.data.color || '#6366f1'} />
            <Section icon={Target} title="설계 목적" content={node.data.detail.purpose} color={node.data.color || '#6366f1'} />
            <Section icon={Lightbulb} title="기술 선택 이유" content={node.data.detail.techReason} color={node.data.color || '#6366f1'} />
            <Section icon={Settings} title="구성 방식" content={node.data.detail.configuration} color={node.data.color || '#6366f1'} />
            <Section icon={Activity} title="운영 경험" content={node.data.detail.operations} color={node.data.color || '#6366f1'} />
            <Section icon={AlertTriangle} title="트러블슈팅" content={node.data.detail.troubleshooting} color={node.data.color || '#6366f1'} />
            <Section icon={TrendingUp} title="개선 효과" content={node.data.detail.improvements} color={node.data.color || '#6366f1'} />

            {/* Related Tech Tags */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: `${node.data.color || '#6366f1'}20` }}>
                  <Tag size={13} style={{ color: node.data.color || '#6366f1' }} />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: node.data.color || '#6366f1' }}>관련 기술</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-8">
                {node.data.detail.relatedTech.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full font-medium border"
                    style={{
                      backgroundColor: `${node.data.color || '#6366f1'}10`,
                      borderColor: `${node.data.color || '#6366f1'}30`,
                      color: node.data.color || '#6366f1',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
