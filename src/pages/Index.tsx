import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import PickupCTA from "@/components/PickupCTA";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <HowItWorks />
    <Services />
    <Pricing />
    <PickupCTA />
    <ServiceArea />
    <About />
    <Footer />
    <MobileCTA />
  </div>
);

export default Index;
