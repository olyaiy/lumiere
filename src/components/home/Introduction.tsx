 "use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export function Introduction() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto rounded-2xl  backdrop-blur-sm shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Elegant header with refined decorative elements */}
          <div className="relative flex flex-col items-center mb-16">
            <Separator className="w-12 bg-primary" />
            <h2 className="mt-8 font-cormorant text-4xl md:text-6xl font-light tracking-wide text-center">
              Welcome to{" "}
              <span className="font-medium text-primary-600 drop-shadow-sm">LUMIÈRE</span>
            </h2>
          </div>

          {/* Enhanced content layout with improved typography */}
          <div className="space-y-8 text-center">
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              In a city of endless beauty options, finding consistently exceptional
              nail and lash services feels impossible. Too often, luxury prices
              come with rushed service and disappointing results.
            </motion.p>

            <motion.div 
              className="relative py-6 px-8 bg-primary/10 rounded-lg border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-primary-700 font-cormorant italic leading-relaxed">
                Why compromise with assembly-line treatments and impersonal service
                when your self-care routine should be an experience to look forward
                to?
              </p>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Welcome to{" "}
              <span className="font-cormorant font-semibold text-primary-600">LUMIÈRE</span>,{" "}
              where we've reimagined beauty services as an art form. Our master technicians
              take pride in creating bespoke experiences that transform not just
              your appearance, but your entire day.
            </motion.p>
          </div>

          {/* Refined decorative footer element */}
          <div className="flex justify-center pt-12">
            <Separator className="w-24 bg-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}