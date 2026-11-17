import { features } from "../data/features";
import FeatureCard from "../components/FeatureCard";

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* section */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-3">FEATURES</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything your team needs to move forward.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Manage your work, collaborate with your team, and understand your
            progress.
          </p>
        </div>

        {/* feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
