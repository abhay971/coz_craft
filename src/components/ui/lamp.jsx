import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full z-0",
        className
      )}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('/images/hero/hero2.png')`,
          }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950/30" /> */}
      </div>


      {/* Content */}
      <div className="relative z-50 flex flex-col items-center px-5 py-20 max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  );
};
