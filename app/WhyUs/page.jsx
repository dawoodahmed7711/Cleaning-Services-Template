"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Clock3,
  CircleCheck,
  HeartHandshake,
  PhoneCall,
  Star,
  Quote,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    text: "Every cleaner is background-checked, trained, and insured before their first visit.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    text: "Non-toxic, family- and pet-safe cleaning products used in every home we visit.",
  },
  {
    icon: Clock3,
    title: "On-Time Guarantee",
    text: "We respect your schedule — arrive within your booked window or the visit is free.",
  },
  {
    icon: CircleCheck,
    title: "Transparent Pricing",
    text: "Upfront quotes with no hidden fees. What you're shown is what you pay.",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction Guarantee",
    text: "Not fully happy with a clean? We'll return within 24 hours to make it right.",
  },
  {
    icon: PhoneCall,
    title: "Easy Rescheduling",
    text: "Change or cancel a booking up to 12 hours ahead with zero cancellation fee.",
  },
];

const stats = [
  { value: "6+", label: "Years In Business" },
  { value: "500+", label: "Homes Cleaned Monthly" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Availability" },
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

export default function WhyUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
                — Why Choose Us
              </p>
              <h2 className="max-w-[600px] text-[42px] font-extrabold leading-[1.02] tracking-[-2.5px] sm:text-[58px]">
                Trusted By Homes,
                <br />
                Loved By Families
              </h2>
            </div>

            <p className="max-w-[420px] text-sm font-medium leading-6 text-black/50">
              Six years of consistent, careful cleaning have made us the
              team homes and offices call back again and again — here&apos;s
              what that reliability is built on.
            </p>
          </div>
        </Reveal>

        {/* STATS STRIP */}
        <Reveal>
          <div className="mb-16 grid grid-cols-2 gap-4 rounded-[28px] bg-[#101510] p-8 sm:grid-cols-4 sm:p-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium leading-5 text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

          {/* BENEFITS GRID */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  className="rounded-[22px] border border-black/10 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8e9]">
                    <Icon size={21} strokeWidth={1.8} className="text-[#587c5b]" />
                  </div>

                  <h3 className="mt-5 text-sm font-bold">{benefit.title}</h3>

                  <p className="mt-2 text-xs font-medium leading-5 text-black/45">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* IMAGE + TESTIMONIAL COLUMN */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-10 overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Professional cleaner"
                    className="h-[260px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=85"
                    alt="Cleaning service"
                    className="h-[260px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center rounded-[28px] bg-[#eaf7df] p-7">
                <Quote size={30} strokeWidth={1.5} className="text-[#83a782]" />

                <p className="mt-4 text-[15px] font-medium leading-7 text-black/70">
                  Neatora turned my messy apartment into a fresh, spotless
                  space in just a few hours. Their team was friendly, on
                  time, and truly professional.
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-extrabold">Ayesha Raza</p>
                    <p className="text-xs font-medium text-black/45">
                      Verified Client
                    </p>
                  </div>

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
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}