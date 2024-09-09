import { mobileBrands } from "@/utils/mobile-demo-data";
import Link from "next/link";

export default function AllMobileBrands() {
  return (
    <div className="containe mx-auto flex items-center justify-center flex-wrap gap-4 mb-8">
      {mobileBrands?.map((item, idx) => (
        <Link
          key={idx}
          href={`/mobiles/${item.toLowerCase()}`}
          className="px-4 py-2 bg-slate-100 rounded-full border"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
