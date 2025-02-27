import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="text-2xl font-bold">Precious Global Consortium</div>
      
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-purple-400 transition">Home</a>
        <a href="/services" className="hover:text-purple-400 transition">Services</a>
        <a href="/about-us" className="hover:text-purple-400 transition">About</a>
        <a href="/gallary" className="hover:text-purple-400 transition">Gallery</a>
        <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
      </nav>
      
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-900 text-white p-6">
          <div className="flex flex-col space-y-4 text-lg">
            <a href="/" className="hover:text-purple-400 transition">Home</a>
            <a href="/services" className="hover:text-purple-400 transition">Services</a>
            <a href="/about-us" className="hover:text-purple-400 transition">About</a>
            <a href="/gallary" className="hover:text-purple-400 transition">Gallery</a>
            <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
