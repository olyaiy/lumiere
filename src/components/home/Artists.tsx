"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Artist {
  id: number;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image: string;
  instagram?: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Victoria Chen",
    role: "Senior Lash Artist",
    specialties: ["Volume Extensions", "Lash Lifts", "Hybrid Sets"],
    bio: "With over 8 years of experience and international certification from Tokyo's prestigious Beauty Academy, Victoria brings unparalleled expertise to every lash transformation.",
    image: "/victoriachen.png",
    instagram: "@victoria.lashartist"
  },
  {
    id: 2,
    name: "Sophie Laurent",
    role: "Master Nail Artist",
    specialties: ["Bio Sculpture", "Nail Art", "Japanese Gel"],
    bio: "Trained in Paris and recognized for her innovative nail art designs, Sophie's work has been featured in leading fashion magazines.",
    image: "/sophielaurent.png",
    instagram: "@sophienailcouture"
  },
  {
    id: 3,
    name: "Isabella Martinez",
    role: "Advanced Lash & Brow Specialist",
    specialties: ["Mega Volume", "Brow Lamination", "Lash Artistry"],
    bio: "A true perfectionist with 6 years of dedicated expertise, Isabella's attention to detail and innovative techniques have earned her a devoted following among Vancouver's beauty enthusiasts.",
    image: "/isabellamartinez.png",
    instagram: "@bella.lashartistry"
  }
];

export function Artists() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-soft-black mb-6">
            Meet Our Master Artists
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />

          <p className="font-nunito text-deep-navy max-w-2xl mx-auto">
            Our artists are among the top 1% in their field, with international certification 
            and continuous advanced training. Each specialist brings years of expertise and 
            an eye for personalized beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <Image
                      src={artist.image}
                      alt={`${artist.name} - ${artist.role}`}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 768px) 192px, 192px"
                      priority={artist.id === 1}
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className="font-cormorant text-2xl text-soft-black mb-2 text-center">
                      {artist.name}
                    </h3>
                    <p className="font-montserrat text-primary text-sm mb-4 text-center">
                      {artist.role}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center gap-2">
                        {artist.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-secondary px-3 py-1 rounded-full text-xs font-nunito"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="font-nunito text-deep-navy text-sm text-center mb-4">
                      {artist.bio}
                    </p>

                    <div className="mt-auto">
                      {artist.instagram && (
                        <a
                          href="https://www.hightidedigital.ca"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center text-primary hover:text-primary/80 transition-colors duration-200 font-montserrat text-sm"
                        >
                          {artist.instagram}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 