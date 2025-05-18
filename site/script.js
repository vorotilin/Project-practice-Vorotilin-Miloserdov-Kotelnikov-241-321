//Темы
const ThemeBtn = document.querySelector(".change-theme-btn");
const Body = document.body;

ThemeBtn.addEventListener("click", () => {
    const isLight = Body.classList.contains("light-theme");

    if (isLight) {
        Body.classList.remove("light-theme");
        ThemeBtn.setAttribute("aria-pressed", "false");
        ThemeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        localStorage.setItem("theme", "dark");
    } else {
        Body.classList.add("light-theme");
        ThemeBtn.setAttribute("aria-pressed", "true");
        ThemeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
        localStorage.setItem("theme", "light");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        Body.classList.add("light-theme");
        ThemeBtn.setAttribute("aria-pressed", "true");
        ThemeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    } else {
        Body.classList.remove("light-theme");
        ThemeBtn.setAttribute("aria-pressed", "false");
        ThemeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    }
});
//Тост
function setColor(element, selectColor) {
    const removeColors = ['yellow', 'purple', 'red', 'green'];
    element.classList.remove(...removeColors);
    element.classList.add(selectColor);
}

const toastList = document.querySelector(".toast-list");
const BtnInit = document.querySelectorAll(".btn-init");

BtnInit.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains('btn-message-init')) {
            showToast("message", 4000, "Сообщение");
        }
        if (button.classList.contains('btn-error-init')) {
            showToast("error", 4000, "Ошибка");
        }
    });
});

function showToast(type, duration = 4000, textarea) {
    const toast = document.createElement("div");
    toast.classList.add("toast-wrapper");

    const toastText = document.createElement("span");
    toastText.classList.add("toast-text");

    const toastIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    toastIcon.setAttribute("viewBox", "0 0 15 15");
    toastIcon.classList.add("toast-icon");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

    const toastCloseBtn = document.createElement("button");
    toastCloseBtn.classList.add("toast-close-btn");
    toastCloseBtn.textContent = "×"

    toastList.appendChild(toast);
    toast.appendChild(toastIcon);
    toast.appendChild(toastText);
    toast.appendChild(toastCloseBtn);

    if (type === "message") {
        setColor(toast, "green");
        toastText.textContent = textarea;

        path.setAttribute("d", "M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,14C3.916,14,1,11.084,1,7.5 S3.916,1,7.5,1S14,3.916,14,7.5S11.084,14,7.5,14z");
        polygon.setAttribute("points", "6.505,8.853 3.861,6.209 3.154,6.916 6.51,10.272 11.856,4.851 11.144,4.149");
    } else if (type === "error") {
        setColor(toast, "red");
        toastText.textContent = textarea;

        path.setAttribute("d", "M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,14C3.916,14,1,11.084,1,7.5 S3.916,1,7.5,1S14,3.916,14,7.5S11.084,14,7.5,14z");
        polygon.setAttribute("points", "10.146,4.146 7.5,6.793 4.854,4.146 4.146,4.854 6.793,7.5 4.146,10.146 4.854,10.854 7.5,8.207 10.146,10.854 10.854,10.146 8.207,7.5 10.854,4.854");
    }

    toastIcon.appendChild(path);
    toastIcon.appendChild(polygon);

    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 50);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(30px)";
        setTimeout(() => toast.remove(), 500);
    }, duration);

    toastCloseBtn.addEventListener("click", () => {
        toast.style.opacity = "0"; 
        toast.style.transform = "translateY(30px)";
        setTimeout(() => toast.remove(), 500); 
    });
}