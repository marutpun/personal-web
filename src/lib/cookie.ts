import Cookies from 'js-cookie';
const cookieBanner = document.querySelector('.cookie') as HTMLDivElement;
const cookieBtn = document.querySelector(
  '.cookie__button',
) as HTMLButtonElement;
const cookieName: string = 'cookie-usage';

function checkCookie(): void {
  if (Cookies.get(cookieName)) {
    cookieBanner.style.display = 'none';
  } else {
    cookieBanner.style.display = 'block';
  }
}

function isCookieDismissed(): void {
  Cookies.set(cookieName, true, {
    expires: 365,
    secure: true,
  });
  cookieBanner.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', checkCookie);
cookieBtn.addEventListener('click', isCookieDismissed);
