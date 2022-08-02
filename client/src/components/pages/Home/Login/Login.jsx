import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';

const Login = () => {
  return (
    <form className="my-5 w-full">
      <Input type="email" placeholder="Email address" />
      <Input type="password" placeholder="Password" />

      <div className="mb-3">
        <input
          type="submit"
          value="Login"
          className="bg-primary p-3 text-white w-full rounded cursor-pointer hover:bg-slate-900 duration-200 uppercase"
        />
      </div>
      <p className="text-sm">
        Create a new account?
        <Link to="/" className="text-primary">
          &nbsp; Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
