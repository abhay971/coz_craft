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
    { id: "all", name: "All Categories", count: 150 },
    { id: "rugs", name: "Rugs", count: 18 },
    { id: "fabrics", name: "Fabrics", count: 20 },
    { id: "tiles", name: "Flooring", count: 12 },
    { id: "lighting", name: "Lighting", count: 15 },
    { id: "planters", name: "Planters", count: 8 },
    { id: "furniture", name: "Furniture", count: 25 },
    { id: "bedlinen", name: "Bed Linen", count: 14 },
    { id: "bathware", name: "Bathware", count: 14 },
    { id: "kitchenware", name: "Kitchenware", count: 10 },
    { id: "bathfittings", name: "Bath Fittings", count: 6 },
    { id: "wallcoverings", name: "Wall Coverings", count: 7 },
    { id: "antiques&artifacts", name: "Antiques & Artifacts", count: 8 },
    // { id: "glassware", name: "Glassware", count: 25 },
    // { id: "artifacts", name: "Artifacts", count: 6 },
    // { id: "stoles", name: "Stoles", count: 9 },
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "supplier", label: "By Supplier" },
    { value: "location", label: "By Location" },
    { value: "handcrafted", label: "Handcrafted First" },
    { value: "newest", label: "Newest First" },
  ];

  const products = [
    {
      id: 1,
      name: "Striped Tote Bag - Handcrafted",
      image: "/images/products/Handwoven_Tote_Bag.png",
      category: "fabrics",
      type: "handcrafted",
      supplier: "Artisan Collective Ltd",
      location: "Jaipur, India",
      isNew: true,
      colors: ["#8B4513", "#DEB887", "#F4A460"],
    },
    {
      id: 2,
      name: "Bamboo Table Lamp - Handcrafted",
      image: "/images/products/Modern_Bamboo_Table_Lamp.png",
      category: "lights",
      type: "handcrafted",
      supplier: "Bamboo Castle Works",
      location: "Assam, India",
      isNew: false,
      colors: ["#DEB887", "#8B4513"],
    },
    {
      id: 3,
      name: "Ceramic Bowl Set - Handcrafted",
      image: "/images/products/Handmade_Ceramic_Bowls_Set.png",
      category: "utensils",
      type: "handcrafted",
      supplier: "Traditional Pottery Works",
      location: "Khurja, India",
      isNew: false,
      colors: ["#FFF8DC", "#F5DEB3", "#DEB887"],
    },
    {
      id: 4,
      name: "Storage Basket - Handcrafted",
      image: "/images/products/Wicker_Storage_Basket.png",
      category: "furniture",
      type: "handcrafted",
      supplier: "Wicker Castle Co",
      location: "Chhattisgarh, India",
      isNew: true,
      colors: ["#DEB887", "#D2B48C"],
    },
    {
      id: 5,
      name: "Wall Hanging - Handcrafted",
      image: "/images/products/Bohemian Macrame Wall Hanging.png",
      category: "wallcoverings",
      type: "handcrafted",
      supplier: "Macrame Art Studio",
      location: "Goa, India",
      isNew: false,
      colors: ["#F5F5DC", "#FFFAF0"],
    },
    {
      id: 6,
      name: "Crossbody Bag - Handcrafted",
      image: "/images/products/Handwoven Crossbody Bag.png",
      category: "fabrics",
      type: "handcrafted",
      supplier: "Traditional Weavers Guild",
      location: "Gujarat, India",
      isNew: false,
      colors: ["#8B4513", "#A0522D", "#CD853F"],
    },
    {
      id: 7,
      name: "Floor Lamp - Handcrafted",
      image: "/images/products/Bamboo Floor Lamp.png",
      category: "lights",
      type: "handcrafted",
      supplier: "Bamboo Light Co",
      location: "Kerala, India",
      isNew: true,
      colors: ["#DEB887"],
    },
    {
      id: 8,
      name: "Serving Platter - Handcrafted",
      image: "/images/products/Artisanal Ceramic Serving Platter.png",
      category: "utensils",
      type: "handcrafted",
      supplier: "Ceramic Arts Studio",
      location: "Rajasthan, India",
      isNew: false,
      colors: ["#F5DEB3", "#DEB887", "#D2B48C"],
    },
    {
      id: 9,
      name: "LED Table Lamp",
      image: "/images/products/Smart_LED_Table_Lamp.png",
      category: "lights",
      type: "machine",
      supplier: "Modern Lighting Solutions",
      location: "Mumbai, India",
      isNew: true,
      colors: ["#FFFFFF", "#000000"],
    },
    {
      id: 10,
      name: "Coffee Maker",
      image: "/images/products/Premium_Coffee_Maker.png",
      category: "furniture",
      type: "machine",
      supplier: "Kitchen Appliances Inc",
      location: "Pune, India",
      isNew: false,
      colors: ["#2C2C2C", "#C0C0C0"],
    },
    {
      id: 11,
      name: "Storage Box Set",
      image: "/images/products/Minimalist_Storage_Box.png",
      category: "furniture",
      type: "machine",
      supplier: "Modern Storage Co",
      location: "Chennai, India",
      isNew: false,
      colors: ["#FFFFFF", "#F5F5F5", "#E0E0E0"],
    },
    {
      id: 12,
      name: "Wall Art",
      image: "/images/products/Contemporary_Wall_Art.png",
      category: "wallcoverings",
      type: "machine",
      supplier: "Art Print Solutions",
      location: "Bangalore, India",
      isNew: true,
      colors: ["#000000", "#FFFFFF", "#808080"],
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
              Product <span className="text-black font-bold">Categories</span>
            </h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Browse our comprehensive B2B product catalog featuring{" "}
              <span className="text-black font-semibold">handcrafted</span> and{" "}
              <span className="text-black font-semibold">machine-made</span>{" "}
              products from verified suppliers across multiple categories.
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
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F37E3A]"
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
                          ? "bg-[#F37E3A] text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${
                        viewMode === "list"
                          ? "bg-[#F37E3A] text-white"
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
                          <span className="bg-[#6EBD49] text-white px-3 py-1 rounded-full text-sm font-medium">
                            New
                          </span>
                        )}
                        {product.isSale && (
                          <span className="bg-[#F37E3A] text-white px-3 py-1 rounded-full text-sm font-medium">
                            Sale
                          </span>
                        )}
                      </div>

                      {/* Wishlist */}
                      <button className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200">
                        <Heart
                          size={16}
                          className="text-gray-700 hover:text-[#F37E3A]"
                        />
                      </button>

                      {/* Quick View */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="btn-primary">View Details</button>
                      </div>
                    </div>

                    <div
                      className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}
                    >
                      <h3 className="font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300 text-lg">
                        {product.name}
                      </h3>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 font-medium">
                          Supplier: {product.supplier}
                        </p>
                        <p className="text-sm text-gray-500">
                          📍 {product.location}
                        </p>
                      </div>

                      {/* Product Details */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {product.type === "handcrafted"
                            ? "Handcrafted with traditional techniques and authentic materials by skilled artisans."
                            : "Manufactured with precision and quality control for consistent results and durability."}
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
                          Contact Supplier
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
