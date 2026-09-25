"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const contactInfo = [
  {
    icon: FiPhone,
    label: "Call Us",
    value: "+1 374 3728 342",
    href: "tel:+1 374 3728 342",
  },
  {
    icon: FiMail,
    label: "Email Us",
    value: "hello@freshnest.com",
    href: "mailto:hello@freshnest.com",
  },
  {
    icon: FiMapPin,
    label: "Visit Us",
    value: "Houston Texas ,  USA",
    href: "#",
  },
  {
    icon: FiClock,
    label: "Working Hours",
    value: "Mon–Sat, 8AM–8PM",
    href: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

 function Contact() {
  return (
    <section id="contact" className="bg-[#edf8e9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
              — Get In Touch
            </p>
            <h2 className="mx-auto max-w-[600px] text-[42px] font-extrabold leading-[1.02] tracking-[-2.5px] sm:text-[58px]">
              Let&apos;s Get Your
              <br />
              Space Sparkling
            </h2>
            <p className="mx-auto mt-6 max-w-[460px] text-sm font-medium leading-7 text-black/55">
              Share a few details about your space and we&apos;ll get back to
              you within the hour with a free, no-obligation quote.
            </p>
          </div>
        </Reveal>

        {/* CONTACT INFO CARDS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                variants={fadeUp}
                className="group rounded-[22px] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8e9] transition group-hover:bg-[#101510]">
                  <Icon
                    size={18}
                    className="text-[#587c5b] transition group-hover:text-[#b8d7a9]"
                  />
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[1px] text-black/40">
                  {item.label}
                </p>

                <p className="mt-2 text-sm font-extrabold leading-5">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* FORM */}
          <Reveal>
            <div className="h-full rounded-[35px] bg-white p-8 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-extrabold tracking-[-1px]">
                Request A Free Quote
              </h3>
              <p className="mt-2 text-sm font-medium text-black/50">
                Fill out the form and our team will reach out shortly.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-black/50">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-black/10 bg-[#f7faf5] px-5 py-3.5 text-sm font-medium outline-none transition focus:border-[#587c5b]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-black/50">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full rounded-2xl border border-black/10 bg-[#f7faf5] px-5 py-3.5 text-sm font-medium outline-none transition focus:border-[#587c5b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-black/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7faf5] px-5 py-3.5 text-sm font-medium outline-none transition focus:border-[#587c5b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-black/50">
                    Service Needed
                  </label>
                  <select className="w-full rounded-2xl border border-black/10 bg-[#f7faf5] px-5 py-3.5 text-sm font-medium outline-none transition focus:border-[#587c5b]">
                    <option>Complete Deep Home Cleaning</option>
                    <option>Sofa And Carpet Refresh</option>
                    <option>Professional Office Cleaning</option>
                    <option>Bathroom & Kitchen Shine</option>
                    <option>Laundry & Linen Care</option>
                    <option>Move In / Move Out Cleaning</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-black/50">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your space and any specific requests..."
                    className="w-full resize-none rounded-2xl border border-black/10 bg-[#f7faf5] px-5 py-3.5 text-sm font-medium outline-none transition focus:border-[#587c5b]"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#101510] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 sm:w-auto"
                >
                  Send Request
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45">
                    <FiArrowUpRight size={15} />
                  </span>
                </button>
              </form>
            </div>
          </Reveal>

          {/* MAP + SOCIAL */}
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="relative flex-1 overflow-hidden rounded-[35px]">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=85"
                  alt="Service area map"
                  className="h-full min-h-[280px] w-full object-cover"
                />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold">Serving Bahawalpur &amp; Nearby Areas</p>
                  <p className="mt-1 text-xs font-medium text-black/50">
                    Same-day booking available in most zones.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] bg-[#101510] p-7 text-white">
                <p className="text-sm font-bold">Follow Our Work</p>
                <p className="mt-1 text-xs font-medium text-white/50">
                  Fresh spaces, posted weekly.
                </p>

                <div className="mt-5 flex gap-3">
                  {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#b8d7a9] hover:text-[#101510]"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
export default Contact;