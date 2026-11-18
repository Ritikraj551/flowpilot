import React from "react";

export default function StepCard({ number, icon: Icon, title, description }) {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={26} />
        </div>

        <span className="text-4xl font-extrabold text-blue-100">{number}</span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>

      <p className="leading-7 text-gray-600">{description}</p>
    </div>
  );
}
