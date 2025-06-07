import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Clock",
    title: "Свободный график",
    description:
      "Вы сами решаете, когда и сколько работать, совмещая с учёбой или основной работой",
  },
  {
    icon: "Banknote",
    title: "Возможность заработка",
    description:
      "Доход зависит от вашего старания и эффективности, может быть весьма значительным",
  },
  {
    icon: "Activity",
    title: "Активный образ жизни",
    description:
      "Для тех, кто любит быть в движении и не хочет проводить дни в офисе",
  },
  {
    icon: "TrendingUp",
    title: "Развитие навыков",
    description:
      "Улучшите знание города, планирование маршрутов и навыки общения",
  },
  {
    icon: "Building2",
    title: "Ведущие сервисы",
    description:
      "Работа в топовых компаниях: Яндекс, Delivery Club, Ozon, X5 Digital",
  },
  {
    icon: "Info",
    title: "Полная поддержка",
    description: "Советы по повышению эффективности и увеличению заработка",
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
