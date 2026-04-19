import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import OrderTracking from "./OrderTracking";
import SlidingReviews from "./SlidingReviews";

interface Props {
  price: number;
  currency: string;
}

export default function PurchaseSection({ price, currency }: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center justify-between border border-border rounded p-1 w-36">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="p-2 hover:bg-gray-50 transition-colors"
        >
          <Minus className="w-5 h-5" />
        </button>
        <span className="font-medium text-xl">{quantity}</span>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="p-2 hover:bg-gray-50 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <button className="w-full bg-primary text-white font-bold py-5 rounded-lg text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98]">
        Añadir al carrito – {currency}{(price * quantity).toFixed(2)}
      </button>

      <p className="text-center text-sm font-bold text-success flex items-center justify-center gap-1.5">
        Compra 100% segura 🔒
      </p>

      <OrderTracking />
      
      <SlidingReviews />
    </div>
  );
}
