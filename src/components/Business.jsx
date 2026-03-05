import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.png";

const Business = () => {
  const navigate = useNavigate();
  return (
    <section className=" pt-4 pb-16">

      <div className="max-w-4xl mx-auto">

        {/* Centered Section Heading */}
        <h2 className="text-3xl font-bold mb-8 text-black text-center">
          Grow Your Business
        </h2>

        {/* Image Box */}
        <div className="relative rounded-lg overflow-hidden">
          
          <img
            src={background}
            alt="Business"
            className="w-full h-[350px] object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center p-10 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Expand Your Reach, Maximize Your Impact.
            </h3>
            <p className="mb-6 max-w-xl">
              Our platform helps operators easily publish events, accept bookings,
              and grow revenue. Join today and take your event business to the next level.
            </p>
            <button onClick={() => navigate("/operator")} className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition w-fit">
              Join as an operator
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Business;