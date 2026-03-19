import { Battery, Zap, Wrench, Package, AlertTriangle, Truck } from "lucide-react";

const services = [
  { icon: Battery, title: "Battery Replacement", desc: "On-site battery testing and replacement for all motorcycle makes." },
  { icon: Zap, title: "Electrical Diagnostics", desc: "Full electrical system diagnostics and repair by certified technicians." },
  { icon: Wrench, title: "Milestone & Mechanical Repairs", desc: "Scheduled maintenance and mechanical repairs at your location." },
  { icon: Package, title: "Accessory Installations", desc: "Professional installation of aftermarket parts and accessories." },
  { icon: AlertTriangle, title: "Emergency Breakdown Assistance", desc: "Stranded? We come to you fast with roadside repair service." },
  { icon: Truck, title: "Secure Motorcycle Towing", desc: "Safe and secure trailer transport for your bike when needed." },
];

const Services = () => (
  <section id="services" className="py-24 bg-secondary">
    <div className="container">
      <div className="text-center mb-16">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">What We Do</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors group">
            <s.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
