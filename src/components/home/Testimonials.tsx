'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    quote: "The level of professionalism and attention to detail exceeded our expectations. The team delivered exactly what we needed, on time and within budget.",
    // image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateX",
    quote: "Working with this team has transformed our business operations. Their innovative solutions have helped us scale efficiently.",
    // image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Product Manager",
    company: "DesignHub",
    quote: "The attention to user experience and design aesthetics was remarkable. Our customers love the final product.",
    // image: "/testimonials/emma.jpg"
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-4">
                    {/* <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover"
                    /> */}
                  </div>
                  <blockquote className="text-xl text-gray-700 text-center italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between">
            <button
              onClick={prev}
              className="transform -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="transform translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
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