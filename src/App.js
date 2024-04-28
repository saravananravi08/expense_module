import "./App.css";
import AddExpenses from "./pages/AddExpenses";
import VerifyExpensePage from "./pages/VerifyExpensePage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddExpenses />} />{" "}
        <Route path="/verify" element={<VerifyExpensePage />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
