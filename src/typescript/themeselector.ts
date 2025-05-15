import { useEffect } from 'react';

function applyTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeButtonLabel(label: string) {
  const btn = document.querySelector<HTMLDivElement>(
    '.navbar-end .dropdown > div[role="button"]'
  );
  if (!btn) return;

  const firstChild = btn.childNodes[0];
  if (firstChild?.nodeType === Node.TEXT_NODE) {
    (firstChild as Text).textContent = label + ' ';
  } else {
    btn.insertAdjacentText('afterbegin', label + ' ');
  }
}

function handleThemeChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (!target?.value) return;

  const themeValue = target.value;  
  const themeLabel = target.getAttribute('aria-label') ?? themeValue;

  localStorage.setItem('theme', themeValue);
  applyTheme(themeValue);
  updateThemeButtonLabel(themeLabel);
}

export function useThemeSelector() {
  useEffect(() => {
    // hook up radio change listeners
    document
      .querySelectorAll<HTMLInputElement>('.theme-controller')
      .forEach((input) => input.addEventListener('change', handleThemeChange));

    // run once on mount to re-apply saved theme
    const saved = localStorage.getItem('theme');
    if (saved) {
      applyTheme(saved);
      const radio = document.querySelector<HTMLInputElement>(
        `input[value="${saved}"]`
      );
      if (radio) {
        radio.checked = true;
        const label = radio.getAttribute('aria-label') ?? saved;
        updateThemeButtonLabel(label);
      }
    }

    // clean up listeners on unmount
    return () => {
      document
        .querySelectorAll<HTMLInputElement>('.theme-controller')
        .forEach((input) => input.removeEventListener('change', handleThemeChange));
    };
  }, []);
}
