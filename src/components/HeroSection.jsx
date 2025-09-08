"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.4, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center md:text-left"
        >
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Build Smarter with Sheron Nexus
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 sm:text-lg md:mx-0 dark:text-gray-300">
            Your partner for offshore hiring and tech solutions.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={buttonsVariants}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start"
          >
            <Link href="/book">
              <Button text="Book a Call" variant="primary" ariaLabel="Book a Call" />
            </Link>
            <Link href="/#contact">
              <Button text="Contact Us" variant="secondary" ariaLabel="Contact Us" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
          className="flex justify-center md:justify-end"
        >
          <div className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero.jpg"
              alt="Team collaborating at Sheron Nexus"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


