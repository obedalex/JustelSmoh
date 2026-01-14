import { Shield, Clock, Users, Award, Headphones, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Over 3 years of experience serving satisfied customers across the region.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service and support for all your urgent requirements.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals dedicated to delivering exceptional service.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Premium products and services that meet the highest industry standards.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated support team ready to assist you at every step.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick and efficient delivery to keep your projects on schedule.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-20 bg-muted">

<div className="container mx-auto px-4 mb-24">
  {/* Section Header */}
  <div className="text-center mb-12">
    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
      Who We Are
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
      A Trusted Logistics & Land Company
    </h2>
    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
      Justelsmoh Company Limited is a Ghana-based company delivering reliable logistics
      solutions and secure land  services with integrity and professionalism.
    </p>
  </div>

  {/* About Content */}
  <div className="max-w-4xl mx-auto text-muted-foreground text-lg leading-relaxed space-y-6">
    <p>
      Justelsmoh Company Limited specializes in the haulage and conveyance of raw
      materials such as clay, sand, clinker, and other related materials. Operating
      a fleet of 25-cubic-meter tipper trucks, we primarily serve Tema and its
      surrounding environs with efficiency and reliability.
    </p>

    <p>
      Beyond transportation, we are committed to delivering seamless and dependable
      logistics services guided by integrity, timeliness, and operational excellence.
      Productivity remains a core hallmark of our operations, ensuring optimal value
      and consistent service delivery for our clients.
    </p>

    <p>
      In addition to logistics services, Justelsmoh Company Limited is actively engaged
      in land brokerage. We specialize in the sale and acquisition of well-documented,
      litigation-free lands within Accra, providing secure and transparent property
      transactions for our clients.
    </p>

    <p className="font-medium text-foreground">
      Our Vision is to become one of the leading logistics firms in Ghana and expand
      our operations across other African countries.
    </p>

    <p className="font-medium text-foreground">
      Our Mission is centered on:
    </p>

    <ul className="list-disc list-inside space-y-2">
      <li>Executing all works with diligence and efficiency</li>
      <li>Offering only litigation-free lands</li>
      <li>Providing professional and responsive client service</li>
    </ul>
  </div>
</div>


      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Trust & Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're committed to providing the best services with transparency,
            reliability, and customer satisfaction at our core.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow group"
            >
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
