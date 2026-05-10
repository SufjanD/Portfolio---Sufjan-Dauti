import React from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
import ProjectsGrid from "./ProjectsGrid";
import Stack from "./Stack";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#020817] font-sans text-white antialiased selection:bg-violet-500/30 selection:text-violet-100">
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
