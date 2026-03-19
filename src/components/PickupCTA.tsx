import { Truck } from "lucide-react";

const N8N_FORM_URL = "https://YOUR-N8N-INSTANCE.app/form/YOUR-FORM-ID";

const PickupCTA = () => (
  <section className="py-24 bg-primary">
    <div className="container text-center">
      <Truck className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
        Need Your Bike Picked Up?
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-4">
        We have a secure trailer and can pick up your motorcycle from anywhere in the Tucson area.
        Pickup cost is calculated based on your distance — get an instant free quote.
      </p>
      <p className="text-primary-foreground/60 text-sm mb-8">
        Serving Green Valley, Tucson, Saddlebrook, and southern Arizona
      </p>
      <a
        href={N8N_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary-foreground text-primary font-heading font-bold px-10 py-4 rounded-md text-lg uppercase tracking-wider hover:bg-brand-warm transition-colors"
      >
        Get Your Free Pickup Quote
      </a>
    </div>
  </section>
);

export default PickupCTA;
