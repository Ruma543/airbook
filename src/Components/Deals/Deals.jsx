import React from 'react';
import Title from '../Title/Title';
import offer from '../../assets/offer.png';
import offer1 from '../../assets/offer2.png';
import offer2 from '../../assets/offer3.png';

const Deals = () => {
  return (
    <div className="lg:max-w-6xl mx-auto my-10">
      <Title subTitle="Deals and Offers"></Title>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className=" bg-base-100 shadow-xl flex items-center ">
          <div className="rounded-lg w-full">
            <img className=" h-40 " src={offer} alt="offer" />
          </div>
          <div className=" py-6">
            <p>With bkash payment only</p>
            <h2 className="card-title text-lg font-bold text-blue-500">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl flex items-center ">
          <div className="rounded-lg w-full">
            <img className=" h-40 " src={offer2} alt="offer" />
          </div>
          <div className=" py-6">
            <p>With bkash payment only</p>
            <h2 className="card-title text-lg font-bold text-blue-500">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl flex items-center ">
          <div className="rounded-lg w-full">
            <img className=" h-40 " src={offer1} alt="offer" />
          </div>
          <div className=" py-6">
            <p>With bkash payment only</p>
            <h2 className="card-title text-lg font-bold text-blue-500">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
