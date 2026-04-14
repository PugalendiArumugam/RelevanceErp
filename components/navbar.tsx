"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all",
        isScrolled
          ? "border-slate-200 bg-white/95 backdrop-blur"
          : "border-transparent bg-white/70",
      )}
    >
      <div className="container-enterprise flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-extrabold text-blue-600"
        >
          <Image
            src="/images/rellogo.jpg"
            alt="Relevance Infosystems logo"
            width={80}
            height={50}
            className="h-[50px] w-[80px] object-contain"
            priority
          />
          <span>Relevance Infosystems Pvt Ltd</span>
        </Link>
        <button
          className="rounded-md border border-slate-300 px-3 py-1 text-sm md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </button>
        <nav
          className={cn(
            "absolute left-0 top-16 w-full border-b border-slate-200 bg-white p-4 md:static md:w-auto md:border-0 md:bg-transparent md:p-0",
            isOpen ? "block" : "hidden md:block",
          )}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium",
                    pathname === item.href
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
