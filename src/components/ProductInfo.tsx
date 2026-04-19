import { Star } from "lucide-react";

interface Props {
  name: string;
}

export default function ProductInfo({ name }: Props) {
  return (
    <div className="px-4 py-4 space-y-3">
      <div className="flex items-center gap-1.5">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} 
            />
          ))}
        </div>
        <span className="text-base font-bold">4.8/5</span>
        <span className="text-gray-800 text-base ml-1">+2,500 clientes satisfechos</span>
      </div>
      <h2 className="text-3xl font-bold leading-tight font-display">{name}</h2>
    </div>
  );
}
