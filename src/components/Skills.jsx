import React from 'react'

import HTML from '../assets/html.png'
import  CSS from '../assets/CSS-Logo.png'
import Javacript from '../assets/JavaScript-Symbol.png'
import Tailwind from '../assets/png-transparent-tailwind-css-hd-logo.png'
import Re from '../assets/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png'
import {FaGithub} from 'react-icons/fa'

const Skills = () =>
    {
        return (
           <div id="Skills"className="skills w-full bg-[#0a192f]  text-gray-300 ">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div className=' py-4 '>
                <p className='text-4xl font-bold border-b-4  inline border-pink-600'>Skills</p>
           
                <p className='py-4 font-semibold'>Technologies I have worked with </p>
            </div>
            </div>
            <div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
    <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
    <p className='my-4'>HTML</p>
  </div>

  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
    <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
    <p className='my-4'>CSS</p>
  </div>

  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
    <img src={Javacript} alt="JAVASCRIPT icon" className="w-20 mx-auto" />
    <p className='my-4'>JAVASCRIPT</p>
  </div>

  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
    <img src={Tailwind} alt="tailwind icon" className="w-20 mx-auto" />
    <p className='my-4'>TAILWIND</p>
  </div>

  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
    <img src={Re} alt="React icon" className="w-20 mx-auto" />
    <p className='my-4'>REACT</p>
  </div>
  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center">
     <FaGithub size={100}/>
    <p className='my-4'>GITHUB</p>
  </div>
</div>

           </div>
           </div>
        )
    }
    export default Skills;
