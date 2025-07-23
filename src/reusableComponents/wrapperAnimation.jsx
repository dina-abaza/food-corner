import React from "react";
import { motion } from "framer-motion";

export default function WrapperAnimation({ children }) {
  return (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1, ease: "easeInOut" }}
>
  {children}
</motion.div>

  );
}
