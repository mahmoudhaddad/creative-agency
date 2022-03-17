const menuBars = document.getElementById('menu-bars');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.querySelector('nav .menu-bars i')

menuBars.onclick = () => {
    mobileMenu.classList.toggle('hidden')
    menuBars.classList.toggle('light')
    menuIcon.classList.toggle('fa-bars')
    menuIcon.classList.toggle('fa-times')
}