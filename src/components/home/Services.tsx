import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCategory {
  title: string;
  services: {
    name: string;
    price: number;
    duration?: string;
    description?: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Luxury Lash Artistry",
    services: [
      {
        name: "Classic Full Set",
        price: 200,
        duration: "2.5 hours",
        description: "The perfect natural enhancement for everyday elegance. Each lash is meticulously applied for a seamless, natural look."
      },
      {
        name: "Volume Full Set",
        price: 250,
        duration: "3 hours",
        description: "Dramatic, customized fullness with our signature multi-lash technique."
      },
      {
        name: "Mega Volume",
        price: 300,
        duration: "3.5 hours",
        description: "The ultimate in luxury lashes, featuring maximum volume and dramatic effect."
      },
      {
        name: "Hybrid Set",
        price: 275,
        duration: "3 hours",
        description: "Perfect blend of classic and volume techniques for a tailored, dimensional look."
      },
      {
        name: "Maintenance Fill",
        price: 85,
        duration: "1 hour",
        description: "Refresh your lash set within 2-3 weeks of application."
      }
    ]
  },
  {
    title: "Nail Couture",
    services: [
      {
        name: "Signature Gel Manicure",
        price: 75,
        duration: "75 mins",
        description: "Long-wearing luxury for your hands with expert shaping and cuticle care."
      },
      {
        name: "Art & Design",
        price: 95,
        duration: "90 mins",
        description: "Custom nail artistry featuring hand-painted designs and premium embellishments."
      },
      {
        name: "Bio Sculpture Gel",
        price: 85,
        duration: "75 mins",
        description: "Strength meets sophistication with our nail-strengthening gel system."
      },
      {
        name: "Luxury Spa Pedicure",
        price: 95,
        duration: "90 mins",
        description: "Complete foot renewal with premium products and extended massage."
      },
      {
        name: "Japanese Gel Extension",
        price: 120,
        duration: "120 mins",
        description: "Premium gel extensions using the latest Japanese techniques."
      }
    ]
  }
];

export function Services() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-4xl md:text-5xl text-soft-black mb-4">
            Our Signature Services
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary/30" />
            <div className="w-24 h-[2px] bg-primary" />
            <div className="w-12 h-[1px] bg-primary/30" />
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground font-nunito text-sm">
            Indulge in our carefully curated menu of premium beauty services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {serviceCategories.map((category) => (
            <Card key={category.title} className="border-border/5 shadow-lg">
              <CardHeader className="text-center pb-4 pt-6">
                <h3 className="font-cormorant text-2xl md:text-3xl text-soft-black">
                  {category.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-3 px-4 pb-6">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="group p-4 hover:bg-secondary/10 rounded-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-montserrat text-base md:text-xl text-foreground font-medium">
                          {service.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right ml-4 min-w-[80px]">
                        <span className="font-montserrat text-base text-primary font-medium">
                          ${service.price}
                        </span>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

      
      </div>
    </section>
  );
} 