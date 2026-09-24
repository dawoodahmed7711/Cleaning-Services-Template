"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  ShieldCheck,
  Leaf,
  Clock3,
  CircleCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Sofa And Carpet Refresh",
    description:
      "Deep cleaning that removes dust, stains, and everyday dirt from your furniture.",
    image:
      "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Complete Deep Home Cleaning",
    description:
      "Thorough cleaning of every corner of your home for a fresh environment.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Professional Office Cleaning",
    description:
      "Keep your workspace clean, organized, and comfortable for your team.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Bathroom & Kitchen Shine",
    description:
      "Professional cleaning for bathrooms and kitchens with attention to every detail.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=85",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    text: "Trained and experienced cleaners you can trust.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    text: "Safe cleaning products for your home and family.",
  },
  {
    icon: Clock3,
    title: "On-Time Guarantee",
    text: "We respect your time and arrive when promised.",
  },
  {
    icon: CircleCheck,
    title: "Transparent Pricing",
    text: "No hidden charges. Know what you pay before booking.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#101510]">

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-br from-[#f3f9e7] via-[#edf9ef] to-[#e5f5eb]"
      >
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-28 lg:px-10 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold">
                  Professional Home Cleaning
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-[650px] text-[52px] font-extrabold leading-[0.96] tracking-[-3px] sm:text-[65px] lg:text-[76px]"
              >
                A Clean Home
                <br />
                <span className="text-[#557c5b]">A Fresh Start</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[440px] text-[15px] font-medium leading-7 text-black/55"
              >
                Professional cleaning you can trust — whether it&apos;s your
                home, office, or that one messy corner.
              </motion.p>

              <motion.div variants={fadeUp}>
                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#101510] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1"
                >
                  Book a Cleaner

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45">
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </span>
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex items-center gap-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80"
                  alt="Cleaner"
                  className="h-[72px] w-[130px] rounded-2xl object-cover"
                />

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-extrabold">
                      4.9/5.0
                    </span>

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

                  <p className="mt-1 text-xs font-medium text-black/45">
                    Trusted by happy homes
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[35px]">
                <img
                  src="https://images.unsplash.com/photo-1718152422704-bd21030a1a99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional cleaner"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[650px]"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-7 left-7 rounded-2xl bg-[#101510] px-6 py-5 text-white shadow-2xl"
              >
                <p className="text-2xl font-extrabold">100+</p>
                <p className="mt-1 text-[11px] font-medium text-white/60">
                  Cleaning Experts
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-28">

            <Reveal>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
                  — About Us
                </p>

                <h2 className="max-w-[600px] text-[42px] font-extrabold leading-[1.02] tracking-[-2.5px] sm:text-[56px]">
                  More Than Cleaning
                  <br />
                  We Care For Your Space
                </h2>

                <div className="mt-10 overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1581578949510-fa7315c4c350?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cleaning"
                    className="h-[390px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex h-full flex-col justify-center">

                <p className="max-w-[570px] text-[15px] font-medium leading-8 text-black/55">
                  We started with a simple belief: a clean home brings a clear
                  mind. From humble beginnings with a small team, today we
                  proudly serve hundreds of homes and offices, delivering
                  spotless results with care, honesty, and eco-friendly
                  solutions.
                </p>

                <a
                  href="#services"
                  className="mt-8 flex w-fit items-center gap-3 rounded-full bg-[#101510] px-5 py-3 text-sm font-bold text-white"
                >
                  Explore Us

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight size={15} />
                  </span>
                </a>

                <div className="mt-14 grid grid-cols-2 gap-4">
                  <div className="rounded-[22px] border border-black/10 p-7">
                    <p className="text-4xl font-extrabold">6+</p>

                    <p className="mt-2 text-xs font-medium leading-5 text-black/50">
                      Years Customer Satisfaction With Every Service
                    </p>
                  </div>

                  <div className="rounded-[22px] bg-[#101510] p-7 text-white">
                    <p className="text-4xl font-extrabold">500+</p>

                    <p className="mt-2 text-xs font-medium leading-5 text-white/50">
                      Delivering Spotless Results With Every Visit
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[25px] bg-[#eaf7df] p-7">
                  <div className="mb-3 text-4xl font-bold text-[#83a782]">
                    &quot;
                  </div>

                  <p className="text-[15px] font-medium leading-7 text-black/70">
                    Neatora turned my messy apartment into a fresh, spotless
                    space in just a few hours. Their team was friendly, on time,
                    and truly professional.
                  </p>
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#eef8e9] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
                  — Our Services
                </p>

                <h2 className="text-[42px] font-extrabold leading-[1] tracking-[-2.5px] sm:text-[58px]">
                  Freshness At Your
                  <br />
                  Fingertips
                </h2>
              </div>

              <p className="max-w-[420px] text-sm font-medium leading-6 text-black/50">
                From everyday home cleaning to specialized care, our
                professionals make every corner shine.
              </p>

            </div>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group"
              >
                <div className="overflow-hidden rounded-[25px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[285px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 text-[19px] font-extrabold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-black/50">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold"
                >
                  Explore Service
                  <ArrowUpRight size={14} />
                </a>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <Reveal>
              <div>

                <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
                  — Why Choose Us
                </p>

                <h2 className="text-[42px] font-extrabold leading-[1] tracking-[-2.5px] sm:text-[58px]">
                  Trusted By Homes,
                  <br />
                  Loved By Families
                </h2>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                      <div
                        key={benefit.title}
                        className="rounded-[22px] border border-black/10 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8e9]">
                          <Icon
                            size={21}
                            strokeWidth={1.8}
                            className="text-[#587c5b]"
                          />
                        </div>

                        <h3 className="mt-5 text-sm font-bold">
                          {benefit.title}
                        </h3>

                        <p className="mt-2 text-xs font-medium leading-5 text-black/45">
                          {benefit.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-2 gap-4">

                <div className="mt-16 overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Professional cleaner"
                    className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=85"
                    alt="Cleaning service"
                    className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="bg-[#edf8e9] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

            <Reveal>
              <div>

                <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
                  — Book Your Cleaner
                </p>

                <h2 className="text-[44px] font-extrabold leading-[1] tracking-[-2.5px] sm:text-[62px]">
                  Your Home Deserves
                  <br />
                  A Sparkle
                </h2>

                <p className="mt-7 max-w-[430px] text-sm font-medium leading-7 text-black/55">
                  Schedule a cleaning service with our trusted professionals
                  and enjoy a spotless, fresh home without the hassle.
                </p>

                <a
                  href="mailto:hello@freshnest.com"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#101510] px-6 py-3.5 text-sm font-bold text-white"
                >
                  Book a Cleaner

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </a>

              </div>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-[35px]">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=90"
                  alt="Home cleaning"
                  className="h-[480px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[550px]"
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#101510] py-24 text-white lg:py-32">
        <Reveal>
          <div className="mx-auto max-w-[1000px] px-6 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#b8d7a9]/10">
              <Sparkles
                size={25}
                strokeWidth={1.8}
                className="text-[#b8d7a9]"
              />
            </div>

            <h2 className="mt-7 text-[48px] font-extrabold leading-[1] tracking-[-2.5px] sm:text-[70px]">
              Ready For A
              <br />
              <span className="text-[#b8d7a9]">Fresh Start?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-[530px] text-sm font-medium leading-7 text-white/50">
              Let FreshNest take care of the cleaning while you enjoy more
              time in a fresh and comfortable space.
            </p>

            <a
              href="mailto:hello@freshnest.com"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:-translate-y-1"
            >
              Get Started
              <ArrowUpRight size={16} />
            </a>

          </div>
        </Reveal>
      </section>

    </main>
  );
}