import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="hidden md:flex">
      {/* <button className="rounded-full p-[6px] transition-all duration-300 bg-cyan-600 text-white hover:bg-cyan-700">
        <Search className="w-5 h-5" />
      </button> */}

      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-[6px] border rounded-full w-[140px] bg-slate-100 focus:outline-cyan-600"
      />
    </div>
  );
}
