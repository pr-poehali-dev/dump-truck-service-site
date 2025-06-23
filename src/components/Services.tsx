import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Доставка самосвалами",
    description:
      "Быстрая доставка материалов автосамосвалами грузоподъемностью от 10 до 25 тонн",
    icon: "Truck",
    features: ["10-25 тонн", "По всему региону", "Точно в срок"],
  },
  {
    title: "Почасовая аренда",
    description:
      "Аренда самосвалов с водителем для ваших строительных проектов",
    icon: "Clock",
    features: ["Опытные водители", "Гибкий график", "Выгодные тарифы"],
  },
  {
    title: "Вывоз грунта",
    description:
      "Услуги по вывозу грунта, строительного мусора и других материалов",
    icon: "Trash2",
    features: ["Быстрый вывоз", "Любые объемы", "Утилизация мусора"],
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Услуги самосвалов
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Профессиональные транспортные услуги для строительства и
            благоустройства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-500 p-4 rounded-full">
                    <Icon
                      name={service.icon}
                      size={40}
                      className="text-white"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-orange-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
