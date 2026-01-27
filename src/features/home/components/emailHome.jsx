import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EmailHome() {
  const [email, setEmail] = useState("");

  async function sendEmail() {
    toast.dismiss(); // يمسح أي توست مفتوح قبل عرض الجديد

    if (!email || !email.includes("@")) {
      toast.error("📛 يرجى إدخال بريد إلكتروني صالح.");
      return;
    }

    try {
       await axios.post(
        "https://food-corner-api.vercel.app/api/subscribe",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success( "📩 تم الاشتراك في النشرة الإخبارية للمطعم.");
      setEmail("");
    } catch (err) {
      const response = err.response;
      if (response?.data?.message === "The email has already been taken.") {
        toast.error("📧 هذا البريد الإلكتروني مشترك بالفعل.");
      } else {
        toast.error("حدث خطأ أثناء الاشتراك. حاول مرة أخرى.");
      }
    }
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center p-10 gap-8 bg-white">
      <div className="relative w-full lg:w-1/3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الإلكتروني"
          className="w-full border border-gray-300 px-5 py-3 rounded-full placeholder:text-xl focus:outline-none text-sm"
        />

        <button
          className="absolute top-1/2 right-3 -translate-y-1/2 text-pink-800 hover:text-pink-600 p-2 rounded-full"
          onClick={sendEmail}
        >
          <IoIosSend className="text-2xl" />
        </button>
      </div>

      <div className="text-center lg:text-right text-black max-w-lg">
        <h1 className="text-3xl lg:text-5xl font-semibold mb-2">
          اشترك معنا الآن
        </h1>
        <p className="text-lg">
          احصل على المزيد من الأخبار والأطباق الشهية يوميًا من خلالنا
        </p>
      </div>

    </div>
  );
}
