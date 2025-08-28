import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Handwoven Bags', href: '#' },
        { name: 'Bamboo Crafts', href: '#' },
        { name: 'Ceramic Bowls', href: '#' },
        { name: 'Home Decor', href: '#' },
      ]
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Shipping Info', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Size Guide', href: '#' },
        { name: 'Care Instructions', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-brand-blue' },
    { icon: Instagram, href: '#', color: 'hover:text-brand-orange' },
    { icon: Twitter, href: '#', color: 'hover:text-brand-blue' },
  ];

  return (
    <footer className="bg-gray-50 text-brand-black">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/images/logo/COZ_CRAFT_BLACK.png" 
              alt="CozCraft" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Discover authentic handcrafted products that bring warmth and uniqueness to your home. Each piece tells a story of traditional craftsmanship and modern design.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-3 text-brand-green" />
                <span className="text-sm">123 Craft Street, Artisan City, AC 12345</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={16} className="mr-3 text-brand-blue" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={16} className="mr-3 text-brand-orange" />
                <span className="text-sm">hello@cozcraft.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h3 className="font-semibold text-brand-black mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-brand-orange transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-brand-black mb-2">
              Stay Connected
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get updates on new arrivals and exclusive offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-sm"
              />
              <button className="btn-primary text-sm px-4">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p
              className="text-gray-600 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              © 2024 CozCraft. Made with{' '}
              <Heart size={14} className="inline text-brand-orange" />
              {' '}for craft lovers.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;