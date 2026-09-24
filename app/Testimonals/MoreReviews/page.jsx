"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight, ArrowLeft } from "lucide-react";

const filters = ["All Reviews", "Home Cleaning", "Office Cleaning", "Move In/Out", "Laundry"];

const reviews = [
  {
    name: "Ayesha Raza",
    role: "Home Cleaning",
    quote:
      "Neatora turned my messy apartment into a fresh, spotless space in just a few hours. Their team was friendly, on time, and truly professional.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Bilal Ahmed",
    role: "Office Cleaning",
    quote:
      "We switched our whole office to their weekly cleaning plan. Consistent quality, easy scheduling, and the team never misses a spot.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Sana Malik",
    role: "Move In/Out",
    quote:
      "Booked a move-out clean with two days' notice and they still delivered — every corner, every cabinet. Got our full deposit back.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    name: "Hassan Tariq",
    role: "Home Cleaning",
    quote:
      "Been booking them monthly for over a year now. Same reliable quality every single time, and rescheduling is genuinely hassle-free.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "5 days ago",
  },
  {
    name: "Mehak Farooq",
    role: "Laundry",
    quote:
      "The wash and fold service saved me so much time during exam season. Clothes came back neatly folded and smelling great.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    date: "1 week ago",
  },
  {
    name: "Usman Sheikh",
    role: "Office Cleaning",
    quote:
      "Professional, discreet, and thorough. Our clinic needs a specific standard of cleanliness and they've met it every visit.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Zara Iqbal",
    role: "Home Cleaning",
    quote:
      "Loved that they used eco-friendly products — I have a toddler crawling everywhere so that mattered a lot to us.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "4 days ago",
  },
  {
    name: "Ali Raza",
    role: "Move In/Out",
    quote:
      "Landlord was impressed at the final walkthrough. Worth every rupee for the peace of mind on move-out day.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    date: "6 weeks ago",
  },
  {
    name: "Nimra Aziz",
    role: "Home Cleaning",
    quote:
      "The carpet and sofa refresh made our living room look brand new. Booking was quick and the team was in and out efficiently.",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "3 days ago",
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
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("All Reviews");

  const filteredReviews =
    activeFilter === "All Reviews"
      ? reviews
      : reviews.filter((r) => r.role === activeFilter);

  return (
    <main className="bg-white text-[#101510]">

      {/* HEADER */}
      <section className="bg-gradient-to-br from-[#f3f9e7] via-[#edf9ef] to-[#e5f5eb]">
        <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-28 lg:px-10 lg:pb-20 lg:pt-32">

          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-black/50 transition hover:text-black"
          >
            <ArrowLeft size={14} />
            Back To Home
          </a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
                — Client Reviews
              </p>
              <h1 className="max-w-[650px] text-[42px] font-extrabold leading-[0.98] tracking-[-2.5px] sm:text-[58px] lg:text-[68px]">
                300+ Reviews From
                <br />
                Happy Homes &amp; Offices
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-5xl font-extrabold">4.9</span>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={14}
                      fill="currentColor"
                      strokeWidth={1.5}
                      className="text-[#71966e]"
                    />
                  ))}
                </div>
                <p className="mt-1 text-xs font-medium text-black/45">
                  Based on 300+ verified reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="mb-12 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition duration-300 ${
                  activeFilter === filter
                    ? "bg-[#101510] text-white"
                    : "bg-[#eef8e9] text-black/60 hover:bg-[#dff0d6]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {filteredReviews.length > 0 ? (
            <motion.div
              key={activeFilter}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredReviews.map((r, i) => (
                <motion.article
                  key={`${r.name}-${i}`}
                  variants={fadeUp}
                  className="flex flex-col justify-between rounded-[28px] border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <Quote size={26} strokeWidth={1.5} className="text-[#83a782]" />
                      <span className="text-[11px] font-semibold text-black/35">
                        {r.date}
                      </span>
                    </div>

                    <div className="mt-4 flex gap-1">
                      {Array.from({ length: r.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={13}
                          fill="currentColor"
                          strokeWidth={1.5}
                          className="text-[#71966e]"
                        />
                      ))}
                    </div>

                    <p className="mt-4 text-[15px] font-medium leading-7 text-black/70">
                      {r.quote}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-6">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-extrabold">{r.name}</p>
                      <p className="text-xs font-medium text-black/45">{r.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="rounded-[28px] bg-[#eef8e9] py-20 text-center">
              <p className="text-sm font-semibold text-black/50">
                No reviews yet for this service.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#101510] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-2px] sm:text-[48px]">
            Ready To Join Our
            <br />
            <span className="text-[#b8d7a9]">Happy Clients?</span>
          </h2>

          <a
            href="/#contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-1"
          >
            Book A Cleaner
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#101510] text-white transition group-hover:rotate-45">
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </section>

    </main>
  );
}