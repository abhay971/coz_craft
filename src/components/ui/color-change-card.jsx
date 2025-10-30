// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const ColorChangeCards = () => {
//   const categories = [
//     {
//       heading: "Living Room",
//       description:
//         "Elegant sofas, coffee tables, and modern living essentials.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Bedroom",
//       description: "Comfortable beds, nightstands, and cozy bedroom decor.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Kitchen & Dining",
//       description: "Stylish dining sets, kitchen storage, and culinary decor.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Bathroom",
//       description:
//         "Modern fixtures, storage solutions, and spa-like accessories.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Outdoor & Garden",
//       description: "Patio furniture, garden decor, and outdoor living spaces.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Wall Decor",
//       description: "Artwork, mirrors, shelving, and statement wall pieces.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Lighting",
//       description: "Chandeliers, lamps, and ambient lighting solutions.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Furniture",
//       description: "Quality chairs, tables, cabinets, and storage units.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Rugs & Carpets",
//       description: "Handwoven rugs, modern carpets, and floor coverings.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Curtains & Drapes",
//       description: "Window treatments, blinds, and decorative fabrics.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Decorative Accessories",
//       description: "Vases, sculptures, cushions, and finishing touches.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//     {
//       heading: "Seasonal Decor",
//       description: "Holiday decorations and seasonal home accents.",
//       imgSrc:
//         "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1260&h=750&auto=format&fit=crop",
//     },
//   ];

//   return (
//     <div className="p-4 py-12 md:p-8">
//       <div className="mx-auto w-full max-w-7xl">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Our Categories</h2>
//           <p className="text-xl text-foreground/80 font-normal max-w-5xl mx-auto mb-8 mt-8 leading-loose tracking-wider bg-gradient-to-r text-justify from-transparent via-primary/5 to-transparent py-6 px-8 border-y border-primary/10">
//             Explore our extensive collection of home decor across various
//             categories
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
//           {categories.map((category, index) => (
//             <Card
//               key={index}
//               heading={category.heading}
//               description={category.description}
//               imgSrc={category.imgSrc}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Card Component ---
// const Card = ({ heading, description, imgSrc }) => {
//   return (
//     <motion.div
//       transition={{ staggerChildren: 0.035 }}
//       whileHover="hover"
//       className="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-300 rounded-lg"
//     >
//       <div
//         className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
//         style={{
//           backgroundImage: `url(${imgSrc})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//       <div className="relative z-20 flex h-full flex-col justify-between p-4 text-slate-300 transition-colors duration-500 group-hover:text-white">
//         <ArrowRight className="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" />
//         <div>
//           <h4>
//             {heading.split("").map((letter, index) => (
//               <AnimatedLetter letter={letter} key={index} />
//             ))}
//           </h4>
//           <p>{description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- AnimatedLetter Helper Component ---
// const letterVariants = {
//   hover: {
//     y: "-50%",
//   },
// };

// const AnimatedLetter = ({ letter }) => {
//   return (
//     <div className="inline-block h-[36px] overflow-hidden font-semibold text-3xl">
//       <motion.span
//         className="flex min-w-[4px] flex-col"
//         style={{ y: "0%" }}
//         variants={letterVariants}
//         transition={{ duration: 0.5 }}
//       >
//         <span>{letter}</span>
//         <span>{letter}</span>
//       </motion.span>
//     </div>
//   );
// };

// export default ColorChangeCards;
