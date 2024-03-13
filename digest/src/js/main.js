import { WOW } from './vendor/wow.min.js';
import { gaPush, gtmSet } from './components/gtm-events.js';

import { detectDevice } from './components/detectDevice.js';

/// ///
const $doc = document;
const $body = document.querySelector('body');

$doc.addEventListener('DOMContentLoaded', () => {
  detectDevice();
  new WOW().init();
  gtmSet();

  // click cards
  $body.addEventListener('click', (e) => {
    const _class = 'js-show-article';
    const $trg = (e.target.classList.contains(_class)) ? e.target : e.target.closest(`.${_class}`);
    if ($trg) {
      // const nextSection = $doc.querySelector('.section--about');
      const cardNum = $trg.getAttribute('data-article');

      // prepare PAGE
      $body.classList.add('noscroll');
      // show article
      const $articles = $doc.querySelectorAll('.article');
      $articles.forEach((article) => {
        const num = article.getAttribute('data-article');
        if (num === cardNum) {
          article.classList.add('_viewed');
        } else {
          article.classList.remove('_viewed');
        }
        // if(article.classList.contains())
      });

      // show controls
      const $controls = $doc.querySelector('.controls');
      $controls.classList.add('_viewed');
    }
  });

  function nextArticle(dir) {
    const $articles = $doc.querySelectorAll('.article');
    let current = 0;

    $articles.forEach((article) => {
      const num = article.getAttribute('data-article');
      const isActive = article.classList.contains('_viewed');
      if (isActive) { current = Number(num); article.classList.remove('_viewed'); }
    });

    (dir === 'next') ? showArticle(current) : showArticle(current - 2); // направление
  }

  function showArticle(current) { // console.warn(current);
    const $articles = $doc.querySelectorAll('.article');
    const $nxtLinks = $doc.querySelectorAll('.js-next');
    const $prevLinks = $doc.querySelectorAll('.js-prev');
    const hiddenClass = '_hidden';

    if (current === 0) { $prevLinks.forEach((btn) => { btn.classList.add(hiddenClass); }); }
    if (current === 1) { $prevLinks.forEach((btn) => { btn.classList.remove(hiddenClass); }); }
    if (current === $articles.length - 2) { $nxtLinks.forEach((btn) => { btn.classList.remove(hiddenClass); }); }
    if (current === $articles.length - 1) { $nxtLinks.forEach((btn) => { btn.classList.add(hiddenClass); }); }

    // show article content
    if (current >= 0) { $articles[current].classList.add('_viewed'); } else {
      // remove controls
      const $controls = $doc.querySelector('.controls');
      $controls.classList.remove('_viewed');

      $body.classList.remove('noscroll');
    }
  }

  const $nxtLinks = $doc.querySelectorAll('.js-next-article');
  $nxtLinks.forEach((btn) => btn.addEventListener('click', (e) => {
    e.preventDefault();
    const dir = (btn.classList.contains('js-prev')) ? 'prev' : 'next';
    nextArticle(dir);
  }));
});

function goTo(el) {
  const offs = 0;
  const y = el.getBoundingClientRect().top + window.scrollY + offs;
  window.scrollTo({ top: y, behavior: 'smooth' }); // element.scrollIntoView();
}
