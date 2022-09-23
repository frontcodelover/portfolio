import React, {useRef, useEffect} from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



function SoftSkills() {
  const imgRefRight = useRef(null)
  const imgRefLeft = useRef(null)
  const imgElMiddle = useRef(null)
  
  useEffect(() => {
    const elRight = imgRefRight.current;
    gsap.fromTo(elRight, { opacity: 0, translateX: "150px" }, {
      opacity: 1, duration: 3, ease: "power4.inOut", translateX: "0", scrollTrigger: {
      trigger: elRight
      }
    })
    const elLeft = imgRefLeft.current;
    gsap.fromTo(elLeft, { opacity: 0, translateX: "-150px" }, {
      opacity: 1, duration: 3, ease: "power4.inOut", translateX: "0", scrollTrigger: {
      trigger: elLeft
      }
    })
    const elMiddle = imgElMiddle.current;
    gsap.fromTo(elMiddle, { opacity: 0, translateX: "0" }, {
      opacity: 1, duration: 5, ease: "power4.inOut", translateX: "0", scrollTrigger: {
      trigger: elMiddle
      }
    })

    
  }, [])
  return (
    <section className="container max-w-screen-xl mx-auto text-center py-20">
    
      <div className="text-white lg:text-2xl grid lg:grid-cols-3 lg:py-9">
        <div className="col-span-1" ref={imgRefLeft}>
          <span className="bg-red-ndr py-2 px-6 inline-block my-3 rounded-3xl">Curieux</span> <br />
          <span className="bg-red-ndr py-2 px-6 inline-block my-3 rounded-3xl">Esprit d'équipe</span> <br />
        </div>

        <div className="col-span-1" ref={imgElMiddle}>
          <span className="bg-red-ndr py-2 px-6 inline-block my-3 rounded-3xl">Passionné</span> <br />
        <span className="bg-red-ndr py-2 px-6 inline-block my-3 rounded-3xl">Communication</span><br />
        </div>
        <div className="col-span-1" ref={imgRefRight}>
        <span className="bg-red-ndr py-2 px-6 inline-block my-3 rounded-3xl">Anticipation</span> <br />
        <span className="bg-red-ndr py-2 px-6 inline-block my-3 rounded-3xl">Autonomie</span> <br />
        </div>

      </div>
    </section>
  )
}

export default SoftSkills