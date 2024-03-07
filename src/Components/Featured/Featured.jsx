import React from 'react';
import Title from '../Title/Title';
import feature1 from '../../assets/Rectangle 18-11.png';
import feature2 from '../../assets/Rectangle 18-22.png';
import feature3 from '../../assets/Rectangle 181.png';

const Featured = () => {
  return (
    <div className="lg:max-w-6xl mx-auto my-10">
      <Title subTitle="Featured Destinations"></Title>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="card bg-white shadow-xl drop-shadow-xl">
          <figure className="px-2 pt-3">
            <img src={feature1} alt="feature" className="rounded-xl h-56" />
          </figure>
          <div className="card-body items-center text-left mt-1">
            <p className="text-xl font-bold">
              Stopover opportunity in İstanbul with Turkish Airlines
            </p>
            <div className="card-actions">
              <button className="bg-yellow-500 text-black  font-semibold px-7 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl drop-shadow-xl">
          <figure className="px-2 pt-3">
            <img src={feature2} alt="feature" className="rounded-xl h-56" />
          </figure>
          <div className="card-body items-center text-left mt-1">
            <p className="text-xl font-bold">
              Discover the timeless city with Touristanbul of Turkish Airlines
            </p>
            <div className="card-actions">
              <button className="bg-yellow-500 text-black  font-semibold px-7 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl drop-shadow-xl">
          <figure className="px-2 pt-3">
            <img src={feature3} alt="feature" className="rounded-xl h-56" />
          </figure>
          <div className="card-body items-center text-left mt-1">
            <p className="text-xl font-bold">
              the best of Abu Dhabi with exclusive Etihad Airways!
            </p>
            <div className="card-actions">
              <button className="bg-yellow-500 text-black  font-semibold px-7 py-2 rounded-lg">
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
