import { useState } from "react";

const OperatorAuthModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("signup");

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSigninChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSigninData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800">
            {activeTab === "signup" ? "Sign up as a operator" : "Sign in as a operator"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition text-xl font-light"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2">
          <button
            onClick={() => setActiveTab("signup")}
            className={`py-4 text-sm font-medium transition ${
              activeTab === "signup"
                ? "bg-[#7c5c4e] text-white"
                : "bg-gray-100 text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign up
          </button>
          <button
            onClick={() => setActiveTab("signin")}
            className={`py-4 text-sm font-medium transition ${
              activeTab === "signin"
                ? "bg-[#7c5c4e] text-white"
                : "bg-gray-100 text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign in
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          {activeTab === "signup" ? (
            <div className="flex flex-col gap-4">
              {/* Full name */}
              <div className="border border-gray-200 rounded-lg px-4 py-2 bg-white">
                <label className="block text-[10px] text-gray-400 mb-0.5">Your full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  placeholder="Elizabeth Olson"
                  className="w-full text-sm text-gray-700 outline-none bg-transparent"
                />
              </div>

              {/* Email */}
              <div className="border border-gray-200 rounded-lg px-4 py-2 bg-white">
                <label className="block text-[10px] text-gray-400 mb-0.5">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="example@gmail.com"
                  className="w-full text-sm text-gray-700 outline-none bg-transparent"
                />
              </div>

              {/* Password */}
              <div className="border border-gray-200 rounded-lg px-4 py-3 bg-white">
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Password"
                  className="w-full text-sm text-gray-700 outline-none bg-transparent"
                />
              </div>

              {/* Confirm Password */}
              <div className="border border-gray-200 rounded-lg px-4 py-3 bg-white">
                <input
                  type="password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm password"
                  className="w-full text-sm text-gray-700 outline-none bg-transparent"
                />
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={onClose}
                  className="py-3 rounded-xl bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button className="py-3 rounded-xl bg-[#7c5c4e] text-white text-sm font-medium hover:bg-[#6b4e42] transition">
                  Sign up
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Email */}
              <div className="border border-gray-200 rounded-lg px-4 py-2 bg-white">
                <label className="block text-[10px] text-gray-400 mb-0.5">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={signinData.email}
                  onChange={handleSigninChange}
                  placeholder="example@gmail.com"
                  className="w-full text-sm text-gray-700 outline-none bg-transparent"
                />
              </div>

              {/* Password */}
              <div className="border border-gray-200 rounded-lg px-4 py-3 bg-white">
                <input
                  type="password"
                  name="password"
                  value={signinData.password}
                  onChange={handleSigninChange}
                  placeholder="Password"
                  className="w-full text-sm text-gray-700 outline-none bg-transparent"
                />
              </div>

              {/* Remember me + Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={signinData.remember}
                    onChange={handleSigninChange}
                    className="accent-[#7c5c4e] w-3.5 h-3.5"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button className="text-sm text-[#7c5c4e] hover:underline">
                  Forgot password ?
                </button>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={onClose}
                  className="py-3 rounded-xl bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button className="py-3 rounded-xl bg-[#7c5c4e] text-white text-sm font-medium hover:bg-[#6b4e42] transition">
                  Sign in
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OperatorAuthModal;