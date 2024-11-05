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
    <section className="relative w-full min-h-[100vh] md:h-[90vh] overflow-hidden">
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

      {/* Hero Content - Adjusted container and spacing */}
      <div className="relative h-full flex items-center justify-center px-4 py-20 md:py-0  ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" container mx-auto flex flex-col items-center justify-center md:justify-start"
        >
          {/* Social Proof - Reduced bottom margin on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full mb-8 md:mb-8"
          >
            <div className="flex items-center justify-center gap-6 md:gap-12 ">
              {socialProofData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + (index * 0.2) }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-1 ">
                    {item.label.includes("Rating") && (
                      <StarIcon className="w-4 h-4 md:w-5 md:h-5 text-[#DAB17A] fill-[#DAB17A]" />
                    )}
                    <span className="font-cormorant text-2xl md:text-3xl text-[#F8F6F4] ">
                      {item.number}
                    </span>
                  </div>
                  <span className="font-montserrat text-xs md:text-sm text-[#F8F6F4]/70 tracking-wider uppercase  text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content - Adjusted spacing and heading sizes */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-[1px] bg-[#DAB17A] mx-auto mb-6 md:mb-8"
          />
          
          <div className="text-center max-w-[90%] md:max-w-4xl mx-auto">
            <h2 className="font-cormorant text-2xl md:text-3xl text-[#F8F6F4]/90 tracking-wider mb-3 md:mb-4">
              Experience the LUMIÈRE Difference
            </h2>
            
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-[#F8F6F4] mb-4 md:mb-20 md:mt-10 tracking-tight">
              Where Artistry<br />Meets Luxury
            </h1>
            
            <p className="font-nunito text-lg md:text-xl text-[#F8F6F4]/90 mb-10 leading-relaxed">
              Discover Vancouver's most sought-after nail and lash atelier, where master artists create bespoke beauty experiences in our serene Yaletown sanctuary.
            </p>

            {/* Buttons - Improved responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              {heroButtons.map((button) => (
                <Link key={button.name} href={button.href} className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    variant={button.isPrimary ? "default" : "outline"}
                    className={cn(
                      "font-montserrat transition-all duration-300 w-full sm:w-auto min-w-[200px]",
                      button.isPrimary 
                        ? "bg-[#DAB17A] hover:bg-[#DAB17A]/90 text-white text-base md:text-lg py-6 px-8"
                        : "border-[#DAB17A] text-[#DAB17A] hover:bg-[#DAB17A]/10 text-sm md:text-base py-5 px-6"
                    )}
                  >
                    {button.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll Indicator - Improved visibility control */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-0 right-0 mx-auto w-full hidden md:flex flex-col items-center gap-2"
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