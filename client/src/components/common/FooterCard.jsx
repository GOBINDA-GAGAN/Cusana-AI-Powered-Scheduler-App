import React from "react";

const FooterCard = ({ title, dec }) => {
  return (
    <div
      className=" w-full rounded-xl bg-linear-to-b from-[#2F2F2F] to-[#1F1F1F] px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_25px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_20px_40px_rgba(0,0,0,0.55)]
      "
    >
      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-400 sm:text-base">
        {dec}
      </p>
    </div>
  );
};

export default FooterCard;