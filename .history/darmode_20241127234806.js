let darmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

themeSwitch.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkmode()
})