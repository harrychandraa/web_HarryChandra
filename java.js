// Menyimpan status dark mode di local storage
function setDarkMode(isDarkMode) {
    localStorage.setItem("darkMode", isDarkMode);
}

// Mendapatkan status dark mode dari local storage
function getDarkMode() {
    return localStorage.getItem("darkMode") === "true";
}

// Mengubah gaya website berdasarkan status dark mode
function updateTheme() {
    const bodyElement = document.body;
    const darkMode = getDarkMode();
  
    if (darkMode) {
        bodyElement.classList.add("dark-mode");
    } else {
        bodyElement.classList.remove("dark-mode");
    }
}

// Menambahkan event listener ke tombol toggle dark mode
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
toggleDarkModeButton.addEventListener("click", () => {
    const isDarkMode = !getDarkMode();
    setDarkMode(isDarkMode);
    updateTheme();
});

// Memeriksa status dark mode awal dan update theme
updateTheme();
