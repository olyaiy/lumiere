"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
     
      
      {/* Placeholder colored div */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2C41]/90 to-[#232323]/90" />

      
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-10 top-1/4 w-[300px] h-[400px] bg-[#DAB17A]/20 rounded-lg shadow-2xl"
      />
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute left-10 bottom-1/4 w-[300px] h-[400px] bg-[#DAB17A]/20 rounded-lg shadow-2xl"
      />

      {/* Hero Content */}
      <div className="relative flex h-full items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <div className="mb-4">
            <h2 className="font-cormorant text-2xl md:text-3xl text-[#F8F6F4]/80">
              Experience the LUMIÈRE Difference
            </h2>
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl text-[#F8F6F4] mb-6">
            Where Artistry Meets Luxury
          </h1>
          <p className="font-nunito text-lg md:text-xl text-[#F8F6F4]/90 mb-12">
            Discover Vancouver's most sought-after nail and lash atelier, where master artists create bespoke beauty experiences in our serene Yaletown sanctuary.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg"
              className="bg-[#DAB17A] hover:bg-[#DAB17A]/90 text-white font-montserrat text-xl py-7 px-12"
            >
              Book Your Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#DAB17A] text-[#DAB17A] hover:bg-[#DAB17A]/10 font-montserrat text-lg py-6 px-10"
            >
              View Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}