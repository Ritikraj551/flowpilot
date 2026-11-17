import React from "react";
import { Workflow } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between">
      {/* logo */}
      <a href="#" classname="flex items-center gap-2">
        <Workflow size={28} />
        <span classname="text-xl font-bold">FlowPilot</span>
      </a>

      {/* navigation */}
      <div className="flex items-center gap-8">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#pricing">Pricing</a>
      </div>

      {/* cta */}
      <a
        href="#contact"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        Get Started
      </a>
    </nav>
  );
}
