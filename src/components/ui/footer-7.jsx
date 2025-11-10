import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Heart } from "lucide-react";

const defaultSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#home" },
      { name: "Products", href: "#categories" },
      { name: "About Us", href: "#about" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Product Design", href: "#customised" },
      { name: "Strategic Sourcing", href: "#customised" },
      { name: "Quality Assurance", href: "#customised" },
      { name: "Logistics Management", href: "#customised" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  // { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
];

const defaultLegalLinks = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms & Conditions", href: "#terms" },
];

export const Footer7 = ({
  logo = {
    url: "#home",
    src: "/images/logo/COZ_CASTLE.png",
    alt: "COZ CRAFT",
    title: "COZ CRAFT",
  },
  sections = defaultSections,
  description = "CLUB of Home Decor",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 COZ CASTLE. All rights reserved.",
  legalLinks = defaultLegalLinks,
}) => {
  return (
    <>
      <style>{`
        .footer-premium-bg {
          background:
            linear-gradient(135deg, rgba(0, 0, 0, 0.70) 0%, rgba(20, 20, 30, 0.75) 50%, rgba(0, 0, 0, 0.70) 100%),
            url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }

        /* Desktop: Use fixed background for parallax effect */
        @media (min-width: 768px) {
          .footer-premium-bg {
            background-attachment: fixed;
          }
        }

        .footer-premium-overlay {
          background: radial-gradient(circle at 20% 50%, rgba(243, 126, 58, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(40, 142, 194, 0.08) 0%, transparent 50%);
        }
      `}</style>

      <footer className="relative footer-premium-bg text-white overflow-hidden">
        {/* Premium Overlay */}
        <div className="absolute inset-0 footer-premium-overlay"></div>

        {/* Decorative Top Border with Glow */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent shadow-[0_0_20px_rgba(243,126,58,0.5)]"></div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-[10%] w-2 h-2 bg-brand-orange rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-40 right-[15%] w-3 h-3 bg-brand-blue rounded-full"
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-32 left-[20%] w-2 h-2 bg-brand-green rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex flex-col gap-2">
                <a href={logo.url} className="flex items-center gap-2">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10 sm:h-12 w-auto"
                  />
                </a>
                <p className="text-sm sm:text-md text-white font-semibold tracking-wide">
                  CLUB of Home Decor
                </p>
              </div>

              {/* Description */}
              {/* <p className="text-base text-white/90 leading-relaxed">
                Discover authentic handcrafted products that bring warmth and uniqueness to your home.
              </p> */}
            </motion.div>

            {/* Links Sections */}
            {sections.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (sectionIdx + 1) * 0.1 }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-2">
                  <div className="w-1 h-5 sm:h-6 bg-brand-orange rounded-full"></div>
                  {section.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <motion.li
                      key={linkIdx}
                      className="hover:text-brand-orange transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href={link.href}
                        className="text-sm sm:text-base flex items-center gap-2 group text-white"
                      >
                        <span className="w-0 h-[2px] bg-brand-orange group-hover:w-4 transition-all duration-300"></span>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Connect With Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-5 sm:h-6 bg-brand-orange rounded-full"></div>
                Connect With Us
              </h3>
              <ul className="flex items-center gap-2 sm:gap-3 flex-wrap">
                {socialLinks.map((social, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-brand-orange border-2 border-white/20 hover:border-brand-orange transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-brand-orange/50"
                    >
                      <span className="text-white">{social.icon}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-xs sm:text-sm">
              {/* Copyright - Show at bottom on mobile, left on desktop */}
              <p className="text-white flex items-center gap-2 text-center order-3 md:order-1 w-full md:w-auto">
                {copyright}
              </p>

              {/* Legal Links and Company Logo */}
              <div className="flex flex-col items-center md:items-end gap-4 order-1 md:order-2 w-full md:w-auto">
                {/* Legal Links */}
                <ul className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
                  {legalLinks.map((link, idx) => (
                    <motion.li
                      key={idx}
                      className="text-white hover:text-brand-orange transition-colors duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <a className="text-white" href={link.href}>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* A COZ Club Logo Company */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                    A
                  </span>
                  <motion.a
                    href="https://www.cozclub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center"
                  >
                    <img
                      src="/images/coz_club.png"
                      alt="COZ Club Logo"
                      className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto"
                    />
                  </motion.a>
                  <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                    Company
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Bottom Border with Glow */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent shadow-[0_0_20px_rgba(243,126,58,0.5)]"></div> */}
      </footer>
    </>
  );
};

export default Footer7;
