import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero секция */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            О нашей компании
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Мы — надёжный поставщик строительных материалов с многолетним опытом
            работы на рынке
          </p>
        </div>
      </section>

      {/* Основная информация */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Наша история
              </h2>
              <p className="text-gray-600 mb-4">
                Компания "СтройМатериалы" работает на строительном рынке уже
                более 15 лет. За это время мы зарекомендовали себя как надёжный
                партнёр для строительных компаний и частных застройщиков.
              </p>
              <p className="text-gray-600 mb-6">
                Наш опыт и профессионализм позволяют нам предоставлять
                качественные материалы и услуги, которые соответствуют самым
                высоким стандартам.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=400&fit=crop"
                alt="Наша команда"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Качество</h3>
              <p className="text-gray-600">
                Все материалы имеют сертификаты качества и соответствуют ГОСТ
                стандартам
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Доставка</h3>
              <p className="text-gray-600">
                Быстрая доставка по городу и области собственным транспортом
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Опыт</h3>
              <p className="text-gray-600">
                Более 15 лет успешной работы и тысячи довольных клиентов
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
