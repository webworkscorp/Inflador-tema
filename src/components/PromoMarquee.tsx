import React from "react";
import { motion } from "motion/react";

export default function PromoMarquee() {
  const promoText = "40% DE DESCUENTO + ENVÍO GRATIS + PAGO EN CASA • ";
  
  return (
    <div className="bg-primary py-3 overflow-hidden border-y border-primary">
      <motion.div
        animate={{
          x: [0, -1035], // Adjust based on text length for seamless loop
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="whitespace-nowrap flex"
      >
        <span className="text-white font-bold text-sm tracking-widest uppercase">
          {promoText.repeat(10)}
        </span>
        <span className="text-white font-bold text-sm tracking-widest uppercase">
          {promoText.repeat(10)}
        </span>
      </motion.div>
    </div>
  );
}
