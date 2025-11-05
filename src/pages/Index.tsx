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
      icon: 'Zap',
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
      icon: 'BarChart3',
      title: 'Статистика и стрики',
      description: 'Узнайте сколько дней подряд вы выполняли каждую привычку.',
    },
    {
      icon: 'TrendingUp',
      title: 'Графики за 30 дней',
      description: 'Отслеживайте интенсивность выполнения за последний месяц.',
    },
    {
      icon: 'Lock',
      title: 'Без регистрации',
      description: 'Начните сразу. Все данные сохраняются в вашем браузере.',
    },
  ];

  const benefits = [
    {
      icon: 'Smartphone',
      title: 'PWA приложение',
      description: 'Установите на телефон или ПК как обычное приложение. Работает офлайн.',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: 'Share2',
      title: 'Перенос на другое устройство',
      description: 'Скопируйте ссылку профиля или QR-код и продолжайте на любом устройстве.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'Database',
      title: 'Локальное хранение',
      description: 'Все данные остаются у вас. Никаких серверов, никаких утечек.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Добавьте привычку',
      description: 'Нажмите кнопку и введите название. Готово!',
      icon: 'PlusCircle',
    },
    {
      step: '2',
      title: 'Отмечайте каждый день',
      description: 'Одно касание — и день выполнения записан в календарь.',
      icon: 'CheckSquare',
    },
    {
      step: '3',
      title: 'Смотрите прогресс',
      description: 'Календарь, графики и статистика покажут ваш путь к успеху.',
      icon: 'LineChart',
    },
  ];

  const faqItems = [
    {
      question: 'Нужна ли регистрация?',
      answer: 'Нет! Habit Tracker работает без регистрации. Все ваши данные сохраняются локально в браузере. Просто откройте сайт и начните отслеживать привычки.',
    },
    {
      question: 'Как перенести данные на другое устройство?',
      answer: 'В настройках есть функция переноса профиля. Вы можете скопировать специальную ссылку или отсканировать QR-код на новом устройстве — все привычки и статистика перенесутся автоматически.',
    },
    {
      question: 'Что такое PWA приложение?',
      answer: 'PWA (Progressive Web App) — это веб-приложение, которое работает как обычное. Вы можете установить Habit Tracker на главный экран телефона или ПК через браузер, и оно будет работать даже без интернета.',
    },
    {
      question: 'Как установить приложение на телефон?',
      answer: 'Откройте сайт в браузере Chrome или Safari. В меню браузера найдите пункт "Установить приложение" или "Добавить на главный экран". Приложение появится на экране как обычное.',
    },
    {
      question: 'Безопасны ли мои данные?',
      answer: 'Да! Все данные хранятся только на вашем устройстве. Мы не собираем и не передаём информацию на серверы. Ваши привычки остаются вашими.',
    },
    {
      question: 'Что делать, если я потерял доступ к профилю?',
      answer: 'Если вы сохранили ссылку профиля или QR-код, просто откройте её на новом устройстве. Все привычки и статистика восстановятся. Рекомендуем сохранить ссылку в облаке или отправить себе на почту.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Habit Track</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-foreground/70 hover:text-foreground transition-colors">Возможности</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-foreground/70 hover:text-foreground transition-colors">Как работает</button>
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

      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative z-10 animate-fade-in px-4 max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center animate-scale-in shadow-2xl">
              <Icon name="Target" size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Бесплатный<br />Трекер Привычек
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Создавайте полезные привычки за 2 клика. Отслеживайте прогресс на визуальном календаре. 
            Достигайте целей с понятной статистикой и графиками.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <a href="https://youmay.ru/app/" target="_blank" rel="noopener noreferrer">
                <Icon name="Rocket" className="mr-2" size={24} />
                Начать бесплатно
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-white hover:text-foreground transition-all duration-300"
            >
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>
                <Icon name="Play" className="mr-2" size={24} />
                Как это работает
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">2 клика</div>
              <div className="text-sm text-muted-foreground">Добавить привычку</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">30 дней</div>
              <div className="text-sm text-muted-foreground">График интенсивности</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">0₽</div>
              <div className="text-sm text-muted-foreground">Полностью бесплатно</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <section id="features" className="py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Всё для отслеживания привычек
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простые и мощные инструменты в одном месте
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
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                    <Icon name={feature.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Как это работает
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Три простых шага к новым привычкам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold text-white shadow-xl">
                    {item.step}
                  </div>
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Icon name={item.icon} size={24} className="text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Почему Habit Tracker
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные технологии для вашего удобства
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient}`}></div>
                <CardHeader className="pt-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={benefit.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о Habit Tracker
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-xl px-6 bg-white/50 backdrop-blur">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="cta" className="py-20">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"></div>
            <div className="relative z-10 text-center py-16 md:py-20 px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Начните создавать привычки прямо сейчас
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Регистрация не нужна. Все данные сохраняются в вашем браузере. 
                Установите как приложение и пользуйтесь в любое время.
              </p>
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <a href="https://youmay.ru/app/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  <span className="hidden sm:inline">Создать первую привычку</span>
                  <span className="sm:hidden">Создать привычку</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Icon name="Target" size={24} />
              </div>
              <span className="text-2xl font-bold">Habit Track</span>
            </div>
            <div className="text-center md:text-right text-white/70">
              <p>© 2024 Habit Tracker. Все привычки под контролем.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;