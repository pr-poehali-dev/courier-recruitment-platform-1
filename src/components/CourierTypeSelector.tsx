import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CourierType {
  id: string;
  title: string;
  icon: string;
  description: string;
  earnings: string;
}

const courierTypes: CourierType[] = [
  {
    id: "car",
    title: "Курьер на авто",
    icon: "Car",
    description: "Доставка крупных заказов",
    earnings: "до 3000₽/день",
  },
  {
    id: "bike",
    title: "Курьер на велосипеде",
    icon: "Bike",
    description: "Быстрая доставка по городу",
    earnings: "до 2500₽/день",
  },
  {
    id: "foot",
    title: "Пеший курьер",
    icon: "PersonStanding",
    description: "Доставка в центре города",
    earnings: "до 2000₽/день",
  },
];

interface CourierTypeSelectorProps {
  onTypeSelect: (type: string) => void;
}

const CourierTypeSelector: React.FC<CourierTypeSelectorProps> = ({
  onTypeSelect,
}) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSelect = (typeId: string) => {
    setSelectedType(typeId);
    onTypeSelect(typeId);
  };

  return (
    <div className="mb-8">
      <h3 className="text-3xl font-bold text-center mb-8 text-slate-800">
        Выберите тип работы в Петербурге
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {courierTypes.map((type) => (
          <div
            key={type.id}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm ${
              selectedType === type.id
                ? "border-blue-400 bg-blue-500/20 shadow-xl scale-105"
                : "border-slate-200/50 bg-white/70 hover:border-blue-300/50"
            }`}
            onClick={() => handleSelect(type.id)}
          >
            <div className="text-center">
              <div
                className={`inline-flex p-4 rounded-full mb-4 transition-all duration-300 ${
                  selectedType === type.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-100"
                }`}
              >
                <Icon name={type.icon} size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2 text-slate-800">
                {type.title}
              </h4>
              <p className="text-slate-600 mb-3">{type.description}</p>
              <p className="font-bold text-xl text-orange-600">
                {type.earnings}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourierTypeSelector;
