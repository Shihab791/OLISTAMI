import { Routes, Route } from "react-router-dom";
import UserHome from "./pages/UserHome";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-home" element={<UserHome />} />
      </Routes>
    </div>
  );
}

export default App;