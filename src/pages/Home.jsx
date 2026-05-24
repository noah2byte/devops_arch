import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>DevOps Portfolio</h1>

      <button
        onClick={() => navigate("/cheonjae")}
      >
        천재교육
      </button>

      <button disabled>
        키즈노트
      </button>

      <button disabled>
        가이온
      </button>
    </div>
  );
}