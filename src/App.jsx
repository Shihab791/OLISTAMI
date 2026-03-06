import { Routes, Route } from "react-router-dom";
import UserHome from "./pages/UserHome";
import Home from "./pages/Home";
import Operator from "./pages/Operator";
import OperatorUserHome from "./components/operatorUser/OperatorUserHome";
import EventsPage from "./components/operatorUser/EventsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/operator" element={<Operator />} />
        <Route path="/OperatorUser-Home" element={<OperatorUserHome />} />
        <Route path="/EventsPage" element={<EventsPage />} />

      </Routes>
    </div>
  );
}

export default App;