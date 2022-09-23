import React from 'react'


// eslint-disable-next-line no-empty-pattern
function Contact() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden p-5 sm:py-12">
  <div className="mx-auto rounded-3xl bg-[#081d31] py-9 text-center w-full">
    <h2 className="lg:text-5xl text-3xl font-bold leading-tight text-white overflow-hidden py-4 mb-8">Et si on se rencontrait ?</h2>
    <div
          className="grid lg:grid-cols-1 col-span-2 lg:col-span-2 gap-2 container mx-auto text-center"
        
        >
          <a
            href="https://twitter.com/frontcodelover"
            target="_blanck"
            rel="noreferrer"
          >
            <button className="text-xl bg-white text-black-ndr w-48 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-twitter-original mr-2"></i>
              Twitter
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-de-raemy-957b62231/"
            target="_blanck"
            rel="noreferrer"
          >
            <button className="text-xl bg-white text-black-ndr w-48 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-linkedin-plain mr-2"></i>
              Linkedin
            </button>
          </a>
          <a
            href="https://github.com/frontcodelover"
            target="_blanck"
            rel="noreferrer"
          >
            <button className=" text-xl bg-white text-black-ndr w-48 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-github-original mr-2"></i>
              Github
            </button>
          </a>
          <a
            href="mailto:job@nicolasderaemy.fr"
            target="_blanck"
            rel="noreferrer"
          >
            <button className=" text-xl bg-blue-ndr text-white w-48 h-12 rounded-full hover:text-white/50 duration-500">
              <i className="devicon-mail-original mr-2"></i>
              Contactez-moi
            </button>
          </a>
        </div>
  </div>
</div>
  )
}

export default Contact