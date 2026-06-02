import React, { useState } from "react";

const NavigationMenu = () => {

    const menuItems = ["Home", "Features", "About", "Pricing"];
    const [activeItem, setActiveItem] = useState("Home");

    return (
        <div className="flex items-center justify-center gap-6">
            {menuItems.map((item, index) => (
                <div key={index} className={`m-2 pb-2 border-b-2 ${activeItem === item ? 'text-blue-800 border-blue-800' : 'text-slate-800 border-transparent'} cursor-pointer transition-all duration-300 hover:text-blue-800`} onClick={() => setActiveItem(item)}>
                    {item}
                </div>
            ))}
        </div>
    );
};

export default NavigationMenu;
