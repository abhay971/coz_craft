"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Palette,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function CustomisedProducts() {
  const services = [
    {
      icon: <Palette size={28} />,
      title: "Product Design",
      description:
        "Custom product design from concept to creation by  artisans",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Strategic Sourcing",
      description:
        "Comprehensive planning and consultation to align with your vision",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control ensuring premium standards at every stage",
    },
    {
      icon: <Truck size={28} />,
      title: "Logistics Management",
      description:
        "End-to-end logistics handling from production to safe delivery",
    },
  ];

  const features = [
    "Dimension specifications",
    "Unlimited design revisions",
    "Exclusive patterns & textures",
    "Material & color customization",
    "End-to-end project management",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .customised-title {
          font-family: 'Playfair Display', serif;
        }

        .customised-text {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <section className="relative py-12 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Elegant Background Accents */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 right-40 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "#F37E3A" }}
          ></div>
          <div
            className="absolute bottom-20 left-40 w-80 h-80 rounded-full blur-3xl"
            style={{ background: "#288EC2" }}
          ></div>
        </div>

        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Compact Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#000]"></div>
              <Sparkles className="w-5 h-5" style={{ color: "#000" }} />
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#000]"></div>
            </div>

            <h2 className="customised-title text-4xl md:text-5xl font-bold text-black mb-3">
              Bespoke <span style={{ color: "#F37E3A" }}>Creations</span>
            </h2>

            <p className="text-xl text-foreground/80 font-normal max-w-7xl mx-auto mb-8 mt-8 leading-loose tracking-wider bg-gradient-to-r text-center from-transparent via-primary/5 to-transparent py-6 px-8 border-y border-primary/10">
              Our dedicated team of design experts and master artisans will
              transform your unique vision into reality. <br />
              <span>
                From concept to creation, we ensure every detail reflects your
                personal style and meets your expectation.
              </span>
            </p>
          </motion.div>

          {/* Main Content - Single Row Layout */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-8">
            {/* Left - Services Grid */}
            <motion.div
              className="lg:col-span-2 grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative p-5 rounded-xl border-2 border-slate-200 bg-white hover:border-[#F37E3A] hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="min-w-[56px] h-[56px] flex items-center justify-center rounded-lg bg-slate-100 group-hover:bg-[#F37E3A] text-slate-600 group-hover:text-white transition-all duration-300 shadow-md">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="customised-title text-xl font-bold text-black mb-1">
                        {service.title}
                      </h3>
                      <p className="text-md text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right - Features List Card */}
            <motion.div
              className="relative p-5 rounded-xl border-2 border-[#F37E3A] bg-gradient-to-br from-orange-50 to-white shadow-xl flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6" style={{ color: "#F37E3A" }} />
                <h3 className="customised-title text-xl font-bold text-black">
                  What We Offer
                </h3>
              </div>
              <ul className="space-y-3 flex-1">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2
                      size={18}
                      className="text-[#F37E3A] flex-shrink-0 mt-1"
                    />
                    <span className="text-md text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            className="text-center bg-gradient-to-r from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="customised-title text-2xl font-bold text-black mb-3">
              Ready to Create?
            </h3>
            <p className="text-md text-gray-700 mb-5 max-w-4xl mx-auto leading-relaxed">
              Our team will guide you through every step of your creative
              journey.
            </p>
            <motion.button
              className="px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base border-2 border-transparent hover:border-[#F37E3A]/30"
              style={{
                backgroundColor: "#F37E3A",
                color: "#FFFFFF",
                fontFamily: "'Playfair Display', serif",
                boxShadow: "0 8px 25px rgba(243, 126, 58, 0.3)",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Consult Our Team
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>
      </section>
    </>
  );
}
