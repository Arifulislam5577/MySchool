import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className=" py-3">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="logo">
            <img src="images/Logo.svg" alt="Logo" className="h-14" />
          </div>
          <div className="nav-list ">
            <ul className="flex items-center justify-between gap-5">
              <li>
                <Link className="text-base font-bold text-" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-base font-bold text-" to="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-base font-bold text-" to="/">
                  Success Story
                </Link>
              </li>
              <li>
                <Link className="text-base font-bold text-" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base font-bold text-" to="/">
                  Admit Your Child
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
