import React from "react";
import { Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" min-h-screen">
      <div className="md:grid md:grid-cols-2 min-h-screen">
        <div className="md:col-span-1 w-full bg-blue-600 flex items-center justify-center flex-col p-5">
          <img src="images/sign.svg" alt="sign" className="h-44" />
          <div className="my-5">
            <h1 className="uppercase text-4xl font-bold  md:w-2/3 mx-auto text-center text-white">
              Welcome to our b.r.m school
            </h1>
          </div>
        </div>
        <div className="md:col-span-1 w-full bg-white p-5 text-gray-900 flex items-center justify-center flex-col">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Hero;
