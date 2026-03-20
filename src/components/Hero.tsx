import heroImage from "@/assets/hero-motorcycle.jpg";
import logoImage from "@/assets/logo.png";

const N8N_FORM_URL = "https://n8n.aztechsol.com/form/e6f24025-4f6a-4a2b-99dc-89eb52fc57f8";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
    </div>

    <div className="relative z-10 container py-32">
      {/* Mobile: logo on top, text below. Desktop: text left, logo right */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">

        {/* Logo — shows above text on mobile, right side on desktop */}
        <div className="order-first md:order-last flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={logoImage}
            alt="Road Wrenches"
            className="w-56 h-56 md:w-96 md:h-96 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Text content */}
        <div className="order-last md:order-first max-w-2xl text-center md:text-left">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-2">
            Road <span className="text-primary">Wrenches</span>
          </h1>
          <p className="font-heading text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] mb-6">
            M&A Mobile Motorcycle Repair & Towing
          </p>
          <p className="text-lg md:text-xl text-foreground/90 mb-3 max-w-xl font-heading">
            Bringing 35 years of master-level HD service directly to{" "}
            <span className="text-primary font-bold">YOU</span> — when and where you need it.
          </p>
          <p className="text-muted-foreground mb-8 max-w-xl">
            We pick up your bike, fix it at our shop, and deliver it back running and road-ready.
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
          <p className="text-muted-foreground/60 text-xs mt-1">
            Tucson &bull; Green Valley &bull; Saddlebrook
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
