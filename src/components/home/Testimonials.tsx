'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Fashion Editor",
    quote: "After years of salon-hopping, I've finally found my forever beauty destination. The attention to detail at LUMIÈRE is unmatched, and my lashes have never looked more natural yet dramatic. Worth every penny!",
  },
  {
    id: 2,
    name: "Michelle Wong",
    role: "Executive Director",
    quote: "The most luxurious nail experience in Vancouver. Their bio sculpture gel changed my life—my natural nails have never been stronger.",
  },
  {
    id: 3,
    name: "Jessica Martinez",
    role: "Beauty Influencer",
    quote: "The attention to detail and personalized service at LUMIÈRE sets them apart. Their artists are true masters of their craft, creating looks that perfectly complement each client's unique features.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/20 py-8">
      <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.png')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="font-cormorant text-5xl md:text-6xl text-soft-black mb-6">
            Client Experiences
          </h2>
          <div className="w-32 h-[1px] bg-primary mx-auto" />
        </div>

        <div className="relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-3xl mx-auto">
                <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-12 md:p-16 shadow-xl">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl -translate-x-2 -translate-y-2" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary/20 rounded-br-2xl translate-x-2 translate-y-2" />
                  
                  <span className="absolute text-9xl font-cormorant text-primary/10 -top-8 -left-4">"</span>
                  
                  <div className="relative z-10 space-y-8">
                    <blockquote className="text-2xl md:text-3xl text-foreground font-cormorant leading-relaxed italic">
                      {testimonials[currentIndex].quote}
                    </blockquote>

                    <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                        <AvatarFallback className="bg-primary/5 text-primary text-lg">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-montserrat text-lg font-medium text-soft-black">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="font-nunito text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center px-4">
            <button
              onClick={prev}
              className="group bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg border border-primary/10 transition-all hover:bg-primary/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6 text-primary transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={next}
              className="group bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg border border-primary/10 transition-all hover:bg-primary/5"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6 text-primary transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Indicators */}
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-4 bg-primary/20 hover:bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 