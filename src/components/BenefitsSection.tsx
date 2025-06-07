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
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Почему выбирают нас?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Icon name={benefit.icon} className="text-blue-500" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
