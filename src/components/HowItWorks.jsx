import React from "react";
import create_account from "../assets/HowitsWork/create_account.jpg"
import discover_events from "../assets/HowitsWork/discover_events.jpg"
import invoice from "../assets/HowitsWork/invoice.jpg"
import tickets from "../assets/HowitsWork/tickets.jpg"

const steps = [
  {
    id: 1,
    title: "Create an account",
    desc: "Sign up in minutes and set up your profile.",
    img: create_account ,
  },
  {
    id: 2,
    title: "Discover Events",
    desc: "Search and filter to find the perfect event for you.",
    img:discover_events ,
  },
  {
    id: 3,
    title: "Book Your Tickets",
    desc: "Secure your spot with simple, safe checkout.",
    img: tickets ,
  },
  {
    id: 4,
    title: "Get Invoices",
    desc: "Receive instant confirmations, reminders, and invoices.",
    img: invoice,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-6 px-6">
      <h2 className="text-2xl font-bold text-center mb-3">
        How It Works
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
          >
            <img
              src={`${step.img}?auto=format&fit=crop&w=600&q=60`}
              alt={step.title}
              className="h-28 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="text-sm font-semibold mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-xs">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;