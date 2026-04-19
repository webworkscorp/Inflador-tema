import React from "react";
import { Star, User } from "lucide-react";

export default function TrustpilotSection() {
  const reviews = [
    {
      author: "Sofía Ramírez Vargas",
      text: "Lo compré sin mucha expectativa, pero ya me ha sacado de dos apuros. Es rápido y te evita andar buscando dónde inflar la llanta."
    },
    {
      author: "Mauricio González Castro",
      text: "Me salvó literal. Se me bajó una llanta saliendo del brete y con esto la inflé en nada. Legalmente uno no piensa en esto hasta que lo necesita.",
      image: "https://i.imgur.com/hUdIbNn.jpeg"
    },
    {
      author: "Katherine Morales Jiménez",
      text: "Más práctico de lo que pensé. Es pequeño pero sí tiene fuerza. Lo ando en el carro siempre por aquello, da mucha tranquilidad.",
      image: "https://i.imgur.com/ekcUMWT.jpeg"
    },
    {
      author: "Andrés Calderón Rojas",
      text: "Buen servicio y buen producto. Me llegó rápido y bien empacado. Ya lo probé con la bici y cero problema.",
      image: "https://i.imgur.com/uRyRwWt.jpeg"
    },
    {
      author: "Laura Fernández Solano",
      text: "Vale la pena tener uno. Uno nunca sabe cuándo lo va a ocupar. Prefiero tenerlo ahí a quedarme botada."
    },
    {
      author: "José Pérez Alvarado",
      text: "Cumple bien su función. Infla rápido y es fácil de usar. No es complicado ni nada raro",
      image: "https://i.imgur.com/Cbj1Pzl.jpeg"
    },
    {
      author: "Carlos Mora Castillo",
      text: "Increíble lo potente que es para el tamaño. Me salvó el fin de semana con los chiquitos en la piscina y luego con la llanta del carro.",
      image: "https://i.imgur.com/EMisZ6l.jpeg"
    }
  ];

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-md mx-auto text-center space-y-2">
        <h3 className="text-3xl font-extrabold tracking-tight font-display text-center leading-tight uppercase">
          Nuestros Clientes
        </h3>
        
        <div className="flex items-center justify-center gap-4 mb-10">
          <img 
            src="https://i.imgur.com/ZQjU0a5.png" 
            alt="Trustpilot Stars" 
            className="h-18 w-auto object-contain block"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold text-secondary leading-none">Excelente 4.8/5</span>
        </div>

        <div className="space-y-8 text-left">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col gap-2 border-b border-border pb-6 last:border-b-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <span className="font-bold text-sm text-primary uppercase">{review.author}</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#00b67a] text-[#00b67a]" />
                ))}
              </div>
              <p className="text-base text-primary leading-relaxed font-sans mt-1 italic">
                "{review.text}"
              </p>
              {review.image && (
                <div className="mt-3">
                  <img 
                    src={review.image} 
                    alt={`Reseña de ${review.author}`} 
                    className="w-full h-auto rounded-lg shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
