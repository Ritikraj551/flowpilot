import { Check } from "lucide-react";

export default function PriceCard({
  name,
  description,
  price,
  billing,
  features,
  popular,
}) {
  return (
    <div
      className={`relative border rounded-2xl p-8 ${
        popular ? "border-blue-600 shadow-lg" : "border-gray-200"
      }`}
    >
      {/* popular badge */}
      {popular && (
        <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      {/* plan info */}
      <h3 className="text-xl font-bold mb-2">{name}</h3>

      <p className="text-gray-600 mb-6">{description}</p>

      {/* price */}
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>

        <span className="text-gray-500">
          {billing === "monthly" ? "/month" : "/year"}
        </span>
      </div>

      {/* features */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check size={18} className="text-green-600" />

            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* cta */}
      <a
        href="#contact"
        className={`block text-center py-3 rounded-lg font-semibold ${
          popular ? "bg-blue-600 text-white" : "border border-gray-300"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
