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
  const showAirplane = hiddenAirplanePath !== location.pathname;

  useEffect(() => {
    const hideAirplane = setTimeout(() => {
      setHiddenAirplanePath(location.pathname);
    }, 1100);

    return () => clearTimeout(hideAirplane);
  }, [location.pathname]);

  if (showAirplane) {
    return (
      <AirplaneAnimation
        key={location.pathname}
        className="fixed inset-0 overflow-hidden bg-[#0b1728] pointer-events-none z-50"
        onComplete={() => setHiddenAirplanePath(location.pathname)}
      />
    );
  }

  return (
    <>
      <Navbar />
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
