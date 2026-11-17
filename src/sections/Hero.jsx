export default function Hero() {
  return (
    <section className="px-6 py-24 text-center">
      <p className="text-blue-600 font-semibold mb-4">
        PROJECT MANAGEMENT MADE SIMPLE
      </p>
      <h1 className="text-5xl font-bold mb-6">
        One workspace. Every project. Total control
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Organize projects, manage your team, and track progress from one simple
        workspace.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white  px-6 py-3 rounded-lg"
        >
          Get Started
        </a>
        <a href="#features" className="border px-6 py-3 rounded-lg">
          Explore Features
        </a>
      </div>
    </section>
  );
}
