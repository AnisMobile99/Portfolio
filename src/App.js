import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skill/Skills";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingButton from "./components/Cofee/FloatingButton";
import CursorTracker from "./components/Cursor/CursorTracker";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      <CursorTracker />

      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="mt-0">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bouton flottant */}
      <FloatingButton />
    </div>
  );
}

export default App;
