import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Users, Award, Truck } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { LampContainer } from "../components/ui/lamp";
import AboutUsSection from "../components/ui/AboutUsSection";

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  const featuredProducts = [
    {
      id: 1,
      name: "Tote Bag - Handcrafted",
      image: "/images/products/Handwoven_Tote_Bag.png",
      category: "Fabrics and Stoles",
      supplier: "Artisan Collective Ltd",
      location: "Jaipur, India",
      type: "handcrafted",
    },
    {
      id: 2,
      name: "Coffee Maker",
      image: "/images/products/Modern_Coffee_Maker.png",
      category: "Furniture",
      supplier: "Modern Home Solutions",
      location: "Mumbai, India",
      type: "machine",
    },
    {
      id: 3,
      name: "Ceramic Bowl Set - Handcrafted",
      image: "/images/products/Handmade_Ceramic_Bowls_Set.png",
      category: "Utensils",
      supplier: "Traditional Pottery Works",
      location: "Khurja, India",
      type: "handcrafted",
    },
    {
      id: 4,
      name: "LED Floor Lamp",
      image: "/images/products/Smart_LED_Floor_Lamp.png",
      category: "Lights",
      supplier: "Tech Lighting Co",
      location: "Delhi, India",
      type: "machine",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Verified Suppliers",
      description:
        "Connect with trusted manufacturers and artisans verified for quality and reliability in global trade.",
      color: "text-brand-orange",
    },
    {
      icon: Users,
      title: "Global Network",
      description:
        "Access a worldwide network of businesses trading in handcrafted and machine-made products.",
      color: "text-brand-blue",
    },
    {
      icon: Truck,
      title: "Trade Support",
      description:
        "Complete B2B trading support from supplier discovery to order fulfillment and logistics.",
      color: "text-brand-green",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Active Suppliers" },
    { number: "15,000+", label: "Product Categories" },
    { number: "25+", label: "Countries Connected" },
    { number: "98%", label: "Trade Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <motion.h1
              className="-mt-20 py-4 text-center text-4xl font-bold tracking-tight md:text-7xl font-serif"
              style={{
                color: "#FFFFFF",
                textShadow:
                  "0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(243, 126, 58, 0.4), 0 2px 8px rgba(0, 0, 0, 0.9)",
                filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))",
              }}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              Curating Calm,
              <br /> Crafting Charm.
            </motion.h1>

            {/* <motion.p
              className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              Connect businesses worldwide through our comprehensive B2B trading platform.
              Discover quality handcrafted and machine-made home decor products from
              trusted suppliers and expand your business network globally.
            </motion.p> */}

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {/* <motion.button
                className="bg-[#F37E3A] hover:bg-[#F37E3A]/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Sourcing
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </motion.button>

              <motion.button
                className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </motion.button> */}
            </motion.div>
          </motion.div>
        </LampContainer>
      </section>

      {/* About Us Section */}
      <AboutUsSection />
    </div>
  );
};

export default Home;
