import React from "react";

export default function StepCard({ number, icon: Icon, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      {/* Step Number */}
      <span className="text-3xl font-bold text-blue-600">{number}</span>

      {/* Icon */}
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center my-5">
        <Icon size={25} className="text-blue-600" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
