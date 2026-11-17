import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />

        <section id="contact">Contact section coming soon</section>
      </main>
    </>
  );
}

export default App;
