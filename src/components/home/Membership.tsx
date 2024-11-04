'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const membershipBenefits = [
  {
    icon: "✧",
    title: "Priority Booking",
    description: "Secure your preferred appointment times with exclusive early access"
  },
  {
    icon: "✧",
    title: "Complimentary Touch-ups",
    description: "Enjoy free touch-up services between appointments"
  },
  {
    icon: "✧",
    title: "Member Events",
    description: "Access to exclusive seasonal events and master classes"
  },
  {
    icon: "✧",
    title: "Seasonal Gifts",
    description: "Receive curated luxury beauty products throughout the year"
  },
  {
    icon: "✧",
    title: "Birthday Specials",
    description: "Celebrate with exclusive treatments during your birthday month"
  }
]

export function Membership() {
  return (
    <section className="w-full bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl mb-6">
            The LUMIÈRE Membership
          </h2>
          <p className="text-muted-foreground font-nunito max-w-2xl mx-auto">
            Join our exclusive circle of distinguished clients and elevate your beauty journey with premium benefits designed for the discerning individual.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {membershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-primary text-2xl mb-4">{benefit.icon}</div>
                <h3 className="font-montserrat text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Image and CTA Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            {/* Replace this div with actual image */}
            {/* 
            <Image
              src="/images/membership-luxury.webp"
              alt="LUMIÈRE luxury membership experience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            /> 
            */}
          </div>
          
          <div className="space-y-6">
            <h3 className="font-cormorant text-3xl md:text-4xl">
              Experience Beauty Without Boundaries
            </h3>
            <p className="text-muted-foreground">
              Our membership program is thoughtfully crafted to provide you with an unparalleled beauty journey. Enjoy exclusive access to premium services, special events, and luxurious surprises throughout the year.
            </p>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white"
              >
                Join the LUMIÈRE Circle
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full md:w-auto border-primary/20 hover:border-primary/40"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}