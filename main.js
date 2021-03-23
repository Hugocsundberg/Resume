import { easings, stagger } from 'animejs';
import anime from 'animejs/lib/anime.es.js';

const queryString = require('query-string');
const parsed = queryString.parse(location.search);

//Language
    const KortOmMig = document.querySelector('.langVar_kortOmMig')
    const KortOmMigP = document.querySelector('.langVar_kortOmMigP')
    const utbildning = document.querySelector('.langVar_utbildning')
    const utbildningslista = document.querySelector('.langVar_education-list')
    const yrgo = document.querySelector('.langVar_yrgo')
    const yrgoP = document.querySelector('.langVar_yrgoP')
    const jensen = document.querySelector('.langVar_jensen')
    const jensenP = document.querySelector('.langVar_jensenP')
    const cert = document.querySelector('.langVar_cert')
    const hamlstad = document.querySelector('.langVar_halmstad')
    const hamlstadP = document.querySelector('.langVar_halmstadP')
    const arbete = document.querySelector('.langVar_arbete')
    const provideit = document.querySelector('.langVar_provideit')
    const provideitP = document.querySelector('.langVar_provideitP')
    const skytte = document.querySelector('.langVar_skytte')
    const skytteP = document.querySelector('.langVar_skytteP')
    const hästhagen = document.querySelector('.langVar_hästhagen')
    const hästhagenP = document.querySelector('.langVar_hästhagenP')
    const villa = document.querySelector('.langVar_villa')
    const villaP = document.querySelector('.langVar_villaP')
    const språk = document.querySelector('.langVar_språk')
    const svenska = document.querySelector('.langVar_svenska')
    const engelska = document.querySelector('.langVar_engelska')
    const spanska = document.querySelector('.langVar_spanska')
    const teknologier = document.querySelector('.langVar_teknologier')
    const projekt = document.querySelector('.langVar_projekt')
    const projektP = document.querySelector('.langVar_projektP')
    const kontakt = document.querySelector('.langVar_kontakt')

if(parsed.lang === 'sv' || !parsed.lang) {
    //Svenska
} else if(parsed.lang === 'en') {
    //Engelska
    KortOmMig.textContent="About me"
    KortOmMigP.textContent="Hi, I'm 25 years old and is currently studying fullstack web development at Yrgo. I have previously studied and worked as production leader at a web development firm in Gothenburg. After a couple years of being in the IT and web sphere i can't see myself working in another field. Beyond programming I enjoy spending time at the gym or playing disc golf. I have a big interest for design and UX and believe that a good design and UX is mandatory for good functionality to deliver value."
    utbildning .textContent="🎓 Education"
    yrgo.textContent="Yrgo - Web development | sep. 2020 - jul. 2022"
    yrgoP.textContent="During the course you learn everything you need to call your self a fullstack developer, wich means that you will be able to work on all levels in an IT system and feel at home in both front-end, back-end, databases and server environment."
    jensen.textContent="JENSEN - IT project management | sep. 2017 - jan. 2019"
    jensenP.textContent="The course contains courses in leadership and project management methodology as well as technical courses in E-commerce, system development and mobile development."
    cert.textContent="Certificate"
    hamlstad.textContent="Högskolan i Halmstad - Psychology - general introduction | aug. 2016 - dec. 2016 "
    hamlstadP.textContent="The course provides an introduction to psychology's theories, methods and areas of use. Psychology as a science and modern scientific thinking are studied, as well as the individual's biological development, motivation and emotion, cognitive abilities, hereditary and environmental factors as well as perception, consciousness, learning, memory, language, stress and stress management."
    arbete.textContent="Work experience"
    provideit.textContent="Production leader Provide IT | dec. 2018 - sep. 2019"
    provideitP.textContent="At Provide IT, I was responsible for the implementation of projects from the planning phase to delivery. The role involved external meetings with customers and internal meetings with developers. I was responsible for keeping time and budget within the framework of the project. In addition to this, I had a role as a tester. As a tester and quality assurer, I was responsible for the quality of the product that was delivered to the customer. Challenges in these roles were short time frames and a tight budget to deal with. The key here was to maintain good communication and good cooperation with the customer and to be open and have good transparency to the customer as well as internal stakeholders such as developers and management."
    skytte.textContent="Student Assistant Skytteskolan | sep. 2019 - jun. 2020"
    skytteP.textContent="At Skytteskolan, I worked as a Student Assistant for a student with type 1 diabetes. My responsibility was to monitor the student's blood sugar level and make sure it did not end up above or below normal values."
    hästhagen.textContent="Student Assistant Hästhagenskolan | jan. 2016 - jun. 2017"
    hästhagenP.textContent="I have worked as a student assistant and leisure leader at Hästhagenskolan. Here I excecuted all teaching for a student with Neuropsychiatric Disabilities (NPF) in the mornings, and in the afternoons me and a colleague were responsible for the leisure club at the school."
    villa.textContent="Restaurant Villa Belparc | mar. 2014 - jan. 2016"
    villaP.textContent="At Villa Belparc I worked with many different tasks. I worked as a waiter, bartender, cashier, dishwasher and was responsible for the opening and closing of the restaurant."
    språk.textContent="Language skills"
    svenska.textContent="Swedish - native language"
    engelska.textContent="English - fluent"
    spanska.textContent="Spanish - high school level"
    teknologier.textContent="Technologies"
    projekt.textContent="Projects"
    projektP.textContent="Project portfolio"
    kontakt.textContent="Contact"
}

const sectionArray = document.querySelectorAll('section')

if(window.scrollY <= 0) {
    anime({
        targets: sectionArray,
        opacity: [0, 1],
        translateY: [window.innerHeight, 0],
        delay: anime.stagger(200),
        easing: 'spring(1, 120, 30, 0)'
    })
}

const sections = document.querySelectorAll('section')
for(let i = 1; i < sections.length; i++) {
    sections[i].insertAdjacentElement('beforeend', document.createElement('br'))
        sections[i].insertAdjacentElement('beforeend', document.createElement('hr'))
}

