export const navigation = () => {
    const menuToggle = document.querySelector('.menu_toggle');
    const navBar = document.querySelector('.nav_bar');

    menuToggle.addEventListener('click', () => {
        navBar.classList.toggle('show_nav-bar');
    })
}