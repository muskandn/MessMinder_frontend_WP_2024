// Box.js
import React from 'react';

interface BoxProps {
  
  imageSrc: string;
  heading: string;
  paragraph: string;
  buttonName:string
}

//md:my-10 z-10 md:backdrop-blur-xl md:bg-[#F0F9FF]/50 md:rounded-xl md:shadow-card-shadow space-y-4 p-6 w-full md:w-[22rem] lg:w-[25rem]

const Box: React.FC<BoxProps> = ({imageSrc, heading, paragraph,buttonName }) => {
  return (
    <div className={`md:backdrop-blur-xl md:bg-[#F0F9FF]/50 h-full w-full p-8 mb-10 md:rounded-xl shadow-lg lg:flex lg:justify-center lg:items-center`}>
      
      <div className='pr-5 lg:w-1/2'>
          <img src={imageSrc} alt="image" />
      </div>


      <div className='lg:w-1/2'>
          {/* <h2 className="text-blue-900 text-2xl font-bold mb-2">{heading}</h2> */}
          <div className="space-y-1 ">
              <span className="font-lexend font-bold text-2xl sm:text-h32 pb-4">
                {heading}
              </span>
              <p className="text-[#667085] text-h16 sm:text-h14 pb-4">
                {paragraph}
              </p>
              <button className="text-white text-h16 bg-[#0EA5E9] px-6 py-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">{buttonName}</button>
          </div>
 
      </div>
      
    </div>
  );
};

export default Box;
