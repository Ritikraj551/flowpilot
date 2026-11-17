import { steps } from "../data/steps";
import StepCard from "../components/StepCard";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-3">HOW IT WORKS</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get started in three simple steps.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            From setting up your workspace to tracking your team's progress,
            FlowPilot keeps things simple.
          </p>
        </div>

        {/* grid steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              number={String(index + 1).padStart(2, "0")}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
