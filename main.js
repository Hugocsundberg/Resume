import { easings, stagger } from 'animejs';
import anime from 'animejs/lib/anime.es.js';
const sectionArray = document.querySelectorAll('section')

    anime({
        targets: sectionArray,
        opacity: [0, 1],
        translateY: [window.innerHeight, 0],
        delay: anime.stagger(200),
        easing: 'spring(1, 120, 30, 0)'
    })

    // anime({
    //     targets: '.pulse',
    //     opacity: [0.2, 1],
    //     loop: true,
    //     duration: 1100,
    //     direction: 'alternate',
    //     easing: 'easeInOutQuad'

    // })

