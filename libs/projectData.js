const projectData = [
  {
    id: "synergym",
    title: "Synergym",
    description:
      "A professional Rails 8 application for athlete and trainer management with comprehensive fitness program creation, assignment capabilities, and role-based access control. Features Devise authentication, Sidekiq background jobs, E2E testing with Playwright, and PostgreSQL database.",
    thumbnail: "/thumbs/synergym.png",
    stack: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "Tailwind CSS"],
    github: null,
    demo: "https://synergym.fit",
    date: "2025-10",
    tags: ["Full Stack", "Rails"],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my background, skills, and projects as a web developer. Features dark mode support, dynamic content from Obsidian vault, SEO-friendly metadata, animated transitions, and a clean component structure. Built with Next.js, Chakra UI, and deployed on Vercel.",
    thumbnail: "/thumbs/portfolio.png",
    stack: ["Next.js", "Chakra UI", "Vercel"],
    github: "https://github.com/ozzgio/devozzo-homepage",
    demo: null,
    date: "2023-05",
    tags: ["Frontend", "Next.js"],
  },
  {
    id: "meteomapbot",
    title: "MeteoMap Telegram Bot",
    description:
      "A Telegram bot providing real-time weather updates for Italian cities and regions. Built with Node.js, integrates OpenWeatherMap API, and connects to SQL Server database storing Italian regions and their capitals. Features interactive keyboards, location sharing, and weather data retrieval for cities and regional capitals.",
    thumbnail: "/thumbs/meteomapbot.png",
    stack: ["Node.js", "JavaScript", "Telegram API", "REST API"],
    github: "https://gist.github.com/ozzgio/2a1f1d2cff1a9134a50ad5c94c451e35",
    demo: "https://t.me/meteomapbot",
    date: "2024-08",
    tags: ["Backend", "Node.js"],
  },
  {
    id: "kellyspub",
    title: "Kelly\'s Pub Website",
    description:
      "Managed and optimized a WordPress website for a local pub, handling content, plugins, and custom styling.",
    thumbnail: "/thumbs/kellyspub.png",
    stack: ["WordPress", "PHP", "MySQL", "Nginx"],
    github: null,
    demo: "https://birreriakellys.it",
    date: "2024-06",
    tags: ["WordPress"],
  },
  {
    id: "fbetsui",
    title: "FootballBets UI",
    description:
      "The front-end component of the Football Bets platform, an Angular application enabling users to track football games and place bets. Built with TypeScript, HTML5, CSS3, and SCSS, featuring a user-friendly interface designed for real-time game updates and seamless betting interactions.",
    thumbnail: "/thumbs/fbetsui.png",
    stack: ["Angular", "TypeScript", "HTML5", "CSS3", "SCSS"],
    github: "https://github.com/ozzgio/FootballBetsUI",
    demo: null,
    date: "2024-03",
    tags: ["Frontend", "Angular"],
  },
  {
    id: "fbetsapi",
    title: "FootballBets API",
    description:
      "A robust C# RESTful API for football betting data, featuring seamless integration and a focus on real-world application of design patterns.",
    thumbnail: "/thumbs/fbetsapi.png",
    stack: ["C#", "SQLite", "Docker"],
    github: "https://github.com/ozzgio/FootballBetsAPI",
    demo: null,
    date: "2024-02",
    tags: ["Backend", "C#"],
  },
  {
    id: "rubychess",
    title: "Ruby Chess Console Game",
    description:
      "A terminal-based chess game written in pure Ruby, completed as the final project for The Odin Project Ruby section. Features full chess rules implementation (castling, en passant, pawn promotion), AI opponent, game save/load functionality, and PGN file export. Built with clean object-oriented design and comprehensive RSpec test coverage.",
    thumbnail: "/thumbs/rubychess.png",
    stack: ["Ruby"],
    github: "https://github.com/ozzgio/ruby_chess",
    demo: null,
    date: "2025-05",
    tags: ["Ruby"],
  },
];

export default projectData;
