"use client";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NextSeo
        title="Our Services | Sheron Nexus"
        description="Offshore hiring and custom tech solutions to help your business scale efficiently."
        openGraph={{ url: "https://www.sheronnexus.com/services" }}
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
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg dark:text-gray-300">
            Two pillars of Sheron Nexus: Offshore Hiring and Tech Solutions.
          </p>
        </div>
      </motion.section>

      {/* Offshore Hiring */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Offshore Hiring
          </h2>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hire top offshore talent</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  We provide businesses access to highly skilled offshore professionals in software development, design,
                  QA, and more. Scale your team quickly and cost-effectively without compromising quality.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Pre-vetted developers & designers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Cost-effective hiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Flexible engagement models</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideRight}
              className="flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src="/images/hiring.jpg"
                  alt="Offshore hiring"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Solutions */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Tech Solutions
          </h2>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideLeft}
              className="order-2 flex justify-center md:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src="/images/tech.jpg"
                  alt="Tech solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
            <div className="order-1 md:order-2">
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Custom tech solutions for your business</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  From web and mobile apps to cloud and enterprise solutions, Sheron Nexus delivers technology tailored to
                  your business needs.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Full-stack web & mobile development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Cloud integration & support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Scalable, secure architectures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#8B5CF6] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to grow your business?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base">
            Contact us today or book a call to explore how Sheron Nexus can help.
          </p>
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.05, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/#contact" className="inline-flex">
              <Button
                text="Contact Us"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-[#8B5CF6] hover:scale-105 active:scale-95"
                ariaLabel="Contact Us"
              />
            </Link>
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                text="Book a Call"
                variant="primary"
                className="bg-white text-[#8B5CF6] hover:scale-105 active:scale-95"
                ariaLabel="Book a Call"
              />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


