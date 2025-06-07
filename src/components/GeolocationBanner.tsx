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
      <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4 mb-6 shadow-lg">
        <div className="flex items-center">
          <Icon
            name="MapPin"
            className="text-blue-300 mr-2 animate-pulse drop-shadow"
            size={20}
          />
          <p className="text-white font-medium drop-shadow">
            Определяем ваше местоположение...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4 mb-6 shadow-lg">
      <div className="flex items-center">
        <Icon
          name="MapPin"
          className="text-blue-300 mr-2 drop-shadow"
          size={20}
        />
        <p className="text-white font-medium drop-shadow">
          Ваш город: <span className="font-bold text-orange-300">{city}</span>
        </p>
      </div>
    </div>
  );
};

export default GeolocationBanner;
