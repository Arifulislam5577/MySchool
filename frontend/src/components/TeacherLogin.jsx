import React from "react";

const TeacherLogin = () => {
  return (
    <form className="w-2/3 mx-auto my-5">
      <div className="my-3 flex flex-col w-full">
        <label htmlFor="id" className="text-xs text-gray-800">
          Teacher ID
        </label>
        <input
          type="text"
          id="id"
          className=" p-2 border shadow-sm focus:outline-none placeholder:text-xs my-1"
          placeholder="student id"
        />
      </div>
      <div className="my-3 flex flex-col w-full">
        <label htmlFor="password" className="text-xs text-gray-800">
          Your password
        </label>
        <input
          type="password"
          id="password"
          className=" p-2 border shadow-sm focus:outline-none placeholder:text-xs my-1"
          placeholder="password"
        />
      </div>

      <div className="my-3">
        <button className="py-2 bg-blue-600 text-white w-full rounded">
          Login
        </button>
      </div>
    </form>
  );
};

export default TeacherLogin;
