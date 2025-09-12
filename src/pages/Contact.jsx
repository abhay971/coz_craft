import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@cozcastle.com',
      subdeatils: 'We reply within 24 hours',
      color: 'text-brand-orange'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subdeatils: 'Mon-Fri, 9AM-6PM EST',
      color: 'text-brand-blue'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Castle Street',
      subdeatils: 'Artisan City, AC 12345',
      color: 'text-brand-green'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Fri: 9AM - 6PM',
      subdeatils: 'Sat - Sun: 10AM - 4PM',
      color: 'text-brand-orange'
    }
  ];

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 50 countries worldwide. Shipping times and costs vary by location.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused items in their original condition. Custom items are non-returnable.'
    },
    {
      question: 'Are your products ethically made?',
      answer: 'Absolutely! We work directly with artisans, ensuring fair wages and sustainable practices in all our partnerships.'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            className="scroll-animate text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">
              Get in <span className="text-black font-bold">Touch</span>
            </h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Have questions about our <span className="text-black font-semibold">products</span> or need help with your order? We'd love to hear from you and help bring <span className="text-black font-semibold">authentic castlesmanship</span> to your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="card p-6 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`inline-flex p-4 rounded-full bg-gray-50 ${info.color} mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-brand-black mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-800 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.subdeatils}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              className="scroll-animate"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="text-brand-orange mr-3" size={24} />
                  <h2 className="text-2xl font-semibold text-brand-black">
                    Send us a Message
                  </h2>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                          placeholder="John Doe"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Support</option>
                        <option value="product">Product Question</option>
                        <option value="partnership">Artisan Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send size={16} className="ml-2" />
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Map Placeholder */}
              <div className="card mb-8 overflow-hidden">
                <div className="h-64 bg-gray-100 relative border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="text-brand-orange mx-auto mb-2" size={32} />
                      <p className="text-black font-medium">COZ CASTLE Headquarters</p>
                      <p className="text-gray-700 text-sm">123 Castle Street, Artisan City</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-brand-black mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <h4 className="font-medium text-brand-black mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              For urgent inquiries or order issues, don't hesitate to call us directly. Our customer service team is ready to help.
            </p>
            <motion.a
              href="tel:+15551234567"
              className="btn-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} className="mr-2" />
              Call Now: +1 (555) 123-4567
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;