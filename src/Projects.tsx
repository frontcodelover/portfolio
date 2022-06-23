import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Projects = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, stagger: 0.3, scrollTrigger: {
        trigger: ".card",
        start: "top center",
        end: "top 50%",
        }}
    );
  }, []);

  return (
    <section>
      <div className="grid grid-cols-4 gap-6 h-52 noOverFlowY">
        <div className="card bg-[#01111e] p-6 rounded-xl text-white/50 relative">
          <h3 className="text-white text-2xl font-semibold mb-4">
            CodeTracker
          </h3>
          <p>Tracker son temps passé à coder</p>
          <p>Next.JS / Firebase / Typescript / Chart.JS</p>
          <div className="absolute bottom-5">
            <a
              href="https://github.com/frontcodelover/codetrackerts"
              target="_blank"
              className="cursor-pointer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="card bg-[#01111e] p-6 rounded-xl text-white/50 relative">
          <h3 className="text-white text-2xl font-semibold mb-4">SpotPhoto</h3>
          <p>Trouver les meilleurs spots photos</p>
          <p>Next.JS / Firebase / JS / Open Weather API / Leaflet </p>
          <div className="absolute bottom-5">
            <a
              href="https://github.com/frontcodelover/spotphoto"
              target="_blank"
              className="cursor-pointer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="card bg-[#01111e] p-6 rounded-xl text-white/50 relative">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Toneback Photo
          </h3>
          <p>Galerie et tutoriel sur la retouche photo</p>
          <p>Squarespace (nocode)</p>
          <div className="absolute bottom-5">
            <a
              href="https://www.tonebackphotos.com/ font-semibold "
              target="_blank"
              className="cursor-pointer"
            >
              TonebackPhotos.com
            </a>
          </div>
        </div>
        <div className="card bg-[#01111e] p-6 rounded-xl text-white/50 relative">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Avant j'étais riche
          </h3>
          <p>Cadeaux originaux et décalés</p>
          <p>Wordpress (theme custom) </p>
          <div className="absolute bottom-5">
            <a
              href="https://www.avantjetaisriche.com/"
              target="_blank"
              className="cursor-pointer"
            >
              Avantjetaisriche.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
