const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    themesSwitcher: document.querySelector("#theme-switch-toggle"),
    bodyRef: document.querySelector('body'),
}

const THEME = "currentTheme";

function changeTheme(event) {
    if (event.target.checked) {
        refs.bodyRef.classList.remove(Theme.LIGHT);
        refs.bodyRef.classList.add(Theme.DARK);
        localStorage.setItem(THEME, Theme.DARK)
    } else {
        refs.bodyRef.classList.remove(Theme.DARK);
        refs.bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem(THEME, Theme.LIGHT)
    }
}

function reloadTheme() {
    if (localStorage.getItem(THEME)) {
        refs.bodyRef.classList.add(localStorage.getItem(THEME));
        if (localStorage.getItem(THEME) === Theme.DARK) {
            refs.themesSwitcher.checked = true;
        }
    } else {
        refs.bodyRef.classList.add(Theme.LIGHT);
    }
}

reloadTheme();
refs.themesSwitcher.addEventListener("change", changeTheme);