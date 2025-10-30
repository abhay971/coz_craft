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
      { name: "About Us", href: "#about" },
      { name: "Products", href: "#categories" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Design & Development", href: "#customised" },
      { name: "Strategic Services", href: "#customised" },
      { name: "Quality Assurance", href: "#customised" },
      { name: "Logistic Management", href: "#customised" },
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
  description = "CLUB of Home Decore",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 COZ CRAFT. All rights reserved.",
  legalLinks = defaultLegalLinks,
}) => {
  return (
    <>
      <style>{`
        .footer-premium-bg {
          background:
            linear-gradient(135deg, rgba(0, 0, 0, 0.70) 0%, rgba(20, 20, 30, 0.75) 50%, rgba(0, 0, 0, 0.70) 100%),
            url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop') center/cover;
          background-attachment: fixed;
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
        <div className="relative container mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                    className="h-12 w-auto"
                  />
                </a>
                <p className="text-md text-white font-semibold tracking-wide">
                  CLUB of Home Decore
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
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-brand-orange rounded-full"></div>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <motion.li
                      key={linkIdx}
                      className="hover:text-brand-orange transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href={link.href}
                        className="text-base flex items-center gap-2 group text-white"
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
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-brand-orange rounded-full"></div>
                Connect With Us
              </h3>
              <ul className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-brand-orange border-2 border-white/20 hover:border-brand-orange transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-brand-orange/50"
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
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              <p className="text-white flex items-center gap-2">{copyright}</p>

              <ul className="flex items-center gap-6">
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
