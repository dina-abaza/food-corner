
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PageHeader from "../../reusableComponents/pageHeader";
import useUserAuthStore from "./authStore";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // ✅ استخدام الاستيت من Zustand
  const setUser = useUserAuthStore((state) => state.setUser);
  const setToken = useUserAuthStore((state) => state.setToken);

  async function handelForm(e) {
    e.preventDefault();

    if (!name || !email || !pass || !confirmPass) {
      setMessage('يرجى ملء جميع الحقول');
      return;
    }

    if (pass !== confirmPass) {
      setError("كلمة السر وتأكيدها غير متطابقين");
      return;
    }

    const form = {
      name,
      email,
      password: pass,
      password_confirmation: confirmPass,
    };

    try {
      const res = await axios.post('https://restaurantapi-production-f574.up.railway.app/api/auth/register', form);
      const { token: access_token, user } = res.data;
      setToken(access_token);
      setUser(user);

      setMessage("تم التسجيل بنجاح ✅");
      setError(null);

      
      navigate("/home")
    } catch (err) {
      setError("فشل التسجيل ❌");
      console.error("فشل التسجيل", err);
    }
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader 
        title="إنشاء حساب" 
        subtitle="مرحبًا بك في مطعمنا، تمتع بعروضنا المميزة" 
      />
      <div className="flex justify-center px-4 mt-10">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg flex flex-col gap-6">
          <form className="flex flex-col gap-5" onSubmit={handelForm}>
            <input type="text" placeholder="ادخل الاسم" value={name} onChange={(e) => setName(e.target.value)} className="border-b border-pink-300 shadow-2xl outline-none rounded-md py-3 px-4 text-gray-700 placeholder-gray-400" required />
            <input type="email" placeholder="ادخل البريد الالكتروني" value={email} onChange={(e) => setEmail(e.target.value)} className="border-b border-pink-300 shadow-2xl outline-none rounded-md py-3 px-4 text-gray-700 placeholder-gray-400" required />
            <input type="password" placeholder="ادخل كلمة السر" value={pass} onChange={(e) => setPass(e.target.value)} className="border-b border-pink-300 shadow-2xl outline-none rounded-md py-3 px-4 text-gray-700 placeholder-gray-400" required />
            <input type="password" placeholder="تأكيد كلمة السر" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className="border-b border-pink-300 shadow-2xl outline-none rounded-md py-3 px-4 text-gray-700 placeholder-gray-400" required />
            <button type="submit" className="bg-pink-800 text-white py-3 rounded-md hover:bg-pink-700 transition duration-300 cursor-pointer">إنشاء حساب</button>
          </form>
          {message && <p className="text-center text-green-600 font-semibold">{message}</p>}
          {error && <p className="text-center text-red-500 font-semibold">{error}</p>}
          <p className="text-center text-pink-600 mt-4">
            لديك حساب؟ <Link to="/login" className="underline hover:text-pink-700 cursor-pointer">سجل دخول</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
