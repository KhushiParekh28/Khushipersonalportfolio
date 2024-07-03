import React from 'react';

const About = () => {
  return (
    <div  id="About"className="about w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <div className="text-4xl font-bold inline border-b-4 border-pink-600">
              <p>About</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi.. I am Khushi, Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
           

"A highly passionate and driven second-year IT student, relentlessly diving into the latest technology and frameworks. As an aspiring web developer and UI/UX designer, I have crafted numerous stunning projects using Figma, showcasing my exceptional design skills. Additionally, I am a visionary short film director, adept at bringing captivating stories to life through the lens, creating unforgettable cinematic experiences."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

