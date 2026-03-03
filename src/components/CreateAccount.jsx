import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (activeTab === "signup") {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }

    console.log("Form Submitted:", formData);
    setOpen(false);
  };

  return (
    <>
      {/* More Compact Section */}
      <div className="flex flex-col items-center justify-center py-6 bg-white">
        <button
          className="bg-[#9A7E72] hover:bg-[#866d63] text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-sm text-sm"
          onClick={() => setOpen(true)}
        >
          Create account to get access
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-[380px] rounded-2xl shadow-xl p-5 relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold text-center mb-5">
              {activeTab === "signin"
                ? "Sign in as a User"
                : "Sign up as a User"}
            </h2>

            <div className="flex bg-gray-100 rounded-full p-1 mb-5">
              <button
                onClick={() => setActiveTab("signin")}
                className={`w-1/2 py-1.5 rounded-full text-sm font-medium transition ${
                  activeTab === "signin"
                    ? "bg-[#9A7E72] text-white"
                    : "text-gray-500"
                }`}
              >
                Sign In
              </button>

              <button
                onClick={() => setActiveTab("signup")}
                className={`w-1/2 py-1.5 rounded-full text-sm font-medium transition ${
                  activeTab === "signup"
                    ? "bg-[#9A7E72] text-white"
                    : "text-gray-500"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>

              {activeTab === "signup" && (
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full mt-1 p-2.5 bg-gray-100 rounded-lg outline-none text-sm"
                    required
                  />
                </div>
              )}

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2.5 bg-gray-100 rounded-lg outline-none text-sm"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full mt-1 p-2.5 bg-gray-100 rounded-lg outline-none text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 text-sm"
                  >
                    👁
                  </button>
                </div>
              </div>

              {activeTab === "signup" && (
                <div>
                  <label className="text-sm text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full mt-1 p-2.5 bg-gray-100 rounded-lg outline-none text-sm"
                    required
                  />
                </div>
              )}

              {activeTab === "signin" && (
                <div className="flex justify-between items-center text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="text-[#9A7E72] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {error && (
                <p className="text-red-500 text-xs">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#9A7E72] hover:bg-[#866d63] text-white py-2 rounded-lg font-medium transition text-sm"
              >
                {activeTab === "signin" ? "Sign in" : "Sign up"}
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAccount;