import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar              from './components/Navbar';
import Home                from './pages/Home';
import HistoriaPage        from './pages/HistoriaPage';
import MisionPage          from './pages/MisionPage';
import ParticipacionesPage from './pages/ParticipacionesPage';
import GaleriaPage         from './pages/GaleriaPage';
import ContactoPage        from './pages/ContactoPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/historia"        element={<HistoriaPage />} />
        <Route path="/mision"          element={<MisionPage />} />
        <Route path="/participaciones" element={<ParticipacionesPage />} />
        <Route path="/galeria"         element={<GaleriaPage />} />
        <Route path="/contacto"        element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
