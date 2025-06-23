import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <Icon name="Truck" size={32} className="text-orange-500" />
            <div className="text-white">
              <h2 className="text-xl font-bold">СтройМатериалы</h2>
              <p className="text-xs text-gray-300">ПОСТАВКА И ДОСТАВКА</p>
            </div>
          </div>

          {/* Навигационное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              className="text-white hover:text-orange-500 hover:bg-transparent"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-orange-500 hover:bg-transparent"
            >
              Материалы
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-orange-500 hover:bg-transparent"
            >
              Услуги
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-orange-500 hover:bg-transparent"
            >
              Контакты
            </Button>
          </nav>

          {/* Мобильное меню */}
          <Button variant="ghost" className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
