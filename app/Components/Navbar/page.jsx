"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Services", "/Services"],
  ["Why Us", "/WhyUs"],
  ["Testimonials", "/Testimonals"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-10">

        {/* LOGO */}
        <a
          href="#home"
          className="text-[25px] font-extrabold tracking-[-1.5px]"
        >
          Neatora
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([name, url]) => (
            <a
              key={name}
              href={url}
              className="text-[13px] font-semibold transition hover:text-[#638b64]"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#101510] px-6 py-3 text-[13px] font-bold text-white transition hover:-translate-y-1 lg:flex"
        >
          Book a Cleaner
          <ArrowUpRight size={15} />
        </a>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#101510] text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mx-4 rounded-3xl bg-white p-6 shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map(([name, url]) => (
              <a
                key={name}
                href={url}
                onClick={() => setOpen(false)}
                className="text-sm font-bold"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#101510] px-5 py-3 text-sm font-bold text-white"
            >
              Book a Cleaner
              <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}