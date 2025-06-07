import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center text-center py-16 mb-8 overflow-hidden">
      {/* Фоновое изображение Санкт-Петербурга */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520637836862-4d197d17c35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-orange-600/60" />

      {/* Контент */}
      <div className="relative z-10 max-w-4xl px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <Icon
              name="Truck"
              className="text-white drop-shadow-lg"
              size={48}
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
          Станьте курьером в{" "}
          <span className="text-orange-300">Петербурге!</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
          Работайте в самом красивом городе России. Гибкий график, стабильный
          доход и возможность каждый день любоваться архитектурой Северной
          столицы!
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-lg text-white/95">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Icon
              name="CheckCircle"
              className="text-green-300 drop-shadow"
              size={24}
            />
            <span className="font-medium">Ежедневные выплаты</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Icon
              name="CheckCircle"
              className="text-green-300 drop-shadow"
              size={24}
            />
            <span className="font-medium">Свободный график</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Icon
              name="CheckCircle"
              className="text-green-300 drop-shadow"
              size={24}
            />
            <span className="font-medium">Поддержка 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
