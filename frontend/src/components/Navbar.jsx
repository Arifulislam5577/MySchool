import React from "react";
import { BsList } from "react-icons/bs";
const Navbar = () => {
  return (
    <header className="py-6">
      <div className="container">
        <nav className="flex justify-between">
          <h1 className="logo font-bold text-xl text-black">B.R.M.S</h1>
          <div className="hidden lg:block">
            <ul className="flexBtw gap-5">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 hover:text-black duration-200 transition-colors"
                >
                  Notice
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 hover:text-black duration-200 transition-colors"
                >
                  Our Success
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 hover:text-black duration-200 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2  text-sm bg-black text-white rounded">
              Signup
            </button>
            <button className="lg:hidden">
              <BsList size="24" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
