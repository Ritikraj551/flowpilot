import { features } from "../data/features";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Powerful Features
          </span>

          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything your team needs to work smarter
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            From organizing projects to tracking progress, FlowPilot brings your
            team's workflow together in one simple place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
