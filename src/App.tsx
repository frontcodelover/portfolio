import React, {useRef, useEffect} from "react";
import codeur from "./codeur.png";
import "./App.css";
import SectionAbout from "./components/SectionAbout"
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SoftSkills from "./components/SoftSkills";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DotRing from "./components/DotRing/DotRing";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger)

function App() {
  const imgRef = useRef(null)
  const imgComputRef = useRef(null)
  const imgButtonRef = useRef(null)
  const txtTest = useRef(null)
  const txtTestTwo = useRef(null)
  const textProjects = useRef(null)

  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, { opacity: 0, yPercent:-25, stagger: 0.1 }, {
      opacity: 1, duration: 2, ease: "power4.inOut", translateY: "0",
      yPercent: 0,
      scrollTrigger: {
      trigger: el
      }
    })

    const elComputer = imgComputRef.current;
    gsap.fromTo(elComputer, {scale: 0.8, opacity: 0  }, {
      scale: 1, ease: "power4.inOut", opacity:1,  duration: 2, scrollTrigger: {
        trigger: elComputer
        }
    })

    const elButton = imgButtonRef.current;
    gsap.fromTo(elButton, { opacity: 0, translateY: "10px"  }, {
       ease: "power4.inOut", opacity:1,  duration: 2, translateY: "0", scrollTrigger: {
        trigger: elButton
        }
    })

    const elText = txtTest.current;
    gsap.fromTo(elText, {x:-2000, opacity: 1, ease: "slowMo"}, {
      scrollTrigger: {
        trigger: elText,
        scrub: 0.6,
        start: "center center",
        end: "top 50%",
      },
      x:"20%"
    }
    )

    const elText2 = txtTestTwo.current;
    gsap.fromTo(elText2, {x:-2000, opacity: 1, ease: "slowMo"}, {
      scrollTrigger: {
        trigger: elText2,
        scrub: 0.6,
        start: "top 31%",
        end: "bottom 50%",
      },
      x:"auto"
    }
    )

    const elTextprojects = textProjects.current;
    gsap.fromTo(elTextprojects, {x:-2000, opacity: 1, ease: "slowMo"}, {
      scrollTrigger: {
        trigger: elTextprojects,
        scrub: 0.6,
        start: "center center",
        end: "top 50%",
      },
      x:"72%"
    }
    )

    
    
    

  }, [])
  



  return (
    <>
     
      <DotRing />

    <div className="h-screen  grid grid-cols-2 content-center text-white relative z-0 overflow-y-hidden" >
  <div className="col-span-1" ref={imgRef}>
      <p className="text-2xl tracking-wide">Nicolas de RAEMY</p>
      <h1 className="font-extrabold text-8xl w-auto overflow-y-hidden">
        <span className="bg-gradient-to-r from-blue-ndr via-red-ndr to-yellow-ndr bg-clip-text text-transparent overflow-y-hidden">Front-End</span> <br /> Développeur
      </h1>
      <h2 className="text-4xl py-6 tracking-wide"><span className="underline underline-offset-8 decoration-blue-ndr">Passionné</span> & <span className="underline underline-offset-8 decoration-red-ndr">Curieux</span></h2>
      </div>
      <div className="col-span-1 pb-12">
          <img src={codeur} alt="codeur" className="w-full object-cover" id="computer" ref={imgComputRef} />
        </div>

        <div className="grid grid-cols-3 col-span-2 gap-6 container w-1/2 mx-auto" ref={imgButtonRef}>
          <a href="https://twitter.com/frontcodelover" target="_blanck" rel="noreferrer">
        <button className="text-xl bg-white text-black-ndr w-48 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500" >
          <i className="devicon-twitter-original mr-2"></i>
          Twitter
        </button>
        </a>
        <a href="https://www.linkedin.com/in/nicolas-de-raemy-957b62231/" target="_blanck" rel="noreferrer">
        <button className="text-xl bg-white text-black-ndr w-48 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500">
          <i className="devicon-linkedin-plain mr-2"></i>
          Linkedin
        </button>
        </a>
        <a href="https://github.com/frontcodelover" target="_blanck" rel="noreferrer">
        <button className=" text-xl bg-white text-black-ndr w-48 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500">
          <i className="devicon-github-original mr-2"></i>
          Github
        </button>
        </a>
        </div>
      </div>
      <div id="pageWrap">
  <section id="heros">


      <h2 id="textWrap" className="text-[9rem] text-white w-full font-extrabold uppercase pin" ref={txtTest}>Qui suis-je ?</h2>

        </section>
        </div>
            <SectionAbout />
     
      <div className="w-auto relative text-center">
    <h2 className="text-[9rem] text-white font-extrabold uppercase inline-block" ref={txtTestTwo}>SOFT&HARD SKILLS</h2>
      </div>
      <Skills />
      <SoftSkills />
      <h2 className="text-[9rem] text-white font-extrabold uppercase inline-block" ref={textProjects}>PROJETS</h2>
      <Projects />
    <Contact />
    </>
  );
}

export default App;
