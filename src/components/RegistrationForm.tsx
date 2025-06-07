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
    <Card className="max-w-md mx-auto shadow-2xl bg-white/90 backdrop-blur-sm border-slate-200/50">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-center flex items-center justify-center gap-2 text-xl">
          <Icon name="UserPlus" className="text-white drop-shadow" size={28} />
          Быстрая регистрация
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Телефон
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="your@email.com"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            disabled={!selectedCourierType}
          >
            {selectedCourierType
              ? "🚀 Подать заявку в Яндекс.Еду"
              : "⬆️ Выберите тип работы"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
