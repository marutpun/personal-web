const viewMobileBtn = document.querySelector(
  '#viewMobile',
) as HTMLButtonElement;
const viewDesktopBtn = document.querySelector(
  '#viewDesktop',
) as HTMLButtonElement;
const viewPortMeta = document.querySelector(
  'meta[name=viewport]',
) as HTMLMetaElement;

function setViewPort(responsive: boolean) {
  const viewPortContentSuffix = 'initial-scale=1';

  viewPortMeta.setAttribute(
    'content',
    responsive
      ? `width=device-width, ${viewPortContentSuffix}`
      : `width=1024px, ${viewPortContentSuffix}`,
  );

  if (responsive) {
    viewDesktopBtn.style.display = 'inline-flex';
    viewMobileBtn.style.display = 'none';
  } else {
    viewDesktopBtn.style.display = 'none';
    viewMobileBtn.style.display = 'inline-flex';
  }
}

window.addEventListener('load', () => {
  const isMobileView = window.innerWidth <= 1024;
  setViewPort(isMobileView);
});

viewMobileBtn.style.display = 'none';
viewDesktopBtn.addEventListener('click', () => setViewPort(false));
viewMobileBtn.addEventListener('click', () => setViewPort(true));
