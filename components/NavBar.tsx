"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/filter", label: "Filter" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 px-6 py-4 border-b border-slate-200">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-3 py-2 rounded-md hover:bg-slate-100 hover:text-blue-600 transition ${
            pathname === href ? "bg-slate-100 font-medium text-blue-600" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
