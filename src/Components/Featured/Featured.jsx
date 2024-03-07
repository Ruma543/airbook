import React from 'react';
import Title from '../Title/Title';
import feature1 from '../../assets/Rectangle 18-11.png';
import feature2 from '../../assets/Rectangle 18-22.png';
import feature3 from '../../assets/Rectangle 181.png';

const Featured = () => {
  return (
    <div className="lg:max-w-6xl w-full mx-auto my-10 ">
      <Title subTitle="Featured Destinations"></Title>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 lg:w-full w-11/12 mx-auto">
        <div className="card bg-white shadow-xl drop-shadow-xl">
          <figure className="h-56 w-full">
            <img src={feature1} alt="feature" className="rounded-xl h-full" />
          </figure>
          <div className="card-body items-center text-left mt-1">
            <p className="lg:text-lg md:text-sm font-bold">
              Stopover opportunity in İstanbul with Turkish Airlines
            </p>
            <div className="card-actions">
              <button className="bg-yellow-500 text-black text-base  font-semibold px-7 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl drop-shadow-xl">
          <figure className="h-56 w-full">
            <img src={feature2} alt="feature" className="rounded-xl h-full" />
          </figure>
          <div className="card-body items-center text-left mt-1">
            <p className="lg:text-lg md:text-sm font-bold">
              Discover the timeless city with Touristanbul of Turkish Airlines
            </p>
            <div className="card-actions">
              <button className="bg-yellow-500 text-base text-black  font-semibold px-7 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl drop-shadow-xl">
          <figure className="h-56 w-full">
            <img src={feature3} alt="feature" className="rounded-xl h-full" />
          </figure>
          <div className="card-body items-center text-left mt-1">
            <p className="lg:text-lg md:text-sm font-bold">
              the best of Abu Dhabi with exclusive Etihad Airways!
            </p>
            <div className="card-actions">
              <button className="bg-yellow-500 text-base text-black  font-semibold px-7 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
