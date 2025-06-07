import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Banknote",
    title: "Высокие заработки",
    description: "До 3 000₽ в день + бонусы за план и активность",
  },
  {
    icon: "Clock",
    title: "Удобный график",
    description: "Выбирай смены сам: 3, 6 или 12 часов в любое время",
  },
  {
    icon: "Smartphone",
    title: "Простое приложение",
    description: "Удобное приложение Яндекс.Про для курьеров",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description: "Круглосуточная поддержка через чат в приложении",
  },
  {
    icon: "Trophy",
    title: "Бонусная система",
    description: "Премии за выполнение плана и высокий рейтинг",
  },
  {
    icon: "Car",
    title: "Любой транспорт",
    description: "Пешком, на велосипеде, самокате или автомобиле",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Преимущества работы в Яндекс.Еде
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
