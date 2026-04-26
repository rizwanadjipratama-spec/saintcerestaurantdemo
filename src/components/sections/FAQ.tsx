"use client";

import { useState } from "react";
import { FAQS } from "@/constants";
import Section from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-sm">Common Questions</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="border border-coffee/10 rounded-2xl overflow-hidden bg-white/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-lg font-serif font-bold text-coffee group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "text-coffee transition-transform duration-300",
                    openIndex === index && "rotate-180 text-accent"
                  )}
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-coffee/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
