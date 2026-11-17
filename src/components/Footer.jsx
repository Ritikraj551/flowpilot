import { Workflow } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row">
        <div className="max-w-sm">
          <a
            href="#"
            className="mb-3 flex items-center gap-2 text-xl font-bold"
          >
            <Workflow size={25} />
            FlowPilot
          </a>

          <p className="text-sm leading-6 text-gray-400">
            Simplify your workflow, organize your projects, and help your team
            achieve more together.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>

            <li>
              <a href="#how-it-works" className="hover:text-white">
                How It Works
              </a>
            </li>

            <li>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FlowPilot. All rights reserved.
      </div>
    </footer>
  );
}
