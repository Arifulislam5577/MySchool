import React from "react";
import {
  MdOutlineScience,
  MdNotificationsNone,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { GoDashboard } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { BiTask } from "react-icons/bi";
const Home = () => {
  return (
    <section>
      <div className="sidebar bg-gradient shadow  w-60 h-full fixed z-50 overflow-x-hidden top-0 left-0">
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
      <div className="ml-60 ">
        <div className="container">
          <div className="grid grid-cols-4 gap-5 mt-10 mb-5">
            <div className="col-span-4">
              <div className="p-10 bg-gradient  shadow rounded grid grid-cols-3 items-center justify-between">
                <div className="col-span-2">
                  <h2 className="text-2xl tracking-wider font-bold text-white uppercase">
                    baroicha residential model school
                  </h2>
                  <p className="capitalize mt-2 text-white tracking-wider">
                    baroicha,belabo,narsingdi
                  </p>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <button className="text-white flex items-center justify-center gap-2 capitalize border p-3">
                    <BsTelephone />
                    contact us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-gradient shadow rounded p-10 flex items-center justify-between">
                <h2 className="text-2xl uppercase text-white font-bold tracking-wider">
                  Ranking
                </h2>

                <h2 className="text-xl uppercase text-white font-bold tracking-wider">
                  <span className="text-orange-500 text-4xl">07</span>
                  <span>/</span>
                  <span>32</span>
                </h2>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-gradient shadow rounded p-10 ">
                <div className="flexBtw">
                  <h2 className="text-2xl uppercase text-white font-bold tracking-wider">
                    Subject
                  </h2>

                  <h2 className="text-xl uppercase text-white font-bold tracking-wider">
                    <span className="text-orange-500 text-4xl">11</span>
                  </h2>
                </div>
                <div className="flexBtw flex-wrap mt-5 gap-3 ">
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    bangla 1st
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    bangla 2nd
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    english
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    math
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    religion
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    art
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    ict
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    physic
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    chemistry
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    biology
                  </button>
                  <button className="uppercase border py-2 px-4 text-sm text-white">
                    higher math
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
