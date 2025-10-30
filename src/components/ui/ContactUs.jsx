"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Crown,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    message: "",
  });

  const categories = [
    "Rugs",
    "Fabrics",
    "Flooring",
    "Lighting",
    "Planters",
    "Furniture",
    "Bed Linen",
    "Bathware",
    "Kitchenware",
    "Appliances",
    "Wall Coverings",
    "Antiques & Artifacts",
    "Customised Products",
  ];

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      detail: "contact@cozcraft.com",
      color: "#F37E3A",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      color: "#288EC2",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      detail: "+1 (555) 987-6543",
      color: "#6EBD49",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      detail: "123 Artisan Street, NY",
      color: "#000000",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .contact-title {
          font-family: 'Playfair Display', serif;
        }

        .contact-text {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <section className="relative py-12 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Elegant Background Accents */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 left-40 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "#F37E3A" }}
          ></div>
          <div
            className="absolute bottom-20 right-40 w-80 h-80 rounded-full blur-3xl"
            style={{ background: "#288EC2" }}
          ></div>
        </div>

        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F37E3A]"></div>
              <Sparkles className="w-5 h-5" style={{ color: "#F37E3A" }} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F37E3A]"></div>
            </div>

            <h2 className="contact-title text-4xl md:text-5xl font-bold text-black mb-3">
              Get In <span style={{ color: "#F37E3A" }}>Touch</span>
            </h2>

            <p className="text-xl text-foreground/80 font-normal max-w-6xl mx-auto mb-8 mt-8 leading-loose tracking-wider bg-gradient-to-r text-justify from-transparent via-primary/5 to-transparent py-6 px-8 border-y border-primary/10">
              Let's discuss how we can bring your vision to life. Our team of
              experts is ready to assist you with customised solutions tailored
              to your needs.
            </p>
          </motion.div>

          {/* Main Content - Contact Form + Info */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Contact Form - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2 flex"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl border-2 border-slate-200 shadow-lg p-6 flex flex-col w-full">
                <div className="flex items-center gap-2 mb-5">
                  <Crown className="w-6 h-6" style={{ color: "#F37E3A" }} />
                  <h3 className="contact-title text-2xl font-bold text-black">
                    Send Us a Message
                  </h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 flex-1 flex flex-col"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-[#F37E3A] focus:outline-none transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-[#F37E3A] focus:outline-none transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-[#F37E3A] focus:outline-none transition-colors duration-300"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Inquiry Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-[#F37E3A] focus:outline-none transition-colors duration-300 bg-white"
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full flex-1 px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-[#F37E3A] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base"
                    style={{
                      backgroundColor: "#F37E3A",
                      color: "#FFFFFF",
                      fontFamily: "'Playfair Display', serif",
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Cards - Takes 1 column */}
            <motion.div
              className="space-y-4 flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border-2 border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 p-5 group hover:border-[#F37E3A]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="min-w-[56px] h-[56px] flex items-center justify-center rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: info.color }}
                    >
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="contact-title text-lg font-bold text-black mb-1">
                        {info.title}
                      </h4>
                      <p className="text-md text-gray-700 leading-relaxed">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Availability Card */}
              <motion.div
                className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-[#F37E3A] shadow-xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h4 className="contact-title text-lg font-bold text-black mb-2 flex items-center gap-2">
                  <Crown size={20} style={{ color: "#F37E3A" }} />
                  Availability
                </h4>
                <div className="text-center py-3">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2"
                    style={{
                      backgroundColor: "rgba(110, 189, 73, 0.15)",
                      border: "2px solid #6EBD49",
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: "#6EBD49" }}
                    ></div>
                    <span className="font-bold" style={{ color: "#6EBD49" }}>
                      We're Always Available
                    </span>
                  </div>
                  <p className="text-md text-gray-700 mt-3 leading-relaxed">
                    Our team is ready to assist you 24/7. Reach out anytime
                    through any of our contact channels.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>
      </section>
    </>
  );
}
