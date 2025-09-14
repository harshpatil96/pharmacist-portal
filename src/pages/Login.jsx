import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { auth } from "../context/firebase"; // adjust path if needed
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      // Firebase login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Only Firebase registered users can login
      if (!user) {
        setError("You are not authorized to access this portal.");
        return;
      }

      // (Optional) Check if email is verified
      // if (!user.emailVerified) {
      //   setError("Please verify your email before logging in.");
      //   return;
      // }

      onLogin(user); // send user to parent
    } catch (err) {
      console.error("Login error:", err.message);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 p-6 flex items-center justify-center">
      <div className="max-w-md w-full animate-fade-in">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-green-400">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover object-center" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-teal-700">
                S.A.H.A.Y.A
              </h1>
              <p className="text-green-700 text-lg">Professional Healthcare Portal</p>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-full w-24 mx-auto animate-pulse"></div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-center">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center space-x-2">
              <Lock size={20} />
              <span>Secure Login</span>
            </h2>
            <p className="text-green-100 mt-2">Pharmacist Portal Login</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label className="block mb-2 font-medium text-green-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 hover:shadow-md"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-green-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 hover:shadow-md pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-green-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Forgot Password */}
            <div className="flex justify-end text-sm text-green-700">
              <a href="#" className="hover:underline font-medium">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-medium"
            >
              Login to Dashboard
            </button>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 p-6 border-t border-gray-200 text-center">
            <div className="text-green-700 text-sm">
              <p>Secure access for authorized personnel only</p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="font-medium">System Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default Login;
