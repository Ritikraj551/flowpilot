import {
  ArrowRight,
  CheckCircle2,
  CirclePlay,
  LayoutDashboard,
  Users,
  CheckSquare,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-indigo-50 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* content left side */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Your team's workspace, simplified
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Manage projects.
            <span className="block text-blue-600">Move work forward.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Bring your projects, tasks, and team collaboration into one
            organized workspace. Spend less time managing work and more time
            getting it done.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <CirclePlay size={19} />
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-600" />
              Simple to use
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-600" />
              Built for teams
            </span>
          </div>
        </div>

        {/* content right side */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-blue-200/40 blur-3xl"></div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl shadow-blue-900/10 sm:p-7">
            {/* header dashboard */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-5">
              <div>
                <p className="text-sm text-gray-500">Workspace</p>
                <h3 className="mt-1 text-lg font-bold text-gray-900">
                  Project Overview
                </h3>
              </div>

              <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                <LayoutDashboard size={22} />
              </div>
            </div>

            {/* stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckSquare size={16} />
                  Active Tasks
                </div>
                <p className="mt-3 text-3xl font-bold text-gray-900">24</p>
                <p className="mt-1 text-xs text-green-600">Tasks in progress</p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} />
                  Team Members
                </div>
                <p className="mt-3 text-3xl font-bold text-gray-900">08</p>
                <p className="mt-1 text-xs text-indigo-600">Working together</p>
              </div>
            </div>

            {/* progress */}
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  Website Redesign
                </span>
                <span className="text-sm font-semibold text-blue-600">75%</span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-3/4 rounded-full bg-blue-600"></div>
              </div>
            </div>

            {/* recent */}
            <div className="mt-7 border-t border-gray-100 pt-5">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">Recent Activity</h4>
                <TrendingUp size={18} className="text-green-600" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-50 p-2 text-green-600">
                    <CheckCircle2 size={17} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Design review completed
                    </p>
                    <p className="text-xs text-gray-500">Today</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                    <Users size={17} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Team meeting scheduled
                    </p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
