"use client";

import Link from "next/link";
import Section from "../ui/Section";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-cream pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.2em] font-bold text-sm">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee">Visit Our Oasis</h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-coffee p-3 rounded-lg">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee uppercase tracking-widest text-sm mb-1">Location</h4>
                  <p className="text-coffee/70">123 Aesthetic St, Coffee District, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-coffee p-3 rounded-lg">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee uppercase tracking-widest text-sm mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-coffee/70 hover:text-accent transition-colors">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-coffee p-3 rounded-lg">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee uppercase tracking-widest text-sm mb-1">Email</h4>
                  <a href="mailto:hello@saintce.com" className="text-coffee/70 hover:text-accent transition-colors">hello@saintce.com</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-coffee text-cream rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-coffee text-cream rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-coffee text-cream rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-[2rem] overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215152809347!2d-73.987843!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Mini Footer */}
        <div className="border-t border-coffee/10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link 
            href="/" 
            className="text-2xl font-serif font-bold text-coffee"
          >
            SAINTCE<span className="text-accent">.</span>
          </Link>
          <p className="text-coffee/50 text-sm">
            © 2024 Saintce Restaurant. Crafted for excellence.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-coffee/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
