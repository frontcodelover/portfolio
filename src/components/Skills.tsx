import React from 'react'

type Props = {}

const Skills = (props: Props) => {
  return (
    <section>
      
      <h2 className='text-5xl font-semibold  w-auto inline-block'><span role="img" aria-label="toolbox" >🧰 </span> <span className='bg-gradient-to-r from-red-ndr to-blue-ndr bg-clip-text text-transparent'>
      Compétences</span></h2>
      <div className='grid grid-cols-8 gap-10'>
        <div className='col-span-1'>React</div>
        <div className='col-span-1'>React</div>
        <div className='col-span-1'>React</div>
        <div className='col-span-1'>React</div>
        <div className='col-span-1'>React</div>
        <div className='col-span-1'>React</div>
        <div className='col-span-1'>React</div>
        <div className='col-span-1'>React</div>
      </div>
    </section>
  )
}

export default Skills