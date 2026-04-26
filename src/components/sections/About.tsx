"use client";

import Image from "next/image";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about" className="bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="pt-12">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
                alt="Coffee preparation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <Image
              src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop"
              alt="Fresh juice"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-accent uppercase tracking-[0.2em] font-bold text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee leading-tight">
              A Blend of Passion, <br />
              Coffee, and Refreshment.
            </h2>
          </div>
          
          <p className="text-coffee/70 text-lg leading-relaxed">
            Founded in 2024, Saintce was born from a simple idea: that coffee and juice 
            aren&apos;t just drinks—they&apos;re experiences. We believe in the power of slow 
            mornings and revitalizing afternoons.
          </p>

          <p className="text-coffee/70 text-lg leading-relaxed">
            Our beans are ethically sourced from small farms across the globe, 
            and our juices are pressed daily using only the freshest seasonal 
            fruits. Whether you&apos;re here for a caffeine boost or a vitamin kick, 
            Saintce is your sanctuary.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <span className="block text-3xl font-serif font-bold text-coffee">100%</span>
              <span className="text-sm uppercase tracking-widest text-accent font-bold">Organic Beans</span>
            </div>
            <div>
              <span className="block text-3xl font-serif font-bold text-coffee">Fresh</span>
              <span className="text-sm uppercase tracking-widest text-accent font-bold">Daily Pressed</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
