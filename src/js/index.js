import Cursor from './_cursor';
import { preloader } from './_preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from './_menu';

const menuEl = document.querySelector('.menu');

preloader('.menu__item').then(() => {
    // initialize the smooth scroll
    const scroll = new LocomotiveScroll({ el: menuEl, smooth: true });

    // initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // initialize menu
    new Menu(menuEl);
});
