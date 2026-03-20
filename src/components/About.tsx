import { Shield, FileText, Users, Heart } from "lucide-react";

const trust = [
  { icon: Shield, title: "35 Years Experience", desc: "Master-level Harley-Davidson service from guys who've lived and breathed motorcycles for three and a half decades." },
  { icon: FileText, title: "No Surprises", desc: "Digital invoices, itemized estimates, and no work without your explicit permission. You always know what you're paying for." },
  { icon: Users, title: "Local Roots", desc: "Marcos and Andy are part of the southern Arizona motorcycle community. Customers regularly trust them with six-figure custom builds — based on reputation alone." },
  { icon: Heart, title: "Honest Advice", desc: "We'll tell you what needs fixing and what's just character. No upselling, no scare tactics. Just straight talk from your buddy who happens to be a master mechanic." },
];

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-2">Why Trust Us</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">About Road Wrenches</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {trust.map((t) => (
          <div key={t.title} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <t.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-16 max-w-2xl mx-auto text-center bg-card border border-border rounded-lg p-8">
        <p className="text-foreground italic mb-4">
          "After I laid my bike down riding down Madera Canyon, I didn't know what to do. The dealers wanted a fortune just to look at it. Marcos and Andy took great care of me, and got me back on the road without spending a fortune. I hope I don't drop my bike again, but if I do, I know who I will use! Thanks Guys!"
        </p>
        <p className="text-primary font-heading text-sm font-bold">— Angel M., Sahuarita AZ</p>
      </div>
    </div>
  </section>
);

export default About;
