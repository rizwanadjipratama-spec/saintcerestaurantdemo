"use client";

import Section from "../ui/Section";
import { Coffee, Leaf, Zap, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "We source our fruits and beans from local organic farmers every single day."
  },
  {
    icon: Coffee,
    title: "Cozy Atmosphere",
    desc: "Designed for comfort, whether you're working or catching up with friends."
  },
  {
    icon: Zap,
    title: "Fast Service",
    desc: "Premium quality shouldn't mean a long wait. Get your boost in minutes."
  },
  {
    icon: Heart,
    title: "Affordable Luxury",
    desc: "High-end cafe experience without the high-end price tag."
  }
];

export default function Experience() {
  return (
    <Section className="bg-coffee text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((f, i) => (
            <div key={i} className="space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto md:mx-0 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                <f.icon className="text-cream" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold">{f.title}</h3>
              <p className="text-cream/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
