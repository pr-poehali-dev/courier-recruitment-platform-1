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
        Стань курьером <span className="text-yellow-500">Яндекс.Еды</span>
      </h1>

      <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
        Доставляй еду и зарабатывай до 3 000₽ в день. Свободный график,
        еженедельные выплаты и бонусы за активность. Начни уже сегодня!
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" className="text-green-500" size={20} />
          <span>До 3 000₽ в день</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" className="text-green-500" size={20} />
          <span>Выплаты каждую неделю</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" className="text-green-500" size={20} />
          <span>Работа в удобное время</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
