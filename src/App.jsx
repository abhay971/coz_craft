import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { Footer7 } from "./components/ui/footer-7";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import InteractiveSelector from "./components/ui/interactive-selector";
import CustomisedProducts from "./components/ui/CustomisedProducts";
import ContactUs from "./components/ui/ContactUs";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="categories">
          <Categories />
        </section>
        <section id="handcrafted">
          <InteractiveSelector />
        </section>
        <section id="customised">
          <CustomisedProducts />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>

      <Footer7 />
    </div>
  );
}

export default App;
