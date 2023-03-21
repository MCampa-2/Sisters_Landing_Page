const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".links");

hamburger.addEventListener("click", function(){
    navLinks.classList.toggle("responsive");
})

