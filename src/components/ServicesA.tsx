// Services.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Truck, Package, MapPin, CheckCircle } from "lucide-react";
import MediaCarousel, { MediaItem } from "./MediaCarousel";
import trucksImage from "@/assets/trucks-fleet.jpg";
import materialsImage from "@/assets/Sand3.jpg";
import landImage from "@/assets/land.jpg";
import caterpillar from "@/assets/caterpillar-truck.jpg";
import fleet from "@/assets/fleet of trucks.mp4"
import greenTruck from "@/assets/green truck 2.mp4"
import greenVideo from "@/assets/green truck video.mp4"
import sandLand from "@/assets/sand-land.jpg"
import sandLand2 from "@/assets/sand-land2.jpg"
import sandLand3 from "@/assets/sand-land3.jpg"
import sandLand4 from "@/assets/sand-land4.jpg"
import sandLand5 from "@/assets/sand-land-5.jpg"

/**
 * NOTE: All original variables/content are preserved.
 * No buttons are included in the Services cards per requirement.
 */

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
    trust: "Verified titles with legal support",
  },
];

const Services: React.FC = () => {
  // Build carousel items (uses the same assets you already provided)
  const carouselItems: MediaItem[] = [
    {
      id: "img-caterpillar",
      type: "image",
      src: caterpillar,
      alt: "Caterpillar heavy-duty truck on site",
      caption: "Heavy-duty trucks ready for demanding projects",
    },
    {
      id: "vid-fleet",
      type: "video",
      src: fleet,
      alt: "Fleet of trucks in operation",
      caption: "Our fleet in motion across multiple job sites",
    },
    {
      id: "vid-green-truck",
      type: "video",
      src: greenTruck,
      alt: "Green truck transporting materials",
      caption: "Efficient material transport you can rely on",
    },
    {
      id: "vid-green-truck-action",
      type: "video",
      src: greenVideo,
      alt: "Green truck operating on construction site",
      caption: "Reliable logistics supporting active construction",
    },
    {
      id: "img-sand-land-1",
      type: "image",
      src: sandLand,
      alt: "Sand and land plot view",
      caption: "Quality construction materials and available land",
    },
    {
      id: "img-sand-land-2",
      type: "image",
      src: sandLand2,
      alt: "Prepared land for development",
      caption: "Well-prepared plots for residential and commercial use",
    },
    {
      id: "img-sand-land-3",
      type: "image",
      src: sandLand3,
      alt: "Open land with clear boundaries",
      caption: "Clearly demarcated land with verified titles",
    },
    {
      id: "img-sand-land-4",
      type: "image",
      src: sandLand4,
      alt: "Construction-ready land area",
      caption: "Strategic locations ready for development",
    },
    {
      id: "img-sand-land-5",
      type: "image",
      src: sandLand5,
      alt: "Wide land plot suitable for projects",
      caption: "Land solutions tailored to your project scale",
    },
  ];

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
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* soft overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

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
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Inline trust microcopy — helps users decide without navigating away */}
                <p className="text-xs text-muted-foreground">
                  {service.trust}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Media carousel placed directly below the services grid */}
        <div className="mt-12">
          <MediaCarousel
            items={carouselItems}
            caption="Justelsmoh — Fleet, Materials & Land — In Action"
            autoPlay={true}
            autoPlayInterval={7000}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
