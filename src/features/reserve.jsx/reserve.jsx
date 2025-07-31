
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserAuthStore from "../auth/authStore";
import axios from "axios";
import PageHeader from "../../reusableComponents/pageHeader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReservationForm() {
  const { user, token } = useUserAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: "",
    tables: 1,
    people: 1,
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      console.log(token)
      navigate("/register");
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://restaurantapi-production-f574.up.railway.app/api/reservation",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("تم تسجيل الحجز بنجاح. للتأكد، يُرجى التواصل مع الإدارة.", {
        autoClose: 5000,
      });

      setFormData({
        name: user?.name || "",
        phone: "",
        tables: 1,
        people: 1,
        date: "",
        time: "",
      });
    } catch (error) {
      const serverMessage =
        error.response?.data?.message || "حدث خطأ أثناء الحجز. حاول مرة أخرى.";
      toast.error(serverMessage);
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="احجز طاولتك الان"
        subtitle="تمتع باجواء رومانسيه هادئه"
      />

      <div className="flex justify-center px-4 mt-10">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center mb-4">حجز طاولة</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="رقم الهاتف"
              className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 outline-none"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col">
              <label
                htmlFor="tables"
                className="text-pink-800 font-semibold mb-1 text-right"
              >
                عدد الطاولات
              </label>
              <input
                type="number"
                id="tables"
                name="tables"
                min="1"
                className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 outline-none"
                value={formData.tables}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="people"
                className="text-pink-800 font-semibold mb-1 text-right"
              >
                عدد الأفراد
              </label>
              <input
                type="number"
                id="people"
                name="people"
                min="1"
                className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 outline-none"
                value={formData.people}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="date"
              name="date"
              className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 outline-none"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 outline-none"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-800 text-white py-3 rounded-md hover:bg-pink-700 transition duration-300 cursor-pointer"
            >
              {loading ? "جاري الحجز..." : "احجز الآن"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
