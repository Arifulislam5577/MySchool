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
      <div className="grid grid-cols-12 gap-5">
        <div className="md:col-span-3  col-span-4 bg-slate-900 min-h-screen">
          <div className="my-5">
            <img
              src="images/admin-mask.svg"
              alt="admin  "
              className="h-20 w-20 mx-auto  "
            />

            <div>
              <h2 className="uppercase text-2xl font-bold text-center my-3 text-white hidden md:block">
                MD ARIFUL ISLAM
              </h2>

              <ul className="mt-4 flex flex-col items-center gap-0">
                <Link
                  to="/dashboard"
                  className="p-4 bg-primary text-white uppercase font-bold hover:bg-slate-900 duration-200 w-full text-left pl-12 flex items-center gap-1"
                  Profile
                >
                  <User size={20} color="#fff" />
                  <span className="hidden lg:block">Profile</span>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left pl-12 flex items-center gap-1"
                  to="/dashboard/admit"
                >
                  <Student size={20} color="#fff" />
                  <span className="hidden lg:block">Admit Student</span>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left pl-12 flex items-center gap-1 dropdown dropdown-right"
                  to="#"
                >
                  <ChalkboardSimple size={20} color="#fff" />
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
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left pl-12 flex items-center gap-1"
                  to="/dashboard/teachers"
                >
                  <ChalkboardTeacher size={20} color="#fff" />
                  <span className="hidden lg:block">Teachers</span>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left pl-12 flex items-center gap-1"
                  to="/dashboard/actives"
                >
                  <Activity size={20} color="#fff" />
                  <span className="hidden lg:block">Actives</span>
                </Link>

                <Link
                  className="p-4 bg-slate-900 text-white uppercase font-bold hover:bg-primary duration-200 w-full text-left pl-12 flex items-center gap-1"
                  to="/dashboard/policy"
                >
                  <Lock size={20} color="#fff" />
                  <span className="hidden lg:block">Policy</span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-9 col-span-8 min-h-screen">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
