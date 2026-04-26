"use client";

import { useState } from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <Section id="reservation" className="bg-cream">
      <div className="max-w-5xl mx-auto glass rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Info Column */}
        <div className="lg:w-2/5 bg-coffee text-cream p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Book a Sanctuary</h2>
          <p className="text-cream/70 mb-8 leading-relaxed">
            Planning a gathering or a quiet workspace? Reserve your table in advance and 
            we&apos;ll ensure your spot is ready with your favorite brew waiting.
          </p>
          <div className="space-y-4 text-sm font-medium uppercase tracking-widest text-accent">
            <p>Mon - Fri: 07:00 - 21:00</p>
            <p>Sat - Sun: 08:00 - 22:00</p>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:w-3/5 p-8 md:p-12 bg-white/50 relative">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-coffee/50">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-coffee/20 py-3 focus:border-accent outline-none transition-colors text-coffee"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-coffee/50">Guests</label>
                <select className="w-full bg-transparent border-b border-coffee/20 py-3 focus:border-accent outline-none transition-colors text-coffee">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6+ People</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-coffee/50">Date</label>
                <input
                  required
                  type="date"
                  className="w-full bg-transparent border-b border-coffee/20 py-3 focus:border-accent outline-none transition-colors text-coffee"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-coffee/50">Time</label>
                <input
                  required
                  type="time"
                  className="w-full bg-transparent border-b border-coffee/20 py-3 focus:border-accent outline-none transition-colors text-coffee"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-coffee/50">Notes (Optional)</label>
                <textarea
                  placeholder="Special requests..."
                  rows={3}
                  className="w-full bg-transparent border-b border-coffee/20 py-3 focus:border-accent outline-none transition-colors text-coffee resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-coffee text-cream py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-accent transition-all disabled:opacity-50"
                >
                  {loading ? "Confirming..." : "Request Reservation"}
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4"
            >
              <CheckCircle2 size={64} className="text-accent mb-4" />
              <h3 className="text-3xl font-serif font-bold text-coffee">Reservation Received!</h3>
              <p className="text-coffee/60 max-w-sm">
                Thank you for choosing Saintce. We&apos;ve sent a confirmation link to your email.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-accent font-bold uppercase tracking-widest text-sm pt-4 hover:underline"
              >
                Make another booking
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </Section>
  );
}
