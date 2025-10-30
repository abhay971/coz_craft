import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Crown,
  Sparkles,
  Heart,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Categories", href: "#categories" },
    { name: "Handcrafted", href: "#handcrafted" },
    { name: "Customised", href: "#customised" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "#288EC2", name: "Facebook" },
    { icon: Instagram, href: "#", color: "#F37E3A", name: "Instagram" },
    { icon: Twitter, href: "#", color: "#288EC2", name: "Twitter" },
    { icon: Linkedin, href: "#", color: "#0A66C2", name: "LinkedIn" },
    { icon: Youtube, href: "#", color: "#FF0000", name: "YouTube" },
  ];

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Product Categories",
      links: [
        { name: "Rugs", href: "#categories" },
        { name: "Fabrics", href: "#categories" },
        { name: "Lighting", href: "#categories" },
        { name: "Furniture", href: "#categories" },
        { name: "Customised Products", href: "#customised" },
        { name: "Handcrafted Collection", href: "#handcrafted" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Track Order", href: "#" },
        { name: "Returns & Refunds", href: "#" },
        { name: "Shipping Info", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .footer-title {
          font-family: 'Playfair Display', serif;
        }

        .footer-text {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <footer className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 text-black overflow-hidden">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>

        {/* Elegant Background Accents */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "#F37E3A" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl"
            style={{ background: "#288EC2" }}
          ></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-8 h-8" style={{ color: "#F37E3A" }} />
                <img
                  src="/images/logo/COZ_CASTLE_BLACK.png"
                  alt="COZ CRAFT"
                  className="h-10 w-auto"
                />
              </div>

              <p className="footer-text text-gray-700 mb-6 leading-relaxed text-lg">
                Discover authentic handcrafted products that bring warmth and
                uniqueness to your home. Each piece tells a story of traditional
                craftsmanship and modern design.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <motion.div
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="mt-1 p-2 rounded-lg"
                    style={{ backgroundColor: "rgba(110, 189, 73, 0.1)" }}
                  >
                    <MapPin size={18} style={{ color: "#6EBD49" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      Visit Us
                    </p>
                    <span className="text-sm text-gray-600">
                      123 Artisan Street, Craft City, NY 12345
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="mt-1 p-2 rounded-lg"
                    style={{ backgroundColor: "rgba(40, 142, 194, 0.1)" }}
                  >
                    <Phone size={18} style={{ color: "#288EC2" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      Call Us
                    </p>
                    <span className="text-sm text-gray-600">
                      +1 (555) 123-4567
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="mt-1 p-2 rounded-lg"
                    style={{ backgroundColor: "rgba(243, 126, 58, 0.1)" }}
                  >
                    <Mail size={18} style={{ color: "#F37E3A" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      Email Us
                    </p>
                    <span className="text-sm text-gray-600">
                      contact@cozcraft.com
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-gray-200">
                <p className="footer-title text-sm font-semibold mb-3 flex items-center gap-2">
                  <Sparkles size={16} style={{ color: "#F37E3A" }} />
                  Connect With Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        aria-label={social.name}
                        className="p-3 rounded-lg bg-white border-2 border-gray-200 hover:border-[#F37E3A] transition-all duration-300 shadow-sm hover:shadow-md"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name}
                      >
                        <Icon size={20} style={{ color: social.color }} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Footer Sections - Each takes 1 column */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              >
                <h3 className="footer-title text-lg font-bold text-black mb-5 flex items-center gap-2">
                  <div
                    className="w-1 h-6 rounded-full"
                    style={{ backgroundColor: "#F37E3A" }}
                  ></div>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="footer-text text-gray-600 hover:text-[#F37E3A] transition-colors duration-300 text-sm flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: "#F37E3A" }}
                        />
                        <span className="group-hover:font-medium">
                          {link.name}
                        </span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-16 pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#F37E3A]"></div>
                <Sparkles className="w-5 h-5" style={{ color: "#F37E3A" }} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#F37E3A]"></div>
              </div>

              <h3 className="footer-title text-2xl font-bold text-black mb-2">
                Stay Updated
              </h3>
              <p className="footer-text text-gray-600 mb-6 text-lg">
                Subscribe to get exclusive offers and updates on new arrivals
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F37E3A] transition-colors duration-300 text-sm"
                />
                <motion.button
                  className="px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "#F37E3A",
                    color: "#FFFFFF",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="relative border-t-2 border-gray-200 bg-gradient-to-r from-slate-100 via-white to-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                className="footer-text text-gray-600 text-sm flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                © 2025 COZ CRAFT. Made with{" "}
                <Heart
                  size={16}
                  className="inline animate-pulse"
                  style={{ color: "#F37E3A" }}
                  fill="#F37E3A"
                />{" "}
                for home decor lovers.
              </motion.p>

              <motion.div
                className="flex items-center gap-6 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="#"
                  className="hover:text-[#F37E3A] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="#"
                  className="hover:text-[#F37E3A] transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="#"
                  className="hover:text-[#F37E3A] transition-colors duration-300"
                >
                  Sitemap
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>
      </footer>
    </>
  );
};

export default Footer;
