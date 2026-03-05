import { Routes, Route } from "react-router-dom";
import UserHome from "./pages/UserHome";
import Home from "./pages/Home";
import Operator from "./pages/Operator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/operator" element={<Operator />} />
      </Routes>
    </div>
  );
}

export default App;