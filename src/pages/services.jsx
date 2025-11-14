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
        title="Services · Sheron Nexus"
        description="Sheron Nexus offers Employer of Record (EOR) services in India, outsourced hiring (RPO), customer support teams, offshore talent and custom tech solutions for global companies."
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
            Sheron Nexus helps global companies hire, scale, and build with confidence. We combine compliant hiring, expert recruitment, dependable support teams, and production-grade technology to help businesses grow in India.
          </p>
        </div>
      </motion.section>

      {/* Offshore Hiring (updated)
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
                  Access highly skilled professionals across software development, design, QA, and support. We help you scale quickly with vetted talent and flexible engagement models that suit product teams and agencies alike.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Pre-vetted developers, designers & QA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Flexible engagement: full-time, part-time, contract</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Local hiring expertise and remote collaboration processes</span>
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
                  src="/vercel.svg"
                  alt="Offshore hiring illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section> */}
      
      {/* EOR Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Employer of Record (EOR)
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Hire talent in India without a local entity
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Sheron Nexus acts as your legal Employer of Record in India — we take care of payroll, local compliance, contracts, taxes, and employee benefits so you can focus on managing results.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Local employment contracts & onboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Payroll, TDS, EPF/ESIC and statutory compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Benefits administration & local HR support</span>
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
                  src="/eor.svg"
                  alt="Employer of Record illustration"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Solutions (updated) */}
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
                  src="/window.svg"
                  alt="Tech solutions illustration"
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
                  From MVPs to scalable enterprise systems, our engineering team builds secure, maintainable products that align with your business goals.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Full-stack web & mobile development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Cloud infrastructure, DevOps & SRE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>API design, integrations & long-term support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Outsourced Hiring / RPO */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Outsourced Hiring (RPO)
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideLeft}
              className="flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative aspect-[16/11] w-full max-w-xl overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src="/hiring.svg"
                  alt="Outsourced hiring illustration"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <div>
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  End-to-end recruitment handled for you
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  We act as an extension of your HR team to run the full recruitment lifecycle — sourcing, screening, interviewing, offers and onboarding — so you can hire faster and better.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Targeted sourcing across India’s talent pools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Technical assessments, interviews & coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Onboarding, background checks & offer management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Customer Support Outsourcing
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="card rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Trained support teams that represent your brand
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Build reliable customer support operations with us. We deliver trained agents, ticketing workflows and SLA-backed performance so your customers get timely, consistent help.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Chat, email & voice support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>Tiered technical support & escalation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6]">✓</span>
                    <span>CRM & ticketing setup (Zendesk/Intercom/others)</span>
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
                  src="/support.svg"
                  alt="Customer support illustration"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#8B5CF6] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to scale with Sheron Nexus?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base">
            Contact us to discuss EOR, recruitment outsourcing, support ops, or custom tech projects. We’ll help you pick the right model for your needs.
          </p>
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.03, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/#contact" className="inline-flex">
              <Button
                text="Contact Us"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-[#8B5CF6] hover:scale-105 active:scale-95"
                ariaLabel="Contact Sheron Nexus"
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
                ariaLabel="Book a call with Sheron Nexus"
              />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
