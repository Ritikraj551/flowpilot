import { useState } from "react";
import { Send, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <section id="contact" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Get In Touch
          </span>

          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let's build something great together
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Have questions about FlowPilot? We'd love to hear from you. Send us
            a message and let's start a conversation.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-blue-600 p-8 text-white shadow-lg shadow-blue-900/10">
              <MessageSquare size={32} className="mb-6" />

              <h3 className="mb-3 text-2xl font-bold">
                Let's talk about your workflow
              </h3>

              <p className="leading-7 text-blue-100">
                Whether you're exploring FlowPilot or have a question, our team
                is ready to help.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Mail size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-900">Email us</p>
                <p className="text-sm text-gray-500">
                  Send us your questions through the form.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Your message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows="5"
                required
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
              <Send size={18} />
            </button>

            {submitted && (
              <p
                role="status"
                className="rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700"
              >
                Thank you! Your message has been submitted successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
