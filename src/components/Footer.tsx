import { Truck, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import ContactAction from "./ContactAction"
import logo from "@/assets/logo.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Truck Leasing", href: "#services" },
      { name: "Construction Materials", href: "#services" },
      { name: "Land for Sale", href: "#services" },
    ],
    company: [{ name: "About Us", href: "#about" }],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className=" p-2 rounded-lg">
                <img src={logo} alt="logo" className="h-16 w-16" />
              </div>
              <span className="text-xl font-bold">Justelsmoh</span>
            </a>
            <p className="text-secondary-foreground/70 mb-6">
              Your trusted partner for truck leasing, construction materials, and
              prime land.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <ContactAction
                    key={index}
                    message="Social link coming soon. We'll add this shortly."
                  >
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary transition-colors"
                      aria-label={`Open ${Icon.name}`}
                    >
                      <Icon className="h-5 w-5 pointer-events-auto text-secondary-foreground" />
                    </button>
                  </ContactAction>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {currentYear} Justelsmoh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
