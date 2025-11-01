import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      heading: "Rugs",
      count: 18,
      description: "Handwoven masterpieces and contemporary floor coverings.",
      imgSrc: "/images/categories/Rugs.png",
    },
    {
      heading: "Fabrics",
      count: 20,
      description:
        "Premium textiles, luxurious upholstery, and artisan fabrics.",
      imgSrc: "/images/categories/Fabrics.png",
    },
    {
      heading: "Flooring",
      count: 12,
      description:
        "Elegant tiles, hardwood, and contemporary flooring solutions.",
      imgSrc: "/images/categories/Flooring.png",
    },
    {
      heading: "Lighting",
      count: 15,
      description:
        "Exquisite chandeliers, designer lamps, and ambient fixtures.",
      imgSrc: "/images/categories/Lighting.png",
    },
    {
      heading: "Planters",
      count: 8,
      description: "Artisanal planters, ceramic pots, and garden accessories.",
      imgSrc: "/images/categories/Planters.png",
    },
    {
      heading: "Furniture",
      count: 25,
      description: "Refined seating, statement tables, and bespoke cabinetry.",
      imgSrc: "/images/categories/Furniture.png",
    },
    {
      heading: "Bed Linen",
      count: 14,
      description:
        "Premium bedding, silk sheets, and luxury textile collections.",
      imgSrc: "/images/categories/Bedlinen.png",
    },
    {
      heading: "Bathware",
      count: 14,
      description:
        "Designer basins, mirrors, and sophisticated bath accessories.",
      imgSrc: "/images/categories/Bathware.png",
    },
    {
      heading: "Kitchenware",
      count: 10,
      description: "Handcrafted ceramics, utensils, and culinary essentials.",
      imgSrc: "/images/categories/Kitchenware.png",
    },
    {
      heading: "Appliances",
      count: 6,
      description: "Premium home appliances and modern kitchen essentials.",
      imgSrc: "/images/categories/Appliances.png",
    },
    {
      heading: "Wall Coverings",
      count: 7,
      description: "Designer wallpapers, panels, and artistic wall treatments.",
      imgSrc: "/images/categories/Wallcoverings.png",
    },
    {
      heading: "Antiques & Artifacts",
      count: 8,
      description:
        "Rare collectibles, heritage pieces, and timeless treasures.",
      imgSrc: "/images/categories/Antiques.png",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .category-title {
          font-family: 'Playfair Display', serif;
        }

        .category-text {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      <div className="relative bg-gradient-to-b from-white to-slate-50 py-12 pb-6 overflow-hidden">
        {/* Elegant Background Accents */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "#F37E3A" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl"
            style={{ background: "#288EC2" }}
          ></div>
        </div>

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#288EC2]/10 border border-[#288EC2]/30 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#288EC2" }} />
              <span
                className="text-md font-semibold tracking-wide"
                style={{ color: "#288EC2" }}
              >
                PRODUCT CATEGORIES
              </span>
            </motion.div>

            <h2 className="category-title text-4xl md:text-5xl font-bold mb-4 text-black">
              Curated Collections
            </h2>
            <p className="text-xl text-foreground/80 font-normal max-w-6xl mx-auto mb-8 mt-8 leading-loose tracking-wider bg-gradient-to-r from-transparent via-primary/5 to-transparent py-6 px-8 border-y border-primary/10 justify-center text-center">
              Explore our distinguished catalog across meticulously curated
              categories.
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F37E3A]"></div>
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#F37E3A" }}
              ></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F37E3A]"></div>
            </div>
          </motion.div>

          {/* Categories Grid - 4 columns x 3 rows */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                heading={category.heading}
                count={category.count}
                description={category.description}
                imgSrc={category.imgSrc}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>
      </div>
    </>
  );
};

// --- Card Component ---
const CategoryCard = ({ heading, count, description, imgSrc, index }) => {
  const brandColors = ["#F37E3A", "#288EC2", "#6EBD49"];
  const cardColor = brandColors[index % brandColors.length];

  return (
    <motion.div
      whileHover="hover"
      className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.035,
        delay: index * 0.08,
        duration: 0.6,
      }}
    >
      {/* Background Image - No Overlay */}
      <div
        className="absolute inset-0 transition-all duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Subtle Gradient Overlay Only at Bottom for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-between p-5 text-white">
        {/* Top Section with Arrow */}
        <div className="flex justify-end items-start">
          <ArrowRight
            className="text-white text-2xl transition-all duration-500 group-hover:-rotate-45 group-hover:scale-110"
            style={{ color: "white" }}
          />
        </div>

        {/* Bottom Section with Title and Description */}
        <div>
          <h4 className="category-title mb-2 drop-shadow-lg text-2xl font-bold">
            {heading.split("").map((letter, idx) => (
              <AnimatedLetter letter={letter} key={idx} />
            ))}
          </h4>
          {/* <p className="category-text text-base font-medium drop-shadow-md text-white/90 leading-relaxed">
            {description}
          </p> */}

          {/* Decorative Underline */}
          <div
            className="mt-2 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full"
            style={{ backgroundColor: cardColor }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

// --- AnimatedLetter Helper Component ---
const letterVariants = {
  hover: {
    y: "-50%",
  },
};

const AnimatedLetter = ({ letter }) => {
  return (
    <div className="inline-block h-[32px] overflow-hidden">
      <motion.span
        className="flex min-w-[5px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="drop-shadow-lg text-white">{letter}</span>
        <span className="drop-shadow-lg text-white">{letter}</span>
      </motion.span>
    </div>
  );
};

export default Categories;
