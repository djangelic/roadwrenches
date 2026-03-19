import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PickupCTA from "@/components/PickupCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Services />
    <PickupCTA />
    <Footer />
  </div>
);

export default Index;
