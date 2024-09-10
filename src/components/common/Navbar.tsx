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
} from "@/components/ui/navigation-menu";
import { allMobileBrandsName } from "@/utils/mobile-demo-data";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobiles, setMobiles] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [sort, setSort] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState<"ASC" | "DESC">("DESC");
  const [filter, setFilter] = useState({
    brand: "",
    priceRange: [],
    ram: "",
    storage: "",
  });

  // Fetch mobiles data with updated query or filters
  // useEffect(() => {
  //   if (searchQuery.trim()) {
  //     fetchMobiles(searchQuery);
  //   }
  // }, [searchQuery, page, limit, sort, sortDirection]);

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    setPage(1); // Reset to first page on new search
    await fetchMobiles(searchQuery);
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

  return (
    <nav className="container mx-auto flex items-center justify-between">
      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks?.map((link, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuTrigger>
                  <Link href={`/${link.title.toLowerCase()}`}>
                    {link.title}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[660px] grid grid-cols-4 gap-x-4 gap-y-2 p-4">
                    {allMobileBrandsName?.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`/mobiles/${item.name.toLowerCase()}`}
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
      </div>

      {/* Search and Mobile Menu */}
      <div className="flex items-center gap-2">
        {/* Search Button with Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Search className="h-5 w-5 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90%] max-w-lg mx-auto rounded-lg">
            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <Input
                placeholder="Search for devices..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button
                variant="default"
                size="icon"
                className="bg-blue-600 text-white"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-52">
            <div className="flex flex-col items-end gap-4">
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
