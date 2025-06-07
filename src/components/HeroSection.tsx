import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="text-center py-12 mb-8">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-4">
          <Icon name="Truck" className="text-white" size={40} />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Станьте курьером уже <span className="text-orange-500">сегодня!</span>
      </h1>

      <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
        Гибкий график, стабильный доход и возможность работать в удобное для вас
        время. Присоединяйтесь к команде профессиональных курьеров!
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" className="text-green-500" size={20} />
          <span>Ежедневные выплаты</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" className="text-green-500" size={20} />
          <span>Свободный график</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" className="text-green-500" size={20} />
          <span>Поддержка 24/7</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
