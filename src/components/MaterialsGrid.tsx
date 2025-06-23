import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const materials = [
  {
    name: "Песок",
    description: "Качественный песок для строительных и отделочных работ",
    icon: "Mountain",
    price: "от 800₽/м³",
  },
  {
    name: "Щебень гранитный",
    description: "Прочный гранитный щебень различных фракций",
    icon: "Diamond",
    price: "от 1200₽/м³",
  },
  {
    name: "Щебень гравийный",
    description: "Универсальный гравийный щебень для дорожных работ",
    icon: "Circle",
    price: "от 900₽/м³",
  },
  {
    name: "Щебень вторичный",
    description: "Экономичный вторичный щебень из переработанного бетона",
    icon: "Recycle",
    price: "от 600₽/м³",
  },
  {
    name: "Щебень известняковый",
    description: "Известняковый щебень для дренажа и благоустройства",
    icon: "Layers",
    price: "от 750₽/м³",
  },
  {
    name: "Плодородный грунт",
    description: "Плодородная земля для садовых и ландшафтных работ",
    icon: "Sprout",
    price: "от 500₽/м³",
  },
  {
    name: "Планировочный грунт",
    description: "Грунт для планировки и выравнивания участков",
    icon: "Square",
    price: "от 400₽/м³",
  },
  {
    name: "Чернозем",
    description: "Высококачественный чернозем для посадок",
    icon: "Leaf",
    price: "от 700₽/м³",
  },
  {
    name: "Глина",
    description: "Строительная глина для различных целей",
    icon: "Palette",
    price: "от 350₽/м³",
  },
  {
    name: "Кирпичный бой",
    description: "Измельченный кирпич для подсыпки и дренажа",
    icon: "Box",
    price: "от 300₽/м³",
  },
  {
    name: "Асфальтная крошка",
    description: "Переработанный асфальт для временных дорог",
    icon: "Route",
    price: "от 450₽/м³",
  },
];

const MaterialsGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-montserrat">
            Строительные материалы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент качественных материалов для любых строительных
            задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Icon
                      name={material.icon}
                      size={32}
                      className="text-orange-600"
                    />
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">
                  {material.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 min-h-[40px]">
                  {material.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center">
                  <p className="text-xl font-bold text-orange-600 mb-3">
                    {material.price}
                  </p>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsGrid;
