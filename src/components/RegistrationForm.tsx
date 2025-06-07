import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface RegistrationFormProps {
  selectedCourierType: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedCourierType,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Базовая партнерская ссылка
    const baseUrl =
      "https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=f123426cfad648a1afadad700e3a6b6b&utm_content=blank";

    // Добавляем данные из формы как дополнительные параметры
    const urlParams = new URLSearchParams();
    urlParams.append("utm_source", "recruitment_site");
    urlParams.append("utm_medium", "registration_form");
    urlParams.append("courier_type", selectedCourierType);
    urlParams.append("applicant_name", formData.name);
    urlParams.append("applicant_phone", formData.phone);
    urlParams.append("applicant_email", formData.email);

    const finalUrl = `${baseUrl}&${urlParams.toString()}`;

    // Переходим на партнерскую ссылку
    window.open(finalUrl, "_blank");
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          <Icon name="UserPlus" className="text-blue-500" size={24} />
          Быстрая регистрация
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            disabled={!selectedCourierType}
          >
            {selectedCourierType
              ? "Подать заявку в Яндекс.Еду"
              : "Выберите тип работы"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
