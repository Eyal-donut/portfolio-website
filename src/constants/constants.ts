import adobeXDImage from "/src/assets/images/adobeXD.png";
import angularImage from "/src/assets/images/angular.png";
import azureImage from "/src/assets/images/azure.png";
import bootstrapImage from "/src/assets/images/bootstrap.png";
import chaiImage from "/src/assets/images/chai.png";
import cssImage from "/src/assets/images/css2.png";
import expressImage from "/src/assets/images/express.png";
import figmaImage from "/src/assets/images/figma.png";
import gitImage from "/src/assets/images/git.png";
import githubLogo from "/src/assets/images/github-logo.png";
import githubImage from "/src/assets/images/github.png";
import htmlImage from "/src/assets/images/html.png";
import javaImage from "/src/assets/images/java.png";
import jsImage from "/src/assets/images/js2.png";
import jwtImage from "/src/assets/images/jwtwo.png";
import liquibaseImage from "/src/assets/images/liquibase.png";
import mariaDBImage from "/src/assets/images/mariaDB.png";
import mochaImage from "/src/assets/images/mocha.png";
import mockitoImage from "/src/assets/images/mockito.png";
import mongoImage from "/src/assets/images/mongo.png";
import nodeImage from "/src/assets/images/node.png";
import nutriScanImage from "/src/assets/images/NutriScan-bgr.png";
import openAIImage from "/src/assets/images/openAI.svg";
import pokemonImage from "/src/assets/images/pokemon-bgr.png";
import puppeteerImage from "/src/assets/images/puppeteer.png";
import reactImage from "/src/assets/images/react.png";
import reduxImage from "/src/assets/images/redux.png";
import sassImage from "/src/assets/images/sass.png";
import springbootImage from "/src/assets/images/springboot.png";
import sqlImage from "/src/assets/images/sql.png";
import tsImage from "/src/assets/images/ts.png";

export const sectionIds = {
  MAIN: "section-main",
  ABOUT: "section-about",
  PROJECTS: "section-projects",
  CONTACT: "section-contact",
  TECHNOLOGIES: "subsection-technologies",
};

export const projectsInfos = [
  {
    imageURL: nutriScanImage,
    description:
      "An innovative full-stack app, designed to help in making informed purchasing decisions based on your nutritional, dietary and environmental preferences, by simply scanning a barcode.",
    projectNumber: 1,
    header: "NutriScan",
    link: "https://nutriscan.netlify.app/",
  },
  {
    imageURL: pokemonImage,
    description:
      "A fun role-playing game, inspired by the iconic TV series from the 90's. Explore a variety of maps, fight Pokémons, and of course, try to catch 'em all! ",
    projectNumber: 2,
    header: "Pokémon Role Playing Game",
    link: "https://pokemon-rpg.netlify.app/",
  },
];

export const technologiesInfo = [
  {
    header: "programming languages",
    technologies: [
      {
        name: "js",
        imageURL: jsImage,
      },
      { name: "ts", imageURL: tsImage },
      { name: "java", imageURL: javaImage },
      { name: "sql", imageURL: sqlImage },
    ],
  },
  {
    header: "front-end",
    technologies: [
      { name: "html", imageURL: htmlImage },
      { name: "css", imageURL: cssImage },
      { name: "angular", imageURL: angularImage },
      { name: "react", imageURL: reactImage },
      { name: "sass", imageURL: sassImage },
      { name: "redux", imageURL: reduxImage },
      { name: "figma", imageURL: figmaImage },
      { name: "bootstrap", imageURL: bootstrapImage },
      { name: "adobeXD", imageURL: adobeXDImage },
    ],
  },
  {
    header: "back-end",
    technologies: [
      { name: "springboot", imageURL: springbootImage },
      { name: "node", imageURL: nodeImage },
      { name: "jwt", imageURL: jwtImage },
      { name: "express", imageURL: expressImage },
    ],
  },  
  {
    header: "database",
    technologies: [
      { name: "maria-db", imageURL: mariaDBImage },
      { name: "mongo", imageURL: mongoImage },
      { name: "liquibase", imageURL: liquibaseImage },
    ],
  },
  {
    header: "version control",
    technologies: [
      { name: "git", imageURL: gitImage },
      { name: "github", imageURL: githubImage },
    ],
  },
  {
    header: "testing, web-scraping and api",
    technologies: [
      { name: "mockito", imageURL: mockitoImage },
      { name: "mocha", imageURL: mochaImage },
      { name: "chai", imageURL: chaiImage },
      { name: "puppeteer", imageURL: puppeteerImage  },
      { name: "azure", imageURL: azureImage },
      { name: "openAI", imageURL: openAIImage },
    ],
  },
];

export const jobInfos = [
  {
    jobTitle: "Fullstack Developer",
    iconName: "code",
    size: 3,
    company: "Evaluation Software Development",
    jobDescription:
      "Worked with TypeScript, Java, SQL, Angular, Spring Boot, Bootstrap, CSS, SAAS, Git, GitHub, JWT, MariaDB, Liquibase, Adobe XD, and Mockito. Developed features, performed code reviews, and implemented unit tests for CHES (Computer-Based Health Evaluation System) – a clinical data assessment software. Created SISAQOL-IMI (Setting International Standards of Patient-Reported Outcomes and Quality of Life Endpoints in Cancer Clinical Trials – IMI) Web-tool - a full stack web-application for clinical data analysis.",

  },  
  {
    jobTitle: "Fullstack Developer Internship",
    iconName: "code",
    size: 3,
    company: "Makes Innovation Hub",
    jobDescription:
      "Worked with JavaScript, React, CSS, Git, Github, Node.js/Express, MongoDB, Redux, Puppeteer, Open AI API, Mocha and Chai.",
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
    logoURL: githubLogo,
  },
];
