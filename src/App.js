
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
