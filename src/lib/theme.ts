const buttonLight = document.querySelector('#buttonLight');
const buttonSystem = document.querySelector('#buttonSystem');
const buttonDark = document.querySelector('#buttonDark');
const themeButtons = [buttonLight, buttonSystem, buttonDark];
//loader function
function applySystemTheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

//loader
window.addEventListener('load', applySystemTheme);
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', applySystemTheme);

themeButtons.forEach(($toggleSelector) => {
  $toggleSelector.addEventListener('click', function () {
    const theme = $toggleSelector.getAttribute('data-theme');

    themeButtons.forEach((button) =>
      button.setAttribute('aria-checked', 'false'),
    );

    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'system') {
      document.documentElement.classList.toggle(
        'dark',
        window.matchMedia('(prefers-color-scheme: dark)').matches,
      );
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          document.documentElement.classList.toggle('dark', e.matches);
        });
    }

    $toggleSelector.setAttribute('aria-checked', 'true');
  });
});
