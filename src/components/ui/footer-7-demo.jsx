import React from "react";
import { Footer7 } from "./footer-7";

// Demo 1: Default Premium Footer
export const DemoDefault = () => {
  return <Footer7 />;
};

// Demo 2: Customized Footer with Custom Sections
export const DemoCustomized = () => {
  const customSections = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "#all" },
        { name: "New Arrivals", href: "#new" },
        { name: "Best Sellers", href: "#bestsellers" },
        { name: "Sale", href: "#sale" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Rugs & Carpets", href: "#rugs" },
        { name: "Fabrics & Textiles", href: "#fabrics" },
        { name: "Lighting & Fixtures", href: "#lighting" },
        { name: "Furniture", href: "#furniture" },
        { name: "Home Decor", href: "#decor" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Contact Us", href: "#contact" },
        { name: "Track Order", href: "#track" },
        { name: "Returns", href: "#returns" },
        { name: "Shipping Info", href: "#shipping" },
      ],
    },
  ];

  return (
    <Footer7
      sections={customSections}
      description="Elevate your living space with our curated collection of handcrafted home decor. Quality craftsmanship meets timeless design."
    />
  );
};

// Demo 3: Minimal Footer
export const DemoMinimal = () => {
  const minimalSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#privacy" },
        { name: "Terms", href: "#terms" },
      ],
    },
  ];

  return (
    <Footer7
      sections={minimalSections}
      description="Handcrafted products for your home."
    />
  );
};

export default DemoDefault;
