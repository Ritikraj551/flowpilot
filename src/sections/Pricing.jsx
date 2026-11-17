import { useState } from "react";
import { pricingPlans } from "../data/pricing";
import PriceCard from "../components/PriceCard";

export default function Pricing() {
  // Stores billing option
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold mb-3">PRICING</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple pricing for every team.
          </h2>

          <p className="text-gray-600">Choose a plan that fits your needs.</p>
        </div>

        {/* billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 rounded-lg ${
              billing === "monthly"
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-2 rounded-lg ${
              billing === "yearly"
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            Yearly (Save 20%)
          </button>
        </div>

        {/* pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <PriceCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={
                billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
              }
              billing={billing}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
