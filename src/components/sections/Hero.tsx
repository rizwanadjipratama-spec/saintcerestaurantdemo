"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Cafe Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-sm uppercase tracking-[0.3em] mb-6 text-accent font-medium"
        >
          Welcome to Saintce
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1]"
        >
          Fresh Juice & Coffee, <br className="hidden md:block" /> 
          Made for Your <span className="italic text-accent">Daily Escape</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Savor the art of slow living with our hand-crafted specialty coffee 
          and revitalizing cold-pressed juices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="bg-accent text-cream px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-cream hover:text-coffee transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            Explore Menu
          </a>
          <a
            href="#reservation"
            className="bg-cream/10 backdrop-blur-md border border-cream/30 text-cream px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-cream/20 transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            Book Table
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-cream/30 relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
