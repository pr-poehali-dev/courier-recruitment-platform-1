import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const GeolocationBanner = () => {
  const [city, setCity] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              // Имитация получения города по координатам
              // В реальном проекте здесь был бы API вызов
              const cities = [
                "Москва",
                "Санкт-Петербург",
                "Новосибирск",
                "Екатеринбург",
                "Казань",
              ];
              const randomCity =
                cities[Math.floor(Math.random() * cities.length)];
              setCity(randomCity);
            } catch (error) {
              setCity("Москва");
            } finally {
              setIsLoading(false);
            }
          },
          () => {
            setCity("Москва");
            setIsLoading(false);
          },
        );
      } else {
        setCity("Москва");
        setIsLoading(false);
      }
    };

    getLocation();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex items-center">
          <Icon
            name="MapPin"
            className="text-blue-400 mr-2 animate-pulse"
            size={20}
          />
          <p className="text-blue-700">Определяем ваше местоположение...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
      <div className="flex items-center">
        <Icon name="MapPin" className="text-blue-400 mr-2" size={20} />
        <p className="text-blue-700">
          Ваш город: <span className="font-semibold">{city}</span>
        </p>
      </div>
    </div>
  );
};

export default GeolocationBanner;
