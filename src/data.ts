// data.ts
import type { SystemArchitecture } from "./types";

export const kidsnoteArchitecture: SystemArchitecture = {
  name: "Kidsnote System",
  platforms: [
    {
      type: "ios",
      services: [
        { name: "클래스보드" },
        { name: "키즈노트" },
        { name: "패밀리노트" },
      ],
    },
    {
      type: "android",
      services: [
        { name: "클래스보드" },
        { name: "키즈노트" },
        { name: "패밀리노트" },
      ],
    },
    {
      type: "frontend",
      services: [
        { name: "웹서비스1" },
        { name: "웹서비스2" },
        { name: "웹서비스3" },
        { name: "웹서비스4" },
        { name: "웹서비스5" },
        { name: "웹서비스6" },
        { name: "웹서비스7" },
        { name: "웹서비스8" },
        { name: "웹서비스9" },
        { name: "웹서비스10" },
      ],
    },
    {
      type: "backend",
      services: [
        { name: "API 서버 1 (Django)" },
        { name: "API 서버 2 (Django)" },
        { name: "API 서버 3 (Python)" },
        { name: "API 서버 4 (Python)" },
        { name: "API 서버 5" },
        { name: "API 서버 6" },
      ],
    },
  ],
};