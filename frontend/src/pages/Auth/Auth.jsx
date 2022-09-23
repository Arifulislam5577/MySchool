import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section className=" min-h-screen">
      <div className="lg:grid lg:grid-cols-2 min-h-screen">
        <div className="lg:col-span-1 w-full bg-blue-600 flex items-center justify-center flex-col p-5 py-10 lg:py-0">
          <img src="images/sign.svg" alt="sign" className="h-64" />
          <div className="my-5">
            <h1 className="uppercase lg:text-4xl text-3xl font-bold  lg:w-2/3 mx-auto text-center text-white">
              Welcome to our b.r.m school
            </h1>
          </div>
        </div>
        <div className="lg:col-span-1 w-full bg-gray-100 p-5 text-gray-900 flex items-center justify-center flex-col">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Auth;
