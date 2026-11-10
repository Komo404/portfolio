const translations = {
  "en": {
    "navLabel": "Primary navigation",
    "menuLabel": "Select language",
    "navOverview": "Overview",
    "navProjects": "Projects",
    "navContact": "Contact",
    "languageLabel": "Language",
    "themeToDark": "Dark mode",
    "themeToLight": "Light mode",
    "overviewTitle": "Overview",
    "overviewIntro": "Backend development with .NET and C#. Additional projects in JavaScript and desktop development.",
    "metricProjects": "Listed projects",
    "chartTitle": "Languages",
    "chartDescription": "Number of listed projects per language.",
    "chartAxisLabel": "Projects",
    "projectsTitle": "Projects",
    "projectsIntro": "All my projects",
    "viewProject": "View project",
    "projectTitle1": "BootStrapper",
    "projectDescription1": "A desktop application built with C# and Avalonia.",
    "projectTag1": "ASP.NET, C#, Avalonia",
    "projectTitle2": "NamaStream",
    "projectDescription2": "A backend service built with Hono and JavaScript.",
    "projectTag2": "Hono, JavaScript, Node.js",
    "projectTitle3": "Event-Driven System",
    "projectDescription3": "An event-driven system built with .NET and RabbitMQ.",
    "projectTag3": "C#, .NET, RabbitMQ",
    "backToProjects": "Back to projects",
    "projectType": "Type",
    "projectLanguage": "Language",
    "projectStack": "Technologies",
    "typeDesktop": "Desktop application",
    "typeBackend": "Backend service",
    "typeEvents": "Event-driven system",
    "documentationTitle": "Technical documentation",
    "documentationNote": "Architecture, implementation details, and local setup instructions will be added here.",
    "contactTitle": "Contact",
    "footer": "© 2026 Miguel.",
    "pageTitle": "Projects | Miguel",
    "pageDescription": "Software projects with a focus on .NET, C#, and backend development."
  },
  "pt-BR": {
    "navLabel": "Navegação principal",
    "menuLabel": "Selecionar idioma",
    "navOverview": "Visão geral",
    "navProjects": "Projetos",
    "navContact": "Contato",
    "languageLabel": "Idioma",
    "themeToDark": "Modo escuro",
    "themeToLight": "Modo claro",
    "overviewTitle": "Visão geral",
    "overviewIntro": "Desenvolvimento backend com .NET e C#. Projetos complementares em JavaScript e desktop.",
    "metricProjects": "Projetos listados",
    "chartTitle": "Linguagens",
    "chartDescription": "Quantidade de projetos listados por linguagem.",
    "chartAxisLabel": "Projetos",
    "projectsTitle": "Projetos",
    "projectsIntro": "Todos os meus projetos",
    "viewProject": "Ver projeto",
    "projectTitle1": "BootStrapper",
    "projectDescription1": "Aplicativo desktop desenvolvido com C# e Avalonia.",
    "projectTag1": "ASP.NET, C#, Avalonia",
    "projectTitle2": "NamaStream",
    "projectDescription2": "Serviço backend desenvolvido com Hono e JavaScript.",
    "projectTag2": "Hono, JavaScript, Node.js",
    "projectTitle3": "Event-Driven System",
    "projectDescription3": "Sistema orientado a eventos desenvolvido com .NET e RabbitMQ.",
    "projectTag3": "C#, .NET, RabbitMQ",
    "backToProjects": "Voltar aos projetos",
    "projectType": "Tipo",
    "projectLanguage": "Linguagem",
    "projectStack": "Tecnologias",
    "typeDesktop": "Aplicativo desktop",
    "typeBackend": "Serviço backend",
    "typeEvents": "Sistema orientado a eventos",
    "documentationTitle": "Documentação técnica",
    "documentationNote": "Arquitetura, detalhes de implementação e instruções de execução local serão adicionados aqui.",
    "contactTitle": "Contato",
    "footer": "© 2026 Miguel.",
    "pageTitle": "Projetos | Miguel",
    "pageDescription": "Projetos de software com foco em .NET, C# e desenvolvimento backend."
  },
  "ja": {
    "navLabel": "メインナビゲーション",
    "menuLabel": "言語を選択",
    "navOverview": "概要",
    "navProjects": "プロジェクト",
    "navContact": "お問い合わせ",
    "languageLabel": "言語",
    "themeToDark": "ダークモード",
    "themeToLight": "ライトモード",
    "overviewTitle": "概要",
    "overviewIntro": ".NETとC#によるバックエンド開発を中心に、JavaScriptやデスクトップアプリケーションのプロジェクトも掲載しています。",
    "metricProjects": "掲載プロジェクト",
    "chartTitle": "開発言語",
    "chartDescription": "言語ごとの掲載プロジェクト数。",
    "chartAxisLabel": "プロジェクト数",
    "projectsTitle": "プロジェクト",
    "projectsIntro": "すべてのプロジェクト",
    "viewProject": "プロジェクトを見る",
    "projectTitle1": "BootStrapper",
    "projectDescription1": "C#とAvaloniaで開発したデスクトップアプリケーションです。",
    "projectTag1": "ASP.NET、C#、Avalonia",
    "projectTitle2": "NamaStream",
    "projectDescription2": "HonoとJavaScriptで開発したバックエンドサービスです。",
    "projectTag2": "Hono、JavaScript、Node.js",
    "projectTitle3": "イベント駆動システム",
    "projectDescription3": ".NETとRabbitMQを使用したイベント駆動システムです。",
    "projectTag3": "C#、.NET、RabbitMQ",
    "backToProjects": "プロジェクト一覧に戻る",
    "projectType": "種類",
    "projectLanguage": "開発言語",
    "projectStack": "使用技術",
    "typeDesktop": "デスクトップアプリケーション",
    "typeBackend": "バックエンドサービス",
    "typeEvents": "イベント駆動システム",
    "documentationTitle": "技術ドキュメント",
    "documentationNote": "アーキテクチャ、実装の詳細、ローカル環境での実行手順を今後追加します。",
    "contactTitle": "お問い合わせ",
    "footer": "© 2026 Miguel.",
    "pageTitle": "プロジェクト | ミゲル",
    "pageDescription": ".NET、C#、バックエンド開発を中心としたソフトウェアプロジェクト。"
  }
};

const languageToggle = document.querySelector("#language-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const languageMenu = document.querySelector("#language-menu");
const languageOptions = languageMenu.querySelectorAll("[data-language]");
const supportedLanguages = Object.keys(translations);

// Preferences follow links between the static project pages.
function readPreference(key) 
{
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The site should also work when browser storage is unavailable
  }
}

const savedLanguage = readPreference("portfolio-language");
let currentLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : document.documentElement.lang;
const savedTheme = readPreference("portfolio-theme");
let currentTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

function updateThemeLabel() 
{
  const labelKey = currentTheme === "dark" ? "themeToLight" : "themeToDark";
  themeToggle.textContent = translations[currentLanguage][labelKey];
  themeToggle.setAttribute("aria-pressed", String(currentTheme === "dark"));
}

function setTheme(theme) 
{
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  updateThemeLabel();
  savePreference("portfolio-theme", theme);
}

function changeLanguage(language) 
{
  const content = translations[language];

  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = content[element.dataset.i18n];
  });

  const projectTitle = content[document.body.dataset.projectTitle];
  document.title = projectTitle ? `${projectTitle} | Miguel` : content.pageTitle;
  const descriptionKey = document.body.dataset.projectDescription || "pageDescription";
  document.querySelector('meta[name="description"]').content = content[descriptionKey];
  document.querySelector("nav").setAttribute("aria-label", content.navLabel);
  languageMenu.setAttribute("aria-label", content.menuLabel);

  languageOptions.forEach((option) => {
    option.setAttribute("aria-pressed", String(option.dataset.language === language));
  });

  currentLanguage = language;
  savePreference("portfolio-language", language);
  updateThemeLabel();
}

themeToggle.addEventListener("click", () => {
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

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
setTheme(currentTheme);
