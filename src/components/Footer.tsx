import logo from "@/assets/logo.png";
import { Phone, MapPin, CreditCard } from "lucide-react";

const Footer = () => (
  <footer className="py-16 bg-background border-t border-border">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logo} alt="Road Wrenches" className="h-20 w-20" />
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-bold text-foreground">Road Wrenches</p>
            <p className="text-muted-foreground text-xs uppercase tracking-widest">M&A Mobile Motorcycle Repair & Towing</p>
          </div>
        </div>

        <div className="text-center space-y-3">
          <p className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">Pay Your Invoice</p>
          <div className="flex items-center gap-4 justify-center">
            <span className="bg-card border border-border rounded-md px-4 py-2 text-sm text-muted-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> Venmo
            </span>
            <span className="bg-card border border-border rounded-md px-4 py-2 text-sm text-muted-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> Zelle
            </span>
          </div>
          <p className="text-muted-foreground text-xs">Phone payments also accepted. Fully paperless digital invoicing.</p>
        </div>

        <div className="text-center md:text-right space-y-3">
          <a href="tel:5209086644" className="flex items-center gap-2 text-primary font-heading text-2xl font-bold hover:text-brand-orange-light transition-colors justify-center md:justify-end">
            <Phone className="h-5 w-5" />
            520-908-6644
          </a>
          <p className="text-muted-foreground text-sm">Se Habla Español</p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm justify-center md:justify-end">
            <MapPin className="h-4 w-4" />
            <span>Green Valley &bull; Tucson &bull; Saddlebrook</span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Road Wrenches — M&A Mobile Motorcycle Repair and Towing. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
