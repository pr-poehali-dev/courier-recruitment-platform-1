import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Banknote",
    title: "Высокий доход",
    description: "От 50 000₽ в месяц при активной работе",
  },
  {
    icon: "Clock",
    title: "Гибкий график",
    description: "Работайте когда удобно: утром, днем или вечером",
  },
  {
    icon: "Smartphone",
    title: "Простое приложение",
    description: "Интуитивно понятный интерфейс для получения заказов",
  },
  {
    icon: "HeadphonesIcon",
    title: "Поддержка",
    description: "Круглосуточная техническая поддержка курьеров",
  },
  {
    icon: "Trophy",
    title: "Бонусы",
    description: "Дополнительные выплаты за выполнение планов",
  },
  {
    icon: "Shield",
    title: "Страховка",
    description: "Полное страхование на время работы",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
        Почему выбирают работу курьером в Петербурге?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-slate-200/50"
          >
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-4 shadow-md">
                <Icon name={benefit.icon} className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">
                {benefit.title}
              </h3>
              <p className="text-slate-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
