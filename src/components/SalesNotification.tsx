import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, User } from "lucide-react";

const NAMES = ["María García", "Juan Pérez", "Elena Rodríguez", "Carlos Martínez", "Sofía López", "Andrés Belmonte", "Lucía Torres", "Diego Sánchez", "Valentina Herrera", "Ricardo Fernández", "Carmen Ruiz", "Javier Gómez", "Paula Castro", "Marcos León", "Isabel Sanz"];

export default function SalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState({ name: "", time: "" });
  const [availableNames, setAvailableNames] = useState([...NAMES]);

  useEffect(() => {
    const showNotification = () => {
      setAvailableNames((prev) => {
        const names = prev.length > 0 ? prev : [...NAMES];
        const randomIndex = Math.floor(Math.random() * names.length);
        const name = names[randomIndex];
        const remaining = names.filter((_, i) => i !== randomIndex);

        const time = Math.floor(Math.random() * 10) + 1;
        setCurrentSale({ name, time: `${time} min` });
        setIsVisible(true);

        return remaining;
      });

      // Hide after 6 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    // Initial delay
    const initialTimeout = setTimeout(showNotification, 5000);

    // Repeat every 30 seconds
    const interval = setInterval(showNotification, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed bottom-24 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[280px] z-[100] bg-white shadow-xl shadow-primary/5 border border-border p-3 flex items-center gap-3 rounded-xl"
        >
          <div className="relative shrink-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              <User className="w-6 h-6 text-gray-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
              <CheckCircle2 className="w-2.5 h-2.5" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider mb-0.5">
              ¡Compra Exitosa!
            </p>
            <p className="text-[13px] text-black leading-tight">
              <span className="font-bold">{currentSale.name}</span> acaba de realizar una compra
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Hace {currentSale.time}
            </p>
          </div>

          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-300 hover:text-gray-500 p-1 self-start"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
