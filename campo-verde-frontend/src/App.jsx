import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Preescolar from "./pages/niveles/Preescolar";
import Primaria from "./pages/niveles/Primaria";
import ScrollToTop from "./components/ScrollToTop";
import Secundaria from "./pages/niveles/Secundaria";
import Preparatoria from "./pages/niveles/Preparatoria";
// import CampusColima from "./pages/campus/Colima";

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
      <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Página Principal */}
            <Route path="/" element={<Home />} />
            
            {/* Sección Nosotros */}
            <Route path="/nosotros" element={<Nosotros />} />
            
            {/* Niveles Educativos */}
            <Route path="/niveles/preescolar" element={<Preescolar />} />
            <Route path="/niveles/primaria" element={<Primaria />} />
            <Route path="/niveles/secundaria" element={<Secundaria />} />
            <Route path="/niveles/preparatoria" element={<Preparatoria />} />
            
            {/* Rutas comentadas hasta implementar */}
            {/* <Route path="/campus/colima" element={<CampusColima />} /> */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;