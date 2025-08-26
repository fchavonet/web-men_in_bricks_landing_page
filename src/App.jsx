import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Player from "./components/Player/Player";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <Header />

      <main className="-mt-16">
        <Hero />
        <Player />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
