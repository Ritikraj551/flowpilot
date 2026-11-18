import { Check ,ArrowRight} from "lucide-react";

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
      className={`relative flex flex-col rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        popular
          ? "border-blue-600 bg-white shadow-xl shadow-blue-900/10"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow-lg">
          MOST POPULAR
        </span>
      )}

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold text-gray-900">{name}</h3>

        <p className="text-sm leading-6 text-gray-500">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-extrabold tracking-tight text-gray-900">
            ${Number.isInteger(price) ? price : price.toFixed(2)}
          </span>

          <span className="text-sm text-gray-500">
            /{billing === "monthly" ? "month" : "year"}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-400">
          {billing === "yearly" ? "Billed annually" : "Billed monthly"}
        </p>
      </div>

      <a
        href="#contact"
        className={`mb-8 flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 font-semibold transition ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
        }`}
      >
        Get Started
        <ArrowRight size={18} />
      </a>

      <div className="border-t border-gray-100 pt-6">
        <p className="mb-5 text-sm font-semibold text-gray-900">
          What's included:
        </p>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-gray-600"
            >
              <Check size={19} className="shrink-0 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
