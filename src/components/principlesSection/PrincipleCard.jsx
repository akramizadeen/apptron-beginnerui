import { LayoutDashboard, Settings, Zap } from "lucide-react";
import React from "react";

const PrincipleCard = ({ title, description, icon, color}) => {
  return (
    <div className="bg-white p-5 m-3 rounded-2xl shadow-md">
        <div className={`w-15 h-15 ${color} flex items-center justify-center rounded-xl my-3`}>
            <icon.icon className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-700 my-3">{title}</h3>
        <p className="text-lg text-slate-500">
            {description}
        </p>
    </div>
  );
};

export default PrincipleCard;
