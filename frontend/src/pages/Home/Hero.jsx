import React from "react";

const Hero = () => {
  return (
    <section className="md:py-10 py-5 hero">
      <div className="container">
        <div className="flexBtw flex-col md:flex-row">
          <div className="hero-text lg:w-1/2 w-full lg:order-1 order-2 mt-5 md:mt-0">
            <h1 className="lg:text-4xl  text-3xl font-bold tracking-wide max-w-md">
              Your Children , Those are the very words I had written.
            </h1>

            <p className="tracking-wide max-w-sm text-gray-600 my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              quia.
            </p>
            <button className="px-4 py-2  text-sm bg-black text-white rounded capitalize">
              get started
            </button>
          </div>
          <div className="hero-img lg:w-1/2 w-full flexCenter lg:order-2 order-1">
            <img
              src="images/hero.png"
              alt="hero"
              className="lg:h-[28rem]  translate-x-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
