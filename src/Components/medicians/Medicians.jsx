import React from "react";
import { Link } from "react-router-dom";
import nurseImage from "../../assets/medician/nurse.jpg";
import { FaVirus, FaStethoscope } from "react-icons/fa";

const Medician = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-100 to-white min-h-screen p-6 md:p-12">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Text Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h4 className="uppercase tracking-widest text-gray-600 text-sm">
              Med Center Health
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-red-800">
              Highest Quality
            </h1>
            <p className="text-gray-600">
              To learn more about our clinical programs, browse our list of
              medical services alphabetically or search by keyword in the box
              below.
            </p>
            <p className="text-sm text-gray-400">
              Image from{" "}
              <a href="#" className="underline">
                Billionphotos
              </a>
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block border-2 border-red-500 text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={nurseImage}
              alt="Medical Staff"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Bottom Info Boxes */}
        <div className="mt-12 bg-red-700 text-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <div className="flex items-start space-x-4">
            <FaVirus size={32} />
            <div>
              <h3 className="font-semibold text-lg mb-1">Medical Care</h3>
              <p className="text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaStethoscope size={32} />
            <div>
              <h3 className="font-semibold text-lg mb-1">Care Programs</h3>
              <p className="text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medician;
