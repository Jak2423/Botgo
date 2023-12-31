"use client";
import {
  AcademicCapIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavItem({ href, child }: { href: string; child: any }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-md font-semibold text-gray-800 transition-all hover:opacity-80  dark:text-gray-200"
    >
      {child}
    </Link>
  );
}

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between pb-8 pt-8 md:pb-16">
        <div>
          <Link
            href={"/"}
            className="inline-block rounded-md font-semibold text-gray-800 transition-all dark:text-gray-200"
          >
            <AcademicCapIcon className="h-10 w-10 text-gray-800 dark:text-gray-200" />
          </Link>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-200 transition-all duration-100 ease-in hover:ring-2 dark:bg-gray-800 dark:ring-gray-400"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <div>
              {resolvedTheme === "dark" ? (
                <SunIcon className="h-5 w-5 text-white" />
              ) : (
                <MoonIcon className="h-5 w-5 text-black" />
              )}
            </div>
          )}
        </button>
      </nav>
    </div>
  );
}
