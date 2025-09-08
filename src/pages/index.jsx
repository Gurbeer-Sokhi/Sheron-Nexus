"use client";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NextSeo
        title="Hire Offshore Talent & Build Tech Solutions | Sheron Nexus"
        description="Sheron Nexus helps you hire top offshore talent and build custom software efficiently and reliably."
        openGraph={{ url: "https://www.sheronnexus.com/" }}
      />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <HeroSection />
      </motion.section>

      {/* Calendly Booking Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-16"
        id="book-a-call"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Schedule a Call With Us
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              Pick a time that works best for you.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-2xl bg-white p-4 shadow-md dark:bg-gray-900 sm:p-6"
          >
            <div className="relative w-full overflow-hidden rounded-xl">
              <iframe
                src="https://calendly.com/your-calendly-link"
                width="100%"
                height="600"
                frameBorder="0"
                title="Calendly Scheduling Widget"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="bg-gray-50 py-16 dark:bg-gray-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">Get in Touch</h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              We’d love to hear from you. Reach out directly or fill out the form.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left: Contact Details */}
            <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
              <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#8B5CF6] transition-transform duration-200 hover:-translate-y-0.5" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#8B5CF6] transition-transform duration-200 hover:-translate-y-0.5" />
                  <a href="mailto:hello@sheronnexus.com" className="hover:underline">hello@sheronnexus.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#8B5CF6] transition-transform duration-200 hover:-translate-y-0.5" />
                  <span>Atlanta, GA</span>
                </li>
              </ul>
            </div>

            {/* Right: Lead Form */}
            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-900 sm:p-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Quick Contact Form</h3>
              <div className="mx-auto max-w-2xl">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            What We Do
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ServiceCard
              title="Offshore Hiring"
              description="Scale your team with top offshore talent."
              link="/services"
            />
            <ServiceCard
              title="Tech Solutions"
              description="Build and deploy modern software projects."
              link="/services"
            />
          </div>
        </div>
      </motion.section>

      {/* Impact / Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="bg-gray-50 py-16 dark:bg-gray-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <p className="text-gray-700 dark:text-gray-300">
                “Sheron Nexus helped us scale our engineering team in record time.”
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">— Alex Johnson, CTO</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <p className="text-gray-700 dark:text-gray-300">
                “Their solutions accelerated our product roadmap by months.”
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">— Priya Desai, Product Lead</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trust Signals Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Trusted By
          </h2>
          <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-28 rounded-md bg-gray-200 dark:bg-gray-700"
                aria-label="Logo placeholder"
              />
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}


