import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/laptop-screen.png";
import Profile from "../../assets/images/user.png";
import Logout from "../../assets/images/logout.png";
import { Popover } from "antd";
const renderContent = () => {
  return (
    <div>
      <p className="font-bold text-[18px] text-cyan-900">Anh Vu</p>
      <div className="flex gap-1 mt-4 bg-green-300 rounded-lg p-3 py-2 hover:bg-green-200 cursor-pointer">
        <img src={Logout} alt="" width={20} height={16} />
        <p>Đăng xuất</p>
      </div>
    </div>
  )
}
const Navbar = () => {

  return (
    <div className="flex justify-between px-4 bg-[#219ebc] py-2">
      <div className="flex">
        <NavLink to="/" className="w-12 h-12 rounded-[50%]">
          <img src={Logo} alt="" />
        </NavLink>
        <div className="flex justify-start gap-4 ml-12 mt-[10px]">
          <NavLink to="/">
            <p className="font-bold text-white hover:text-green-500 transition duration-300">Home</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="font-bold text-white hover:text-green-500 transition duration-300">Contact</p>
          </NavLink>
        </div>
      </div>
      <Popover content={renderContent} trigger="click">
        <div className="w-12 h-12 rounded-[50%]">
          <img src={Profile} alt="" />
        </div>
      </Popover>
    </div>
  )
}
export default Navbar;