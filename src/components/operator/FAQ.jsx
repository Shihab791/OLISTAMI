import { useState } from "react";
import { useNavigate } from "react-router-dom";
import room from "../../assets/room.jpg";

const faqs = [
  { q: "How do I create a new event?" },
  { q: "How do I create a new event?" },
  { q: "How do I create a new event?" },
  { q: "How do I create a new event?" },
  { q: "How do I create a new event?" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          FAQ
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3 mb-16">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-gray-800">
                  {item.q}
                </span>
                <span className="text-gray-500 text-xl font-light leading-none">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">
                  To create a new event, go to your dashboard and click the
                  "Create Event" button. Fill in the required details such as
                  event name, date, location, and description, then click Save.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-2xl overflow-hidden h-72 flex">

          {/* Left side — blurred image + dark overlay + text */}
          <div className="relative w-[48%] flex-shrink-0 flex flex-col justify-center px-10 py-8 overflow-hidden">
            {/* Blurred image as background */}
            <img
              src={room}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110"
              style={{ filter: "blur(18px)" }}
            />
            {/* Dark overlay on top of blur */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Text */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Create, manage, monitor
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-8">
                This operator dashboard is designed to give event managers complete
                control over their activities. From creating and scheduling events
                to monitoring registrations, managing attendees, and tracking
                performance, it provides a streamlined way to handle everything in
                one place. With a clear interface and actionable insights, operators
                can ensure smooth event execution and make data-driven decisions for
                better outcomes.
              </p>
              <button
                onClick={() => navigate("/operator")}
                className="bg-white text-gray-800 px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition w-fit"
              >
                Sign up as operator
              </button>
            </div>
          </div>

          {/* Right side — clear image */}
          <div className="flex-1">
            <img
              src={room}
              alt="Event room"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;