import React from 'react';
import logo from '../../assets/LOGO.png';
import air from '../../assets/Singapore Airlines.png';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
const Footer = () => {
  return (
    <div className="bg-blue-600 py-10">
      <div className="lg:max-w-6xl mx-auto ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="text-white space-y-3">
            <h3 className="font-semibold text-lg">Address</h3>
            <h3 className="text-base">
              House- 75 Ka, Main <br /> Rd, Dhaka 1216
            </h3>
            <h3 className="text-base flex items-center gap-3">
              <GrLocation /> View on Maps
            </h3>
          </div>
          <div className="text-white space-y-3">
            <h3 className="font-semibold text-lg">About Us</h3>
            <h3 className="font-semibold text-lg">Stories</h3>
            <h3 className="font-semibold text-lg">Blogs</h3>
            <h3 className="font-semibold text-lg">Airlines</h3>
            <h3 className="font-semibold text-lg">Testimonials</h3>
          </div>
          <div className="text-white space-y-3">
            <h3 className="font-semibold text-lg">Join Us</h3>
            <h3 className="font-semibold text-lg">Term and Service</h3>
            <h3 className="font-semibold text-lg">Privacy and Policy</h3>
            <h3 className="font-semibold text-lg">Support</h3>
          </div>
          <div className="text-white space-y-2">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div>
              <h3 className=" text-lg">+880 1234562890</h3>
              <h3 className=" text-lg">+880 1345628980</h3>
              <h3 className=" text-lg">+880 1234562890</h3>
              <h3 className=" text-lg">info@airbook.com</h3>
            </div>
          </div>
        </div>
        <hr className="w-full bg-white my-10" />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div className="flex  items-center gap-3">
            <img src={air} alt="" />
            <a className=" text-2xl text-yellow-700 font-bold">
              Air<span className="text-white font-semibold">Book</span>
            </a>
          </div>
          <div>
            <h3 className="text-white text-xs">@ Copyright AIRBOOK</h3>
          </div>
          <div className="flex justify-center gap-4 items-center text-3xl text-white">
            <FaYoutube />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
