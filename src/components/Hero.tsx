import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
      <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%200h20v20H0z%22/%3E%3C/g%3E%3C/svg%3E)] opacity-30"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Icon name="Truck" size={64} className="text-orange-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
          СтройМатериалы
          <span className="block text-orange-500 text-3xl md:text-4xl mt-2">
            ПОСТАВКА И ДОСТАВКА
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Качественные строительные материалы с доставкой самосвалами по всему
          региону
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать звонок
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
          >
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
