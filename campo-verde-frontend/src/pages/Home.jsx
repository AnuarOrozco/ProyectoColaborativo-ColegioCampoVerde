import Hero from "../components/Hero";
import About from "../components/About";
import Levels from "../components/Levels";
import Campuses from "../components/Campuses";
import Gallery from "../components/Gallery";
import Awards from "../components/Awards";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Levels />
      <Campuses />
      <Gallery />
      <Awards />
      <Contact />
    </>
  );
}

export default Home;