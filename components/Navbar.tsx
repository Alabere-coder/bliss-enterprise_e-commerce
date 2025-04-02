// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ShoppingCart, Menu, X } from "lucide-react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { useCart } from "./cart-provider";

"use client";

import type React from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "./cart-provider";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/collections", label: "Collections" },
    { href: "/new-arrivals", label: "New Arrivals" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">BlissEnterprise</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-sm mx-4">
          <form onSubmit={handleSearch} className="w-full relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden border-t p-2">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 space-y-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`px-2 py-1 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import { ShoppingBag, Menu, Search, X } from "lucide-react";
// import Link from "next/link";
// import { useCart } from "./context/CardContext";

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const { cart, toggleCart } = useCart();

//   const cartItemsCount = useMemo(
//     () => cart.reduce((total, item) => total + item.quantity, 0),
//     [cart]
//   );

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle functions
//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
//   const toggleSearch = () => setIsSearchOpen((prev) => !prev);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "glass-effect py-3" : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container mx-auto px-8">
//         <div className="flex items-center justify-between">
//           {/* Mobile menu button */}
//           <button
//             className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//             aria-expanded={isMenuOpen}
//           >
//             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>

//           {/* Logo */}
//           <Link
//             href="/"
//             className="text-xl md:text-2xl font-display font-medium tracking-tight transition-transform hover:scale-[1.02]"
//           >
//             Bliss-Enterprise
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <NavLink to="/products">Shop</NavLink>
//             <NavLink to="/collections">Collections</NavLink>
//             <NavLink to="/about">About</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
//           </nav>

//           {/* Right actions */}
//           <div className="flex items-center space-x-1">
//             <button
//               className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors"
//               onClick={toggleSearch}
//               aria-label="Search"
//               aria-expanded={isSearchOpen}
//             >
//               {isSearchOpen ? <X size={20} /> : <Search size={20} />}
//             </button>

//             <button
//               className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors relative"
//               onClick={toggleCart}
//               aria-label="Shopping cart"
//             >
//               <ShoppingBag size={20} />
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && <MobileMenu onClose={toggleMenu} />}

//         {/* Search bar */}
//         {isSearchOpen && <SearchBar onClose={toggleSearch} />}
//       </div>
//     </header>
//   );
// }

// /** ==================== Sub-components ==================== **/

// function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
//   return (
//     <Link
//       href={to}
//       className="text-sm font-medium text-gray-800 hover:text-black transition-colors relative group"
//     >
//       {children}
//       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
//     </Link>
//   );
// }

// function MobileMenu({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="md:hidden py-4 animate-fade-in">
//       <nav className="flex flex-col space-y-4 pt-2">
//         <MobileNavLink to="/products" onClick={onClose}>
//           Shop
//         </MobileNavLink>
//         <MobileNavLink to="/collections" onClick={onClose}>
//           Collections
//         </MobileNavLink>
//         <MobileNavLink to="/about" onClick={onClose}>
//           About
//         </MobileNavLink>
//         <MobileNavLink to="/contact" onClick={onClose}>
//           Contact
//         </MobileNavLink>
//       </nav>
//     </div>
//   );
// }

// function MobileNavLink({
//   to,
//   children,
//   onClick,
// }: {
//   to: string;
//   children: React.ReactNode;
//   onClick?: () => void;
// }) {
//   return (
//     <Link
//       href={to}
//       className="text-base font-medium py-2 text-gray-800 hover:text-black transition-colors"
//       onClick={onClick}
//     >
//       {children}
//     </Link>
//   );
// }

// function SearchBar({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="py-4 animate-fade-in">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-full p-3 pr-10 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/10"
//           autoFocus
//         />
//         <X
//           size={20}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
//           onClick={onClose}
//         />
//       </div>
//     </div>
//   );
// }
