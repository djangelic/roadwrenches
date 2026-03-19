import { Phone, FileText } from "lucide-react";

const N8N_FORM_URL = "https://YOUR-N8N-INSTANCE.app/form/YOUR-FORM-ID";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 flex gap-3">
    <a
      href="tel:5209086644"
      className="flex-1 flex items-center justify-center gap-2 bg-card border border-border text-primary font-heading font-bold py-3 rounded-md text-sm uppercase tracking-wider"
    >
      <Phone className="h-4 w-4" />
      Call Now
    </a>
    <a
      href={N8N_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold py-3 rounded-md text-sm uppercase tracking-wider"
    >
      <FileText className="h-4 w-4" />
      Free Quote
    </a>
  </div>
);

export default MobileCTA;
