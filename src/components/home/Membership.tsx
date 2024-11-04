'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Calendar,
  Sparkles,
  Users,
  Gift,
  Cake,
  Crown,
  Percent
} from "lucide-react"
import Image from "next/image"

const membershipBenefits = [
  {
    icon: Calendar,
    title: "Priority Booking",
    description: "Secure your preferred appointment times with exclusive early access"
  },
  {
    icon: Sparkles,
    title: "Complimentary Touch-ups",
    description: "Enjoy free touch-up services between appointments"
  },
  {
    icon: Users,
    title: "Member Events",
    description: "Access to exclusive seasonal events and master classes"
  },
  {
    icon: Gift,
    title: "Seasonal Gifts",
    description: "Receive curated luxury beauty products throughout the year"
  },
  {
    icon: Cake,
    title: "Birthday Specials",
    description: "Celebrate with exclusive treatments during your birthday month"
  },
  {
    icon: Crown,
    title: "VIP Rewards",
    description: "Earn points on every visit to redeem for premium services and products"
  },
]

export function Membership() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="container relative mx-auto px-4">
        {/* Header - Updated typography and spacing */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              The LUMIÈRE Membership
            </h2>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />

            <p className="text-muted-foreground font-nunito max-w-2xl mx-auto text-lg leading-relaxed">
              Join our exclusive circle of distinguished clients and elevate your beauty journey with premium benefits designed for the discerning individual.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid - Updated card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {membershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group p-8 h-full bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-montserrat text-xl mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-muted-foreground/80 leading-relaxed">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Image and CTA Section - Updated layout and styling */}
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
            {/* Image placeholder with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            <Image
              src="/membership.jpg"
              alt="LUMIÈRE luxury membership experience"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            /> 
           
          </div>
          
          <div className="space-y-8">
            <h3 className="font-cormorant text-4xl md:text-5xl leading-tight">
              Experience Beauty<br />Without Boundaries
            </h3>
            <p className="text-muted-foreground/90 text-lg leading-relaxed">
              Our membership program is thoughtfully crafted to provide you with an unparalleled beauty journey. Enjoy exclusive access to premium services, special events, and luxurious surprises throughout the year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Join the LUMIÈRE Circle
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}