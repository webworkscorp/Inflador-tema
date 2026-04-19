import React, { useState } from "react";
import { ChevronDown, Gauge, Battery, Settings2, ClipboardList, Truck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function AccordionItem({ title, icon, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <div className="text-primary">
            {icon}
          </div>
          <span className="text-base font-bold uppercase tracking-wider font-display">{title}</span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-gray-800 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="px-4 py-4">
      <AccordionItem title="RENDIMIENTO" icon={<Gauge className="w-5 h-5" />}>
        <div className="space-y-2">
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Llanta de carro</span>
            <span>8 min (vacía)</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Llanta de bici</span>
            <span>86 segundos</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Presión máxima</span>
            <span>150 PSI</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Precisión</span>
            <span>±1 PSI</span>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="BATERÍA" icon={<Battery className="w-5 h-5" />}>
        <div className="space-y-2">
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Capacidad</span>
            <span>2000 mAh</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Recargas de llanta por carga</span>
            <span>Hasta 10</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Llantas vacías completas</span>
            <span>Hasta 2</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Carga</span>
            <span>USB-C · ~3 horas</span>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="MODOS DE INFLADO" icon={<Settings2 className="w-5 h-5" />}>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-50 p-2 rounded">🚗 Carro</div>
            <div className="bg-gray-50 p-2 rounded">🏍️ Moto</div>
            <div className="bg-gray-50 p-2 rounded">🚲 Bicicleta</div>
            <div className="bg-gray-50 p-2 rounded">🛴 Scooter</div>
            <div className="bg-gray-50 p-2 rounded">⚽ Balones</div>
            <div className="bg-gray-50 p-2 rounded">🔧 Manual</div>
          </div>
          <p className="text-xs italic bg-primary text-white p-3 rounded-lg leading-tight shadow-md shadow-primary/10">
            Para automáticamente al llegar a la presión exacta que configurés. Sin adivinar.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem title="ESPECIFICACIONES" icon={<ClipboardList className="w-5 h-5" />}>
        <div className="space-y-2">
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Peso</span>
            <span>490g</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Dimensiones</span>
            <span>123 × 75.5 × 45.8mm</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Ruido</span>
            <span>&lt; 80dB</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-bold">Pantalla</span>
            <span>LCD — presión + batería en tiempo real</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Extra</span>
            <span>Linterna LED + modo SOS</span>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="ENVÍO Y DEVOLUCIONES" icon={<Truck className="w-5 h-5" />}>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="font-bold text-black text-sm uppercase">Envío Rápido</p>
            <p className="text-gray-600">Procesamos tu pedido en 24-48 horas hábiles. Recibirás un número de seguimiento para monitorear tu paquete.</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-black text-sm uppercase">Paga al Recibir</p>
            <p className="text-gray-600">Ofrecemos la opción de pago contra entrega para tu total tranquilidad. Pagas cuando el transportista llega a tu puerta.</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-black text-sm uppercase">Garantía de Devolución</p>
            <p className="text-gray-600">
              Queremos que recibas tu producto en perfectas condiciones y listo para usarse desde el primer momento. Por eso, cada pedido es cuidadosamente revisado antes de ser enviado.
              <br /><br />
              En caso de que tu producto presente algún daño o defecto al momento de recibirlo, nuestro equipo gestionará un cambio rápido, asegurando que obtengas exactamente lo que esperabas, sin complicaciones.
            </p>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
}
