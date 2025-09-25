import React from "react";
import vector1 from "../assets/vector1.png";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <div className="relative rounded-lg shadow p-8 text-center bg-gradient-to-l from-[#9f62f2] to-[#632ee3] overflow-hidden">
        <img
          src={vector1}
          alt="vector"
          className="absolute left-0 top-0 h-full object-cover opacity-100 pointer-events-none"
        />
        <img
          src={vector1}
          alt="vector"
          className="absolute right-0 top-0 h-full object-cover opacity-100 pointer-events-none transform scale-x-[-1]"
        />

        <div className="relative text-white opacity-90">In-Progress</div>
        <div className="relative text-5xl text-white font-extrabold mt-4">
          {inProgressCount}
        </div>
      </div>
      <div className="relative rounded-lg shadow p-8 text-center bg-gradient-to-l to-[#54cf68] from-[#00827a] overflow-hidden">
        <img
          src={vector1}
          alt="vector"
          className="absolute left-0 top-0 h-full object-cover opacity-100 pointer-events-none"
        />
        <img
          src={vector1}
          alt="vector"
          className="absolute right-0 top-0 h-full object-cover opacity-100 pointer-events-none transform scale-x-[-1]"
        />

        <div className="relative text-white opacity-90">Resolved</div>
        <div className="relative text-5xl text-white font-extrabold mt-4">
          {resolvedCount}
        </div>
      </div>
    </section>
  );
}
