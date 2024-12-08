import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Site from "./components/Site";
import Warehouse from "./components/Warehouse";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/site" element={<Site />} />
      <Route path="/warehouse" element={<Warehouse />} />
    </Routes>
  </Router>
);

export default App;
