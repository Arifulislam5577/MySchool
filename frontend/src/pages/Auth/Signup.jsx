import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const Signup = () => {
  return (
    <form className="lg:w-3/4 mx-auto my-5 lg:p-0 p-3">
      <h1 className="text-2xl font-bold  mb-5 uppercase text-blue-600">
        create student account
      </h1>
      <div className="w-full grid grid-cols-2 gap-3 my-3">
        <InputField
          label="First name"
          name="firstname"
          type="text"
          placeholder="First name"
        />
        <InputField
          label="Last name"
          name="lastname"
          type="text"
          placeholder="Last name"
        />
      </div>
      <InputField
        label="Your email"
        name="email"
        type="email"
        placeholder="example@name.com"
      />

      <div className="w-full grid grid-cols-2 gap-3 my-3">
        <div className="flex flex-col w-full">
          <label htmlFor="classname" className="text-xs text-gray-800">
            Select Class
          </label>
          <select
            id="classname"
            className="p-[11px] rounded border shadow-sm focus:outline-none my-1 text-xs "
          >
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Science</option>
            <option>B. Studies</option>
            <option>Humanities</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="date" className="text-xs text-gray-800">
            Date Of Birth
          </label>
          <input
            id="date"
            datepicker
            datepicker-autohide
            type="date"
            class=" rounded border p-[11px] my-1 text-xs"
            placeholder="Select date"
          />
        </div>
      </div>
      <InputField
        label="Your password"
        name="password"
        type="password"
        placeholder="password"
      />

      <div className="my-3">
        <button className="py-2 bg-blue-600 text-white w-full rounded uppercase">
          signup
        </button>
      </div>
      <div className="my-3 flex gap-2">
        <p className="text-sm text-gray-600">Already have an account?</p>
        <Link to="/auth/login" className="text-sm text-blue-600">
          Login
        </Link>
      </div>
    </form>
  );
};

export default Signup;
