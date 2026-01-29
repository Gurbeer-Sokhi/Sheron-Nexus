"use client";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NextSeo
        title="About Sheron Nexus"
        description="Learn about Sheron Nexus: our mission, vision, and the values that drive our work."
        openGraph={{ url: "https://www.sheronnexus.com/about" }}
      />

      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-16"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            About Sheron Nexus
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg dark:text-gray-300">
            Empowering businesses through global talent, technology, and operational excellence.
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideLeft}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                To empower businesses by connecting them with world-class offshore talent
                and delivering scalable technology solutions.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideRight}
              className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                To be the trusted global partner for companies seeking innovation, efficiency,
                and long-term growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center text-2xl font-bold text-gray-900 dark:text-white"
          >
            Our Core Values
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Reliability",
                desc: "We deliver consistent, dependable services that businesses can count on.",
                icon: "/reliability.svg",
              },
              {
                title: "Transparency",
                desc: "Clear communication, honest processes, and full visibility at every step.",
                icon: "/transparency.svg",
              },
              {
                title: "Growth Mindset",
                desc: "We constantly innovate and help our partners scale without limitations.",
                icon: "/growth.svg",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900"
              >
                <div className="mb-4 flex justify-center">
                  <Image src={value.icon} alt={value.title} width={48} height={48} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 text-center">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder’s Note */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Founder’s Note</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Sheron Nexus was built with a simple goal: to make global hiring and technology
              accessible to every business — no matter the size.  
              <br /><br />
              Our approach is straightforward: transparent processes, quality talent, and
              technology that drives real results. We’re here to support teams, strengthen
              operations, and help businesses grow with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
