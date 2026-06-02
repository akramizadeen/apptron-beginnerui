import React from "react";

const FooterSection = () => {
    return (
        <div className="w-full bg-white flex items-center justify-between mt-8 px-15 py-8">
            <div className="flex flex-col items-start gap-1">
                <p className="text-lg font-bold text-slate-700">BeginnerUI</p>
                <p className="text-sm text-gray-500">© 2024 BeginnerUI. Built for simplicity.</p>
            </div>
            <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-blue-800">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-blue-800">Terms</a>
                <a href="#" className="text-gray-500 hover:text-blue-800">Contact</a>
            </div>
        </div>
    );
};

export default FooterSection;
