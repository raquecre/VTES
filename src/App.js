
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ErrorPage from './pages/ErrorPage';
import OurActivities from './pages/OurActivities';
import League from './pages/Leage';

function App() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuestras-actividades' element={<OurActivities />} />
        <Route path='/liga-2024-vtesGuarida' element={<League />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
