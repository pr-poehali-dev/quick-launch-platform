import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('ecommerce');
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Rocket" size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl">LaunchPad</span>
          </div>
          
          <div className="hidden md:flex gap-6">
            {['Главная', 'Возможности', 'Тарифы', 'Кейсы', 'Документация', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <Button>Начать бесплатно</Button>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-scale-in" variant="secondary">
            Запустите бизнес за 24 часа
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Платформа для быстрого<br />запуска онлайн бизнеса
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Технологичное решение с акцентом на инновации. Техподдержка 24/7 и полные обучающие материалы для вашего успеха.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8">
              Попробовать бесплатно
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Смотреть демо
              <Icon name="Play" size={20} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { number: '10K+', label: 'Активных пользователей' },
              { number: '99.9%', label: 'Время работы' },
              { number: '24/7', label: 'Поддержка' },
              { number: '<1ч', label: 'Время запуска' },
            ].map((stat) => (
              <div key={stat.label} className="animate-scale-in">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="возможности" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Всё необходимое для старта</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексное решение для создания и масштабирования вашего онлайн бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Zap',
                title: 'Быстрый старт',
                description: 'Запустите бизнес за считанные часы с готовыми шаблонами и инструментами'
              },
              {
                icon: 'Shield',
                title: 'Безопасность',
                description: 'Защита данных на уровне банка с шифрованием и резервным копированием'
              },
              {
                icon: 'TrendingUp',
                title: 'Аналитика',
                description: 'Глубокая аналитика продаж, конверсий и поведения пользователей'
              },
              {
                icon: 'Users',
                title: 'CRM система',
                description: 'Управление клиентами и автоматизация маркетинга в одном месте'
              },
              {
                icon: 'CreditCard',
                title: 'Приём платежей',
                description: 'Интеграция со всеми популярными платёжными системами'
              },
              {
                icon: 'Smartphone',
                title: 'Мобильная версия',
                description: 'Адаптивный дизайн и мобильное приложение для управления на ходу'
              },
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="тарифы" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите тип бизнеса</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Специализированные решения для вашей ниши. Прозрачные цены без скрытых комиссий
            </p>
          </div>

          <Tabs defaultValue="ecommerce" className="max-w-6xl mx-auto" onValueChange={(value) => setSelectedCategory(value)}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto">
              <TabsTrigger value="ecommerce" className="flex flex-col items-center gap-2 py-4">
                <Icon name="ShoppingCart" size={24} />
                <span className="text-sm font-medium">Онлайн-магазин</span>
              </TabsTrigger>
              <TabsTrigger value="booking" className="flex flex-col items-center gap-2 py-4">
                <Icon name="Calendar" size={24} />
                <span className="text-sm font-medium">Бронирование услуг</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex flex-col items-center gap-2 py-4">
                <Icon name="GraduationCap" size={24} />
                <span className="text-sm font-medium">Онлайн-курсы</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ecommerce" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Старт',
                    price: '0',
                    period: 'навсегда',
                    description: 'Для тестирования идеи',
                    features: ['До 50 товаров', 'До 100 заказов/мес', 'Базовая аналитика', 'Каталог и корзина', 'Email поддержка'],
                    highlighted: false,
                  },
                  {
                    name: 'Магазин',
                    price: '3,990',
                    period: 'в месяц',
                    description: 'Для растущего магазина',
                    features: ['До 500 товаров', 'До 1000 заказов/мес', 'Интеграция с оплатой', 'Управление складом', 'CRM и промокоды', 'Поддержка 24/7'],
                    highlighted: true,
                  },
                  {
                    name: 'Маркетплейс',
                    price: '12,990',
                    period: 'в месяц',
                    description: 'Для масштабной торговли',
                    features: ['Неограниченно товаров', 'Неограниченно заказов', 'Мультивалютность', 'AI рекомендации', 'Интеграция с 1С', 'Персональный менеджер'],
                    highlighted: false,
                  },
                ].map((plan) => (
                  <Card key={plan.name} className={`relative ${plan.highlighted ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                          Популярный
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price} ₽</span>
                        <span className="text-muted-foreground ml-2">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full mb-6" variant={plan.highlighted ? 'default' : 'outline'}>
                        Выбрать план
                      </Button>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="booking" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Старт',
                    price: '0',
                    period: 'навсегда',
                    description: 'Для начинающих',
                    features: ['1 специалист', 'До 50 записей/мес', 'Календарь записи', 'SMS уведомления', 'Email поддержка'],
                    highlighted: false,
                  },
                  {
                    name: 'Бизнес',
                    price: '2,490',
                    period: 'в месяц',
                    description: 'Для сервисного бизнеса',
                    features: ['До 10 специалистов', 'До 500 записей/мес', 'Онлайн-оплата', 'CRM клиентов', 'Управление графиком', 'Поддержка 24/7'],
                    highlighted: true,
                  },
                  {
                    name: 'Сеть',
                    price: '8,990',
                    period: 'в месяц',
                    description: 'Для сети филиалов',
                    features: ['Неограниченно специалистов', 'Неограниченно записей', 'Мультифилиальность', 'AI оптимизация загрузки', 'Программа лояльности', 'Персональный менеджер'],
                    highlighted: false,
                  },
                ].map((plan) => (
                  <Card key={plan.name} className={`relative ${plan.highlighted ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                          Популярный
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price} ₽</span>
                        <span className="text-muted-foreground ml-2">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full mb-6" variant={plan.highlighted ? 'default' : 'outline'}>
                        Выбрать план
                      </Button>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="courses" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Старт',
                    price: '0',
                    period: 'навсегда',
                    description: 'Для первого курса',
                    features: ['1 курс', 'До 50 студентов', 'Видео-уроки', 'Тесты и задания', 'Email поддержка'],
                    highlighted: false,
                  },
                  {
                    name: 'Школа',
                    price: '4,990',
                    period: 'в месяц',
                    description: 'Для онлайн-школы',
                    features: ['До 20 курсов', 'До 500 студентов', 'Вебинары и трансляции', 'Сертификаты', 'Геймификация', 'Поддержка 24/7'],
                    highlighted: true,
                  },
                  {
                    name: 'Академия',
                    price: '14,990',
                    period: 'в месяц',
                    description: 'Для крупной платформы',
                    features: ['Неограниченно курсов', 'Неограниченно студентов', 'AI наставник', 'Мобильное приложение', 'White label', 'Персональный менеджер'],
                    highlighted: false,
                  },
                ].map((plan) => (
                  <Card key={plan.name} className={`relative ${plan.highlighted ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                          Популярный
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price} ₽</span>
                        <span className="text-muted-foreground ml-2">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full mb-6" variant={plan.highlighted ? 'default' : 'outline'}>
                        Выбрать план
                      </Button>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="кейсы" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Кейсы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                company: 'TechStore',
                industry: 'E-commerce',
                result: '+340%',
                metric: 'рост продаж',
                description: 'Запустили интернет-магазин за 12 часов и утроили выручку за квартал',
                avatar: '🛍️'
              },
              {
                company: 'EduPlatform',
                industry: 'Образование',
                result: '5000+',
                metric: 'студентов',
                description: 'Построили образовательную платформу и привлекли тысячи учеников',
                avatar: '📚'
              },
              {
                company: 'FitnessPro',
                industry: 'Фитнес',
                result: '+280%',
                metric: 'конверсия',
                description: 'Автоматизировали запись и повысили продажи абонементов',
                avatar: '💪'
              },
            ].map((caseItem) => (
              <Card key={caseItem.company} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl">
                      {caseItem.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{caseItem.company}</CardTitle>
                      <CardDescription>{caseItem.industry}</CardDescription>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <div className="text-3xl font-bold text-primary">{caseItem.result}</div>
                    <div className="text-sm text-muted-foreground">{caseItem.metric}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="документация" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Документация</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">База знаний</h2>
            <p className="text-xl text-muted-foreground">
              Всё что нужно для успешного старта и масштабирования
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <Icon name="BookOpen" size={32} className="text-primary mb-4" />
                <CardTitle>Быстрый старт</CardTitle>
                <CardDescription>Запустите бизнес за 30 минут</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <Icon name="Video" size={32} className="text-primary mb-4" />
                <CardTitle>Видео-уроки</CardTitle>
                <CardDescription>50+ обучающих роликов</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Как начать работу с платформой?
              </AccordionTrigger>
              <AccordionContent>
                Зарегистрируйтесь, выберите шаблон бизнеса, настройте под себя за 15 минут и начинайте принимать заказы. Наша поддержка 24/7 поможет на каждом этапе.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Какие способы оплаты доступны?
              </AccordionTrigger>
              <AccordionContent>
                Мы интегрированы со всеми популярными платёжными системами: банковские карты, электронные кошельки, СБП, рассрочка. Комиссии минимальные.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Как работает поддержка 24/7?
              </AccordionTrigger>
              <AccordionContent>
                Наша команда доступна круглосуточно через чат, email и телефон. Среднее время ответа — менее 5 минут. Для премиум-клиентов — персональный менеджер.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли перенести существующий бизнес?
              </AccordionTrigger>
              <AccordionContent>
                Да! Мы поможем мигрировать данные из других платформ бесплатно. Процесс занимает 1-2 дня, включая импорт клиентов, товаров и заказов.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы ответить на все вопросы и помочь с запуском
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Icon name="MessageSquare" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Онлайн-чат</CardTitle>
                <CardDescription>Ответим за 3 минуты</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription>support@launchpad.ru</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Телефон</CardTitle>
                <CardDescription>8 800 555-35-35</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" />
                </div>
                <div>
                  <Textarea placeholder="Расскажите о вашем проекте" rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Rocket" size={24} className="text-white" />
              </div>
              <span className="font-bold text-xl">LaunchPad</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 LaunchPad. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}