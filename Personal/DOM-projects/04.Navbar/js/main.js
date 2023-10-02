const hamburguer = document.querySelector(".mobile-menu");
const hambText = document.querySelector(".menuMenu");


hamburguer.addEventListener("click", () =>{
    hambText.classList.toggle('active');
})