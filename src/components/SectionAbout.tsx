import React from "react";
import Ndr from "../ndr-nb.jpg"

type Props = {};

const SectionAbout = (props: Props) => {
  return (
    <section className="grid grid-cols-3 pb-9 gap-10">
      <div className="col-span-1 h-auto">
        <img src={Ndr} alt="ndr" className="w-full object-cover h-2/3 object-top rounded-xl" />
      </div>
        <div className="col-span-2 content-center pt-7">
      <p className="font-[poppins] dark:text-gray-400 leading-snug text-4xl">
        <span role="img" aria-label="vulcan" >👋 </span>
        <span className="bg-gradient-to-r from-yellow-ndr to-white bg-clip-text text-transparent">
        Hello ! Je m'appelle Nicolas et je suis développeur web Front-End passionné !
        </span>
      </p>
      <p className="text-white/50 font-[poppins] dark:text-gray-400 leading-snug pt-6 text-3xl">
        Depuis mon plus jeune âge <span className="bg-blue-ndr text-white  px-2">je suis émerveillé par le web</span> et j'ai décidé, à 37 ans, 
        d'entamer une reconversion professionnelle.<br /> De nature curieuse, mes
        expériences professionnelles m'ont permis de <span className="bg-white text-black-ndr px-2">développer différents
        soft-skills</span> comme l'esprit d'équipe, la communication, la polyvalence ou
        encore la curiosité. <br />
        <p className="text-white/50 font-[poppins] dark:text-gray-400 leading-snug pt-6">
        <span className="underline">Mes objectifs :</span> faire évoluer et développer <span className="bg-red-ndr text-white  px-2"> mes compétences techniques</span> dans une
        entreprise bienveillante.
        </p>
      </p>
      </div>
    </section>
  );
};

export default SectionAbout;
