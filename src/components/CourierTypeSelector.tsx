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
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Выберите тип работы
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {courierTypes.map((type) => (
          <div
            key={type.id}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedType === type.id
                ? "border-blue-500 bg-blue-50 shadow-md"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleSelect(type.id)}
          >
            <div className="text-center">
              <div
                className={`inline-flex p-4 rounded-full mb-4 ${
                  selectedType === type.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <Icon name={type.icon} size={32} />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">
                {type.title}
              </h4>
              <p className="text-gray-600 text-sm mb-2">{type.description}</p>
              <p className="font-bold text-orange-600">{type.earnings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourierTypeSelector;
