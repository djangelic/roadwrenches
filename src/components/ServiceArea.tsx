import { MapPin } from "lucide-react";

const areas = [
  { name: "Green Valley", desc: "Home base" },
  { name: "Tucson", desc: "Metro area" },
  { name: "Saddlebrook", desc: "& surrounding areas" },
];

const ServiceArea = () => (
  <section id="service-area" className="py-24 bg-secondary">
    <div className="container">
      <div className="text-center mb-16">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">Where We Ride</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Service Area</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {areas.map((a) => (
          <div key={a.name} className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">{a.name}</h3>
            <p className="text-muted-foreground text-sm">{a.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm mt-8">
        Serving all of southern Arizona. Not sure if you're in range? Call us — we'll work it out.
      </p>
    </div>
  </section>
);

export default ServiceArea;
