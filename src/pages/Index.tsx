import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('biography');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground">
              Абдулатипов Р.Г.
            </h1>
            <div className="hidden md:flex gap-6">
              {['biography', 'achievements', 'activity', 'publications', 'news', 'gallery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-primary-foreground hover:text-secondary transition-colors font-medium"
                >
                  {section === 'biography' && 'Биография'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'activity' && 'Деятельность'}
                  {section === 'publications' && 'Публикации'}
                  {section === 'news' && 'Новости'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Абдулатипов Рамазан Гаджимурадович
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Экс-глава Республики Дагестан
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Государственный деятель, дипломат, ученый. Приглашаю к сотрудничеству в области развития регионов, межнациональных отношений и образования.
              </p>
              <Button size="lg" variant="secondary" className="font-semibold" onClick={() => scrollToSection('contacts')}>
                Связаться со мной
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-slide-in-left">
              <img
                src="https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/f94c84e6-05fb-4682-aa63-048d8b8af0ed.jpg"
                alt="Абдулатипов Р.Г."
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="biography" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">Биография</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    <strong className="text-primary">Рамазан Гаджимурадович Абдулатипов</strong> — выдающийся государственный деятель, дипломат, ученый-политолог, доктор философских наук, профессор.
                  </p>
                  <p>
                    В 2013–2017 годах занимал пост Главы Республики Дагестан. За время руководства регионом реализовал масштабные программы социально-экономического развития, укрепления межнациональных отношений и модернизации инфраструктуры.
                  </p>
                  <p>
                    Имеет богатый опыт работы на высших государственных должностях: заместитель Председателя Правительства РФ, министр по делам Федерации, национальной и миграционной политике, посол России в Республике Таджикистан.
                  </p>
                  <p>
                    Автор более 100 научных трудов по вопросам национальной политики, федерализма, межэтнических отношений. Является признанным экспертом в области государственного строительства и национальных отношений.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">Достижения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Award', title: 'Государственные награды', desc: 'Орден «За заслуги перед Отечеством» и другие высокие награды РФ' },
              { icon: 'BookOpen', title: 'Научная деятельность', desc: 'Более 100 научных публикаций, член Российской академии наук' },
              { icon: 'Users', title: 'Межнациональные отношения', desc: 'Разработка и внедрение эффективных программ этнополитики' },
              { icon: 'Building', title: 'Развитие региона', desc: 'Модернизация инфраструктуры Дагестана, рост социальных показателей' },
              { icon: 'Globe', title: 'Дипломатический опыт', desc: 'Укрепление международных связей на посту посла РФ' },
              { icon: 'GraduationCap', title: 'Образовательные проекты', desc: 'Создание образовательных программ и поддержка молодежи' }
            ].map((achievement, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={achievement.icon} className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="activity" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">Деятельность</h2>
          <Tabs defaultValue="current" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="current">Текущая</TabsTrigger>
              <TabsTrigger value="government">Государственная</TabsTrigger>
              <TabsTrigger value="scientific">Научная</TabsTrigger>
            </TabsList>
            <TabsContent value="current" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-semibold mb-4">Текущая деятельность</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Консультирование по вопросам национальной политики и федерализма</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Экспертная деятельность в области межнациональных отношений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Участие в общественных и научных проектах</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="government" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-semibold mb-4">Государственная служба</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Глава Республики Дагестан (2013-2017)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Заместитель Председателя Правительства РФ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Министр по делам Федерации и национальной политике</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Посол России в Республике Таджикистан</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="scientific" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-semibold mb-4">Научная деятельность</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Доктор философских наук, профессор</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Автор более 100 научных работ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                      <span>Эксперт по вопросам федерализма и национальных отношений</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="publications" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">Публикации</h2>
          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              { title: 'Федерализм и национальная политика', year: '2015', desc: 'Фундаментальное исследование современных проблем федерализма' },
              { title: 'Российская нация: этнокультурная и гражданская идентичность', year: '2014', desc: 'Анализ формирования общероссийской идентичности' },
              { title: 'Власть и общество: философия взаимодействия', year: '2012', desc: 'Философское осмысление государственного управления' }
            ].map((pub, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Book" className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{pub.year}</p>
                    <p className="text-muted-foreground">{pub.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">Новости</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { img: 'https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/16e1e947-129c-4770-8148-51e8e9bc96aa.jpg', title: 'Выступление на форуме "Единство народов России"', date: '15 октября 2024' },
              { img: 'https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/b9a24974-a918-4cd3-bed5-6eff1efb2288.jpg', title: 'Участие в международной конференции по межнациональным отношениям', date: '3 сентября 2024' }
            ].map((news, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img src={news.img} alt={news.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
                  <h3 className="text-xl font-heading font-semibold text-foreground">{news.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/f94c84e6-05fb-4682-aa63-048d8b8af0ed.jpg',
              'https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/16e1e947-129c-4770-8148-51e8e9bc96aa.jpg',
              'https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/b9a24974-a918-4cd3-bed5-6eff1efb2288.jpg',
              'https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/f94c84e6-05fb-4682-aa63-048d8b8af0ed.jpg',
              'https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/16e1e947-129c-4770-8148-51e8e9bc96aa.jpg',
              'https://cdn.poehali.dev/projects/0f1854e6-642d-4436-8344-7102f36950ac/files/b9a24974-a918-4cd3-bed5-6eff1efb2288.jpg'
            ].map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={img} alt={`Галерея ${idx + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">office@abdulatipov.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Москва, Российская Федерация</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t">
                    <h3 className="font-semibold text-lg mb-4">Предложения о сотрудничестве</h3>
                    <p className="text-muted-foreground mb-4">
                      Открыт для предложений по консультированию, экспертной деятельности, участию в научных и общественных проектах.
                    </p>
                    <Button size="lg" variant="default" className="w-full">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-heading font-semibold mb-2">Абдулатипов Рамазан Гаджимурадович</p>
          <p className="text-primary-foreground/80">© 2024. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
