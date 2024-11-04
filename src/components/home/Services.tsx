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
        description: "The perfect natural enhancement"
      },
      {
        name: "Volume Full Set",
        price: 250,
        duration: "3 hours",
        description: "Dramatic, customized fullness"
      },
      {
        name: "Mega Volume",
        price: 300,
        duration: "3.5 hours",
        description: "The ultimate in luxury lashes"
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
        description: "Long-wearing luxury for your hands"
      },
      {
        name: "Art & Design",
        price: 95,
        duration: "90 mins",
        description: "Custom nail artistry"
      },
      {
        name: "Bio Sculpture Gel",
        price: 85,
        duration: "75 mins",
        description: "Strength meets sophistication"
      }
    ]
  }
];

export function Services() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-soft-black mb-6">
            Our Signature Services
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {serviceCategories.map((category) => (
            <Card key={category.title} className="border-border/5 shadow-lg">
              <CardHeader>
                <h3 className="font-cormorant text-2xl md:text-3xl text-center text-soft-black mb-6">
                  {category.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex flex-col space-y-2 p-4 hover:bg-secondary/20 rounded-lg transition-colors"
                  >
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-montserrat text-lg text-foreground">
                        {service.name}
                      </h4>
                      <span className="font-montserrat text-lg text-primary">
                        ${service.price}
                      </span>
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