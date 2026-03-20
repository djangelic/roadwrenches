import { Check } from "lucide-react";

const Pricing = () => (
  <section id="pricing" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">Transparent & Fair</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">How Our Pricing Works</h2>
      </div>

      {/* Rate Comparison */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted border border-border rounded-lg p-8 text-center">
            <p className="font-heading text-muted-foreground uppercase tracking-wider text-sm mb-2">Typical Dealership</p>
            <p className="font-heading text-4xl font-bold text-muted-foreground line-through">$165<span className="text-lg">/hr</span></p>
          </div>
          <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-heading text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Save ~20%
            </div>
            <p className="font-heading text-primary uppercase tracking-wider text-sm mb-2">Road Wrenches</p>
            <p className="font-heading text-4xl font-bold text-foreground">$130<span className="text-lg">/hr</span></p>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className="max-w-2xl mx-auto space-y-6">
        {[
          {
            title: "Flat-Rate Pricing",
            desc: "Same system the dealership uses, based on standard labor times per job — not how long it actually takes. If a job is rated at 0.4 hours, you pay 0.4 hours.",
          },
          {
            title: "A La Carte Menu",
            desc: "You receive an itemized estimate with individual part costs and labor for each repair. Pick exactly what you want done. No bundled packages you didn't ask for.",
          },
          {
            title: "No Work Without Your Approval",
            desc: "We will never order parts or start a job without your explicit sign-off. No surprises, no hidden charges.",
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  </section>
);

export default Pricing;
