import "./App.css";
import AddFlowPage from "./components/AddFlowPage";
import AddExpenses from "./pages/AddExpenses";
import VerifyExpensePage from "./pages/VerifyExpensePage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddExpenses />} />{" "}
        <Route path="/verify" element={<VerifyExpensePage />} />{" "}
        <Route path="/add_flow" element={<AddFlowPage />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
