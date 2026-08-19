export default function appHeader() {
    const navbar = document.getElementById("app-navbar");
    const menuOpenIcon =document.getElementById("app-navbar-hamburger");
    const menuCloseIcon =document.getElementById("navbar-close");
    const appearClassName = "appear"

    console.log(navbar, menuCloseIcon,menuOpenIcon)

    menuOpenIcon.addEventListener("click", openMenu);
    menuCloseIcon.addEventListener("click", closeMenu);

    function openMenu() {
        navbar.classList.add(appearClassName);
    }

    function closeMenu() {
        navbar.classList.remove(appearClassName);
    }
}