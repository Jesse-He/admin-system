import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout.tsx';
import Home from './pages/Home.tsx';
import WeatherService from './pages/WeatherService.tsx';
import LowAltitudeEconomy from './pages/LowAltitudeEconomy.tsx';
import InformationDisclosure from './pages/InformationDisclosure.tsx';
import AboutUs from './pages/AboutUs.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="weather" element={<WeatherService />} />
          <Route path="low-altitude" element={<LowAltitudeEconomy />} />
          <Route path="info" element={<InformationDisclosure />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
