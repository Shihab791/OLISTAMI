import operator1 from "../../assets/operator/operator1.jpg";
import operator2 from "../../assets/operator/operator2.png";
import operator3 from "../../assets/operator/operator3.png";

const steps = [
  {
    img: operator1,
    title: "Register",
    desc: "Register your operator account in this system. After that you will be able to manage your events.",
  },
  {
    img: operator2,
    title: "Create Event",
    desc: "Create an event by providing all necessary files, documents and schedule.",
  },
  {
    img: operator3,
    title: "Monitor & Manage",
    desc: "Monitor your events and ticket sales and manage them easily.",
  },
];

const Image = () => {
  return (
    <section className="bg-white py-10 px-6">

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-start">

            <div className="w-full mb-6">
              <img
                src={step.img}
                alt={step.title}
                className="h-48 object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              {step.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Image;