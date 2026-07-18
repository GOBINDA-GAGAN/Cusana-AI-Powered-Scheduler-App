import React from "react";

const FooterCard = ({ title, dec }) => {
    return (
        <div className=" w-40 rounded-md bg-linear-to-b from-[#2F2F2F] to-[#1F1F1F] 
                    py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_25px_rgba(0,0,0,0.45)]">
            <h3 className="text-center text-xl font-bold tracking-tight text-white">
                {title}
            </h3>

            <p className="mt-1 text-center text-sm text-gray-400">
                {dec}
            </p>
        </div>
    );
};

export default FooterCard;