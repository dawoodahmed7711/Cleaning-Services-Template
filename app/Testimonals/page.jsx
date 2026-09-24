"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Raza",
    role: "Verified Client",
    quote:
      "Neatora turned my messy apartment into a fresh, spotless space in just a few hours. Their team was friendly, on time, and truly professional.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "Office Manager",
    quote:
      "We switched our whole office to their weekly cleaning plan. Consistent quality, easy scheduling, and the team never misses a spot.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    featured: true,
  },
  {
    name: "Sana Malik",
    role: "Verified Client",
    quote:
      "Booked a move-out clean with two days' notice and they still delivered — every corner, every cabinet. Got our full deposit back.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
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

export default function Testimonials() {
  return (
    <section className="bg-[#eef8e9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
                — Testimonials
              </p>
              <h2 className="max-w-[560px] text-[42px] font-extrabold leading-[1.02] tracking-[-2.5px] sm:text-[58px]">
                What Our Clients
                <br />
                Have To Say
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {testimonials.map((t) => (
                  <img
                    key={t.name}
                    src={t.image}
                    alt={t.name}
                    className="h-11 w-11 rounded-full border-2 border-[#eef8e9] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={13}
                      fill="currentColor"
                      strokeWidth={1.5}
                      className="text-[#71966e]"
                    />
                  ))}
                </div>
                <p className="mt-1 text-xs font-medium text-black/45">
                  4.9/5.0 from 300+ reviews
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              className={`flex flex-col justify-between rounded-[28px] p-8 transition duration-300 hover:-translate-y-1 ${
                t.featured ? "bg-[#101510] text-white" : "bg-white"
              }`}
            >
              <div>
                <Quote
                  size={30}
                  strokeWidth={1.5}
                  className={t.featured ? "text-[#b8d7a9]" : "text-[#83a782]"}
                />

                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill="currentColor"
                      strokeWidth={1.5}
                      className={t.featured ? "text-[#b8d7a9]" : "text-[#71966e]"}
                    />
                  ))}
                </div>

                <p
                  className={`mt-4 text-[15px] font-medium leading-7 ${
                    t.featured ? "text-white/80" : "text-black/70"
                  }`}
                >
                  {t.quote}
                </p>
              </div>

              <div
                className={`mt-8 flex items-center gap-3 border-t pt-6 ${
                  t.featured ? "border-white/10" : "border-black/10"
                }`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-extrabold">{t.name}</p>
                  <p
                    className={`text-xs font-medium ${
                      t.featured ? "text-white/50" : "text-black/45"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="Testimonals/MoreReviews"
            className="group inline-flex items-center gap-3 rounded-full bg-[#101510] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1"
          >
            Read More Reviews
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45">
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </span>
          </a>
        </Reveal>

      </div>
    </section>
  );
}