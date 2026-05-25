export interface NodeDetail {
  overview: string;
  purpose: string;
  techReason: string;
  configuration: string;
  operations: string;
  troubleshooting: string;
  improvements: string;
  relatedTech: string[];
}

export interface FlowNode {
  id: string;
  type?: string;
  position: { x: number; y: number };
  data: {
    label: string;
    icon: string;
    category: string;
    detail: NodeDetail;
    color?: string;
  };
}

export interface FlowEdge {
  id: string;
  source: string;
  target: string;
  type?: string;
  label?: string;
  animated?: boolean;
  style?: React.CSSProperties;
}

export interface ArchView {
  id: string;
  title: string;
  description: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
}

export interface Achievement {
  id: string;
  title: string;
  emoji: string;
  problem: string;
  solution: string;
  result: string;
  impact: string;
  tags: string[];
}

export interface Company {
  id: string;
  name: string;
  period: string;
  subtitle: string;
  description: string;
  color: string;
  accentColor: string;
  views: ArchView[];
  achievements: Achievement[];
}
