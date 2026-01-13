import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Industrial Avenue, Construction City, CC 12345",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 234 567 890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@justelsmoh.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 8:00 AM - 6:00 PM",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions or need a quote? Reach out to us and our team will
            get back to you within 24 hours.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="text-center max-w-7xl w-full">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>

            {/* Horizontal aligned contact items */}
            <div className="flex justify-center gap-6 mt-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 w-1/4"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground">
                    {info.title}
                  </h4>
                  <p className="text-muted-foreground text-center">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
