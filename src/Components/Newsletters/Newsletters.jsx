import React from 'react';
import news from '../../assets/Isolation_Mode.png';
const Newsletters = () => {
  return (
    <div className="lg:max-w-6xl w-11/12  mx-auto my-10 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-10 items-center ">
      <div>
        <img src={news} alt="" />
      </div>
      <div className="space-y-5">
        <h2 className="font-bold text-5xl">Subscribe to our Newsletter!</h2>
        <h3 className="font-semibold text-2xl text-blue-700">
          Subscribe to our newsletter and stay <br /> updated.
        </h3>
        <input
          placeholder="Your Email"
          className="w-full py-4 px-6 text-xl text-blue-500 border-2 border-blue-700 rounded-lg outline-none"
          type="text"
        />
        <button className="w-full rounded-lg bg-yellow-500 py-3 text-xl font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletters;
