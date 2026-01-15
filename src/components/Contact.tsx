import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "MXRV+GQ8 Tema  Near Heavy industrial Area",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+233 (0) 554 445 167 / +233 (0) 249 590 580",
  },
  {
    icon: Mail,
    title: "Email",
    content: "amouzoufrederick@justelsmoh.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon to Sat",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Have questions or need a quote? Reach out to us and our team will
            get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl border bg-background/60 hover:shadow-md transition"
              >
                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>

                <h4 className="font-medium text-foreground mb-2">
                  {info.title}
                </h4>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed break-words">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
