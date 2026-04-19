import React from "react";

export default function ProductDetails() {
  const benefitsTop = [
    {
      emoji: "🚨",
      title: "Emergencia de noche? Estás cubierto",
      text: "Luz LED + Modo SOS para máxima visibilidad. Infla tu llanta en minutos sin ayuda externa. 👉 Evita quedarte varado y sigue tu camino sin estrés"
    },
    {
      emoji: "🚀",
      title: "Inflado perfecto sin margen de error",
      text: "Configuras la presión y listo. Se detiene automáticamente en el punto exacto.\n\nEvita sobreinflado, protege tus llantas y maneja con total seguridad.\n\n✔ Precisión digital\n✔ Parada automática\n✔ Cero estrés"
    }
  ];

  const benefitsBottom = [
    {
      emoji: "🔥",
      title: "Un solo botón. Presión perfecta en todo.",
      text: "Coche, moto, bici o balón — eliges el modo y la máquina ajusta todo automáticamente.\nSin cálculos, sin errores, sin perder tiempo.\n\nInflas bien a la primera. Siempre.\n\n✔ 6 modos inteligentes\n✔ Precisión automática\n✔ Cero complicaciones"
    },
    {
      emoji: "🎒",
      title: "No ocupa espacio. No estorba. Ni siquiera piensas en él… hasta que lo necesitas.",
      text: "Y ahí es donde marca la diferencia.\nLigero, compacto y siempre a mano para sacarte del apuro en segundos.\n\nPorque lo importante no es llevarlo… es tenerlo cuando hace falta."
    }
  ];

  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-md mx-auto space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight font-display text-center leading-tight">
          Inflador portátil inteligente de presión exacta
        </h2>

        <div className="space-y-8">
          {benefitsTop.map((benefit, idx) => (
            <div key={idx} className="space-y-4">
              {benefit.title === "Inflado perfecto sin margen de error" && (
                <div className="py-2">
                  <img 
                    src="https://i.imgur.com/XWio83n.jpeg" 
                    alt="Precisión inflado" 
                    className="w-full h-auto rounded-none shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="space-y-2">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <span>{benefit.emoji}</span>
                  {benefit.title}
                </h4>
                <div className="text-secondary leading-relaxed text-base whitespace-pre-line">
                  {benefit.text}
                </div>
              </div>
              {benefit.title === "Emergencia de noche? Estás cubierto" && (
                <>
                  <div className="py-2">
                    <img 
                      src="https://i.imgur.com/buBZnSp.jpeg" 
                      alt="NovaHogar CR Emergencia" 
                      className="w-full h-auto rounded-none shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-2 mt-2">
                    <h4 className="text-lg font-bold flex items-center gap-2">
                      <span>🔋</span>
                      Se carga donde sea. Te responde cuando importa.
                    </h4>
                    <div className="text-secondary leading-relaxed text-base whitespace-pre-line">
                      {"Sin enchufes raros ni limitaciones.\nTipo C universal para que nunca te quedes tirado, estés donde estés.\n\nEnergía lista cuando la necesitas, no cuando puedes."}
                    </div>
                  </div>
                </>
              )}
              {benefit.title === "Inflado perfecto sin margen de error" && (
                <div className="py-2">
                  <img 
                    src="https://i.imgur.com/tUS1AVz.jpeg" 
                    alt="Detalle Inflado" 
                    className="w-full h-auto rounded-none shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {benefitsBottom.map((benefit, idx) => (
            <div key={idx} className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <span>{benefit.emoji}</span>
                  {benefit.title}
                </h4>
                <div className="text-secondary leading-relaxed text-base whitespace-pre-line">
                  {benefit.text}
                </div>
              </div>
              {benefit.title === "Un solo botón. Presión perfecta en todo." && (
                <div className="py-2">
                  <img 
                    src="https://i.imgur.com/JHWgFwJ.jpeg" 
                    alt="Facilidad de uso" 
                    className="w-full h-auto rounded-none shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              {benefit.title === "No ocupa espacio. No estorba. Ni siquiera piensas en él… hasta que lo necesitas." && (
                <div className="py-2">
                  <img 
                    src="https://i.imgur.com/np74Iwa.jpeg" 
                    alt="Portabilidad NovaHogar CR" 
                    className="w-full h-auto rounded-none shadow-sm"
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
