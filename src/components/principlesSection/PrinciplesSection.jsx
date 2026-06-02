import { LayoutDashboard, Settings, Zap } from "lucide-react";
import React from "react";
import PrincipleCard from "./PrincipleCard";

const PrinciplesSection = () => {

    const principles = [
        {
            title: "Fast Performance",
            description: "Built on a lightweight architecture that ensures your pages load in milliseconds, not seconds.",
            icon: {
                icon: Zap
            },
            color: "bg-purple-200 text-purple-600"
        },
        {
            title: "Modern Layout",
            description: "A responsive 12 column grid system that adapts perfectly to any screen size from mobile to desktop.",
            icon: {
                icon: LayoutDashboard
            },
            color: "bg-blue-200 text-blue-600"
        },
        {
            title: "Easy Setup",
            description: "No complex build steps. Just clean, documented code that works right out of the box for beginners.",
            icon: {
                icon: Settings
            },
            color: "bg-pink-200 text-pink-600"
        },
    ];

    return (
        <div className="w-full py-10 px-20 mt-9 bg-pink-100/60 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-slate-700 mb-2">Core Principles</h2>
            <p className="text-slate-500 text-xl">
                Standardized components designed for maximum impact and minimal configuration.
            </p>
            <div className="w-full mt-8 grid grid-cols-3 gap-6">
                {principles.map((principle, index) => (
                    <PrincipleCard
                        key={index}
                        title={principle.title}
                        description={principle.description}
                        icon={principle.icon}
                        color={principle.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default PrinciplesSection;
