const menuBoss = document.querySelector(".mobile-menu");
const menuList = document.querySelector(".menu");
const botao = document.querySelector(".buttonExit");


menuBoss.addEventListener("click", () =>{
    menuList.classList.toggle('active');
    menuList.style.transition = 'all 0.5s ease-in-out';
});

botao.addEventListener("click",() =>{
    menuList.classList.toggle('active');
    menuList.style.transition = 'all 0.5s ease-in-out';
})