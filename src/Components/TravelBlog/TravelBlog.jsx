import React from 'react';
import Title from '../Title/Title';
import img from '../../assets/Rectangle 30.png';
import { IoIosArrowForward } from 'react-icons/io';
import img1 from '../../assets/Rectangle 18.png';
import img2 from '../../assets/Rectangle 18-1.png';
import img3 from '../../assets/Rectangle 18-2.png';

const TravelBlog = () => {
  return (
    <div className="lg:max-w-6xl w-full mx-auto my-10 ">
      <Title subTitle="Travel Blog"></Title>
      <div className="grid w-11/12 mx-auto lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-5">
        <div className="card bg-white shadow-xl drop-shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex md:justify-start  items-center lg:flex-row  md:flex-col gap-2 ">
              <h3 className="text-yellow-500 font-semibold ">
                Work and Travel
              </h3>
              <h3 className="font-semibold">16 septembar 23</h3>
            </div>
            <div>
              <p className="lg:text-xl text-xl md:text-base font-bold my-3">
                Embracing the Digital Nomad Lifestyle the Digital Nomad thr...
              </p>
            </div>
            <hr className="w-full mx-auto" />
            <div className="flex lg:justify-between justify-between md:justify-center items-center md:gap-4">
              <div className="flex items-center gap-4">
                <img
                  className="lg:h-10 lg:w-10 w-10 h-10 md:w-8 md:h-8 rounded-full"
                  src={img}
                  alt=""
                />
                <h3 className="font-semibold md:text-xs lg:text-sm text-sm">
                  Ys Stafen
                </h3>
              </div>
              <div>
                <h3 className="text-yellow-500 md:text-xs lg:text-sm text-sm font-semibold flex items-center">
                  Reed More{' '}
                  <span className="flex">
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white drop-shadow-xl shadow-lg">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex md:justify-start  items-center lg:flex-row  md:flex-col gap-3">
              <h3 className="text-yellow-500 font-semibold">Historical</h3>
              <h3 className="font-semibold">14 septembar 23</h3>
            </div>
            <div>
              <p className="lg:text-xl text-xl md:text-base font-bold my-3">
                Historical Journeys: Stepping Back in Time Through Travel
              </p>
            </div>
            <hr className="w-full mx-auto" />
            <div className="flex lg:justify-between justify-between md:justify-center items-center md:gap-4">
              <div className="flex items-center gap-4">
                <img
                  className="lg:h-10 lg:w-10 w-10 h-10 md:w-8 md:h-8 rounded-full"
                  src={img}
                  alt=""
                />
                <h3 className="font-semibold md:text-xs lg:text-sm text-sm">
                  Aria Montegue
                </h3>
              </div>
              <div>
                <h3 className="text-yellow-500 md:text-xs lg:text-sm text-sm font-semibold flex items-center">
                  Reed More{' '}
                  <span className="flex">
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white  drop-shadow-xl shadow-lg">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex md:justify-start  items-center lg:justify-start lg:flex-row  md:flex-col gap-3">
              <h3 className="text-yellow-500 font-semibold">Tourism</h3>
              <h3 className="font-semibold">10 septembar 23</h3>
            </div>
            <div>
              <p className="lg:text-xl text-xl md:text-base font-bold my-3">
                Sustainable Tourism: Preserving the Planet While Seeing It All
              </p>
            </div>
            <hr className="w-full mx-auto" />
            <div className="flex lg:justify-between justify-between md:justify-center items-center md:gap-4">
              <div className="flex items-center gap-4">
                <img
                  className="lg:h-10 lg:w-10 w-10 h-10 md:w-8 md:h-8 rounded-full"
                  src={img}
                  alt=""
                />
                <h3 className="font-semibold lg:text-sm text-sm  md:text-xs">
                  Elara Throne
                </h3>
              </div>
              <div>
                <h3 className="text-yellow-500 lg:text-sm text-sm md:text-xs font-semibold flex items-center">
                  Reed More{' '}
                  <span className="flex">
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBlog;
