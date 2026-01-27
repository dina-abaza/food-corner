import React, { useState } from "react";
import { toast } from "react-toastify";            
import "react-toastify/dist/ReactToastify.css";     
import PageHeader from "../../reusableComponents/pageHeader";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import useUserAuthStore from "../auth/authStore";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
const token = useUserAuthStore((state)=>state.token)
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post(
        "https://food-corner-api.vercel.app/api/contact",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
    }}
  );

      console.log("تم الإرسال بنجاح:", res.data);
      toast.success(res.data.message||"تم إرسال رسالتك بنجاح 🎉");    
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("حدث خطأ أثناء الإرسال:", err);
      toast.error("فشل إرسال الرسالة، حاول مرة أخرى 😢"); 
    }
  };

  return (
    <div>
      <PageHeader title="تواصل معنا" subtitle="استمتع بتناول المذاق الايطالي" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 h-full text-right mx-auto p-5">

        <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col gap-16 min-h-[500px]">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">معلومات الاتصال</h2>

          <div className="space-y-6" dir="rtl">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-800">العنوان</h3>
                <p className="text-gray-600 text-sm">
                  حديقة المدفعية، شارع الصاعقة، دخلة شيراتون من طريق السويس، امام موقف ٤ ونص مساكن
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-800">رقم الهاتف</h3>
                <p className="text-gray-600 text-sm">(012) 8005 5200</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-red-600" />
              <div>
                <h3 className="font-semibold text-gray-800">البريد الإلكتروني</h3>
                <p className="text-gray-600 text-sm">admin@Hagoga.com</p>
                <p className="text-gray-600 text-sm">support@Hagoga.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between min-h-[500px]">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">ابقَ على اتصال بنا</h2>
          <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
            <input
              type="text"
              name="name"
              placeholder="الاسم بالكامل"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-right"
            />
            <textarea
              name="message"
              placeholder="اكتب رسالتك هنا"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded h-32"
            />
            <button
              type="submit"
              className=" hover:bg-pink-700 text-white bg-pink-600 py-2 px-3 rounded-2xl"
            >
              أرسل رسالتك
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}
