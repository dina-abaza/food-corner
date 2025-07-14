import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PageHeader from "../../reusableComponents/pageHeader";

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const form = { email, pass };

  async function handelLogin(e) {
    e.preventDefault();

    if (!email || !pass) {
      setMessage('يرجى ملء جميع الحقول');
      return;
    }

    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', form);
      setMessage("تم تسجيل الدخول بنجاح ✅");
      setError(null);
      setEmail('');
      setPass('');
      navigate('/home');
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
          
          <form className="flex flex-col gap-5" onSubmit={handelLogin}>
            <input
              type="email"
              placeholder="ادخل البريد الالكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-pink-300 rounded-md py-3 px-4 text-gray-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="password"
              placeholder="ادخل كلمة السر"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="border border-pink-300 rounded-md py-3 px-4 text-gray-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />

            <button
              type="submit"
              className="bg-pink-800 text-white py-3 rounded-md hover:bg-pink-700 transition duration-300 cursor-pointer"
            >
              سجل دخول
            </button>
          </form>

          {message && <p className="text-center text-green-600 font-semibold">{message}</p>}
          {error && <p className="text-center text-red-500 font-semibold">{error}</p>}

        
          <p className="text-center text-pink-600 mt-4">
            ليس لديك حساب؟{' '}
            <Link to="/register" className="underline hover:text-pink-700 cursor-pointer">
              إنشاء حساب
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
