export interface Lesson {
    id: number;
    title: string;
    description: string;
    content: string;
    duration: string;
    category: "HTML/CSS" | "JavaScript";
  }
  
  export const lessons: Lesson[] = [
    {
      id: 1,
      title: "Введение в HTML",
      description: "Основы HTML разметки",
      content: "HTML - основной язык разметки веб-страниц. В этом уроке вы узнаете о базовой структуре HTML документа.",
      duration: "20 минут",
      category: "HTML/CSS"
    },
    {
      id: 2,
      title: "Структура HTML документа",
      description: "Изучение основных тегов HTML",
      content: "Изучение базовой структуры HTML документа и основных тегов.",
      duration: "25 минут",
      category: "HTML/CSS"
    },
    {
      id: 3,
      title: "Работа с текстом в HTML",
      description: "Текстовые элементы и форматирование",
      content: "Изучение текстовых тегов и их применение.",
      duration: "30 минут",
      category: "HTML/CSS"
    },
    {
      id: 4,
      title: "Списки и таблицы",
      description: "Создание списков и таблиц в HTML",
      content: "Работа со списками и таблицами в HTML.",
      duration: "35 минут",
      category: "HTML/CSS"
    },
    {
      id: 5,
      title: "Ссылки и изображения",
      description: "Работа с ссылками и изображениями",
      content: "Добавление ссылок и изображений на веб-страницу.",
      duration: "30 минут",
      category: "HTML/CSS"
    },
    {
      id: 6,
      title: "Формы в HTML",
      description: "Создание и работа с формами",
      content: "Изучение элементов форм и их использование.",
      duration: "40 минут",
      category: "HTML/CSS"
    },
    {
      id: 7,
      title: "Введение в CSS",
      description: "Основы CSS стилей",
      content: "Базовые принципы работы с CSS.",
      duration: "25 минут",
      category: "HTML/CSS"
    },
    {
      id: 8,
      title: "Селекторы CSS",
      description: "Изучение селекторов CSS",
      content: "Работа с различными типами селекторов в CSS.",
      duration: "35 минут",
      category: "HTML/CSS"
    },
    {
      id: 9,
      title: "Цвета и фоны",
      description: "Работа с цветами и фонами в CSS",
      content: "Изучение свойств цвета и фона в CSS.",
      duration: "30 минут",
      category: "HTML/CSS"
    },
    {
      id: 10,
      title: "Блочная модель CSS",
      description: "Изучение блочной модели",
      content: "Понимание блочной модели CSS и её свойств.",
      duration: "40 минут",
      category: "HTML/CSS"
    },
    {
      id: 11,
      title: "Позиционирование элементов",
      description: "Работа с позиционированием в CSS",
      content: "Изучение различных способов позиционирования элементов.",
      duration: "45 минут",
      category: "HTML/CSS"
    },
    {
      id: 12,
      title: "Flexbox",
      description: "Изучение Flexbox layout",
      content: "Работа с Flexbox для создания гибких макетов.",
      duration: "50 минут",
      category: "HTML/CSS"
    },
    {
      id: 13,
      title: "Grid Layout",
      description: "Изучение Grid layout",
      content: "Создание сеточных макетов с помощью Grid.",
      duration: "50 минут",
      category: "HTML/CSS"
    },
    {
      id: 14,
      title: "Адаптивный дизайн",
      description: "Основы адаптивного дизайна",
      content: "Создание адаптивных веб-страниц.",
      duration: "45 минут",
      category: "HTML/CSS"
    },
    {
      id: 15,
      title: "Анимации в CSS",
      description: "Работа с анимациями",
      content: "Создание анимаций с помощью CSS.",
      duration: "40 минут",
      category: "HTML/CSS"
    },
    {
      id: 16,
      title: "Трансформации и переходы",
      description: "CSS трансформации и переходы",
      content: "Изучение трансформаций и переходов в CSS.",
      duration: "35 минут",
      category: "HTML/CSS"
    },
    {
      id: 17,
      title: "Псевдоклассы и псевдоэлементы",
      description: "Работа с псевдоклассами",
      content: "Использование псевдоклассов и псевдоэлементов в CSS.",
      duration: "40 минут",
      category: "HTML/CSS"
    },
    {
      id: 18,
      title: "CSS переменные",
      description: "Работа с CSS переменными",
      content: "Использование CSS переменных для гибкой стилизации.",
      duration: "30 минут",
      category: "HTML/CSS"
    },
  
    {
      id: 19,
      title: "CSS препроцессоры",
      description: "Изучение SASS/SCSS",
      content: "Использование препроцессоров CSS для улучшения процесса разработки.",
      duration: "45 минут",
      category: "HTML/CSS"
    },
    {
      id: 20,
      title: "CSS Методологии",
      description: "BEM и другие методологии",
      content: "Изучение методологий написания CSS кода.",
      duration: "40 минут",
      category: "HTML/CSS"
    },
    {
      id: 21,
      title: "Оптимизация CSS",
      description: "Оптимизация стилей",
      content: "Методы оптимизации CSS кода для улучшения производительности.",
      duration: "35 минут",
      category: "HTML/CSS"
    },
    {
      id: 22,
      title: "CSS Custom Properties",
      description: "Пользовательские свойства",
      content: "Работа с пользовательскими свойствами в CSS.",
      duration: "30 минут",
      category: "HTML/CSS"
    },
    {
      id: 23,
      title: "CSS Grid Advanced",
      description: "Продвинутые техники Grid",
      content: "Углубленное изучение CSS Grid Layout.",
      duration: "50 минут",
      category: "HTML/CSS"
    },
    {
      id: 24,
      title: "CSS Flexbox Advanced",
      description: "Продвинутые техники Flexbox",
      content: "Углубленное изучение CSS Flexbox.",
      duration: "45 минут",
      category: "HTML/CSS"
    },
    {
      id: 25,
      title: "Responsive Images",
      description: "Адаптивные изображения",
      content: "Работа с адаптивными изображениями в веб-разработке.",
      duration: "40 минут",
      category: "HTML/CSS"
    },
    {
      id: 26,
      title: "CSS Animations Advanced",
      description: "Продвинутые анимации",
      content: "Создание сложных анимаций с помощью CSS.",
      duration: "45 минут",
      category: "HTML/CSS"
    },
    {
      id: 27,
      title: "CSS Architecture",
      description: "Архитектура CSS",
      content: "Построение масштабируемой архитектуры CSS.",
      duration: "50 минут",
      category: "HTML/CSS"
    },
    {
      id: 28,
      title: "CSS Performance",
      description: "Производительность CSS",
      content: "Оптимизация производительности CSS.",
      duration: "40 минут",
      category: "HTML/CSS"
    },
    {
      id: 29,
      title: "Введение в JavaScript",
      description: "Основы JavaScript",
      content: "Базовые концепции JavaScript и его роль в веб-разработке.",
      duration: "45 минут",
      category: "JavaScript"
    },
    {
      id: 30,
      title: "Переменные и типы данных",
      description: "Работа с переменными в JavaScript",
      content: "Изучение переменных и типов данных в JavaScript.",
      duration: "40 минут",
      category: "JavaScript"
    },
    {
      id: 31,
      title: "Операторы и условия",
      description: "Условные конструкции",
      content: "Работа с операторами и условными конструкциями.",
      duration: "35 минут",
      category: "JavaScript"
    },
    {
      id: 32,
      title: "Функции в JavaScript",
      description: "Углубленное изучение функций",
      content: "Создание и использование функций в JavaScript.",
      duration: "45 минут",
      category: "JavaScript"
    },
    {
      id: 33,
      title: "Объекты и массивы",
      description: "Работа с объектами и массивами",
      content: "Изучение объектов и массивов в JavaScript.",
      duration: "50 минут",
      category: "JavaScript"
    },
    {
      id: 34,
      title: "DOM манипуляции",
      description: "Работа с DOM",
      content: "Манипуляции с DOM элементами в JavaScript.",
      duration: "45 минут",
      category: "JavaScript"
    },
    {
      id: 35,
      title: "События в JavaScript",
      description: "Обработка событий",
      content: "Работа с событиями в JavaScript.",
      duration: "40 минут",
      category: "JavaScript"
    },
    {
      id: 36,
      title: "Асинхронный JavaScript",
      description: "Промисы и async/await",
      content: "Изучение асинхронного программирования в JavaScript.",
      duration: "55 минут",
      category: "JavaScript"
    },
    {
      id: 37,
      title: "ES6+ возможности",
      description: "Современный JavaScript",
      content: "Изучение современных возможностей JavaScript.",
      duration: "50 минут",
      category: "JavaScript"
    },
    {
      id: 38,
      title: "JavaScript модули",
      description: "Работа с модулями",
      content: "Изучение модульной системы JavaScript.",
      duration: "45 минут",
      category: "JavaScript"
    }
  ];