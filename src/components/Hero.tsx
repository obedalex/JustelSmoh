import { Button } from "@/components/ui/button";
import heroImage from "@/assets/truck3.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative 
        flex items-center 
        pt-16 
        px-4 sm:px-6 lg:px-8
        min-h-[70vh] 
        sm:min-h-[80vh] 
        lg:min-h-screen
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            font-bold 
            text-primary-foreground 
            mb-4 
            leading-tight
          ">
            Your One-Stop Solution for{" "}
            <span className="text-primary">Trucks</span>,{" "}
            <span className="text-accent">Construction Materials</span> &{" "}
            <span className="text-primary">Land</span>
          </h1>

          <p className="
            text-base 
            sm:text-lg 
            md:text-xl 
            text-primary-foreground/80 
            mb-6 
            max-w-2xl
          ">
            Premium truck leasing services, quality construction materials, and prime
            land for sale. Building your success with reliability and trust.
          </p>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="
          text-base sm:text-lg 
          bg-primary-foreground/10 
          border-primary-foreground/30 
          text-primary-foreground 
          hover:bg-primary-foreground/20
        "
      >
        <a href="mailto:obiney500@gmail.com">Contact Us</a>
      </Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
