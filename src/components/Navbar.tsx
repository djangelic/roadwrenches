import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";

const N8N_FORM_URL = "https://YOUR-N8N-INSTANCE.app/form/YOUR-FORM-ID";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div className="container flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <img src={logo} alt="M&A Mobile Motorcycle Repair and Towing" className="h-12 w-12" />
        <div className="hidden sm:block">
          <p className="font-heading text-lg font-bold text-primary leading-tight">M&A MOBILE MOTORCYCLE</p>
          <p className="text-xs text-muted-foreground tracking-widest">REPAIR AND TOWING</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="tel:5209086644" className="flex items-center gap-2 text-primary font-heading text-lg hover:text-brand-orange-light transition-colors">
          <Phone className="h-4 w-4" />
          <span className="hidden md:inline">520-908-6644</span>
        </a>
        <a
          href={N8N_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground font-heading font-bold px-5 py-2 rounded-md hover:bg-brand-orange-light transition-colors text-sm uppercase tracking-wider"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
