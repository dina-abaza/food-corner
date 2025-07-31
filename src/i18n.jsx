// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ترجمات مباشرة داخل الكود
const resources = {
  ar: {
    translation: {
      home: "الرئيسية",
      about: "عن موقعنا",
      contact: "تواصل معنا",
      menu: "المنيو",
      reservation: "الحجز",
      welcome: "مرحبا {{name}}",
      logout: "تسجيل خروج",
      login: "تسجيل دخول",
      register: "إنشاء حساب",
    },
  },
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
      menu: "Menu",
      reservation: "Reservation",
      welcome: "Welcome {{name}}",
      logout: "Logout",
      login: "Login",
      register: "Register",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar", // اللغة الافتراضية
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"], // هنا الفرق المهم
    },
  });

export default i18n;
