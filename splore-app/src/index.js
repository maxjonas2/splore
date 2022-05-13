import ReactDom from "react-dom/client";
import React from "react";
import "./css/main.css";
import Homepage from "./elements/page_templates/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/rebels" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
