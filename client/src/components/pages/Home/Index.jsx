import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <section className="md:min-h-screen">
      <div className="flex items-center justify-between flex-col-reverse md:flex-row">
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-white md:min-h-screen">
          <div className="container">
            <div className="py-5 p-10 md:p-0">
              <img
                src="images/Logo.svg"
                alt="logo"
                className="h-32 border rounded-full  mx-auto w-32 p-3 bg-slate-100"
              />
              <Outlet />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex items-center flex-col justify-center bg-gray-100 md:min-h-screen">
          <div className="container my-8 md:my-0 text-center md:text-left">
            <img src="images/banner.svg" alt="banner" className="w-full h-52" />
            <div className="my-5">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase ">
                Being a student is easy
              </h1>
              <p className="text-base md:block hidden my-3">
                These teachers changed me through their work. Education turned
                me from a boy who was obsessed with playing sports outside into
                an avid reader who loved “beating” the math problems put in
                front of me.
              </p>
              <p className="text-base md:hidden block">
                Here is a sampling of some of my favorite quotes that embody the
                power and value of influence in society.
              </p>

              <a
                href="/"
                className="bg-primary p-3 px-4 mt-3 inline-block rounded cursor-pointer hover:bg-slate-900 duration-200 uppercase text-white"
              >
                become a student
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
