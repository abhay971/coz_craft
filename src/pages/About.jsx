import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const headerRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  const values = [
    {
      icon: Heart,
      title: 'Passion for Craft',
      description: 'Every product is made with love and dedication, preserving traditional techniques passed down through generations.',
      color: 'text-brand-orange'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in materials and craftsmanship, ensuring each piece is built to last.',
      color: 'text-brand-blue'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'We work directly with artisans, providing fair wages and supporting local communities worldwide.',
      color: 'text-brand-green'
    },
    {
      icon: Globe,
      title: 'Sustainable Future',
      description: 'Our commitment to eco-friendly materials and processes helps preserve our planet for future generations.',
      color: 'text-brand-orange'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      bio: 'With 15 years in sustainable design, Sarah founded COZ CRAFT to bridge traditional craftsmanship with modern living.',
      social: { linkedin: '#', instagram: '#' }
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Head of Artisan Relations',
      image: '/api/placeholder/300/300',
      bio: 'Miguel travels the world connecting with local artisans and ensuring fair trade practices in all our partnerships.',
      social: { linkedin: '#', instagram: '#' }
    },
    {
      name: 'Emily Chen',
      role: 'Creative Director',
      image: '/api/placeholder/300/300',
      bio: 'Emily brings modern design sensibilities while respecting traditional techniques, creating products for contemporary homes.',
      social: { linkedin: '#', instagram: '#' }
    },
    {
      name: 'David Thompson',
      role: 'Sustainability Officer',
      image: '/api/placeholder/300/300',
      bio: 'David ensures every aspect of our business aligns with environmental responsibility and sustainable practices.',
      social: { linkedin: '#', instagram: '#' }
    }
  ];

  const milestones = [
    { year: '2018', event: 'COZ CRAFT Founded', description: 'Started with a vision to connect artisans with design lovers' },
    { year: '2019', event: 'First 100 Artisans', description: 'Built partnerships with craftspeople across 5 countries' },
    { year: '2021', event: 'Carbon Neutral', description: 'Achieved carbon neutrality across our entire supply chain' },
    { year: '2023', event: '10,000+ Customers', description: 'Reached our milestone of serving 10,000 happy customers' },
    { year: '2024', event: 'Global Expansion', description: 'Launched international shipping to 50+ countries' }
  ];

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
              About <span className="text-black font-bold">COZ CRAFT</span>
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              We're more than a marketplace - we're a <span className="text-black font-semibold">bridge</span> connecting skilled <span className="text-black font-semibold">artisans</span> with people who appreciate authentic, handcrafted <span className="text-black font-semibold">beauty</span> in their homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={storyRef}
              className="scroll-animate"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-black mb-6">
                Our <span className="text-black font-bold">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  COZ CRAFT was born from a simple observation: in our increasingly digital world, people crave authentic, tangible connections to traditional craftsmanship. Our founder, Sarah Johnson, discovered this during her travels through Southeast Asia, where she witnessed incredible artisans creating beautiful pieces that rarely reached global markets.
                </p>
                <p>
                  What started as a small collection of handwoven bags has grown into a curated marketplace featuring hundreds of unique products from artisans across the globe. Each piece in our collection is chosen not just for its beauty, but for the story it tells and the traditional techniques it preserves.
                </p>
                <p>
                  Today, we're proud to support over 300 artisans from 15 countries, helping preserve traditional crafts while providing sustainable livelihoods for skilled craftspeople. Every purchase you make helps keep these time-honored traditions alive for future generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/api/placeholder/600/500"
                  alt="Artisan at work"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-brand-orange/20" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-3xl font-bold text-brand-orange mb-1">300+</div>
                <div className="text-gray-600 text-sm">Artisan Partners</div>
              </motion.div>
              
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-lg p-6 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-3xl font-bold text-brand-green mb-1">15</div>
                <div className="text-gray-600 text-sm">Countries</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            ref={valuesRef}
            className="scroll-animate text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold text-brand-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from selecting artisans to delivering products to your door.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className={`inline-flex p-4 rounded-full bg-white shadow-lg ${value.color} mb-6`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-black mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-black mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small startup to a global marketplace, here's how we've grown while staying true to our mission.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-brand-orange h-full hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-brand-orange mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-brand-black mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-brand-orange rounded-full border-4 border-white shadow-lg z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            ref={teamRef}
            className="scroll-animate text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold text-brand-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind COZ CRAFT who work every day to connect artisans with design lovers worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="card text-center group h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-orange/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">
                      {member.name}
                    </h3>
                    <p className="text-brand-orange font-medium mb-4">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-display font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Every purchase supports artisan communities and helps preserve traditional crafts. Discover unique pieces that tell a story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Our Collection
              </motion.button>
              <motion.button
                className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become an Artisan Partner
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;