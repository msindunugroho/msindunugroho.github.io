export const navigation = () => {
    const menuToggle = document.querySelector('.menu_toggle');
    const navBar = document.querySelector('.nav_bar');
    const spanMenu = menuToggle.querySelectorAll('span')

    menuToggle.addEventListener('click', () => {
        navBar.classList.toggle('show_nav-bar');
        spanMenu.forEach( (span) => span.classList.toggle('active'))
    })
}