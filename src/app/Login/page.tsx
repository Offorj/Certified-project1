"use client";

import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    router.push("/Checkout");
  };

  return (
    <div className="max-w-md m-auto h-screen md:h-[88.5vh] px-[20px] flex items-center">
      <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg border-y-[2px] border-[#252B42]">
      <h2 className="text-2xl font-bold mb-6 text-[#252B42]">Login</h2>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
            required
          />
          <div className="relative">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-4 top-8 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
  type="submit"
  className="w-full bg-[#252B42] text-white py-2 mt-4 rounded border-b-2 border-custom-green"
>
  Login
</button>

        </form>
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/Signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
