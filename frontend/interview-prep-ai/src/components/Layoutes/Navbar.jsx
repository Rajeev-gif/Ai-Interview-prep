import React from "react";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import { Link } from "react-router-dom";
import LOGO from "../../assets/interview-prep-ai-logo.png";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border border-b border-gray-200/50 background-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30 rounded-b-4xl">
      <div className="container mx-auto flex itemms-center justify-between gap5">
        <div className="flex items-center gap-5">
          <Link to="/">
            <h2 className="text-lg md:text-xl font-medium text-black leading-5 font-sans">
              Interview AI
            </h2>
            {/* <img className="max-h-15 object-cover" alt="logo" src={LOGO} /> */}
          </Link>
          <Link to="/dashboard">
            <h2 className="text-base md:text-xl font-medium text-gray-700 leading-5">
              Dashboard
            </h2>
          </Link>
        </div>

        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;
