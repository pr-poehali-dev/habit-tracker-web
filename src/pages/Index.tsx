import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: 'PlusCircle',
      title: 'Добавление за 2 клика',
      description: 'Создавайте новые привычки мгновенно. Никаких длинных форм и настроек.',
    },
    {
      icon: 'CheckCircle2',
      title: 'Ежедневные отметки',
      description: 'Отмечайте выполнение каждый день одним касанием. Просто и быстро.',
    },
    {
      icon: 'Calendar',
      title: 'Визуальный календарь',
      description: 'Смотрите историю выполнения на календаре. Наглядно и мотивирующе.',
    },
    {
      icon: 'TrendingUp',
      title: 'Графики прогресса',
      description: 'Отслеживайте интенсивность выполнения за последние 30 дней.',
    },
    {
      icon: 'BarChart3',
      title: 'Статистика и стрики',
      description: 'Узнайте сколько дней подряд вы выполняли каждую привычку.',
    },
    {
      icon: 'Zap',
      title: 'Без регистрации',
      description: 'Начните сразу. Все данные сохраняются локально в вашем браузере.',
    },
  ];

  const benefits = [
    {
      title: 'Молниеносная скорость',
      description: 'Добавляйте привычки и отмечайте выполнение за секунды',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Работает в браузере',
      description: 'Не нужно ничего скачивать и обновлять',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'PWA приложение',
      description: 'Установите на телефон или ПК и пользуйтесь как обычным приложением',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const faqItems = [
    {
      question: 'Нужна ли регистрация?',
      answer: 'Нет! Habit Track работает без регистрации. Все ваши данные сохраняются локально в браузере.',
    },
    {
      question: 'Как перенести данные на другое устройство?',
      answer: 'В настройках есть функция экспорта профиля. Вы можете перенести профиль просто скопировав ссылку профиля или отсканировав QR код в настройках.',
    },
    {
      question: 'Есть ли у вас приложение для телефона?',
      answer: 'Скачивать ничего не нужно! Habit Track работает прямо в браузере. Но вы можете установить его как PWA приложение на главный экран — оно будет работать как обычное приложение.',
    },
    {
      question: 'Как установить как приложение?',
      answer: 'Откройте сайт в браузере и нажмите "Установить" в адресной строке. Приложение появится на главном экране.',
    },
    {
      question: 'Что делать, если я потерял доступ к профилю?',
      answer: 'Если вы сохранили ссылку профиля или QR код, просто откройте её на новом устройстве. Все привычки и статистика восстановятся автоматически.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl">✨</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Habit Track</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-foreground/70 hover:text-foreground transition-colors">Возможности</button>
              <button onClick={() => scrollToSection('benefits')} className="text-foreground/70 hover:text-foreground transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground/70 hover:text-foreground transition-colors">FAQ</button>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <a href="https://youmay.ru/app/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Rocket" className="mr-2" size={18} />
                  Начать
                </a>
              </Button>
            </div>
            <Button asChild size="sm" className="md:hidden bg-gradient-to-r from-purple-600 to-blue-600">
              <a href="https://youmay.ru/app/" target="_blank" rel="noopener noreferrer">
                Начать
              </a>
            </Button>
          </div>
        </div>
      </nav>
      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden -mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-10 animate-gradient bg-200"></div>
        <div className="relative z-10 animate-fade-in px-4">
            <div className="mb-6 inline-block">
              <div className="text-6xl mb-4 animate-scale-in">✨</div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Трекер
              <br />
              Привычек
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создавайте полезные привычки за 2 клика. Отслеживайте прогресс каждый день.
              Достигайте целей с визуальной мотивацией.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                <a href="https://youmay.ru/app/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Rocket" className="mr-2" size={24} />
                  Начать бесплатно
                </a>
              </Button>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <section id="features" className="py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Возможности
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Все что нужно для формирования привычек в одном месте
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-2"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 transition-opacity duration-300 ${
                    isHovered === index ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="benefits" className="py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Преимущества
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему Habit Tracker — лучший выбор для отслеживания привычек
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                <Card className="relative bg-white/90 backdrop-blur-sm border-0 h-full transition-transform duration-300 group-hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-3xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о Habit Tracker
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 border-2 hover:border-purple-300 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="cta" className="py-20">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 animate-gradient bg-200"></div>
            <div className="relative z-10 text-center py-20 px-4">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Начните прямо сейчас
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам людей, которые уже изменили свою жизнь с Habit Track
              </p>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              >
                <a href="https://youmay.ru/app/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Sparkles" className="mr-2" size={24} />
                  Создать первую привычку
                </a>
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <Icon name="Heart" size={20} className="text-pink-500" />
            <p>Сделано с любовью для ваших целей</p>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Habit Track. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;