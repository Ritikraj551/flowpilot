import { Workflow, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 px-6 pt-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 pb-12 md:grid-cols-2">
        <div className="max-w-sm">
          <a
            href="#"
            className="mb-5 inline-flex items-center gap-2 text-2xl font-bold"
          >
            <Workflow size={28} className="text-blue-400" />
            FlowPilot
          </a>

          <p className="leading-7 text-gray-400">
            Simplify your workflow, organize your projects, and help your team
            achieve more together.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="md:justify-self-end">
          <h3 className="mb-5 font-semibold">Explore</h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
            </li>

            <li>
              <a href="#how-it-works" className="transition hover:text-white">
                How It Works
              </a>
            </li>

            <li>
              <a href="#pricing" className="transition hover:text-white">
                Pricing
              </a>
            </li>

            <li>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} FlowPilot. All rights reserved.</p>

          <a href="#" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
