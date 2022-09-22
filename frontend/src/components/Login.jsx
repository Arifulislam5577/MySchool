import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const Login = () => {
  return (
    <form className="w-2/3 mx-auto my-5">
      <h1 className="text-2xl font-bold  mb-5 uppercase">student login</h1>
      <InputField
        name="email"
        type="email"
        placeholder="email address"
        label="Email address"
      />
      <InputField
        name="password"
        type="password"
        placeholder="password"
        label="Password"
      />

      <div className="my-3">
        <button
          className="py-2 uppercase bg-blue-600 text-white w-full rounded"
          type="submit"
        >
          Login
        </button>
      </div>
      <div className="my-3 flex gap-2">
        <p className="text-sm text-gray-600">Create a new account</p>
        <Link to="/" className="text-sm text-blue-600">
          Signup
        </Link>
      </div>
    </form>
  );
};

export default Login;
