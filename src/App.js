import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Site from "./components/Site";
import Residence from "./components/Residence";
import Dining from "./components/Dining";
import Energy from "./components/Energy";
import HeatRecycling from "./components/HeatRecycling";
import Classroom from "./components/Classroom";
import Computing from "./components/Computing";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/site" element={<Site />} />
      <Route path="/classroom" element={<Classroom />} />
      <Route path="/residence" element={<Residence />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/energy" element={<Energy />} />
      <Route path="/recycling" element={<HeatRecycling />} />
      <Route path="/computing" element={<Computing />} />
    </Routes>
  </Router>
);

export default App;
