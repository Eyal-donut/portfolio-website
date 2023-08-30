export const sectionIds = {
  MAIN: "section-main",
  ABOUT: "section-about",
  PROJECTS: "section-projects",
  CONTACT: "section-contact",
  TECHNOLOGIES: "subsection-technologies",
};

export const projectsInfos = [
  {
    imageURL: "/src/assets/images/background1.jfif",
    description:
      "An innovative full-stack app, designed to help you make informed purchasing decisions based on your nutritional, dietary and environmental preferences, by simply scanning a barcode.",
    projectNumber: 1,
    header: "NutriScan",
  },
  {
    imageURL: "/src/assets/images/background1.jfif",
    description:
      "A fun role-playing game, inspired by the iconic TV series from the 90's. Explore a variety of maps, fight different Pokémons, and of course, to try and catch 'em all! ",
    projectNumber: 2,
    header: "Pokémon Role Playing Game",
  },
];

export const technologiesInfo = [
  {
    header: "programming languages",
    technologies: [
      {
        name: "js",
        imageURL: "/src/assets/images/js2.png",
      },
      { name: "ts", imageURL: "/src/assets/images/ts.png" },
    ],
  },
  {
    header: "front-end",
    technologies: [
      { name: "html", imageURL: "/src/assets/images/html.png" },
      { name: "css", imageURL: "/src/assets/images/css2.png" },
      { name: "react", imageURL: "/src/assets/images/react.png" },
      { name: "redux", imageURL: "/src/assets/images/redux.png" },
      { name: "figma", imageURL: "/src/assets/images/figma.png" },
    ],
  },
  {
    header: "back-end & database",
    technologies: [
      { name: "node", imageURL: "/src/assets/images/node.png" },
      { name: "express", imageURL: "/src/assets/images/express.png" },
      { name: "mongo", imageURL: "/src/assets/images/mongo.png" },
      { name: "jwt", imageURL: "/src/assets/images/jwtwo.png" },
    ],
  },
  {
    header: "version control",
    technologies: [
      { name: "git", imageURL: "/src/assets/images/git.png" },
      { name: "github", imageURL: "/src/assets/images/github.png" },
    ],
  },
  {
    header: "testing, web-scraping and api",
    technologies: [
      { name: "mocha", imageURL: "/src/assets/images/mocha.png" },
      { name: "chai", imageURL: "/src/assets/images/chai.png" },
      { name: "puppeteer", imageURL: "/src/assets/images/puppeteer.png" },
      { name: "azure", imageURL: "/src/assets/images/azure.png" },
      { name: "openAI", imageURL: "/src/assets/images/openAI.svg" },
    ],
  },
];

export const jobInfos = [
  {
    jobTitle: "Full Stack Developer",
    iconName: "code",
    size: 3,
    company: "Makes Innovation Hub",
    jobDescription:
      "Worked with React, Git, Github, Node.js/Express, MongoDB, Redux, Puppeteer, Open AI API, Mocha and Chai.",
  },
  {
    jobTitle: "Biochemical research",
    iconName: "flask-vial",
    size: 3,
    company: "University of Innsbruck",
    jobDescription: "Metabolic cell signaling in breast cancer.",
  },
  {
    jobTitle: "Business Owner",
    iconName: "handshake",
    size: 4,
    company: "Eyal's Hummus",
    jobDescription: "B2B sales, workshops and catering.",
  },
];

export const contactDetails = [
  {
    itemName: "linkedin",
    iconName: "linkedin",
    size: 2,
    text: "linkedin.com/in/eyal-lila",
    link: "https://www.linkedin.com/in/eyal-lila/",
    color: "light",
    clickable: true,
    brandIcon: true,
  },
  {
    itemName: "email",
    iconName: "envelope",
    size: 2,
    text: "LilaEyal@gmail.com",
    clickable: false,
  },
  {
    itemName: "github",
    iconName: "github",
    size: 2,
    text: "github.com/Eyal-donut",
    link: "https://github.com/Eyal-donut/",
    clickable: true,
    isExternalLogo: true,
    logoURL: "/src/assets/images/github-logo.png",
  },
];
