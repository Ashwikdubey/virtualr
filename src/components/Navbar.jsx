import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
const Navbar = () => {
  const [menu, setmenu] = useState(true);
  const toggleNavbar = () => {
    setmenu(!menu);
  };
  return (
    <nav className="backdrop-blur-lg py-3 top-0   border-b z-50 border-neutral-700/80  sticky">
      <div className=" lg:text-sm px-4 lg:container mx-auto relative ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} className="h-10 w-10 mr-2" alt="" />
            <span className="tracking-tight text-xl">VirtualR</span>
          </div>
          <ul className="lg:flex hidden ml-14 space-x-12 ">
            {navItems.map((val) => (
              <li key={val.label}>
                <a className="text-white text-sm" href={val.href}>
                  {val.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:flex items-center space-x-12 justify-center hidden">
            <a href="" className="border py-2 px-3 rounded-md">
              Sign in
            </a>
            <a
              href=""
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden flex items-center justify-center">
          <button onClick={toggleNavbar}>{menu ? <Menu /> : <X />}</button>
            
          </div>
        </div>
        {!menu && (
          <div className="w-full  bg-neutral-900 fixed lg:hidden  right-0 z-20  items-center p-12 flex flex-col justify-center">
            <ul>
              {navItems.map((val) => (
                <li className="py-4">
                  <a href={val.href}>{val.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
            <a href="" className="py-2 px-3 border rounded-md">Sign-in</a>
            <a href="" className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md">Create an account</a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
