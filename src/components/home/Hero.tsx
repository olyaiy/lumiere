'use client'
import { ArrowDownIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Add this near the top of the component
const socialProofData = [
    { number: "5,000+", label: "Happy Clients" },
    { number: "4.9", label: "Google Rating" },
    { number: "12+", label: "Master Artists" },
]

const heroButtons = [
  { name: "Book Your Experience", href: "#booking", isPrimary: true },
  { name: "View Services", href: "#services", isPrimary: false },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg" // Add a luxury salon image
        alt="LUMIÈRE Salon Interior"
        fill
        priority
        className="object-cover object-center"
        quality={100}
      />
      
      {/* Gradient Overlay - adjusted for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2C41]/85 to-[#232323]/90" />

      {/* Hero Content */}
      <div className="relative flex h-full items-center justify-center px-4 -mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          {/* Social Proof - Adjusted positioning and sizes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6 md:mb-12"
          >
            <div className="flex flex-row items-center justify-evenly mt-16 gap-8 md:gap-0">
              {socialProofData.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + (index * 0.2) }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center gap-2 mb-2 justify-center ">
                    {item.label.includes("Rating") && (
                      <StarIcon className="md:w-6 md:h-6 w-4 h-4 text-[#DAB17A] fill-[#DAB17A]" />
                    )}
                    <span className="font-cormorant text-2xl md:text-3xl text-[#F8F6F4] ">
                      {item.number}
                    </span>
                  </div>
                  <span className="font-montserrat text-xs md:text-sm text-[#F8F6F4]/70 tracking-wider uppercase">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-[1px] bg-[#DAB17A] mx-auto mb-8"
          />
          
          <div className="mb-4">
            <h2 className="font-cormorant text-2xl md:text-3xl text-[#F8F6F4]/90 tracking-wider">
              Experience the LUMIÈRE Difference
            </h2>
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl text-[#F8F6F4] mb-6 tracking-tight">
            Where Artistry<br />Meets Luxury
          </h1>
          <p className="font-nunito text-lg md:text-xl text-[#F8F6F4]/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover Vancouver's most sought-after nail and lash atelier, where master artists create bespoke beauty experiences in our serene Yaletown sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {heroButtons.map((button) => (
              <Link key={button.name} href={button.href}>
                <Button 
                  size="lg"
                  variant={button.isPrimary ? "default" : "outline"}
                  className={cn(
                    "font-montserrat transition-all duration-300",
                    button.isPrimary 
                      ? "bg-[#DAB17A] hover:bg-[#DAB17A]/90 text-white text-xl py-7 px-12 hover:shadow-lg"
                      : "border-[#DAB17A] text-[#DAB17A] hover:bg-[#DAB17A]/10 text-lg py-6 px-10"
                  )}
                >
                  {button.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Scroll Indicator - adjusted positioning */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-0  left-0 right-0 mx-auto w-full flex flex-col items-center gap-2"
          >
            <span className="text-[#F8F6F4]/70 text-sm tracking-wider font-montserrat">
              Scroll to Explore
            </span>
            <ArrowDownIcon className="w-5 h-5 text-[#DAB17A] animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 