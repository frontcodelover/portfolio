import React, { useState } from 'react'
import Button from './Button';

const Nav = () => {
    let Links =[
      {name:"A propos",link:"/#about"},
      {name:"Compétences",link:"/"},
      {name:"Expériences",link:"/"},
      {name:"Projets",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className=' w-full top-0 left-0 z-10 absolute'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        {"< / >"}
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {open ? 'close':'menu'}
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-yellow-ndr duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Contact
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav