/* eslint-disable */
let mainElement;
let documentWidth;
let windowWidth;
let scrollBarWidth;

if(typeof document !== 'undefined' && typeof window !== 'undefined') {
  mainElement = document && document.querySelector('html');
  documentWidth = document && document.documentElement.clientWidth;
  windowWidth = window && window.innerWidth;
  scrollBarWidth = windowWidth - documentWidth;
}
export function enableBodyScroll() {
  mainElement.style.overflow = 'visible';
  mainElement.style.paddingRight = '0';
}

export function disableBodyScroll() {
  mainElement.style.overflow = 'hidden';
  mainElement.style.paddingRight = `${scrollBarWidth}px`;
}
