import React from "react";
import {
  MdOutlineScience,
  MdNotificationsNone,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { GoDashboard } from "react-icons/go";
import { CgFormatSlash } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { BiTask } from "react-icons/bi";
const Home = () => {
  return (
    <>
      <div className="sidebar bg-gradient-to-t from-blue-900 to-slate-900 shadow  w-52 h-full fixed z-50 overflow-x-hidden top-0 left-0">
        <div className="profile mt-5">
          <img
            src="logo512.png"
            alt="student"
            className="h-24 w-24 rounded-full border-4 border-spacing-4 border-slate-300 flex items-center justify-center mx-auto"
          />
          <div className="text-center my-5">
            <h2 className="font-bold uppercase text-white">Md Ariful Islam</h2>
            <h3 className="text-gray-100 flex items-center justify-center gap-1 mt-1 text-sm">
              <span>
                <MdOutlineScience color="orange" />
              </span>
              Science
            </h3>
          </div>
        </div>
        <div className="w-3/4 mx-auto border-2 mb-5"></div>
        <ul className="mb-5">
          <li>
            <a
              href="/"
              className=" pl-6 py-2 w-full text-white  uppercase text-sm flex items-center justify-start gap-2"
            >
              <span>
                <GoDashboard />
              </span>
              <span>dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" pl-6 py-2 w-full text-white  uppercase text-sm flex items-center justify-start gap-2"
            >
              <span>
                <MdNotificationsNone />
              </span>
              <span>notification</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" pl-6 py-2 w-full text-white  uppercase text-sm flex items-center justify-start gap-2"
            >
              <span>
                <TbReportAnalytics />
              </span>
              <span>school notice</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" pl-6 py-2 w-full text-white  uppercase text-sm flex items-center justify-start gap-2"
            >
              <span>
                <MdOutlineLibraryBooks />
              </span>
              <span>subject overview</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" pl-6 py-2 w-full text-white  uppercase text-sm flex items-center justify-start gap-2"
            >
              <span>
                <BiTask />
              </span>
              <span>weekly exam</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" pl-6 py-2 w-full text-white  uppercase text-sm flex items-center justify-start gap-2"
            >
              <span>
                <BiTask />
              </span>
              <span>monthly exam</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" pl-6 py-2 w-full text-white  uppercase text-sm flex items-center justify-start gap-2"
            >
              <span>
                <BiTask />
              </span>
              <span>semister exam</span>
            </a>
          </li>
        </ul>
        <div className="w-3/4 mx-auto border-2 mb-5"></div>
        <div className="flex items-center justify-start mx-auto w-2/3">
          <button className="px-3 py-2 text-white rounded text-sm uppercase w-full bg-slate-900">
            logout
          </button>
        </div>
      </div>
      <div className="ml-52">
        <div className="container">
          <div className="mt-10 mb-5">
            <h2 className=" text-slate-900 font-bold text-2xl">
              Welcome, Md Ariful Islam
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-3   p-8 bg-gradient-to-l from-blue-900 to-slate-900">
              <h2 className="text-xl font-bold text-white uppercase">
                your ranking
              </h2>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold mb-2 text-orange-500">07</h2>
                <span>
                  <CgFormatSlash color="white" size="32" />
                </span>
                <span className="text-sm text-gray-500">from 32 students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
