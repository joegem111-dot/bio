import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Knowledge from "./components/Knowledge";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Knowledge />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
