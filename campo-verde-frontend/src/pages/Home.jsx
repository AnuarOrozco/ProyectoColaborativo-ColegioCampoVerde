import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Levels from "./components/Levels";
import Campuses from "./components/Campuses";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Levels />
      <Campuses />
      <Gallery />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
