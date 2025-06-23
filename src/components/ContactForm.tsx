import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-montserrat">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Готовы обсудить ваш проект и предложить лучшие условия поставки
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Icon name="Phone" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Телефон</h3>
                  <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Icon name="Mail" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-gray-600">info@stroymaterials.ru</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Icon name="MapPin" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Адрес</h3>
                  <p className="text-gray-600">
                    г. Москва, ул. Промышленная, 12
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Icon name="Clock" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Режим работы</h3>
                  <p className="text-gray-600">
                    Пн-Пт: 8:00-18:00, Сб: 9:00-15:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-900">
                Оставить заявку
              </CardTitle>
              <CardDescription>
                Заполните форму и мы свяжемся с вами в течение часа
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (XXX) XXX-XX-XX" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="material">Материал</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите материал" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sand">Песок</SelectItem>
                    <SelectItem value="granite">Щебень гранитный</SelectItem>
                    <SelectItem value="gravel">Щебень гравийный</SelectItem>
                    <SelectItem value="secondary">Щебень вторичный</SelectItem>
                    <SelectItem value="limestone">
                      Щебень известняковый
                    </SelectItem>
                    <SelectItem value="soil">Плодородный грунт</SelectItem>
                    <SelectItem value="planning">
                      Планировочный грунт
                    </SelectItem>
                    <SelectItem value="chernozem">Чернозем</SelectItem>
                    <SelectItem value="clay">Глина</SelectItem>
                    <SelectItem value="brick">Кирпичный бой</SelectItem>
                    <SelectItem value="asphalt">Асфальтная крошка</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Опишите ваши требования: объем, адрес доставки, сроки..."
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
