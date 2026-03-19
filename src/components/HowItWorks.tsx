import { MessageSquare, Truck, ClipboardList, CheckCircle, Wrench, PackageCheck } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Request a Quote", desc: "Fill out the form or call us. Tell us what's going on with your bike." },
  { icon: Truck, title: "We Come to You", desc: "We pick up your bike from your location. No trailer rental needed." },
  { icon: ClipboardList, title: "Itemized Estimate", desc: "We assess the bike and send you a detailed breakdown — every repair with parts and labor, line by line." },
  { icon: CheckCircle, title: "You Choose", desc: "A la carte. Pick the repairs you want, skip the ones you don't. Your call, your budget." },
  { icon: Wrench, title: "We Fix It", desc: "Professional repair at our shop using OEM or quality aftermarket parts." },
  { icon: PackageCheck, title: "We Deliver", desc: "Your bike comes back to you running and road-ready." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">Simple & Transparent</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">How It Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s.title} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
              <span className="font-heading text-primary text-lg font-bold">{i + 1}</span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
