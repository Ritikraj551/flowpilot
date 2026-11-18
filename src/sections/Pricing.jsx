import { useState } from "react";
import { pricingPlans } from "../data/pricing";
import PriceCard from "../components/PriceCard";

export default function Pricing() {
  // Stores billing option
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Simple Pricing
          </span>

          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Plans that grow with your team
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Choose the plan that fits your workflow. Upgrade whenever your team
            needs more.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex rounded-xl bg-gray-100 p-1.5">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                billing === "monthly"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                billing === "yearly"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
          </div>

          <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
            Save 20%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
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
