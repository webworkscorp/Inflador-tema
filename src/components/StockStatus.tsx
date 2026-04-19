interface Props {
  status: string;
}

export default function StockStatus({ status }: Props) {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center gap-3">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
        </div>
        <p className="text-base font-bold text-red-600 leading-tight">
          {status}
        </p>
      </div>
    </div>
  );
}
