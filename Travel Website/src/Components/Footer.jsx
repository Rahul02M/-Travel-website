import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-darkBackground text-white">
      <div className="flex flex-col  md:flex-row justify-between p-8 md:mx-32 px-5">
        <div className="w-full md:w-1/4 ">
          <h1 className="font-semibold text-xl pb-4 ">TripPixie</h1>
          <p className="font-medium	">
            With TripPixies you can experience new travel and the best tourist
            destinations that we have to offer
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0 ">
            {" "}
            Destinstions
          </h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Paris , France
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Dubai , UAE
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Venice , Italy
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">About</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Contact Us{" "}
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Testimonial
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Rating
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Follow us</h1>
          <nav className="flex flex-col md:items-center gap-2">
            <FaFacebook
              size={25}
              className="hover:text-brightColor transition-all  cursor-pointer"
            />
            <FaXTwitter
              size={25}
              className="hover:text-brightColor transition-all  cursor-pointer"
            />
            <FaInstagram
              size={25}
              className="hover:text-brightColor transition-all  cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-brightColor"> Rahul M </span> | All right
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
