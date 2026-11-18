import { steps } from "../data/steps";
import StepCard from "../components/StepCard";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple Process
          </span>

          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get started in three simple steps
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            No complicated setup. Just a simple way to organize your work and
            keep your team moving forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
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
