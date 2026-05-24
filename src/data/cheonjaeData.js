export const nodes = [
  {
    id: "internet",
    position: { x: 400, y: 0 },
    data: {
      label: "Internet"
    }
  },

  {
    id: "prod",
    position: { x: 400, y: 200 },
    data: {
      label: "PROD Cluster"
    }
  },

  {
    id: "comm",
    position: { x: 100, y: 200 },
    data: {
      label: "COMM Cluster"
    }
  },

  {
    id: "mgmt",
    position: { x: 700, y: 200 },
    data: {
      label: "MGMT Cluster"
    }
  }
];

export const edges = [
  {
    id: "e1",
    source: "internet",
    target: "prod"
  },

  {
    id: "e2",
    source: "comm",
    target: "prod"
  },

  {
    id: "e3",
    source: "mgmt",
    target: "prod"
  }
];

export const descriptions = {
  internet: `
외부 사용자가 접속하는 구간.
Istio Gateway를 통해 서비스 진입.
`,

  prod: `
운영 환경 Kubernetes Cluster.

AI 디지털 교과서 운영 환경.

초등 / 중고등 클러스터로 분리 운영.
`,

  comm: `
공통 DevOps 플랫폼 영역.

GitLab
Jenkins
Nexus
Vault
Bastion
Deployment API
`,

  mgmt: `
관제 영역.

Prometheus
Grafana
Loki
Mimir
`
};