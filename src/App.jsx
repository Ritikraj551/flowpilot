import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Features />

        <section id="how-it-works">How it works section coming soon</section>

        <section id="pricing">Pricing section coming soon</section>

        <section id="contact">Contact section coming soon</section>
      </main>
    </>
  );
}

export default App;
