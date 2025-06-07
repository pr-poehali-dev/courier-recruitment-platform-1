import React, { useState } from "react";
import GeolocationBanner from "@/components/GeolocationBanner";
import HeroSection from "@/components/HeroSection";
import CourierTypeSelector from "@/components/CourierTypeSelector";
import RegistrationForm from "@/components/RegistrationForm";
import BenefitsSection from "@/components/BenefitsSection";

const Index = () => {
  const [selectedCourierType, setSelectedCourierType] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <GeolocationBanner />

        <HeroSection />

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <CourierTypeSelector onTypeSelect={setSelectedCourierType} />
        </div>

        <div className="mb-12">
          <RegistrationForm selectedCourierType={selectedCourierType} />
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <BenefitsSection />
        </div>

        <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-200/50 mt-12 bg-white/40 backdrop-blur-sm rounded-xl">
          <p>© 2024 Курьерская служба Санкт-Петербурга. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
