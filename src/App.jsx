import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar              from './components/Navbar';
import AirplaneAnimation   from './components/AirplaneAnimation';
import Home                from './pages/Home';
import HistoriaPage        from './pages/HistoriaPage';
import MisionPage          from './pages/MisionPage';
import ParticipacionesPage from './pages/ParticipacionesPage';
import GaleriaPage         from './pages/GaleriaPage';
import ContactoPage        from './pages/ContactoPage';

function AppContent() {
  const location = useLocation();
  const [hiddenAirplanePath, setHiddenAirplanePath] = useState(null);
  const [lightTheme, setLightTheme] = useState(() => {
    return localStorage.getItem('aguilas-theme') === 'light';
  });
  const showAirplane = hiddenAirplanePath !== location.pathname;

  useEffect(() => {
    document.body.classList.toggle('theme-light', lightTheme);
    localStorage.setItem('aguilas-theme', lightTheme ? 'light' : 'dark');
  }, [lightTheme]);

  useEffect(() => {
    const hideAirplane = setTimeout(() => {
      setHiddenAirplanePath(location.pathname);
    }, 650);

    return () => clearTimeout(hideAirplane);
  }, [location.pathname]);

  return (
    <>
      <Navbar
        lightTheme={lightTheme}
        onToggleTheme={() => setLightTheme(theme => !theme)}
      />
      {showAirplane && (
        <AirplaneAnimation
          key={location.pathname}
          className="fixed inset-0 overflow-hidden bg-[#0b1728] pointer-events-none z-50"
          duration={0.45}
          onComplete={() => setHiddenAirplanePath(location.pathname)}
        />
      )}
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/historia"        element={<HistoriaPage />} />
        <Route path="/mision"          element={<MisionPage />} />
        <Route path="/participaciones" element={<ParticipacionesPage />} />
        <Route path="/galeria"         element={<GaleriaPage />} />
        <Route path="/contacto"        element={<ContactoPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
