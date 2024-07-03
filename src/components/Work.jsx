import React from 'react';
import WorkImg from '../assets/WORK1.png';
import WorkImg2 from '../assets/WORK2.png';

const Work = () => {
    return (
        <div id="Work" className=" work w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold border-b-4 inline border-pink-600'>Work</p>
                    <p className='py-4'>Check out some of my recent works</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                FIGMA Music Website
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkImg2})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className='opacity-0 group-hover:opacity-80'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                FIGMA Movie App
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                FIGMA Music Website
                            </span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                FIGMA Music Website
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
