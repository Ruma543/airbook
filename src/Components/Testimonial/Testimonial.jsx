import React from 'react';
import img from '../../assets/img-1.jpg';
import img1 from '../../assets/Rectangle 30.png';
import img2 from '../../assets/Rectangle 33.png';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { RxStarFilled } from 'react-icons/rx';
const Testimonial = () => {
  return (
    <div className="lg:w-full w-11/12 mx-auto bg-blue-600 lg:h-[70vh] py-10">
      <div className="lg:max-w-6xl mx-auto h-full lg:py-10 md:py-5 py-5 ">
        <div className="lg:w-full w-11/12 mx-auto grid lg:grid-cols-12 grid-cols-1 h-full gap-4   ">
          <div className="lg:col-span-2 h-full relative">
            <img className="h-full rounded-lg" src={img1} alt="" />
            <div className="h-full rounded-lg absolute w-full bg-blue-600/70 top-0 text-white flex justify-center items-center">
              <FaLongArrowAltLeft />
            </div>
          </div>
          <div className="lg:col-span-8 bg-white rounded-lg grid lg:grid-cols-12 grid-cols-1 gap-6  ">
            <img
              className="lg:col-span-3 rounded-lg lg:h-full"
              src={img}
              alt=""
            />
            <div className="lg:col-span-9 px-10 py-10">
              <h3 className="py-3">
                "Unforgettable journeys with John and Sarah! Their travel
                expertise turned our dreams into reality. Can't wait to explore
                with them again!"
              </h3>
              <div className="my-4">
                <h3 className="font-bold text-xl">Emily</h3>
                <h3>Adventure Enthusiast</h3>
                <div className="flex justify-between">
                  <h3 className="flex justify-start items-center text-yellow-500 text-xl">
                    <RxStarFilled />
                    <RxStarFilled />
                    <RxStarFilled />
                    <RxStarFilled />
                  </h3>
                </div>
              </div>
              {/* add Quatation */}
              <i className="fa-solid fa-quote-right"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-quote-right" /> */}
            </div>
          </div>
          <div className="lg:col-span-2  rounded-lg relative">
            <img className="h-full rounded-lg" src={img2} alt="" />
            <div className="h-full rounded-lg absolute w-full bg-blue-600/70 top-0 text-white flex justify-center items-center">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
