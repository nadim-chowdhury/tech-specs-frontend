import { mobileBrands } from "@/utils/mobile-demo-data";
import Link from "next/link";

export default function AllMobileBrands() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {mobileBrands?.map((item, idx) => (
        <Link
          key={idx}
          href={`/mobiles/${item.toLowerCase()}`}
          className="bg-slate-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-slate-200"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
