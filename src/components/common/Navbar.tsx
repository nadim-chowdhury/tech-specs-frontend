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

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <Link href="/" className="text-3xl md:text-2xl font-bold text-black">
          TSM.
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
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
      </div>

      <div className="flex items-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Search className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90%] rounded-lg">
            <div className="mt-8 flex items-start gap-2">
              <Input placeholder="Search Here" />
              <Button
                variant="outline"
                size="icon"
                className="w-12 bg-blue-600 text-white"
              >
                <Search className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              </Button>
            </div>
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
