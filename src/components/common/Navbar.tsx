"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { navLinks } from "@/utils/nav-links";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { allMobileBrandsName } from "@/utils/mobile-demo-data";
import { useState } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobiles, setMobiles] = useState([]);
  console.log("mobiles:", mobiles);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState<"ASC" | "DESC">("DESC");
  const [filter, setFilter] = useState<any>({
    brand: "",
    priceRange: [],
    ram: "",
    storage: "",
  });

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  async function fetchMobiles(searchQuery = "") {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mobile/all-mobiles?page=${page}&limit=${limit}&sort=${sort}&sortDirection=${sortDirection}&search=${searchQuery}`
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const data = await res.json();

      console.log("data:", data);

      if (data && data.data && data.total) {
        setMobiles(data.data);
        setTotal(data.total);
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    // Perform search if query is not empty
    if (searchQuery.trim()) {
      await fetchMobiles(searchQuery);
    }
  };

  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <Link href="/" className="text-3xl md:text-2xl font-bold text-black">
          TSM.
        </Link>
      </div>

      <div className="hidden md:flex items-end h-full justify-center gap-8">
        {navLinks?.map((link: any) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-all duration-300 font-medium hover:text-slate-600"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* <div className="hidden md:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks?.map((link: any, i: any) => (
              <NavigationMenuItem key={i}>
                <Link href={`/${link.title.toLowerCase()}`}>
                  <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <div className="w-[660px] grid grid-cols-4 gap-x-4 gap-y-2 p-4">
                    {allMobileBrandsName?.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`/mobiles/mobiles-categories/${item.name.toLowerCase()}`}
                        className="transition-all duration-300 font-medium hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded-md"
                      >
                        <NavigationMenuLink>{item.name}</NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div> */}

      <div className="flex items-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Search className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90%] rounded-lg">
            <form
              onSubmit={handleSearchSubmit}
              className="mt-8 flex items-start gap-2"
            >
              <Input
                placeholder="Search for devices..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button
                variant="outline"
                size="icon"
                className="w-12 bg-blue-600 text-white"
                type="submit"
              >
                <Search className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-52">
            <div className="flex flex-col md:hidden items-end h-full justify-center gap-4">
              {navLinks?.map((link: any) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-all duration-300 font-medium hover:text-slate-600"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
