import React from "react";
import GeolocationBanner from "@/components/GeolocationBanner";
import HeroSection from "@/components/HeroSection";
import CourierTypeSelector from "@/components/CourierTypeSelector";
import BenefitsSection from "@/components/BenefitsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <GeolocationBanner />

        <HeroSection />

        <CourierTypeSelector />

        <BenefitsSection />

        <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-200 mt-12">
          <p>© 2024 Курьерская служба. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
