import React, { useState, useEffect } from "react";
import {
  Crown,
  CircleDot,
  ShoppingBag,
  Lightbulb,
  Sparkles,
  ShoppingBasket,
  Waves,
  Layers,
  Armchair,
  Scissors,
} from "lucide-react";

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  const options = [
    {
      title: "Macramé Art",
      description: "Bohemian wall masterpieces",
      image: "/images/hand_crafted/macramewall.png",
      icon: <Sparkles size={26} className="text-white" />,
    },
    {
      title: "Bamboo Creations",
      description: "Sustainable luxury lighting",
      image: "/images/hand_crafted/bamboolamp.png",
      icon: <Lightbulb size={26} className="text-white" />,
    },
    {
      title: "Artisan Fabrics",
      description: "Handwoven textiles and luxury stoles",
      image: "/images/hand_crafted/artisan_fabrics.jpg",
      icon: <Scissors size={26} className="text-white" />,
    },
    {
      title: "Artisanal Jute Rugs",
      description: "Traditional loom craftsmanship",
      image: "/images/hand_crafted/handmaderugs.png",
      icon: <Layers size={26} className="text-white" />,
    },
    {
      title: "Handcrafted Furniture",
      description: "Timeless pieces carved with precision",
      image: "/images/hand_crafted/handcrafted_furniture.jpg",
      icon: <Armchair size={26} className="text-white" />,
    },
  ];

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 font-sans text-slate-900 py-12">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "#F37E3A" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "#288EC2" }}
        ></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>

      {/* Header Section */}
      <div className="w-full max-w-7xl px-6 mt-4 mb-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#6EBD49]"></div>
          <Crown className="w-5 h-5" style={{ color: "#6EBD49" }} />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#6EBD49]"></div>
        </div>
        <h1
          className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight drop-shadow-lg animate-fadeInTop delay-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Handcrafted <span style={{ color: "#F37E3A" }}>Excellence</span>
        </h1>
        <p className="text-xl text-foreground/80 font-normal max-w-6xl mx-auto mb-8 mt-8 leading-loose tracking-wider bg-gradient-to-r text-center from-transparent via-primary/5 to-transparent py-6 px-8 border-y border-primary/10">
          Each piece in our handcrafted collection tells a unique story of
          tradition and artistry. Our master artisans pour their expertise into
          every creation, ensuring unparalleled quality and authenticity. From
          hand-thrown ceramics to intricately woven textiles, discover pieces
          that transform spaces into expressions of timeless elegance.
        </p>
      </div>

      <div className="h-6"></div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[1200px] min-w-[280px] md:min-w-[600px] h-[450px] mx-0 items-stretch overflow-hidden relative px-6">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? "active" : ""}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? "cover" : "auto 130%",
              backgroundPosition: "center",
              backfaceVisibility: "hidden",
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index)
                ? "translateX(0)"
                : "translateX(-60px)",
              minWidth: "70px",
              minHeight: "100px",
              margin: 0,
              borderRadius: "12px",
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: activeIndex === index ? "#F37E3A" : "#e2e8f0",
              cursor: "pointer",
              backgroundColor: "#f8fafc",
              // boxShadow:
              //   activeIndex === index
              //     ? "0 25px 70px rgba(243, 126, 58, 0.35), 0 10px 30px rgba(243, 126, 58, 0.2), inset 0 0 0 1px rgba(243, 126, 58, 0.1)"
              //     : "0 12px 35px rgba(0,0,0,0.12), 0 4px 15px rgba(0,0,0,0.08)",
              flex: activeIndex === index ? "7 1 0%" : "1 1 0%",
              zIndex: activeIndex === index ? 10 : 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
              overflow: "hidden",
              willChange:
                "flex-grow, box-shadow, background-size, background-position",
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? "0" : "-50px",
                height: "140px",
                background:
                  activeIndex === index
                    ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
              }}
            ></div>

            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-6 flex items-center justify-start h-14 z-2 pointer-events-none px-5 gap-4 w-full">
              <div
                className="icon min-w-[52px] max-w-[52px] h-[52px] flex items-center justify-center rounded-full backdrop-blur-[12px] shadow-[0_4px_12px_rgba(243,126,58,0.4),0_2px_6px_rgba(0,0,0,0.2)] border-2 flex-shrink-0 flex-grow-0 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(243, 126, 58, 0.95)",
                  borderColor: "#FFFFFF",
                  // boxShadow:
                  //   activeIndex === index
                  //     ? "0 8px 20px rgba(243, 126, 58, 0.5), 0 4px 10px rgba(0,0,0,0.25), inset 0 1px 2px rgba(255,255,255,0.3)"
                  //     : "0 4px 12px rgba(243, 126, 58, 0.4), 0 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div
                  className="main font-extrabold text-white text-xl transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateX(0)"
                        : "translateX(25px)",
                    fontFamily: "'Playfair Display', serif",
                    // textShadow:
                    //   "0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.4)",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="sub text-base text-slate-100 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateX(0)"
                        : "translateX(25px)",
                    fontFamily: "'Cormorant Garamond', serif",
                    textShadow:
                      "0 2px 6px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8 mb-4 relative z-10">
        <button
          className="px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-base md:text-lg border-2 border-transparent hover:border-[#F37E3A]/30"
          style={{
            backgroundColor: "#F37E3A",
            color: "#FFFFFF",
            fontFamily: "'Playfair Display', serif",
            boxShadow:
              "0 10px 30px rgba(243, 126, 58, 0.3), 0 4px 15px rgba(243, 126, 58, 0.2)",
          }}
        >
          Explore Collection
        </button>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F37E3A] to-transparent"></div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
