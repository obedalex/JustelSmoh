import { Button } from "@/components/ui/button";
import heroImage from "@/assets/truck5.png";
import heroImage2 from "@/assets/truck4.png"


const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex items-center
        pt-16
        px-4 sm:px-6 lg:px-8

        h-[50vh]        /* Mobile */
        sm:h-[80vh]    /* Small tablets */
        md:h-[90vh]    /* Tablets */
        lg:h-screen    /* Desktop */
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0 z-0
        
          bg-center
          bg-cover
        "
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
      <div className="container mx-auto relative z-10 w-full">
        <div className="
          max-w-full
          sm:max-w-2xl
          md:max-w-3xl
          lg:max-w-4xl
        ">
          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-bold
              text-primary-foreground
              mb-4
              md:mb-6
              leading-tight
              break-words
            "
          >
            Your One-Stop Solution for{" "}
            <span className="text-primary">Trucks</span>,{" "}
            <span className="text-accent">Construction Materials</span> &{" "}
            <span className="text-primary">Land</span>
          </h1>

          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              text-primary-foreground/80
              mb-4
              md:mb-6
              max-w-full
              sm:max-w-xl
              md:max-w-2xl
              break-words
            "
          >
            Premium truck leasing services, quality construction materials, and prime
            land for sale. Building your success with reliability and trust.
          </p>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="
              text-sm sm:text-base md:text-lg
              bg-primary-foreground/10
              border-primary-foreground/30
              text-primary-foreground
              hover:bg-primary-foreground/20
              w-full sm:w-auto
            "
          >
            <a href="mailto:justelsmoh@gmail.com">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;