import { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type NodeMouseHandler,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';
import DetailPanel from '../panels/DetailPanel';
import DevOpsNode from '../nodes/DevOpsNode';
import type { ArchView, FlowNode } from '../../types';

const nodeTypes = { devops: DevOpsNode };

interface ArchFlowViewProps {
  view: ArchView;
  companyColor: string;
}

export default function ArchFlowView({ view, companyColor }: ArchFlowViewProps) {
  const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null);

  const initialNodes = useMemo(
    () =>
      view.nodes.map(n => ({
        ...n,
        type: 'devops',
      })),
    [view.nodes]
  );

  const initialEdges = useMemo(
    () =>
      view.edges.map(e => ({
        ...e,
        style: { stroke: '#94a3b8', strokeWidth: 1.5 },
        labelStyle: { fontSize: 10, fill: '#64748b', fontWeight: 500 },
        labelBgStyle: { fill: '#f8fafc', fillOpacity: 0.9 },
        labelBgPadding: [4, 6] as [number, number],
        labelBgBorderRadius: 4,
        markerEnd: { type: 'arrowclosed' as const, color: '#94a3b8', width: 14, height: 14 },
      })),
    [view.edges]
  );

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      const found = view.nodes.find(n => n.id === node.id);
      if (found) setSelectedNode(found);
    },
    [view.nodes]
  );

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const panelOpen = !!selectedNode;

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Flow Canvas */}
      <motion.div
        animate={{ width: panelOpen ? '45%' : '100%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="h-full relative"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          className="bg-slate-50 dark:bg-slate-950"
          proOptions={{ hideAttribution: true }}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1}
            color="#e2e8f0"
          />
          <Controls
            className="!bg-white dark:!bg-slate-800 !border-slate-200 dark:!border-slate-700 !shadow-sm"
            showInteractive={false}
          />
          <MiniMap
            nodeColor={n => (n.data as { color?: string }).color || companyColor}
            maskColor="rgba(248,250,252,0.7)"
            className="!bg-white dark:!bg-slate-800 !border-slate-200 dark:!border-slate-700 !rounded-xl !shadow-sm"
          />
        </ReactFlow>

        {/* Click hint */}
        {!panelOpen && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 px-3 py-1.5 rounded-full shadow-sm pointer-events-none">
            노드를 클릭하면 상세 설명이 표시됩니다
          </div>
        )}
      </motion.div>

      {/* Detail Panel */}
      <motion.div
        animate={{ width: panelOpen ? '55%' : '0%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="h-full flex-shrink-0 overflow-hidden"
      >
        <DetailPanel
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
        />
      </motion.div>
    </div>
  );
}
