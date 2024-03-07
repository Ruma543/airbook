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
    <div className="lg:max-w-6xl mx-auto my-10">
      <Title subTitle="Popular Airlines"></Title>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10">
        <div className="flex items-center gap-5 py-4">
          <img src={bba} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">
              Biman Bangladesh Airlines
            </h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 4{' '}
              <span> ( 783 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={emirats} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">Emirates</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">Turkish Airlines</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">malaysia Airlines</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={singapore} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">Singapore Airlines</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">Turkish Airlines</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={bba} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">
              Biman Bangladesh Airlines
            </h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 4{' '}
              <span> ( 783 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={emirats} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">Emirates</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">Turkish Airlines</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={malaysia} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">malaysia Airlines</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={singapore} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">Singapore Airlines</h3>
            <h3 className="flex items-center gap-3">
              <RxStarFilled className="text-yellow-500 text-xl" /> 5{' '}
              <span> ( 753 review )</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <img src={singapore} className="" alt="" />
          <div className="">
            <h3 className="font-bold text-blue-600 ">Singapore Airlines</h3>
            <h3 className="flex items-center gap-3">
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
// //  Biman Bangladesh Airlines Emirates Turkish Airlines malaysia
//               Airlines 4 ( 783 review ) 5 ( 753 review ) 5 ( 753 review ) 5 (
//               753 review )
