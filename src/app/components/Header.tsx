"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">Resume</span>
            <span className="text-2xl font-bold text-gray-900">Builder</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/resume-builder"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Builder
            </Link>
            <Link
              href="/resume-parser"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Parser
            </Link>
            <Link
              href="/resume-import"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Import
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/resume-import"
              className="hidden md:inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700"
            >
              Get Started
            </Link>
            <button className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}; 