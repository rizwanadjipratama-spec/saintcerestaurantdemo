"use client";

import { useState } from "react";
import { FULL_MENU } from "@/constants";
import Section from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Category = keyof typeof FULL_MENU;

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>("Coffee");

  return (
    <Section id="full-menu" className="bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-sm">Our Full List</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee">Curated Menu</h2>
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto no-scrollbar mb-12 border-b border-coffee/10">
          <div className="flex justify-start md:justify-center min-w-max md:min-w-0 gap-4 md:gap-8 pb-4">
            {(Object.keys(FULL_MENU) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative text-sm md:text-base font-bold uppercase tracking-widest px-4 py-2 transition-colors",
                activeCategory === category ? "text-accent" : "text-coffee/40 hover:text-coffee"
              )}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </button>
          ))}
          </div>
        </div>

        {/* Menu List */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
            >
              {FULL_MENU[activeCategory].map((item, index) => (
                <div key={item.name} className="group flex justify-between items-start border-b border-coffee/5 pb-4">
                  <div className="space-y-1">
                    <h4 className="text-xl font-serif font-bold text-coffee group-hover:text-accent transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-coffee/50 italic">{item.desc}</p>
                  </div>
                  <span className="text-accent font-bold mt-1">{item.price}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
