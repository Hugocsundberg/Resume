import { easings, stagger } from 'animejs';
import anime from 'animejs/lib/anime.es.js';
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

