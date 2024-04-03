import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Link, Route, Routes } from "react-router-dom";
import { NavRoutes } from "./data/routes";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* //! routing step: 2 */}
      <Routes>
        {NavRoutes.map((each) => {
          return (
            <Route key={each.id} path={each.path} element={each.element} />
          );
        })}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
