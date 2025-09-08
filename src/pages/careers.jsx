"use client";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { TrendingUp, Globe, Lightbulb, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const ROLES = [
  {
    title: "Frontend Developer",
    description:
      "Build responsive, accessible interfaces with React and Tailwind while collaborating closely with design.",
  },
  {
    title: "Backend Developer",
    description:
      "Design robust APIs and services, optimize performance, and ensure reliability across distributed systems.",
  },
  {
    title: "Full Stack Engineer",
    description:
      "Own features end-to-end across the stack, from database to UI, with a focus on quality.",
  },
];

const VALUES = [
  { icon: TrendingUp, title: "Growth mindset", desc: "We invest in learning and continuous improvement." },
  { icon: Globe, title: "Remote-friendly", desc: "Work from anywhere with async-first collaboration." },
  { icon: Lightbulb, title: "Innovative projects", desc: "Solve impactful problems with modern tech." },
  { icon: Users, title: "Collaborative team", desc: "Supportive peers who value ownership and craft." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NextSeo
        title="Careers at Sheron Nexus"
        description="Explore open roles and join our mission to connect businesses with top offshore talent and tech solutions."
        openGraph={{ url: "https://www.sheronnexus.com/careers" }}
      />
      <Navbar />

      {/* Hero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeDown}
        className="py-16"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Join Our Team</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg dark:text-gray-300">At Sheron Nexus, we’re building the future of offshore hiring and tech solutions. Come grow with us.</p>
        </div>
      </motion.section>

      {/* Open Roles */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Open Roles
          </h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {ROLES.map((role) => (
              <motion.div
                key={role.title}
                variants={itemFade}
                className="rounded-xl bg-white p-6 shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_0_0_2px_rgba(139,92,246,0.15)] dark:bg-gray-900"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{role.title}</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{role.description}</p>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Location: Remote</p>
                <div className="mt-4">
                  <a
                    href={`mailto:hello@sheronnexus.com?subject=${encodeURIComponent("Application%20for%20" + role.title)}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#8B5CF6] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 active:scale-95"
                  >
                    Apply via Email
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">Why Work With Us?</h2>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              ...VALUES,
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={itemFade}
                className="rounded-xl bg-white p-6 shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg dark:bg-gray-900"
              >
                <Icon className="h-6 w-6 text-[#8B5CF6]" />
                <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#8B5CF6] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-sm sm:text-base">Didn’t find your role? We’d still love to hear from you.</p>
          <div className="mt-6 flex justify-center">
            <a
              href={`mailto:hello@sheronnexus.com?subject=${encodeURIComponent("General Application")}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#8B5CF6] shadow-sm transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


