import React from "react";
import codeur from "./codeur.png";
import "./App.css";
import SectionAbout from "./components/SectionAbout"
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SoftSkills from "./components/SoftSkills";

function App() {
  return (
    <>
    <div className="h-screen grid grid-cols-2 content-center text-white">
  <div className="col-span-1">
      <p className="text-2xl tracking-wide">Nicolas de RAEMY</p>
      <h1 className="font-extrabold text-9xl w-auto">
        <span className="bg-gradient-to-r from-blue-ndr via-red-ndr to-yellow-ndr bg-clip-text text-transparent">Front-End</span> <br /> Développeur
      </h1>
      <h2 className="text-4xl py-6 tracking-wide"><span className="underline underline-offset-8 decoration-blue-ndr">Passionné</span> & <span className="underline underline-offset-8 decoration-red-ndr">Curieux</span></h2>
      </div>
      <div className="col-span-1">
        <img src={codeur} alt="codeur" className="w-full object-cover" />
      </div>
    </div>
    <SectionAbout />
      <Skills />
      <SoftSkills />
    <Contact />
    </>
  );
}

export default App;
