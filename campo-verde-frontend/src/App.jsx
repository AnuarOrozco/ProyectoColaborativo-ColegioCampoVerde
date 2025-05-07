import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Ruta para la landing page */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta para la nueva página Nosotros */}
            <Route path="/nosotros" element={<Nosotros />} />
            
            {/* Puedes agregar más rutas aquí según avances */}
            {/* Ejemplo: */}
            {/* <Route path="/historia" element={<Historia />} /> */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;