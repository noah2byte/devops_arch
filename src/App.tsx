import React from "react";
import "./App.css";

import { FaApple, FaAndroid, FaReact, FaServer } from "react-icons/fa";

const platforms = [
  {
    title: "iOS",
    icon: <FaApple className="icon-ios" />,
    deploy: "Mac mini",
    services: ["클래스보드", "키즈노트", "패밀리노트"],
  },
  {
    title: "Android",
    icon: <FaAndroid className="icon-android" />,
    deploy: "Manual",
    services: ["클래스보드", "키즈노트", "패밀리노트"],
  },
  {
    title: "Frontend (React)",
    icon: <FaReact className="icon-frontend" />,
    deploy: "Shell Script",
    services: ["웹서비스 A", "웹서비스 B", "..."],
  },
  {
    title: "Backend",
    icon: <FaServer className="icon-backend" />,
    deploy: "Fabfile / Manual",
    services: ["Django API A", "Django API B", "...", "PHP API"],
  },
];

const App: React.FC = () => {
  return (
    <div className="container">

      {/* 헤더 */}
      <div className="header">
        <img src="/kidsnote.png" alt="Kidsnote" className="logo" />
        <h1 className="title-main">Kidsnote Architecture</h1>
      </div>

      {/* 🔥 가로 카드 */}
      <div className="grid">
        {platforms.map((platform) => (
          <div key={platform.title} className="card">

            {/* 카드 제목 */}
            <h2 className="card-title">
              {platform.icon}
              {platform.title}
            </h2>

            {/* 서비스 목록 */}
            <ul>
              {platform.services.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            {/* 🔥 내부 배포 흐름 */}
            <div className="flow">
              <div className="arrow-down" />
              <div className="deploy-box">{platform.deploy}</div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default App;