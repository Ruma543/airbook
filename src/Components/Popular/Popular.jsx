import React from 'react';
import Title from '../Title/Title';
import img from '../../assets/Singapore Airlines.png';
import { RxStarFilled } from 'react-icons/rx';
import america from '../../assets/american.png';
import bba from '../../assets/BBA.png';
import emirats from '../../assets/Emirates.png';
import malaysia from '../../assets/Malaysia-1.png';
import singapore from '../../assets/Singapore Airlines.png';

const Popular = () => {
  return (
    <div className="lg:max-w-6xl w-full mx-auto my-10 ">
      <Title subTitle="Popular Airlines"></Title>
      <div className="grid lg:w-full  w-11/12 mx-auto lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-x-10 lg:gap-y-0">
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={bba} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-sm text-blue-600 ">
              Biman Bangladesh Airlines
            </h3>
            <h3 className="flex items-center text-xs gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 4{' '}
              <span> ( 783 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={emirats} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-sm text-blue-600 ">Emirates</h3>
            <h3 className="flex text-xs items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 text-sm">
              Turkish Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 text-sm">
              malaysia Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={singapore} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 text-sm">
              Singapore Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 text-sm">
              Turkish Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={bba} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 text-sm ">
              Biman Bangladesh Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 4{' '}
              <span> ( 783 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={emirats} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 text-sm ">Emirates</h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 text-sm ">
              Turkish Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600  text-sm">
              malaysia Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={singapore} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600  text-sm">
              Singapore Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4 pr-7">
          <img src={singapore} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-sm text-blue-600 ">
              Singapore Airlines
            </h3>
            <h3 className="flex items-center gap-3 text-xs">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
