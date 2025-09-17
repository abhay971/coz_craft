import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Users, Award, Truck } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white"
        style={{ overflowX: "hidden" }}
      >
        <motion.div
          className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"
          style={{ y }}
        />

        <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-6 xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Hero Content */}
            <motion.div
              ref={heroRef}
              className="scroll-animate text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-black mb-4 lg:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Global B2B Trading
                <span className="block text-black">Platform</span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-lg lg:max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Connect businesses worldwide through our comprehensive B2B
                trading platform. Discover quality handcrafted and machine-made
                products from trusted suppliers and expand your business network
                globally.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button
                  className="bg-[#F37E3A] hover:bg-[#F37E3A]/90 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group text-sm lg:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Sourcing
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    size={18}
                  />
                </motion.button>

                {/* <motion.button
                  className="border-2 border-black text-black  hover:text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Network
                </motion.button> */}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-80 sm:h-96 lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#288EC2]/20 to-[#F37E3A]/20 z-10" />
                <motion.img
                  src="/images/hero/Artisanal_Product_Photography.png"
                  alt="Handcrafted Products"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 lg:p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="text-[#F37E3A]" size={20} />
                </motion.div>

                <motion.div
                  className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 lg:p-3 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <Award className="text-[#6EBD49]" size={20} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-6 xl:px-12 bg-white"
        style={{ overflowX: "hidden" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={featuresRef}
            className="scroll-animate text-center mb-16"
          >
            <h2 className="section-title text-center">
              Why Choose{" "}
              <span className="text-black font-bold">COZ CASTLE</span>?
            </h2>
            <p className="section-subtitle text-center max-w-2xl mx-auto">
              We're passionate about bringing you authentic, high-quality
              handcrafted products that make your house a{" "}
              <span className="text-black font-semibold">home</span>.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className={`card p-6 lg:p-8 text-center ${
                    index === 0
                      ? "accent-orange"
                      : index === 1
                      ? "accent-blue"
                      : "accent-green"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div
                    className={`inline-flex p-3 lg:p-4 rounded-full mb-4 lg:mb-6 ${
                      index === 0
                        ? "bg-[#F37E3A]"
                        : index === 1
                        ? "bg-[#288EC2]"
                        : "bg-[#6EBD49]"
                    } text-white shadow-lg`}
                  >
                    <Icon size={28} className="lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-black mb-3 lg:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-6 xl:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center text-black mb-4 lg:mb-6">
              Featured <span className="text-black font-bold">Products</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 text-center max-w-2xl lg:max-w-3xl mx-auto">
              Connect with{" "}
              <span className="text-black font-semibold">
                verified suppliers
              </span>{" "}
              offering{" "}
              <span className="text-black font-semibold">handcrafted</span> and{" "}
              <span className="text-black font-semibold">machine-made</span>{" "}
              products for B2B trade opportunities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-3 lg:top-4 left-3 lg:left-4 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold shadow-lg ${
                      product.type === "handcrafted"
                        ? "bg-[#F37E3A]"
                        : "bg-[#288EC2]"
                    }`}
                  >
                    {product.type === "handcrafted" ? "Handcrafted" : "Modern"}
                  </div>
                  <div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 lg:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="text-black" size={14} />
                  </div>
                </div>

                <div className="p-4 lg:p-6">
                  <h3 className="font-bold text-black mb-2 lg:mb-3 group-hover:text-gray-800 transition-colors duration-300 text-base lg:text-lg">
                    {product.name}
                  </h3>

                  <div className="mb-3 lg:mb-4">
                    <p className="text-xs lg:text-sm text-gray-600 font-medium">
                      Supplier: {product.supplier}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500">
                      📍 {product.location}
                    </p>
                  </div>

                  <div className="text-center">
                    <motion.button
                      className="btn-primary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Supplier
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-6 xl:px-12 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            ref={statsRef}
            className="scroll-animate grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 lg:mb-3 text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white font-semibold text-sm lg:text-base xl:text-lg">
                  {stat.label}
                </div>
                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 lg:w-12 h-1 rounded ${
                    index === 0
                      ? "bg-[#F37E3A]"
                      : index === 1
                      ? "bg-[#288EC2]"
                      : index === 2
                      ? "bg-[#6EBD49]"
                      : "bg-[#F37E3A]"
                  }`}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
