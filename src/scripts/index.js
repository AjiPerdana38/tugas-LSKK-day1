import './style/style.css';
import 'tw-elements';
import './components/navigation-bar';
import './components/hero-section';
import './components/about-section';
import './components/gallery-section';
import './components/footer-bar';
import './components/contact-me';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.css';

const hamburger = document.querySelector('#hamburger');
const hero = document.querySelector('#hero');
const drawer = document.querySelector('#drawer');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  drawer.classList.toggle('scale-0');
});

hero.addEventListener('click', () => {
  hamburger.classList.remove('hamburger-active');
  drawer.classList.add('scale-0');
});