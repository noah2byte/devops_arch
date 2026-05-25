import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { LucideIcon } from 'lucide-react';
import {
  Cloud, Server, Network, Settings, Code, Layers, Shield,
  Lock, Activity, FileText, HardDrive, BarChart2, Database,
  Package, Zap, Anchor, GitBranch, Box, Monitor, Cpu,
  MessageSquare, Play, Bell, FileCode, Search, Filter,
  RefreshCw, Trello, GitCommit, Upload,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud, server: Server, network: Network, settings: Settings,
  code: Code, layers: Layers, shield: Shield, lock: Lock,
  activity: Activity, 'file-text': FileText, 'hard-drive': HardDrive,
  'bar-chart-2': BarChart2, database: Database, package: Package,
  zap: Zap, anchor: Anchor, 'git-branch': GitBranch, box: Box,
  monitor: Monitor, cpu: Cpu, 'message-square': MessageSquare,
  play: Play, bell: Bell, 'file-code': FileCode, search: Search,
  filter: Filter, 'refresh-cw': RefreshCw, trello: Trello,
  'git-commit': GitCommit, upload: Upload,
  jenkins: Server, gitlab: GitBranch, github: GitBranch,
  docker: Box, prometheus: Activity, grafana: BarChart2,
  flask: Code, smartphone: Monitor,
};

// Brand SVG inline components
const GitLabIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
  </svg>
);

const GitHubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const DockerIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.083.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
  </svg>
);

const brandIcons: Record<string, (props: { size: number }) => JSX.Element> = {
  gitlab: GitLabIcon,
  github: GitHubIcon,
  docker: DockerIcon,
};

const categoryColors: Record<string, string> = {
  cloud: 'from-sky-500/20 to-sky-600/10 border-sky-400/40',
  network: 'from-amber-500/20 to-amber-600/10 border-amber-400/40',
  infrastructure: 'from-slate-500/20 to-slate-600/10 border-slate-400/40',
  cicd: 'from-rose-500/20 to-rose-600/10 border-rose-400/40',
  monitoring: 'from-orange-500/20 to-orange-600/10 border-orange-400/40',
  security: 'from-yellow-500/20 to-yellow-600/10 border-yellow-400/40',
  platform: 'from-violet-500/20 to-violet-600/10 border-violet-400/40',
  source: 'from-neutral-500/20 to-neutral-600/10 border-neutral-400/40',
  data: 'from-indigo-500/20 to-indigo-600/10 border-indigo-400/40',
  application: 'from-emerald-500/20 to-emerald-600/10 border-emerald-400/40',
};

const DevOpsNode = memo(({ data, selected }: any) => {
  const bgClass = categoryColors[data.category] || categoryColors.infrastructure;
  const IconComponent = iconMap[data.icon];
  const BrandComponent = brandIcons[data.icon];
  const iconSize = 15;

  return (
    <div
      className={`
        relative px-3 py-2.5 rounded-xl border bg-gradient-to-br backdrop-blur-sm
        transition-all duration-200 cursor-pointer min-w-[160px] max-w-[220px]
        ${bgClass}
        ${selected ? 'shadow-lg scale-105' : 'hover:shadow-md'}
      `}
      style={{
        boxShadow: selected ? `0 0 0 2px ${data.color || '#6366f1'}60, 0 8px 24px rgba(0,0,0,0.12)` : undefined,
      }}
    >
      <Handle type="target" position={Position.Top} style={{ width: 8, height: 8, background: '#94a3b8', border: '1px solid #64748b' }} />
      <Handle type="source" position={Position.Bottom} style={{ width: 8, height: 8, background: '#94a3b8', border: '1px solid #64748b' }} />
      <Handle type="target" position={Position.Left} style={{ width: 8, height: 8, background: '#94a3b8', border: '1px solid #64748b' }} />
      <Handle type="source" position={Position.Right} style={{ width: 8, height: 8, background: '#94a3b8', border: '1px solid #64748b' }} />

      <div className="flex items-center gap-2">
        <div
          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${data.color || '#6366f1'}20`, color: data.color || '#6366f1' }}
        >
          {BrandComponent
            ? <BrandComponent size={iconSize} />
            : IconComponent
            ? <IconComponent size={iconSize} />
            : <Server size={iconSize} />
          }
        </div>
        <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 leading-tight">
          {data.label}
        </span>
      </div>

      {selected && (
        <div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900"
          style={{ backgroundColor: data.color || '#6366f1' }}
        />
      )}
    </div>
  );
});

DevOpsNode.displayName = 'DevOpsNode';
export default DevOpsNode;
