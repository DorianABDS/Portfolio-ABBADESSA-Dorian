let darmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darlmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darlmode', 'null')
}

themeSwitch.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})