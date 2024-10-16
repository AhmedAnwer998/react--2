import "./App.css";
import React, { useEffect, useState } from "react";
import FnavBar from "./FnavBar/FnavBar";
import FirstSec from "./FirstSec/FirstSec";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import Projects from "./Projects/Projects";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="loading">
          <ScaleLoader color="#f87765" height={70} margin={6} width={3} />
        </div>
      ) : (
        <>
          <FnavBar />
          <Routes>
            <Route path="/" element={<FirstSec />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
