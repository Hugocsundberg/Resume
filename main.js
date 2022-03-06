import { easings, stagger } from "animejs";
import anime from "animejs/lib/anime.es.js";

const queryString = require("query-string");
const parsed = queryString.parse(location.search);

//Language
const värderingar = document.querySelector(".langVar_värderingar");
const design = document.querySelector(".langVar_designP");
const kvalitet = document.querySelector(".langVar_kvalitet");
const kvalitetP = document.querySelector(".langVar_kvalitetP");
const prof = document.querySelector(".langVar_prof");
const profP = document.querySelector(".langVar_profP");
const KortOmMig = document.querySelector(".langVar_kortOmMig");
const KortOmMigP = document.querySelector(".langVar_kortOmMigP");
const utbildning = document.querySelector(".langVar_utbildning");
const yrgo = document.querySelector(".langVar_yrgo");
const yrgoP = document.querySelector(".langVar_yrgoP");
const jensen = document.querySelector(".langVar_jensen");
const jensenP = document.querySelector(".langVar_jensenP");
const cert = document.querySelector(".langVar_cert");
const hamlstad = document.querySelector(".langVar_halmstad");
const hamlstadP = document.querySelector(".langVar_halmstadP");
const arbete = document.querySelector(".langVar_arbete");
const provideit = document.querySelector(".langVar_provideit");
const provideitP = document.querySelector(".langVar_provideitP");
const skytte = document.querySelector(".langVar_skytte");
const skytteP = document.querySelector(".langVar_skytteP");
const hästhagen = document.querySelector(".langVar_hästhagen");
const hästhagenP = document.querySelector(".langVar_hästhagenP");
const villa = document.querySelector(".langVar_villa");
const villaP = document.querySelector(".langVar_villaP");
const språk = document.querySelector(".langVar_språk");
const svenska = document.querySelector(".langVar_svenska");
const engelska = document.querySelector(".langVar_engelska");
const spanska = document.querySelector(".langVar_spanska");
const teknologier = document.querySelector(".langVar_teknologier");
const projekt = document.querySelector(".langVar_projekt");
const projektP = document.querySelector(".langVar_projektP");
const kontakt = document.querySelector(".langVar_kontakt");
const portfolioLink = document.querySelector(".portfolio-link");
const fässbergP = document.querySelector(".langVar_fässbergP");

if (parsed.lang === "sv" || !parsed.lang) {
  //Svenska
} else if (parsed.lang === "en") {
  //Engelska
  KortOmMig.textContent = "About me";
  KortOmMigP.textContent =
    "I am a 26-year-old technology nerd who's currently studying web development at Yrgo and will graduate this summer. I have previously studied and worked as a production manager at a web development company in Gothenburg. After a few years in the IT and web sphere, I can not see myself working in any other industry. When I am not programming, I like to work out or play disc golf. I have a great interest in design and UX and believe that good design and UX is key for good functionality to be able to deliver value Programming is my hobby and passion.";
  utbildning.textContent = "🎓 Education";
  yrgo.textContent = "Yrgo - Web development | sep. 2020 - jul. 2022";
  yrgoP.textContent =
    "During the course you learn everything you need to call your self a fullstack developer, which means that you will be able to work on all levels in an IT system and feel at home in both front-end, back-end, database and server environment.";
  jensen.textContent = "JENSEN - IT project management | aug. 2017 - dec. 2018";
  jensenP.textContent =
    "The course contains classes in leadership and project management methodology as well as technical courses in E-commerce, system development and mobile development.";
  cert.textContent = "Certificates";
  hamlstad.textContent =
    "Högskolan i Halmstad - Psychology - general introduction | aug. 2016 - dec. 2016 ";
  hamlstadP.textContent =
    "The course provides an introduction to psychology's theories, methods and areas of use. It also looks at psychology as a science and modern scientific thinking are studied, as well as the individual's biological development, motivation and emotion, cognitive abilities, hereditary and environmental factors as well as perception, consciousness, learning, memory, language, stress and stress management.";
  arbete.innerHTML =
    '🏢 Work experience <span style="font-size: 1rem; font-weight: lighter;"><i>(ordered by relevance)</i></span>';
  provideit.textContent =
    "Production leader Provide IT | dec. 2018 - sep. 2019";
  provideitP.textContent =
    "At Provide IT, I was responsible for the implementation of projects from the planning phase to delivery. The role involved external meetings with clients and internal meetings with developers. I was responsible for keeping time and budget within the framework of the project. In addition to this, I had a role as a tester. As a tester and quality assurer, I was responsible for the quality of the product that was delivered to the customer. Challenges in these roles were short time frames and a tight budget to deal with. The key here was to maintain good communication and good cooperation with the customer and to be open and have good transparency to the customer as well as internal stakeholders such as developers and management.";
  skytte.textContent = "Student Assistant Skytteskolan | sep. 2019 - aug. 2020";
  skytteP.textContent =
    "At Skytteskolan, I worked as a Student Assistant for a student with type 1 diabetes. My responsibility was to monitor the student's blood sugar level and make sure it did not end up above or below normal values.";
  hästhagen.textContent =
    "Student Assistant Hästhagenskolan | jan. 2016 - jun. 2017";
  hästhagenP.textContent =
    "I have worked as a student assistant and leisure leader at Hästhagenskolan. Here I excecuted all teaching for a student with Neuropsychiatric Disabilities (NPF) in the mornings, and in the afternoons me and a colleague were responsible for the leisure club at the school.";
  villa.textContent = "Restaurant Villa Belparc | mar. 2014 - jan. 2016";
  villaP.textContent =
    "At Villa Belparc I worked with many different tasks. I worked as a waiter, bartender, cashier and was responsible for the opening and closing of the restaurant.";
  språk.textContent = "Language skills";
  svenska.textContent = "Swedish - native language";
  engelska.textContent = "English - fluent";
  spanska.textContent = "Spanish - high school level";
  teknologier.textContent = "Technologies";
  projekt.textContent = "Projects";
  projektP.textContent = "Portfolio";
  kontakt.textContent = "Contact";
  värderingar.textContent = "My values";
  design.textContent =
    "I have a great interest in design and UX and believe that good design and UX are a must for good functionality to be able to deliver value.";
  kvalitet.textContent = "Quality";
  kvalitetP.textContent =
    "I believe that high quality wins in the long run. Whether it's about the quality of a website or internal and external communication with developers and clients. I think that even if it requires a little more effort in the short term, it is worth it in the long term by improved relationships, trust and branding. I try to make sure that high quality permeates everything I do.";
  prof.textContent = "Professionalism and integrity";
  profP.textContent =
    "I value professionalism highly and see myself as an extension of the company I work for. I believe it is important to work as a team and reflect internal cohesion towards the customer. I believe that it is important to take personal responsibility for the tasks for which you are responsible and ensure that they are delivered on time or, in the worst case, flagged upwards with good time margins if problems arise that affect the delivery.";
  fässbergP.textContent = "High school diploma.";
}

const sectionArray = document.querySelectorAll(".animate-me");

if (window.scrollY <= 0) {
  anime({
    targets: sectionArray,
    opacity: [0, 1],
    translateY: [window.innerHeight, 0],
    delay: anime.stagger(200),
    easing: "spring(1, 120, 30, 0)",
  });
}

const sections = document.querySelectorAll("section");
for (let i = 1; i < sections.length; i++) {
  sections[i].insertAdjacentElement("beforeend", document.createElement("br"));
  sections[i].insertAdjacentElement("beforeend", document.createElement("hr"));
}
