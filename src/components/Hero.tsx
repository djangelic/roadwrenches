import heroImage from "@/assets/hero-motorcycle.jpg";

const N8N_FORM_URL = "https://YOUR-N8N-INSTANCE.app/form/YOUR-FORM-ID";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
    </div>

    <div className="relative z-10 container py-32 text-center md:text-left">
      <div className="max-w-2xl">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-4">
          Tucson &bull; Green Valley &bull; Saddlebrook
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          35 Years of Master Level{" "}
          <span className="text-primary">HD Service</span>{" "}
          Directly to You
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl">
          We come to you — or we'll pick up your bike with our secure trailer.
          Get an instant quote for pickup based on your location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href={N8N_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-md text-lg uppercase tracking-wider hover:bg-brand-orange-light transition-colors animate-pulse-glow inline-block"
          >
            Get a Free Pickup Quote
          </a>
          <a
            href="tel:5209086644"
            className="border-2 border-primary text-primary font-heading font-bold px-8 py-4 rounded-md text-lg uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors inline-block"
          >
            Call 520-908-6644
          </a>
        </div>
        <p className="text-muted-foreground text-sm mt-4">Se Habla Español</p>
      </div>
    </div>
  </section>
);

export default Hero;
