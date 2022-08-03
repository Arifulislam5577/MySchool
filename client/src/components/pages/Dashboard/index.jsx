import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  User,
  Student,
  ChalkboardSimple,
  ChalkboardTeacher,
  Activity,
  Lock,
} from 'phosphor-react';
const Dashboard = () => {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-12 lg:gap-5">
        <div className="lg:col-span-3 col-span-2 bg-slate-900 min-h-screen">
          <div className="my-5">
            <img
              src="images/admin-mask.svg"
              alt="admin  "
              className="lg:h-20 lg:w-20 h-10 w-10 mx-auto  "
            />

            <div>
              <h2 className="uppercase text-2xl font-bold text-center my-3 text-white hidden lg:block">
                MD ARIFUL ISLAM
              </h2>

              <ul className="mt-4 justify-center text-center  flex flex-col items-center ">
                <Link
                  to="/dashboard"
                  className="p-4 bg-primary text-white uppercase font-bold hover:bg-primary  duration-200 w-full text-left lg:pl-12 pl-0 flex items-center lg:gap-1 gap-0 lg:justify-start justify-center  hover:translate-x-1"
                >
                  <User size={20} className="ml-4 sm:ml-0 " color="#fff" />
                  <span className="hidden lg:block">Profile</span>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left lg:pl-12 pl-0 flex items-center lg:gap-1 gap-0 lg:justify-start justify-center hover:translate-x-1"
                  to="/dashboard/admit"
                >
                  <Student size={20} className="ml-4 sm:ml-0 " color="#fff" />
                  <span className="hidden lg:block">Admit Student</span>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left lg:pl-12 pl-0 flex items-center lg:gap-1 gap-0 lg:justify-start justify-center dropdown dropdown-right hover:translate-x-1"
                  to="#"
                >
                  <ChalkboardSimple
                    size={20}
                    className="ml-4 sm:ml-0 "
                    color="#fff"
                  />
                  <span className="hidden lg:block">Classes</span>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu  shadow bg-slate-900  w-52"
                  >
                    <li className=" hover:bg-primary">
                      <Link to="/dashboard/classes/6">Class 6</Link>
                    </li>
                    <li className=" hover:bg-primary">
                      <Link to="/dashboard/classes/7">Class 7</Link>
                    </li>
                    <li className=" hover:bg-primary">
                      <Link to="/dashboard/classes/8">Class 8</Link>
                    </li>
                    <li className=" hover:bg-primary">
                      <Link to="/dashboard/classes/9">Class 9</Link>
                    </li>
                    <li className=" hover:bg-primary">
                      <Link to="/dashboard/classes/10">Class 10</Link>
                    </li>
                  </ul>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left lg:pl-12 pl-0 flex items-center lg:gap-1 gap-0 lg:justify-start justify-center hover:translate-x-1"
                  to="/dashboard/teachers"
                >
                  <ChalkboardTeacher
                    size={20}
                    className="ml-4 sm:ml-0 "
                    color="#fff"
                  />
                  <span className="hidden lg:block">Teachers</span>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left lg:pl-12 pl-0 flex items-center lg:gap-1 gap-0 lg:justify-start justify-center hover:translate-x-1"
                  to="/dashboard/actives"
                >
                  <Activity size={20} className="ml-4 sm:ml-0 " color="#fff" />
                  <span className="hidden lg:block">Actives</span>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left lg:pl-12 pl-0 flex items-center lg:gap-1 gap-0 lg:justify-start justify-center hover:translate-x-1"
                  to="/dashboard/policy"
                >
                  <Lock size={20} className="ml-4 sm:ml-0 " color="#fff" />
                  <span className="hidden lg:block">Policy</span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-9 col-span-10 min-h-screen">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
