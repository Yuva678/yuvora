import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { FeaturedWork } from "./components/FeaturedWork";
import { Services } from "./components/Services";
import { Technologies } from "./components/Technologies";
import { Process } from "./components/Process";
import { Benefits } from "./components/Benefits";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <FeaturedWork />
        <Services />
        <Technologies />
        <Process />
        <Benefits />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <NotFound />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
