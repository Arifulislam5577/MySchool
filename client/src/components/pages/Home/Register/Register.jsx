import React from 'react';
import Input from '../Input/Input';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <form className="my-5 w-full">
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="email" placeholder="Email address" />
      <Input type="password" placeholder="Password" />

      <div className="mb-3">
        <input
          type="submit"
          value="Register"
          className="bg-primary p-3 text-white w-full rounded cursor-pointer hover:bg-slate-900 duration-200 uppercase"
        />
      </div>
      <p className="text-sm">
        Already registered?{' '}
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
