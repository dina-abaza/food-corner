
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PageHeader from "../../reusableComponents/pageHeader";
import useUserAuthStore from "./authStore";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      setMessage('يرجى ملء جميع الحقول');
      return;
    }

    const form = { email, password };

    try {
      const res = await axios.post(
        'https://food-corner-api.vercel.app/api/auth/login',
        form
      );
      const data = res.data;
      console.log("Login Response:", data);

      // نحفظ البيانات في Zustand
      const { setUser, setToken } = useUserAuthStore.getState();
      setUser(data.user);
      setToken(data.access_token);

      setMessage("تم تسجيل الدخول بنجاح ✅");
      setError(null);

      // التوجيه بعد الدخول
      navigate("/home");

    } catch (err) {
      setError("فشل تسجيل الدخول ❌");
      console.error("فشل تسجيل الدخول", err);
    }
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="تسجيل الدخول"
        subtitle="مرحبًا بك من جديد 👋 نورتنا!"
      />
      <div className="flex justify-center px-4 mt-10">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg flex flex-col gap-6">
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="ادخل البريد الالكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-pink-300 shadow-2xl rounded-md py-3 px-4 text-gray-700 placeholder-gray-400 outline-none"
              required
            />
            <input
              type="password"
              placeholder="ادخل كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-pink-300 shadow-2xl rounded-md py-3 px-4 text-gray-700 placeholder-gray-400 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-pink-800 text-white py-3 rounded-md hover:bg-pink-700 transition duration-300 cursor-pointer"
            >
              سجل دخول
            </button>
          </form>

          {message && (
            <p className="text-center text-green-600 font-semibold">
              {message}
            </p>
          )}
          {error && (
            <p className="text-center text-red-500 font-semibold">{error}</p>
          )}

          <p className="text-center text-pink-600 mt-4">
            ليس لديك حساب؟{" "}
            <Link
              to="/register"
              className="underline hover:text-pink-700 cursor-pointer"
            >
              إنشاء حساب
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
