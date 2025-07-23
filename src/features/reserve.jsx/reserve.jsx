
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserAuthStore from "../auth/authStore";
import axios from "axios";
import PageHeader from "../../reusableComponents/pageHeader";

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
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/register");
    }
  }, [token, navigate]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await axios.post(
        "https://your-api-url.com/api/reservations",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccessMsg(response.data.message || "تم الحجز بنجاح!");

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
      setErrorMsg(serverMessage);
    }
    setLoading(false);
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="احجز طاولتك الان"
        subtitle="تمتع باجواء رومانسيه هادئه"
      />

      <div className="flex justify-center px-4 mt-10">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center mb-4">حجز طاولة</h2>

          {successMsg && (
            <p className="text-green-600 text-center font-semibold">{successMsg}</p>
          )}
          {errorMsg && (
            <p className="text-red-600 text-center font-semibold">{errorMsg}</p>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 placeholder-grey-300 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="رقم الهاتف"
              className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 placeholder-grey-300 outline-none"
              value={formData.phone}
              onChange={handleChange}
              required
            />

         <div className="flex flex-col">
            <label htmlFor="tables" className="text-pink-800 font-semibold mb-1 text-right">
               عدد الطاولات
               </label>
             <input
               type="number"
               id="tables"
               name="tables"
                min="1"
                className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700  outline-none"
                value={formData.tables}
                onChange={handleChange}
                required
              />
            </div>
            
            
          <div className="flex flex-col">
              <label htmlFor="people" className="text-pink-800 font-semibold mb-1 text-right">
                عدد الطاولات
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
              placeholder="التاريخ"
              className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 placeholder-grey-300 outline-none"
              value={formData.date}
              onChange={handleChange}
              required
            />

            
            <input
              type="time"
              name="time"
              placeholder="الوقت"
              className="border-b border-pink-400 shadow-lg rounded-md py-3 px-4 text-gray-700 placeholder-grey-300 outline-none"
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
