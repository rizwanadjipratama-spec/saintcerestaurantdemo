"use client";

import Image from "next/image";
import { GALLERY_IMAGES } from "@/constants";
import Section from "../ui/Section";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-coffee px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-accent uppercase tracking-[0.2em] font-bold text-sm">Visual Experience</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mt-4">Inside Saintce</h2>
      </div>

      <div className="flex flex-wrap">
        {GALLERY_IMAGES.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative h-[300px] w-full sm:w-1/2 lg:w-1/3 overflow-hidden group"
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-cream text-xs font-bold uppercase tracking-[0.5em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
