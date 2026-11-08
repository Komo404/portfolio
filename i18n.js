const translations = {
  en: {
    navLabel: "Primary navigation",
    menuLabel: "Select language",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    languageLabel: "Language",
    role: "Software Engineer",
    heroTitle: "Applied Engineering in Software.",
    heroIntro: "Hello, I'm Miguel. A Software Engineering student.",
    aboutEyebrow: "About me",
    aboutTitle: "Hi, I'm Miguel.",
    aboutDescription: "I'm a Software Engineering student. I like to design and develop projects.",
    aboutCurrent: "Currently, I'm developing a backend server.",
    projectsEyebrow: "Selected projects",
    projectsTitle: "Featured projects",
    projectImage: "Project image",
    projectTitle1: "BootStrapper",
    projectDescription1: "A desktop application built with C# and Avalonia.",
    projectTag1: "ASP.NET, C#, Avalonia",
    projectTitle2: "NamaStream",
    projectDescription2: "A backend service built with Hono and JavaScript.",
    projectTag2: "Hono, JavaScript, Node.js",
    projectTitle3: "Event-Driven System",
    projectDescription3: "An event-driven system built with .NET and RabbitMQ.",
    projectTag3: "C#, .NET, RabbitMQ",
    skillsEyebrow: "What I do",
    skillsTitle: "Skills",
    skill1: "ASP.NET",
    skill2: "C#",
    skill3: "Avalonia",
    skill4: "JavaScript",
    skill5: "Node.js",
    contactEyebrow: "Let's talk",
    contactTitle: "Interested in something?",
    contactDescription: "I'm available for new opportunities.",
    footer: "© 2026 Miguel.",
    pageTitle: "Miguel | Portfolio",
    pageDescription: "Portfolio: software engineering projects and skills."
    
  },
  "pt-BR": {
    navLabel: "Navegação principal",
    menuLabel: "Selecionar idioma",
    navAbout: "Sobre",
    navProjects: "Projetos",
    navSkills: "Habilidades",
    navContact: "Contato",
    languageLabel: "Idioma",
    role: "Engenheiro de Software",
    heroTitle: "Engenharia aplicada ao desenvolvimento de software.",
    heroIntro: "Olá, sou Miguel, estudante de Engenharia de Software.",
    aboutEyebrow: "Sobre mim",
    aboutTitle: "Olá, sou Miguel.",
    aboutDescription: "Sou estudante de Engenharia de Software e gosto de projetar e desenvolver projetos.",
    aboutCurrent: "Atualmente, estou desenvolvendo um servidor backend.",
    projectsEyebrow: "Projetos selecionados",
    projectsTitle: "Projetos em destaque",
    projectImage: "Imagem do projeto",
    projectTitle1: "BootStrapper",
    projectDescription1: "Aplicativo desktop desenvolvido com C# e Avalonia.",
    projectTag1: "ASP.NET, C#, Avalonia",
    projectTitle2: "NamaStream",
    projectDescription2: "Serviço backend desenvolvido com Hono e JavaScript.",
    projectTag2: "Hono, JavaScript, Node.js",
    projectTitle3: "Event-Driven System",
    projectDescription3: "Sistema orientado a eventos desenvolvido com .NET e RabbitMQ.",
    projectTag3: "C#, .NET, RabbitMQ",
    skillsEyebrow: "O que faço",
    skillsTitle: "Habilidades",
    skill1: "ASP.NET",
    skill2: "C#",
    skill3: "Avalonia",
    skill4: "JavaScript",
    skill5: "Node.js",
    contactEyebrow: "Vamos conversar",
    contactTitle: "Se interessou em algo?",
    contactDescription: "Estou disponível para novas oportunidades.",
    footer: "© 2026 Miguel.",
    pageTitle: "Miguel | Portfólio",
    pageDescription: "Portfólio: Projetos e habilidades em Engenharia de Software."
  },
  ja: {
    navLabel: "メインナビゲーション",
    menuLabel: "言語を選択",
    navAbout: "プロフィール",
    navProjects: "プロジェクト",
    navSkills: "スキル",
    navContact: "お問い合わせ",
    languageLabel: "言語",
    role: "ソフトウェアエンジニア",
    heroTitle: "ソフトウェア開発に、工学の力を。",
    heroIntro: "こんにちは、ミゲルです。ソフトウェア工学を学んでいます。",
    aboutEyebrow: "プロフィール",
    aboutTitle: "ミゲルです。",
    aboutDescription: "ソフトウェア工学を学びながら、プロジェクトの設計や開発に取り組んでいます。",
    aboutCurrent: "現在、バックエンドサーバーを開発しています。",
    projectsEyebrow: "制作したプロジェクト",
    projectsTitle: "注目のプロジェクト",
    projectImage: "プロジェクトの画像",
    projectTitle1: "BootStrapper",
    projectDescription1: "C#とAvaloniaで開発したデスクトップアプリケーションです。",
    projectTag1: "ASP.NET、C#、Avalonia",
    projectTitle2: "NamaStream",
    projectDescription2: "HonoとJavaScriptで開発したバックエンドサービスです。",
    projectTag2: "Hono、JavaScript、Node.js",
    projectTitle3: "イベント駆動システム",
    projectDescription3: ".NETとRabbitMQを使用したイベント駆動システムです。",
    projectTag3: "C#、.NET、RabbitMQ",
    skillsEyebrow: "できること",
    skillsTitle: "スキル",
    skill1: "ASP.NET",
    skill2: "C#",
    skill3: "Avalonia",
    skill4: "JavaScript",
    skill5: "Node.js",
    contactEyebrow: "お問い合わせ",
    contactTitle: "気になるものはありましたか？",
    contactDescription: "新しい機会を歓迎しています。",
    footer: "© 2026 Miguel.",
    pageTitle: "ミゲル | ポートフォリオ",
    pageDescription: "ミゲルのポートフォリオ：ソフトウェア工学のプロジェクトとスキル。"
  }
};

const languageToggle = document.querySelector("#language-toggle");
const languageMenu = document.querySelector("#language-menu");
const languageOptions = languageMenu.querySelectorAll("[data-language]");
const supportedLanguages = Object.keys(translations);
let currentLanguage = supportedLanguages.includes(document.documentElement.lang) ? document.documentElement.lang : "en";

function changeLanguage(language) 
{
  const content = translations[language];

  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = content[element.dataset.i18n];
  });

  document.title = content.pageTitle;
  document.querySelector('meta[name="description"]').content = content.pageDescription;
  document.querySelector("nav").setAttribute("aria-label", content.navLabel);
  languageMenu.setAttribute("aria-label", content.menuLabel);
  document.querySelectorAll('[data-i18n="projectImage"]').forEach((element) => {
    element.setAttribute("aria-label", content.projectImage);
  });

  languageOptions.forEach((option) => {
    option.setAttribute("aria-pressed", String(option.dataset.language === language));
  });

  currentLanguage = language;
}

languageToggle.addEventListener("click", () => {
  const isExpanded = languageToggle.getAttribute("aria-expanded") === "true";

  languageToggle.setAttribute("aria-expanded", String(!isExpanded));
  languageMenu.hidden = isExpanded;
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    changeLanguage(option.dataset.language);
    languageToggle.setAttribute("aria-expanded", "false");
    languageMenu.hidden = true;
    languageToggle.focus();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-picker")) {
    languageToggle.setAttribute("aria-expanded", "false");
    languageMenu.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !languageMenu.hidden) {
    languageToggle.setAttribute("aria-expanded", "false");
    languageMenu.hidden = true;
    languageToggle.focus();
  }
});

changeLanguage(currentLanguage);