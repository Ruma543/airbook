import React from 'react';
import Title from '../Title/Title';
import offer from '../../assets/offer.png';
import offer1 from '../../assets/offer2.png';
import offer2 from '../../assets/offer3.png';
import { GoDotFill } from 'react-icons/go';

const Deals = () => {
  return (
    <div className="lg:max-w-6xl w-full mx-auto my-10 ">
      <Title subTitle="Deals and Offers"></Title>
      <div className="grid  lg:w-full w-11/12 mx-auto lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
        <div className=" bg-white shadow-xl rounded-lg drop-shadow-lg flex items-center gap-x-3 ">
          <div className="rounded-lg w-full h-full">
            <img className=" w-full h-full " src={offer} alt="offer" />
          </div>
          <div className=" py-6">
            <p className="text-xs font-semibold">With bkash payment only</p>
            <h2 className="card-title lg:text-base md:text-xs font-bold text-blue-500">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl rounded-lg drop-shadow-lg flex items-center gap-x-3">
          <div className="rounded-lg w-full h-full ">
            <img className=" w-full h-full" src={offer2} alt="offer" />
          </div>
          <div className=" py-6">
            <p className="text-xs font-semibold">With bkash payment only</p>
            <h2 className="card-title  lg:text-base md:text-xs font-bold text-blue-500">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl rounded-lg drop-shadow-lg flex items-center gap-x-3">
          <div className="rounded-lg w-full h-full">
            <img className="w-full h-full  " src={offer1} alt="offer" />
          </div>
          <div className=" py-6">
            <p className="text-xs font-semibold">With bkash payment only</p>
            <h2 className="card-title  lg:text-base md:text-xs font-bold text-blue-500">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
      </div>
      <div className="my-7">
        <h3 className="flex justify-center items-center gap-2">
          <GoDotFill className=" text-gray-400" />
          <GoDotFill className=" text-yellow-400" />
          <GoDotFill className=" text-gray-400" />
        </h3>
      </div>
    </div>
  );
};

export default Deals;
