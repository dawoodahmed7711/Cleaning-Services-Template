import {
 
  ArrowUpRight,
} from "lucide-react";
import {FaInstagram , FaFacebook , FaTwitter} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-[#101510] text-white">

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold">
              FreshNest
            </h2>

            <p className="mt-5 max-w-[400px] text-sm font-medium leading-7 text-white/45">
              Professional cleaning services for homes, offices, and
              everything in between. Clean space. Fresh mind. Better living.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-black"
            >
              Book a Cleaner

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-bold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#home"
                className="text-sm font-medium text-white/45 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-white/45 transition hover:text-white"
              >
                About Us
              </a>

              <a
                href="#services"
                className="text-sm font-medium text-white/45 transition hover:text-white"
              >
                Services
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-white/45 transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-bold">
              Follow Us
            </h3>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <FaFacebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <FaTwitter size={17} />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col justify-between gap-4 py-7 text-xs font-medium text-white/35 md:flex-row">
          <p>
            © 2026 FreshNest. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}