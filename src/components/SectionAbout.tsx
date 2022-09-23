import React, {useRef, useEffect} from "react";
import Ndr from "../ndr-nb.jpg"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

type Props = {};

const SectionAbout = (props: Props) => {
  const imgRef = useRef(null)


  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, { opacity: 0, translateX: "50px" }, {
      opacity: 1, duration: 4, ease: "power4.inOut",  translateX: "0", scrollTrigger: {
        trigger: el,
        start: 'top 5%',
  end: 'bottom 40%',
  scrub: 1,
        pin:true,
      }
    })
    
  }, [])

  return (
    <section className="grid lg:grid-cols-3 grid-col-2 pb-9 lg:gap-10 p-5 h-auto" ref={imgRef} id="about">
      <div className="lg:col-span-1 h-auto mx-auto col-span-2" >
        <img src={Ndr} alt="ndr" className="w-full object-scale-down h-96 lg:h-3/4 object-top rounded-xl" />
      </div>
        <div className="lg:col-span-2 lg:content-center pt-7">
      <p className="font-[poppins] dark:text-gray-400 leading-snug lg:text-4xl text-2xl overflow-y-hidden">
        <span role="img" aria-label="vulcan" >👋 </span>
          <span className="bg-gradient-to-r from-yellow-ndr to-white bg-clip-text text-transparent" >
        Hello ! Je m'appelle Nicolas et je suis développeur web Front-End passionné !
        </span>
      </p>
      <p className="text-white/50 font-[poppins] dark:text-gray-400 leading-snug pt-6 lg:text-2xl text-md">
        Depuis mon plus jeune âge <span className="bg-blue-ndr text-white  px-2">je suis émerveillé par le web</span> et j'ai décidé, à 37 ans, 
        d'entamer une reconversion professionnelle.<br /><br /> De nature curieuse, mes
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
