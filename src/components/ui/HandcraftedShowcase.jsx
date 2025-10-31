"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

export default function HandcraftedShowcase() {
  const showcaseProducts = [
    {
      title: "Artisan Ceramics",
      image: "/images/products/Handmade_Ceramic_Bowls_Set.png",
      badge: "Heritage Craft",
    },
    {
      title: "Handwoven Textiles",
      image: "/images/products/Handwoven_Tote_Bag.png",
      badge: "Master Artisan",
    },
    {
      title: "Bamboo Creations",
      image: "/images/products/Modern_Bamboo_Table_Lamp.png",
      badge: "Eco-Luxury",
    },
    {
      title: "Macramé Art",
      image: "/images/products/Bohemian Macrame Wall Hanging.png",
      badge: "Artisan Made",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .handcrafted-title {
          font-family: 'Playfair Display', serif;
        }

        .handcrafted-text {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <section className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
        {/* Subtle Background Accents */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl"
            style={{ background: "#F37E3A" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl"
            style={{ background: "#288EC2" }}
          ></div>
        </div>

        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Compact Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F37E3A]"></div>
              <Crown className="w-5 h-5" style={{ color: "#F37E3A" }} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F37E3A]"></div>
            </div>

            <h2 className="handcrafted-title text-4xl md:text-5xl font-bold text-black mb-3">
              Handcrafted <span style={{ color: "#F37E3A" }}>Excellence</span>
            </h2>

            <p className="handcrafted-text text-lg text-slate-600 max-w-2xl mx-auto">
              Timeless artisan creations, meticulously crafted for discerning
              collectors
            </p>
          </motion.div>

          {/* Premium Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseProducts.map((product, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white">
                  {/* Product Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Border on Hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F37E3A] transition-colors duration-500 rounded-xl"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {/* Badge */}
                    <div className="mb-3">
                      <span
                        className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor: "#F37E3A",
                          color: "#FFFFFF",
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="handcrafted-title text-2xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-[#F37E3A] transition-colors duration-300">
                      {product.title}
                    </h3>

                    {/* Gold Underline */}
                    <div className="h-0.5 w-0 bg-[#F37E3A] group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: "#F37E3A",
                color: "#FFFFFF",
              }}
              whileHover={{ scale: 1.05, backgroundColor: "#E06D2A" }}
              whileTap={{ scale: 0.98 }}
            >
              View All Handcrafted
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>
      </section>
    </>
  );
}
