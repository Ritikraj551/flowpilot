import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />

        <section id="pricing">Pricing section coming soon</section>

        <section id="contact">Contact section coming soon</section>
      </main>
    </>
  );
}

export default App;
