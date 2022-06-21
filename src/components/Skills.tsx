import React from "react";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="container max-w-screen-xl  mx-auto text-center">
      <h2 className="text-5xl font-semibold w-auto inline-block pb-9">
        <span role="img" aria-label="toolbox" className="pr-1">
        👨‍🔧
        </span>
        <span className="bg-gradient-to-r from-red-ndr to-blue-ndr bg-clip-text text-transparent">
          Hard Skills
        </span>
      </h2>
      <p className="text-3xl text-center text-white/50 py-9">
        Parce que le développement est une histoire d'outils et de technologies, voici ceux que j'utilise.
      </p>
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-10 py-9 text-center">
        <div className="col-span-1 flex flex-col">
          <i className="devicon-html5-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">HTML</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-css3-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">CSS</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-javascript-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">JAVASCRIPT</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-react-original text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">REACT.JS</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-typescript-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">TYPESCRIPT</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-github-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">GITHUB</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-npm-original-wordmark text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">NPM</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-firebase-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">FIREBASE</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-tailwindcss-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">TAILWIND</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-bootstrap-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">BOOTSTRAP</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-nodejs-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">NODE JS</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-nextjs-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">NEXT.JS</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-visualstudio-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">VS CODE</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-filezilla-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">FILEZILLA</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-wordpress-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">WORDPRESS</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-photoshop-plain text-white/50 hover:text-white duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">PHOTOSHOP</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
