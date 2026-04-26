"use client";

import Image from "next/image";
import { FEATURED_MENU } from "@/constants";
import Section from "../ui/Section";
import { motion } from "framer-motion";

export default function FeaturedMenu() {
  return (
    <Section id="menu" className="bg-coffee text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-sm">Taste the Best</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Featured Selections</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_MENU.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-accent text-cream text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-serif font-bold group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-accent font-bold">{item.price}</span>
                </div>
                <p className="text-cream/60 line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#full-menu"
            className="inline-block border border-accent text-accent px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-cream transition-all"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </Section>
  );
}
