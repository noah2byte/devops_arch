// types.ts
export type PlatformType = "ios" | "android" | "frontend" | "backend";

export interface Service {
  name: string;
}

export interface Platform {
  type: PlatformType;
  services: Service[];
}

export interface SystemArchitecture {
  name: string;
  platforms: Platform[];
}