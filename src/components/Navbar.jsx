"use client";

import { useState } from "react";
import Link from "next/link";
// import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/#contact" },
  ];

  const linkClasses =
    "relative text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-current after:transition-transform after:duration-300 after:origin-center hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-900/90 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="select-none">
            <span className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
              Sheron Nexus
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={linkClasses}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {/* <ThemeToggle /> */}
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-gray-600"
            >
              Contact Us
            </Link>
            <Link
              href="https://calendly.com/your-calendly-link"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50"
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Mobile: Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 md:hidden dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-200`}
      >
        <div className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
          <ul className="flex flex-col gap-3 py-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-2 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-2">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-gray-600"
            >
              Contact Us
            </Link>
            <Link
              href="https://calendly.com/your-calendly-link"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


