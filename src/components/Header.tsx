import { Menu, Search, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border px-4 py-3 flex items-center justify-between">
      <button className="p-1" aria-label="Menu">
        <Menu className="w-6 h-6" />
      </button>
      
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-xl font-bold tracking-tighter uppercase">NovaHogar CR</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-1" aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-1 relative" aria-label="Cart">
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
