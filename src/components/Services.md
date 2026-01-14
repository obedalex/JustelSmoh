import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Package, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import ContactAction from "./ContactAction";
import trucksImage from "@/assets/trucks-fleet.jpg";
import materialsImage from "@/assets/Sand3.jpg";
import landImage from "@/assets/land.jpg";

const services = [
  {
    icon: Truck,
    title: "Truck Leasing",
    description:
      "Flexible truck leasing options for all your transportation needs. From light-duty pickups to heavy-duty haulers, we have the perfect vehicle for your project.",
    image: trucksImage,
    features: [
      "Daily, weekly, or monthly rentals",
      "Well-maintained fleet",
      "24/7 roadside assistance",
      "GPS tracking included",
    ],
    cta: "Check Truck Availability",
    trust: "Trusted by contractors & logistics firms",
  },
  {
    icon: Package,
    title: "Construction Materials",
    description:
      "High-quality construction materials at competitive prices. We supply cement, sand, gravel, steel, bricks, and more for projects of any scale.",
    image: materialsImage,
    features: [
      "Bulk ordering available",
      "Competitive pricing",
      "Fast delivery",
      "Quality guaranteed",
    ],
    cta: "Request Material Quote",
    trust: "Reliable supply for small & large projects",
  },
  {
    icon: MapPin,
    title: "Land for Sale",
    description:
      "Prime land plots in strategic locations. Whether you're looking for residential, commercial, or agricultural land, we have options that meet your needs.",
    image: landImage,
    features: [
      "Clear titles",
      "Prime locations",
      "Flexible payment plans",
      "Legal support included",
    ],
    cta: "View Available Land",
    trust: "Verified titles with legal support",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions for your construction and transportation needs.
            Quality service backed by years of experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Media Area */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Image overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Service Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary p-3 rounded-lg inline-flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Feature List */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Trust Signal */}
                <p className="text-xs text-muted-foreground mb-6">
                  {service.trust}
                </p>

                {/* Conversion-focused CTA */}
                <ContactAction message="Contact us to get full details and pricing.">
                  <Button variant="outline" className="w-full group/btn">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </ContactAction>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
