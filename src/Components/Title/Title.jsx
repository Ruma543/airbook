import React from 'react';

const Title = ({ subTitle }) => {
  return (
    <div className="  flex  items-center justify-start mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      {/* <h3 className="text-center  px-4 md:px-6 py-1 md:text-base text-sm text-primary-dark dark:text-[#e5ebee]  flex justify-center">
        <PiWaveSquareBold />
        <PiWaveSquareBold />
        <PiWaveSquareBold />
      </h3> */}
      <h5 className="text-left text-primary-dark  text-2xl md:text-3xl font-bold mt-2">
        {subTitle}
      </h5>
    </div>
  );
};

export default Title;
