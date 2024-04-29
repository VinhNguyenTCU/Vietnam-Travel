const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".container-left h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".container-left .container-btn",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".container-right h4",{
    ...scrollRevealOption,
    delay: 2500,
});
ScrollReveal().reveal(".container-right .pic-1",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".container-right .pic-4",{
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".container-right p",{
    ...scrollRevealOption,
    delay: 2700,
});

ScrollReveal().reveal(".location",{
    ...scrollRevealOption,
    delay: 2900,
});
ScrollReveal().reveal(".social",{
    ...scrollRevealOption,
    delay: 2900,
});

