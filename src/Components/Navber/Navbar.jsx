import React from 'react';
import air from '../../assets/Singapore Airlines.png';

const Navbar = () => {
  return (
    <div className=" navbar bg-base-100 w-11/12 mx-auto font-primary ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-bold"
          >
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Offer</a>
            </li>
            <li>
              <a>Airline</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          <img src={air} alt="" />
          <a className=" text-3xl text-yellow-700 font-bold">
            Air<span className="text-blue-700 font-semibold">Book</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-lg font-bold">Blog</a>
          </li>
          <li>
            <a className="text-lg font-bold">Offer</a>
          </li>
          <li>
            <a className="text-lg font-bold">Airline</a>
          </li>
          <li>
            <a className="text-lg font-bold">About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary text-lg">Sign in</a>
      </div>
    </div>
  );
};

export default Navbar;
