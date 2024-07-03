import React from 'react';
 import { HiArrowNarrowRight } from 'react-icons/hi'; 

function Home() {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
    
      
      <div id="Home"className=" home class max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <div className="text-pink-600 font-semibold">Hi my name is</div>
        <div className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">Khushi Parekh</div>
         <div className="class text-4xl sm:text-7xl font-bold text-[#8892b0]">I am Web Developer and UI/UX Designer.</div>
         <p className="classname  text-[#8892b0] py-4 max-w-[700px]">"An aspiring web developer and UI/UX designer with a passion for creating engaging user experiences. Also a short film director, bringing stories to life through the lens."</p>
         <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">View Work
            <span className="class hover:rotate-90 duration-300">
            <HiArrowNarrowRight className='ml-3 '/>
            </span>
            </button>
         </div>
      </div>













    </div>
  );
}

export default Home;
