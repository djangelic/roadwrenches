import { Truck } from "lucide-react";

const N8N_FORM_URL = "https://n8n.aztechsol.com/form/e6f24025-4f6a-4a2b-99dc-89eb52fc57f8";

const PickupCTA = () => (
  <section className="py-24 bg-primary">
    <div className="container text-center">
      <Truck className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
        Need Your Bike Picked Up?
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-4">
        We have a secure trailer and can pick up your motorcycle from anywhere in the Tucson area.
        Pickup is <span className="font-bold">free</span> within 15 miles — beyond that, just $1.50/mile.
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
      <p className="text-primary-foreground/60 text-xs mt-4">
        ✓ Free initial assessment — for a limited time
      </p>
    </div>
  </section>
);

export default PickupCTA;
