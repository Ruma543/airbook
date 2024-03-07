import React from 'react';

const Title = ({ subTitle }) => {
  return (
    <div className="  flex  items-center lg:justify-start justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <h5 className="lg:text-left text-center text-primary-dark  lg:text-3xl md:text-3xl text-2xl font-bold mt-2">
        {subTitle}
      </h5>
    </div>
  );
};

export default Title;
