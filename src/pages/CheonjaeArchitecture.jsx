import { useState } from "react";

import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes,
  edges,
  descriptions
} from "../data/cheonjaeData";

import DetailSidebar from "../components/DetailSidebar";

export default function CheonjaeArchitecture() {
  const [selectedNode, setSelectedNode] =
    useState(null);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh"
      }}
    >
      <div
        style={{
          flex: selectedNode ? 2 : 1
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          onNodeClick={(e, node) =>
            setSelectedNode(node)
          }
        />
      </div>

      {selectedNode && (
        <DetailSidebar
          title={selectedNode.data.label}
          description={
            descriptions[selectedNode.id]
          }
        />
      )}
    </div>
  );
}