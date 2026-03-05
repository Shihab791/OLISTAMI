import { useState } from "react";
import OperatorAuthModal from "./OperatorAuthModal";

const benefits = [
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
];

const plans = [
  { name: "Basic Plan",  price: "$0.00",   dark: false, benefits },
  { name: "Pro Plan",    price: "$100.00",  dark: true,  benefits },
];

const Pricing = () => {
  const [billing, setBilling] = useState("Monthly");
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white py-16 px-6 relative overflow-hidden">

      <div className="absolute left-6 top-24 w-2.5 h-2.5 rounded-full bg-[#b8917f] opacity-50" />
      <div className="absolute right-6 top-24 w-2.5 h-2.5 rounded-full bg-[#b8917f] opacity-50" />
      <svg className="absolute left-0 top-14 w-52 opacity-20" viewBox="0 0 200 100" fill="none">
        <path d="M0 30 Q60 80 130 60 Q170 50 200 80" stroke="#7c5c4e" strokeWidth="1.5" fill="none" />
      </svg>
      <svg className="absolute right-0 top-14 w-52 opacity-20" viewBox="0 0 200 100" fill="none">
        <path d="M200 30 Q140 80 70 60 Q30 50 0 80" stroke="#7c5c4e" strokeWidth="1.5" fill="none" />
      </svg>

      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Pricing</h2>

      <div className="flex justify-center mb-10">
        <div className="flex bg-gray-100 rounded-full p-1">
          {["Monthly", "Annual"].map((tab) => (
            <button
              key={tab}
              onClick={() => setBilling(tab)}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                billing === tab
                  ? "bg-[#8a9a7a] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 rounded-2xl px-8 py-8 flex flex-col ${
              plan.dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            }`}
          >
            <h3 className="text-lg font-semibold text-center mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold text-center mb-6">{plan.price}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs ${plan.dark ? "text-gray-400" : "text-gray-500"}`}>
                Benefits you will get
              </span>
              <div className={`flex-1 h-px ${plan.dark ? "bg-gray-600" : "bg-gray-300"}`} />
            </div>
            <ul className="flex flex-col gap-2 mb-10 flex-1">
              {plan.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">•</span>
                  <span className={`text-sm ${plan.dark ? "text-gray-200" : "text-gray-600"}`}>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button className="bg-[#8a9a7a] text-white px-10 py-2.5 rounded-full text-sm font-medium hover:bg-[#7a8a6a] transition">
                Purchase plan
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10 gap-4">
        <p className="text-sm text-gray-500 text-center">
          Purchase a plan and enjoy the freedom of managing events wheatear it's offline or online
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#7c5c4e] text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6b4e42] transition"
        >
          Sign up as operator
        </button>
      </div>

      {showModal && <OperatorAuthModal onClose={() => setShowModal(false)} />}

    </section>
  );
};

export default Pricing;