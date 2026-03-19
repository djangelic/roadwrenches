import {
  Truck, AlertTriangle, Battery, Zap, Wrench, Package,
  Fuel, Filter, Droplets, Search, Cog, ClipboardList, Settings, RefreshCw
} from "lucide-react";

const services = [
  { icon: Truck, title: "Mobile Pickup & Delivery", desc: "We haul your bike to our shop and bring it back when it's done. No need to ride a broken bike or rent a trailer." },
  { icon: AlertTriangle, title: "Secure Motorcycle Towing", desc: "Safe transport for non-running bikes with our secure trailer." },
  { icon: Zap, title: "Emergency Breakdown Assistance", desc: "Roadside help when you're stuck. We come to you fast." },
  { icon: Wrench, title: "Brake System Repair", desc: "Pedal assemblies, master cylinders, alignment — complete brake service." },
  { icon: Settings, title: "Electrical Diagnostics & Repair", desc: "Turn signals, wiring, lighting, license plate holders, and full system diagnostics." },
  { icon: Battery, title: "Battery Replacement", desc: "On-site battery testing and replacement for all motorcycle makes." },
  { icon: Fuel, title: "Fuel System Service", desc: "Fuel line replacement, routing, and kink correction." },
  { icon: Cog, title: "Milestone & Mechanical Repairs", desc: "Major service intervals and mechanical overhauls." },
  { icon: Package, title: "Accessory Installations", desc: "Aftermarket parts, upgrades, and custom add-ons." },
  { icon: Filter, title: "Air Filter & Intake Service", desc: "Cleaning and replacement to keep your engine breathing right." },
  { icon: Droplets, title: "Oil Changes & Routine Maintenance", desc: "Regular maintenance to keep your ride in peak condition." },
  { icon: Search, title: "Cosmetic Assessment & Honest Advice", desc: "We'll tell you what's worth fixing and what's just character. No pressure." },
  { icon: ClipboardList, title: "Custom Parts Sourcing", desc: "OEM on backorder? We source aftermarket alternatives or have parts fabricated locally." },
  { icon: RefreshCw, title: "Disassembly, Cleaning & Reassembly", desc: "Deep clean and rebuild after damage or long periods of inactivity." },
];

const Services = () => (
  <section id="services" className="py-24 bg-secondary">
    <div className="container">
      <div className="text-center mb-4">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">What We Do</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
      </div>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Specializing in <span className="text-primary font-semibold">Harley-Davidson</span> repair and maintenance — we stock common HD parts, filters, and hoses. Open to all motorcycle brands.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
            <s.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-base font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
