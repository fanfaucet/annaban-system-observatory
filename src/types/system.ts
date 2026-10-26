export type HealthStatus = "operational" | "degraded" | "maintenance" | "offline" | "simulated";

export interface SystemModule {
  id: string;
  name: string;
  category: "core" | "stack" | "module" | "governance";
  version: string;
  status: HealthStatus;
  lastUpdated: string;
  description: string;
  metrics?: Record<string, string | number>;
}

export interface PipelineEvent {
  id: string;
  timestamp: string;
  type: "deploy" | "negotiate" | "audit" | "valuation" | "dds" | "log" | "release";
  message: string;
  severity: "info" | "success" | "warning" | "error";
  module?: string;
}

export interface StatusFeed {
  generatedAt: string;
  overallStatus: HealthStatus;
  systems: SystemModule[];
  pipelines: PipelineEvent[];
  valuationSnapshot: {
    conceptualScore: number;
    lastSimulated: string;
    notes: string;
  };
  governance: {
    humanInTheLoopActive: boolean;
    lastOversightEvent: string;
    openApprovals: number;
  };
  version: string;
}
