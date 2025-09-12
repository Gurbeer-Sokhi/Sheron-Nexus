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
        description="Learn about Sheron Nexus: our story, mission, and vision for empowering businesses."
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
            Our story, mission, and vision.
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
                To empower businesses by connecting them with world-class offshore talent and delivering scalable tech
                solutions.
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
                To be the trusted global partner for companies seeking innovation, efficiency, and growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Story</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Founded with a mission to bridge global talent and opportunity, Sheron Nexus partners with companies
                  to build resilient teams and modern software. Our journey is driven by a passion for quality,
                  collaboration, and long-term success. [Placeholder text]
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-1 flex justify-center md:order-2"
            >
              <div className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/globe.svg"
                  alt="About Sheron Nexus"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


