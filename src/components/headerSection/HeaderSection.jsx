import React from "react";
import NavigationMenu from "./NavigationMenu";

const HeaderSection = () => {
  return (
    <div className="w-full bg-white px-15 py-4 flex items-center justify-between gap-6 shadow-md">
        <div className="text-2xl text-slate-700 font-bold">
            <a href="/" className="text-slate-700 hover:text-blue-800">BeginnerUI</a>
        </div>
        <div>
            <NavigationMenu />
        </div>
        <div>
            <button className="p-3 px-6 bg-linear-to-r from-blue-900 to-blue-600 text-slate-200 rounded-lg cursor-pointer hover:bg-linear-to-r hover:from-blue-600 hover:to-blue-900 transition duration-300">
                Get Started
            </button>
        </div>
    </div>
  );
};

export default HeaderSection;
