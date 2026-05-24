import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CheonjaeArchitecture from "./pages/CheonjaeArchitecture";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/cheonjae"
          element={<CheonjaeArchitecture />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;