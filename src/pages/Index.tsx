import Hero from "@/components/Hero";
import MaterialsGrid from "@/components/MaterialsGrid";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MaterialsGrid />
      <Services />
      <ContactForm />
    </div>
  );
};

export default Index;
