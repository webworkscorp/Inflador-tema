import React from "react";
import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const features = [
    "Infla en minutos",
    "Para solo — nunca se pasa",
    "Sin cables, sin gasolinera",
    "Cabe en tu guantera",
    "Linterna SOS para emergencias"
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h3 className="text-3xl font-extrabold tracking-tight font-display text-center leading-tight mb-6">
          ¿POR QUÉ NOVAHOGAR CR ES LA MEJOR OPCIÓN?
        </h3>

        <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left text-[11px] uppercase tracking-widest text-secondary font-bold">Característica</th>
                <th className="py-4 px-4 text-center bg-primary text-white text-[11px] uppercase tracking-widest font-bold">NovaHogar CR</th>
                <th className="py-4 px-4 text-center text-[11px] uppercase tracking-widest text-secondary font-bold">Otros</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-border last:border-b-0">
                  <td className="py-5 px-4 text-sm font-medium text-primary leading-tight">
                    {feature}
                  </td>
                  <td className="py-5 px-4 bg-primary/5 text-center">
                    <div className="flex justify-center">
                      <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <div className="flex justify-center">
                      <X className="w-4 h-4 text-gray-300" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
