import React from 'react';
import banner from '../../assets/Rectangle 2.png';
import { FaSearch } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
const Banner = () => {
  return (
    <div
      className="lg:h-[80vh] "
      style={{
        backgroundImage: 'url(https://i.ibb.co/xsDqPN7/Rectangle-2.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
      }}
    >
      <div className="lg:max-w-6xl mx-auto ">
        {/* welcome title */}
        <div>
          <h3 className="text-4xl font-semibold text-white text-left my-5">
            Welcome to <span className="font-bold text-blue-700">AirBook</span>
          </h3>
        </div>
        <div className="bg-white  py-10 px-7 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <button className="bg-gray-200 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white hover:text-bold flex items-center gap-2 ">
                <FiCircle /> One way
              </button>
              <button className="bg-gray-200 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white hover:text-bold flex items-center gap-2">
                <FiCircle /> Round Trip
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-gray-200 px-3 py-2 rounded-lg text-blue-700 flex items-center gap-2 ">
                1Traveler <IoIosArrowDown />
              </button>
              <button className="bg-gray-200 px-3 py-2 rounded-lg text-blue-700 flex items-center gap-2 ">
                Economy <IoIosArrowDown />
              </button>
            </div>
          </div>
          <div className="flex   items-center gap-4">
            <div className=" grid lg:grid-cols-4 gap-4 w-full ">
              <div className="flex items-center  rounded-lg  border-2 border-gray-200 gap-3 py-2 px-2">
                <h3 className="border-r-2 border-gray-400 font-bold px-4">
                  DAC
                </h3>
                <div className="flex flex-col">
                  <h3 className="font-semibold">Dhaka</h3>
                  <h3 className="text-xs">Hazrat Shahjalal Internatio</h3>
                </div>
              </div>
              <div className="flex items-center  rounded-lg  border-2 border-gray-200 gap-3 py-2 px-2">
                <h3 className="border-r-2 border-gray-400 font-bold px-4">
                  Cxb
                </h3>
                <div className="flex flex-col">
                  <h3 className="font-semibold">Cox’s Bazar</h3>
                  <h3 className="text-xs">Cox’s Bazar international</h3>
                </div>
              </div>
              <div className="flex items-center  rounded-lg  border-2 border-gray-200 gap-3 py-2 px-2">
                <h3 className="border-r-2 border-gray-400 font-bold px-4">
                  03
                </h3>
                <div className="flex flex-col">
                  <h3 className="font-semibold">octobee</h3>
                  <h3 className="text-xs">tuesday, 2023</h3>
                </div>
              </div>
              <div className="flex items-center  rounded-lg  border-2 border-gray-200 gap-3 py-2 px-2">
                <h3 className="border-r-2 border-gray-400 font-bold px-4">
                  05
                </h3>
                <div className="flex flex-col">
                  <h3 className="font-semibold">october</h3>
                  <h3 className="text-xs">tuesday, 2023</h3>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 rounded-lg bg-yellow-500">
              <h3 className="text-xl text-white">
                <FaSearch />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
