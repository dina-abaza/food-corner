import React from "react";
import { motion } from "framer-motion";

export default function WrapperAnimation({ children,className }) {
  return (
  <motion.div
  className={className}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1, ease: "easeInOut" }}
>
  {children}
</motion.div>

  );
}
