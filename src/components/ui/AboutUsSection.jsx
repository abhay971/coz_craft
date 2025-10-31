"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  Award,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function AboutUsSection() {
  const features = [
    {
      icon: Crown,
      title: "Heritage Craftsmanship",
      description:
        "Curating exquisite handcrafted pieces that embody centuries of traditional artisanship.",
      color: "#F37E3A",
    },
    {
      icon: Sparkles,
      title: "Luxury Collections",
      description:
        "Premium home decor selections sourced from master artisans worldwide.",
      color: "#288EC2",
    },
    {
      icon: Shield,
      title: "Validated Producers",
      description:
        "Every supplier rigorously vetted for quality, authenticity, and ethical practices.",
      color: "#6EBD49",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Connecting businesses across 50+ countries with premium suppliers.",
      color: "#F37E3A",
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description:
        "Each piece meticulously selected to meet the highest standards.",
      color: "#288EC2",
    },
    {
      icon: TrendingUp,
      title: "Seamless Delivery",
      description: "Complete B2B support from discovery to delivery.",
      color: "#6EBD49",
    },
  ];

  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

                .luxury-title {
                    font-family: 'Playfair Display', serif;
                }

                .luxury-text {
                    font-family: 'Cormorant Garamond', serif;
                }
            `}</style>

      <section className="relative py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Elegant Background Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
            style={{ background: "#F37E3A" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "#288EC2" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl"
            style={{ background: "#6EBD49" }}
          ></div>
        </div>

        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#F37E3A]/10 border border-[#F37E3A]/30 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#F37E3A" }} />
              <span
                className="text-md font-semibold tracking-wide"
                style={{ color: "#F37E3A" }}
              >
                ABOUT OUR PLATFORM
              </span>
            </motion.div>

            <h1 className="luxury-title text-4xl md:text-5xl font-bold mb-4 text-black">
              Where Artistry Meets Luxury
            </h1>

            <p className="text-xl text-foreground/80 font-normal max-w-8xl mx-auto mb-8 mt-8 leading-loose tracking-wider bg-gradient-to-r text-justify from-transparent via-primary/5 to-transparent py-6 px-8 border-y border-primary/10">
              A distinguished marketplace connecting elite businesses with
              master artisans and premium manufacturers.
            </p>

            {/* Decorative Divider */}
            {/* <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#F37E3A]"></div>
              <Crown className="w-5 h-5" style={{ color: "#F37E3A" }} />
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#F37E3A]"></div>
            </div> */}
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div
                  className="relative h-full p-5 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
                  style={{ borderColor: `${feature.color}20` }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: feature.color }}
                  ></div>

                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div
                      className="inline-flex p-3 rounded-lg shadow-sm transform group-hover:scale-110 transition-transform duration-500"
                      style={{ background: feature.color }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="luxury-title text-xl font-bold text-black mb-2 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-md  text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Border Animation */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: feature.color }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          {/* <motion.div
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {[
              {
                number: "5,000+",
                label: "Verified Suppliers",
                color: "#F37E3A",
              },
              { number: "12", label: "Premium Categories", color: "#288EC2" },
              { number: "25+", label: "Global Markets", color: "#6EBD49" },
              { number: "98%", label: "Success Rate", color: "#F37E3A" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div
                  className="luxury-title text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="luxury-text text-base font-semibold text-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* Bottom Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>
      </section>
    </>
  );
}
