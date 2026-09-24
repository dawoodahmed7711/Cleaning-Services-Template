"use client";

import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  Building2,
  Sparkles as SparklesIcon,
  Droplets,
  WashingMachine,
  Wind,
  ArrowUpRight,
  Clock3,
  BadgeCheck,
  Check,
  CalendarCheck,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Sofa And Carpet Refresh",
    description:
      "Deep cleaning that removes dust, stains, and everyday dirt from your furniture.",
    image:
      "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: SparklesIcon,
    duration: "1–2 hrs",
    price: "From $49",
    features: ["Steam extraction", "Stain pre-treatment", "Odor neutralizing"],
  },
  {
    title: "Complete Deep Home Cleaning",
    description:
      "Thorough cleaning of every corner of your home for a fresh environment.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    icon: HomeIcon,
    duration: "3–4 hrs",
    price: "From $99",
    popular: true,
    features: ["Room-by-room checklist", "Baseboards & vents", "Inside cabinets"],
  },
  {
    title: "Professional Office Cleaning",
    description:
      "Keep your workspace clean, organized, and comfortable for your team.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    icon: Building2,
    duration: "2–3 hrs",
    price: "From $79",
    features: ["Desk & common areas", "Trash & recycling", "After-hours scheduling"],
  },
  {
    title: "Bathroom & Kitchen Shine",
    description:
      "Professional cleaning for bathrooms and kitchens with attention to every detail.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=85",
    icon: Droplets,
    duration: "1–2 hrs",
    price: "From $39",
    features: ["Grout & tile scrub", "Appliance exteriors", "Descale fixtures"],
  },
  {
    title: "Laundry & Linen Care",
    description:
      "Wash, dry, and fold service for everyday laundry and household linens.",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=85",
    icon: WashingMachine,
    duration: "Same day",
    price: "From $29",
    features: ["Wash & fold", "Fabric-safe detergents", "Bedding & towels"],
  },
  {
    title: "Move In / Move Out Cleaning",
    description:
      "A top-to-bottom reset so a new space is spotless before or after you move.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    icon: Wind,
    duration: "4–5 hrs",
    price: "From $129",
    features: ["Empty-space deep clean", "Window sills & tracks", "Closet interiors"],
  },
];

const process = [
  {
    icon: CalendarCheck,
    title: "Book A Time",
    text: "Pick a service and a slot that fits your schedule in under a minute.",
  },
  {
    icon: UserCheck,
    title: "We Match A Pro",
    text: "A vetted, background-checked cleaner is assigned near you.",
  },
  {
    icon: ShieldCheck,
    title: "Enjoy A Fresh Space",
    text: "We clean, you relax — satisfaction guaranteed on every visit.",
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

 function Services() {
  return (
    <section id="services" className="bg-[#eef8e9] py-24 lg:py-32">
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

            <div className="flex items-end gap-8">
              <p className="max-w-[380px] text-sm font-medium leading-6 text-black/50">
                From everyday home cleaning to specialized care, our
                professionals make every corner shine — six services, one
                trusted team.
              </p>
              <div className="hidden shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 lg:flex">
                <BadgeCheck size={15} className="text-[#587c5b]" />
                <span className="text-xs font-bold">Insured &amp; Verified</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SERVICE CARDS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className={`group relative flex flex-col rounded-[25px] p-3 transition duration-300 hover:-translate-y-1 ${
                  service.popular ? "bg-[#101510] shadow-xl" : "bg-white/0"
                }`}
              >
                {service.popular && (
                  <span className="absolute right-5 top-5 z-10 rounded-full bg-[#b8d7a9] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[1px] text-[#101510]">
                    Most Booked
                  </span>
                )}

                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div
                  className={`flex flex-1 flex-col px-2 pb-1 pt-5 ${
                    service.popular ? "text-white" : ""
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      service.popular ? "bg-white/10" : "bg-[#eef8e9]"
                    }`}
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className={
                        service.popular ? "text-[#b8d7a9]" : "text-[#587c5b]"
                      }
                    />
                  </div>

                  <h3 className="mt-5 text-[19px] font-extrabold">
                    {service.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm font-medium leading-6 ${
                      service.popular ? "text-white/50" : "text-black/50"
                    }`}
                  >
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-2 text-xs font-semibold ${
                          service.popular ? "text-white/70" : "text-black/60"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            service.popular ? "bg-[#b8d7a9]/20" : "bg-[#eef8e9]"
                          }`}
                        >
                          <Check
                            size={10}
                            strokeWidth={3}
                            className={
                              service.popular ? "text-[#b8d7a9]" : "text-[#587c5b]"
                            }
                          />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-5 flex items-center gap-4 border-t pt-4 text-xs font-bold ${
                      service.popular
                        ? "border-white/10 text-white/60"
                        : "border-black/10 text-black/50"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Clock3 size={13} />
                      {service.duration}
                    </span>
                    <span
                      className={
                        service.popular ? "text-[#b8d7a9]" : "text-[#557c5b]"
                      }
                    >
                      {service.price}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold ${
                      service.popular ? "text-white" : "text-[#101510]"
                    }`}
                  >
                    Explore Service
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full transition group-hover:rotate-45 ${
                        service.popular
                          ? "bg-white text-black"
                          : "bg-[#eef8e9] text-[#101510]"
                      }`}
                    >
                      <ArrowUpRight size={12} />
                    </span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* HOW IT WORKS */}
        <Reveal className="mt-24 rounded-[35px] bg-white p-8 sm:p-12 lg:p-16">
          <div className="mb-12 max-w-[520px]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#719071]">
              — How It Works
            </p>
            <h3 className="text-[32px] font-extrabold leading-[1.05] tracking-[-1.5px] sm:text-[40px]">
              Booking A Cleaner Takes Three Simple Steps
            </h3>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 sm:grid-cols-3"
          >
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div key={step.title} variants={fadeUp} className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef8e9]">
                    <Icon size={21} strokeWidth={1.8} className="text-[#587c5b]" />
                  </div>

                  <span className="mt-6 block text-xs font-extrabold text-[#719071]">
                    Step {index + 1}
                  </span>

                  <h4 className="mt-2 text-lg font-extrabold">{step.title}</h4>

                  <p className="mt-2 text-sm font-medium leading-6 text-black/50">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}
export default Services;