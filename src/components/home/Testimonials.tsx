'use client';

import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

// Double the testimonials to create seamless loop
const testimonials: Testimonial[] = [
  {
    quote: "After years of salon-hopping, I've finally found my forever beauty destination. The attention to detail at LUMIÈRE is unmatched, and my lashes have never looked more natural yet dramatic. Worth every penny!",
    author: "Sarah Chen",
    title: "Fashion Editor"
  },
  {
    quote: "The most luxurious nail experience in Vancouver. Their bio sculpture gel changed my life—my natural nails have never been stronger.",
    author: "Michelle Wong",
    title: "Executive Director"
  },
  {
    quote: "An oasis of luxury in Yaletown. Every visit feels like a spa retreat, and the results are consistently flawless.",
    author: "Jessica Miller",
    title: "Beauty Influencer"
  },
  {
    quote: "The attention to detail and personalized service at LUMIÈRE sets them apart. My lashes look incredible and the experience is always exceptional.",
    author: "Emma Thompson",
    title: "Creative Director"
  },
  {
    quote: "Finally found a place that takes the time to understand exactly what I want. The nail artistry here is simply outstanding.",
    author: "Linda Park",
    title: "Interior Designer"
  },
  {
    quote: "The level of expertise and professionalism is unmatched. Every visit feels special, and the results exceed my expectations every time.",
    author: "Alexandra Rivera",
    title: "Marketing Executive"
  },
  {
    quote: "As someone who's particular about beauty services, LUMIÈRE has exceeded all my expectations. Their attention to detail is remarkable.",
    author: "Sophie Laurent",
    title: "Style Consultant"
  },
  {
    quote: "The perfect blend of luxury and skill. Their lash artists are true masters, and the ambiance makes every visit feel like a treat.",
    author: "Victoria Chang",
    title: "Digital Content Creator"
  },
  {
    quote: "I appreciate how they prioritize both aesthetics and health. The cleanest, most professional beauty studio I've ever visited.",
    author: "Rachel Bennett",
    title: "Wellness Coach"
  }
];

const doubledTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center font-cormorant mb-16 text-soft-black">
          Client Experiences
        </h2>

        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {doubledTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[320px]"
              >
                <div className="h-[400px] bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col relative border border-primary/10">
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary/5 rounded-full" />
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-primary/5 rounded-full" />
                  
                  {/* Content */}
                  <QuoteIcon className="w-8 h-8 text-primary/60 mb-6" />
                  
                  <blockquote className="text-base leading-relaxed font-nunito text-foreground/90 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="pt-6 mt-auto border-t border-primary/10">
                    <p className="font-montserrat font-medium text-soft-black">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );


} 