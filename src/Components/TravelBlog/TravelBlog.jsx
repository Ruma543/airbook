import React from 'react';
import Title from '../Title/Title';
import img from '../../assets/Rectangle 30.png';
import { IoIosArrowForward } from 'react-icons/io';
import img1 from '../../assets/Rectangle 18.png';
import img2 from '../../assets/Rectangle 18-1.png';
import img3 from '../../assets/Rectangle 18-2.png';

const TravelBlog = () => {
  return (
    <div className="lg:max-w-6xl mx-auto my-10">
      <Title subTitle="Travel Blog"></Title>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <div className="card bg-white shadow-xl drop-shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center gap-5">
              <h3 className="text-yellow-500 font-semibold">Work and Travel</h3>
              <h3 className="font-semibold">16 septembar 23</h3>
            </div>
            <div>
              <p className="text-xl font-bold">
                Embracing the Digital Nomad Lifestyle the Digital Nomad thr...
              </p>
            </div>
            <hr className="w-full mx-auto" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="h-10 w-10 rounded-full" src={img} alt="" />
                <h3 className="font-semibold">Ys Stafen</h3>
              </div>
              <div>
                <h3 className="text-yellow-500 font-semibold flex items-center">
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
            <div className="flex items-center gap-5">
              <h3 className="text-yellow-500 font-semibold">Historical</h3>
              <h3 className="font-semibold">14 septembar 23</h3>
            </div>
            <div>
              <p className="text-xl font-bold">
                Historical Journeys: Stepping Back in Time Through Travel
              </p>
            </div>
            <hr className="w-full mx-auto" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="h-10 w-10 rounded-full" src={img} alt="" />
                <h3 className="font-semibold">Aria Montegue</h3>
              </div>
              <div>
                <h3 className="text-yellow-500 font-semibold flex items-center">
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
            <div className="flex items-center gap-5">
              <h3 className="text-yellow-500 font-semibold">
                Sustainable Tourism
              </h3>
              <h3 className="font-semibold">10 septembar 23</h3>
            </div>
            <div>
              <p className="text-xl font-bold">
                Sustainable Tourism: Preserving the Planet While Seeing It All
              </p>
            </div>
            <hr className="w-full mx-auto" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="h-10 w-10 rounded-full" src={img} alt="" />
                <h3 className="font-semibold">Elara Throne</h3>
              </div>
              <div>
                <h3 className="text-yellow-500 font-semibold flex items-center">
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
