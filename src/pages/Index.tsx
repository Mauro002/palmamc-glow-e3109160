import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Store from "@/components/Store";
import Discord from "@/components/Discord";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Store />
        <Discord />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
