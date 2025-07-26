import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-3">NexZen Tensfree</h2>
          <p className="text-sm leading-relaxed">
            NexGen Tensfree is a Global Trading company offering diverse
            products like households, groceries, clothes, and medicines. With
            own outlets and manufacturing, it ensures quality and timely
            delivery worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-red-600 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/groceries"
                className="hover:text-red-600 transition duration-200"
              >
                Groceries
              </Link>
            </li>
            <li>
              <Link
                to="/clothes"
                className="hover:text-blue-600 transition duration-200"
              >
                Clothes
              </Link>
            </li>
            <li>
              <Link
                to="/medicines"
                className="hover:text-purple-600 transition duration-200"
              >
                Medicines
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <a
            href="tel:9056729363"
            className="text-sm  hover:underline"
          >
            Phone: 9056729363
          </a>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:nexgentensfree@gmail.com"
              className="hover:text-purple-400"
            >
              nexgentensfree@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Location: NEW SUNNY ENCLAVE, Kharar,india,punjab region
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nexzen tensfree. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
