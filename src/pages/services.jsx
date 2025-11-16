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
        description="EOR services in India, hiring process outsourcing, customer support teams, offshore hiring, and custom tech solutions — all under one roof."
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
            Your partner for global hiring, HR operations, customer support, and modern technology solutions.
          </p>
        </div>
      </motion.section>

      {/* ============================== */}
      {/* EOR Services */}
      {/* ============================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Employer of Record (EOR)
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Text Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              className="order-2 md:order-1"
            >
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Hire in India — without setting up a local entity.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Sheron Nexus acts as your legal Employer of Record in India, managing everything from compliance
                  to payroll. Hire full-time Indian employees legally, quickly, and without operational hurdles.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li>✓ Local employment contracts & onboarding</li>
                  <li>✓ Payroll, tax, and compliance management</li>
                  <li>✓ Employee benefits administration (PF, gratuity, leave)</li>
                  <li>✓ HR support and performance tracking</li>
                </ul>

                <p className="mt-4 text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Ideal for: Global startups and enterprises expanding into India.
                </p>
              </div>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="order-1 flex justify-center md:order-2"
            >
              <div className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-xl shadow-lg">
                <Image src="/eor.svg" alt="Employer of Record Services" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* Hiring Process Outsourcing */}
      {/* ============================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Hiring Process Outsourcing (HPO)
          </h2>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

            {/* Image Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="flex justify-center"
            >
              <div className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-xl shadow-lg">
                <Image src="/hiring.svg" alt="Hiring Outsourcing" fill className="object-cover" />
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
            >
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Let us handle your hiring, end-to-end.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  From sourcing to screening, Sheron Nexus manages your entire recruitment pipeline.
                  We work as an extension of your HR team, ensuring fast, high-quality hiring across India.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li>✓ Candidate sourcing & screening</li>
                  <li>✓ Interview coordination & evaluation</li>
                  <li>✓ Background checks & onboarding</li>
                  <li>✓ Flexible monthly or per-hire pricing</li>
                </ul>

                <p className="mt-4 text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Ideal for: Teams scaling fast or without a dedicated hiring department.
                </p>
              </div>
            </motion.div>
        </div>
        </div>
      </section>

      {/* ============================== */}
      {/* Tech Solutions (TEXT LEFT, IMAGE RIGHT) */}
      {/* ============================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Tech Solutions
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

            {/* TEXT LEFT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
            >
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Build with confidence. Scale with technology.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Our tech division builds modern web and mobile solutions for startups and enterprises.
                  From system architecture to cloud deployment, we turn business needs into scalable software.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li>✓ Full-stack web & mobile development</li>
                  <li>✓ Cloud integration and infrastructure setup</li>
                  <li>✓ API design and scalable architectures</li>
                  <li>✓ Ongoing support & maintenance</li>
                </ul>

                <p className="mt-4 text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Ideal for: Businesses seeking reliable development partners with operational understanding.
                </p>
              </div>
            </motion.div>

            {/* IMAGE RIGHT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="flex justify-center"
            >
              <div className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-xl shadow-lg">
                <Image src="/window.svg" alt="Tech Solutions" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* Customer Support (IMAGE LEFT, TEXT RIGHT) */}
      {/* ============================== */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Customer Support Services
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="flex justify-center"
            >
              <div className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-xl shadow-lg">
                <Image src="/support.svg" alt="Customer Support Services" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
            >
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Deliver exceptional support — without the overhead.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Sheron Nexus provides trained customer support teams for email, chat, and voice.
                  We help you deliver responsive, reliable, and brand-aligned support at scale.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li>✓ Multichannel support (email, chat, voice)</li>
                  <li>✓ Trained specialists tailored to your product</li>
                  <li>✓ SLA handling, ticket management & escalations</li>
                  <li>✓ 24/7 or business-hour coverage options</li>
                  <li>✓ QA, reporting, and performance tracking</li>
                </ul>

                <p className="mt-4 text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Ideal for: Companies scaling support operations without hiring full-time staff.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

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
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/#contact" className="inline-flex">
              <Button
                text="Contact Us"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-[#8B5CF6]"
                ariaLabel="Contact Us"
              />
            </Link>

            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <button className="border-white text-white hover:bg-white hover:text-black px-4 py-2">
  Book a Call
</button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
