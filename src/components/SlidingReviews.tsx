import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "marcos t",
    rating: 5,
    text: "Lo compré por si acaso y ya lo he usado 3 veces. La semana pasada se me ponchó una llanta a las 11 de la noche y en 5 minutos estaba inflada. Vale cada centavo",
    date: "Hace 2 días"
  },
  {
    id: 2,
    author: "elena r",
    rating: 5,
    text: "Yo pensé que era un juguete por lo pequeño que es, pero infla igual o mejor que los de gasolinera. Ya le compré uno a mi mamá también.",
    date: "Hace 1 semana"
  },
  {
    id: 3,
    author: "Sofia L",
    rating: 5,
    text: "Llevo 2 meses usándolo para las llantas de la moto y la bici de mis hijos. Lo que más me gusta es que para solo cuando llega a la presión que le ponés. No hay que estar adivinando.",
    date: "Hace 3 días"
  }
];

export default function SlidingReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-6 px-4 overflow-hidden">
      <div className="relative max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < REVIEWS[currentIndex].rating ? "fill-primary text-primary" : "fill-gray-200 text-gray-200"}`} 
                />
              ))}
            </div>
            
            <p className="text-sm italic leading-relaxed text-primary px-4">
              "{REVIEWS[currentIndex].text}"
            </p>
            
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider font-display">
                {REVIEWS[currentIndex].author}
              </span>
              <span className="text-[10px] text-secondary">
                {REVIEWS[currentIndex].date}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-8 mt-6">
          <button onClick={prev} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5 items-center">
            {REVIEWS.map((_, idx) => (
              <div 
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-3" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
