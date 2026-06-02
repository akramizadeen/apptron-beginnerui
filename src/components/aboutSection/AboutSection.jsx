import React from "react";
import AboutImg from "../../assets/images/about.jpg";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="w-full p-6 mt-8 flex items-center justify-center gap-6">
      <div className="w-1/2 p-3 mx-3">
        <img src={AboutImg} alt="About Us" className="rounded-xl shadow-2xl" />
      </div>
      <div className="w-1/2 p-3 mx-3 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-slate-700">About Us</h2>
        <p className="text-lg">We believe that high-quality web design shouldn't be reserved for those with years of experience. BeginnerUl was founded to bridge the gap between complex frameworks and visual simplicity.</p>
        <p className="text-lg">Our philosophy is rootectin minimalism. By stripping away unnecessary elements, we create interfaces that are not only beautiful but also highly functional and accessible for everyone.</p>
        <p className="text-lg">Join over 5,000 creators who are building the future of the web with our simplified components and design guidance.</p>
        <button className="text-blue-800 font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:text-blue-600 cursor-pointer">
          Learn More <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
