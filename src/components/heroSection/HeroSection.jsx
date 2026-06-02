import React from "react";
import heroImg from '../../assets/images/hero.jpg';

const HeroSection = () => {
    return (
        <div className="w-full p-5 flex items-center justify-between gap-7 px-15 pt-20">
            <div className="w-1/2 p-5 flex flex-col items-start justify-center gap-8">
                <span className="p-2 px-4 rounded-full text-sm bg-blue-100 text-slate-600 font-bold">
                    NEW RELEASE v2.0
                </span>
                <div className="text-7xl font-bold text-slate-700 flex flex-col items-start justify-center gap-3">
                    <span className="">Build Smarter,</span>
                    <span className="text-blue-800">Not Harder</span>
                </div>
                <p className="text-slate-500 text-2xl">
                    Empowering beginners to design professional web interfaces with zero friction. Our system focuses on clarity, speed and standard patterns.
                </p>
                <div>
                    <button className="bg-blue-800 border-2 border-blue-800 text-white px-5 py-3 rounded-lg mr-5 cursor-pointer hover:bg-transparent hover:text-blue-800 transition duration-300">
                        Get Started
                    </button>
                    <button className="bg-slate-200 border-2 border-slate-400 text-slate-600 px-5 py-3 rounded-lg cursor-pointer hover:bg-transparent hover:text-slate-600 transition duration-300">
                        View Demo
                    </button>
                </div>
            </div>
            <div className="w-1/2 p-4">
                <img src={heroImg} alt="Hero"
                    className="rounded-xl border-10 border-slate-400/50 shadow-xl"
                />
            </div>
        </div>
    );
};

export default HeroSection;
