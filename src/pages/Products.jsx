import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Grid, List, Star, Heart } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Products = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const headerRef = useScrollAnimation();

  const categories = [
    { id: "all", name: "All Products", count: 48 },
    { id: "bags", name: "Handwoven Bags", count: 12 },
    { id: "lighting", name: "Bamboo Lighting", count: 8 },
    { id: "kitchenware", name: "Ceramic Bowls", count: 15 },
    { id: "storage", name: "Storage & Baskets", count: 10 },
    { id: "decor", name: "Home Decor", count: 3 },
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest First" },
  ];

  const products = [
    {
      id: 1,
      name: "Handwoven Striped Tote Bag",
      price: 2899,
      originalPrice: 3899,
      image: "/images/products/Handwoven_Tote_Bag.png",
      category: "bags",
      rating: 4.8,
      reviews: 124,
      isNew: true,
      isSale: true,
      colors: ["#8B4513", "#DEB887", "#F4A460"],
    },
    {
      id: 2,
      name: "Bamboo Table Lamp",
      price: 5199,
      image: "/images/products/Modern_Bamboo_Table_Lamp.png",
      category: "lighting",
      rating: 4.9,
      reviews: 89,
      isNew: false,
      isSale: false,
      colors: ["#DEB887", "#8B4513"],
    },
    {
      id: 3,
      name: "Ceramic Bowl Set (3 pieces)",
      price: 3099,
      originalPrice: 4249,
      image: "/images/products/Handmade_Ceramic_Bowls_Set.png",
      category: "kitchenware",
      rating: 4.7,
      reviews: 156,
      isNew: false,
      isSale: true,
      colors: ["#FFF8DC", "#F5DEB3", "#DEB887"],
    },
    {
      id: 4,
      name: "Wicker Storage Basket",
      price: 2129,
      image: "/images/products/Wicker_Storage_Basket.png",
      category: "storage",
      rating: 4.6,
      reviews: 203,
      isNew: true,
      isSale: false,
      colors: ["#DEB887", "#D2B48C"],
    },
    {
      id: 5,
      name: "Macrame Wall Hanging",
      price: 1469,
      image: "/images/products/Bohemian Macrame Wall Hanging.png",
      category: "decor",
      rating: 4.5,
      reviews: 78,
      isNew: false,
      isSale: false,
      colors: ["#F5F5DC", "#FFFAF0"],
    },
    {
      id: 6,
      name: "Handwoven Crossbody Bag",
      price: 2449,
      originalPrice: 3109,
      image: "/images/products/Handwoven Crossbody Bag.png",
      category: "bags",
      rating: 4.7,
      reviews: 92,
      isNew: false,
      isSale: true,
      colors: ["#8B4513", "#A0522D", "#CD853F"],
    },
    {
      id: 7,
      name: "Bamboo Floor Lamp",
      price: 7199,
      image: "/images/products/Bamboo Floor Lamp.png",
      category: "lighting",
      rating: 4.8,
      reviews: 67,
      isNew: true,
      isSale: false,
      colors: ["#DEB887"],
    },
    {
      id: 8,
      name: "Ceramic Serving Platter",
      price: 1799,
      image: "/images/products/Artisanal Ceramic Serving Platter.png",
      category: "kitchenware",
      rating: 4.6,
      reviews: 134,
      isNew: false,
      isSale: false,
      colors: ["#F5DEB3", "#DEB887", "#D2B48C"],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
              Our <span className="text-black font-bold">Products</span>
            </h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Explore our collection of{" "}
              <span className="text-black font-semibold">authentic</span>{" "}
              handcrafted products, each piece carefully made by skilled{" "}
              <span className="text-black font-semibold">artisans</span> using
              traditional techniques.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <motion.div
              className="lg:w-64 flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="font-semibold text-brand-black mb-4 flex items-center">
                  <Filter size={18} className="mr-2" />
                  Categories
                </h3>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-[#F37E3A] text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      whileHover={{
                        x: selectedCategory === category.id ? 0 : 5,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className={`font-medium ${
                            selectedCategory === category.id
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        >
                          {category.name}
                        </span>
                        <span
                          className={`text-sm ${
                            selectedCategory === category.id
                              ? "text-white/80"
                              : "text-gray-400"
                          }`}
                        >
                          {category.count}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Price Range */}
                {/* <div className="mt-8">
                  <h3 className="font-semibold text-brand-black mb-4">Price Range</h3>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray-600">Under $50</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray-600">$50 - $100</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray-600">$100 - $200</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray-600">Over $200</span>
                    </label>
                  </div>
                </div> */}
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Controls */}
              <motion.div
                className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    Showing {filteredProducts.length} products
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${
                        viewMode === "grid"
                          ? "bg-brand-orange text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${
                        viewMode === "list"
                          ? "bg-brand-orange text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Products Grid */}
              <motion.div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className={`card group cursor-pointer ${
                      viewMode === "list" ? "flex flex-row" : ""
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list" ? "w-48 flex-shrink-0" : ""
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                          viewMode === "list" ? "h-48" : "h-64"
                        }`}
                      />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">
                            New
                          </span>
                        )}
                        {product.isSale && (
                          <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                            Sale
                          </span>
                        )}
                      </div>

                      {/* Wishlist */}
                      <button className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200">
                        <Heart
                          size={16}
                          className="text-gray-700 hover:text-brand-orange"
                        />
                      </button>

                      {/* Quick View */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="btn-primary">Quick View</button>
                      </div>
                    </div>

                    <div
                      className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}
                    >
                      <h3 className="font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300 text-lg">
                        {product.name}
                      </h3>

                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(product.rating)
                                  ? "text-black fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2 font-medium">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Craftsmanship Details */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {product.category === "bags" &&
                            "Handwoven with traditional techniques, each piece showcases unique patterns and exceptional durability."}
                          {product.category === "lighting" &&
                            "Crafted from sustainable bamboo using time-honored methods, bringing natural warmth to your space."}
                          {product.category === "kitchenware" &&
                            "Hand-thrown ceramic pieces, glazed with care to create functional art for your kitchen."}
                          {product.category === "storage" &&
                            "Expertly woven storage solutions that combine traditional basketry with modern functionality."}
                          {product.category === "decor" &&
                            "Artistically crafted home decor that celebrates traditional craftsmanship and contemporary design."}
                        </p>
                      </div>

                      {/* Colors */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm text-gray-600 font-medium">
                          Available in:
                        </span>
                        {product.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full border-2 border-gray-400 shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>

                      <div className="text-center mt-4">
                        <motion.button
                          className="btn-primary w-full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Load More */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button className="btn-outline">Load More Products</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
