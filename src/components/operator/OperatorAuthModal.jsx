import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OperatorAuthModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("signup");
  const navigate = useNavigate();

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800 mx-auto">
            {activeTab === "signup" ? "Sign up as a operator" : "Sign in as a operator"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition text-lg absolute right-5"
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
                : "bg-gray-100 text-gray-400 hover:text-gray-600"
            }`}
          >
            Sign up
          </button>
          <button
            onClick={() => setActiveTab("signin")}
            className={`py-4 text-sm font-medium transition ${
              activeTab === "signin"
                ? "bg-[#7c5c4e] text-white"
                : "bg-gray-100 text-gray-400 hover:text-gray-600"
            }`}
          >
            Sign in
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-6 bg-gray-50">
          {activeTab === "signup" ? (
            <div className="flex flex-col gap-3">

              {/* Full name */}
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
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
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
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
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
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
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
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
                  className="py-3 rounded-xl bg-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button className="py-3 rounded-xl bg-[#7c5c4e] text-white text-sm font-medium hover:bg-[#6b4e42] transition" onClick={() => { onClose(); navigate("/OperatorUser-Home"); }}>
                  Sign up
                </button>
              </div>

            </div>
          ) : (
            <div className="flex flex-col gap-3">

              {/* Email */}
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
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
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
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
              <div className="flex items-center justify-between py-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={signinData.remember}
                    onChange={handleSigninChange}
                    className="w-3.5 h-3.5 accent-[#7c5c4e]"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button className="text-sm text-gray-500 hover:text-[#7c5c4e] transition">
                  Forgot password ?
                </button>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={onClose}
                  className="py-3 rounded-xl bg-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button className="py-3 rounded-xl bg-[#7c5c4e] text-white text-sm font-medium hover:bg-[#6b4e42] transition" onClick={() => { onClose(); navigate("/user-home"); }}>
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