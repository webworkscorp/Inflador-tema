import React from "react";
import { ShoppingBag, Truck, Package } from "lucide-react";
import { motion } from "motion/react";

interface StepProps {
  icon: React.ReactNode;
  status: string;
  isCompleted: boolean;
}

function TrackingStep({ icon, status, isCompleted }: StepProps) {
  return (
    <div className="flex flex-col items-center relative z-10 flex-1 px-1">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isCompleted ? "#000000" : "#f3f4f6",
          color: isCompleted ? "#ffffff" : "#9ca3af",
        }}
        className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-border bg-white"
      >
        {icon}
      </motion.div>
      <span className="mt-3 text-[13px] font-black text-center leading-tight tracking-tight text-primary uppercase">
        {status}
      </span>
    </div>
  );
}

export default function OrderTracking() {
  return (
    <div className="w-full py-10 bg-white px-[20px]">
      <div className="relative flex justify-between items-start w-full max-w-md mx-auto">
        {/* Continuous Connecting Line */}
        <div className="absolute top-[20px] left-[12%] right-[12%] h-[2px] bg-black z-0" />

        <TrackingStep
          icon={<ShoppingBag className="w-5 h-5" />}
          status="ORDENADO HOY"
          isCompleted={true}
        />
        
        <TrackingStep
          icon={<Truck className="w-5 h-5" />}
          status="ENVIAMOS EN 24-48H"
          isCompleted={true}
        />
        
        <TrackingStep
          icon={<Package className="w-5 h-5" />}
          status="PAGAS AL RECIBIRLO"
          isCompleted={true}
        />
      </div>
    </div>
  );
}
