const menu = document.querySelector(".menu-container");
const menuText = document.querySelector(".menu-text");
const btn = document.querySelector(".center")

    window.addEventListener('scroll',() =>{
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            menu.style.backgroundColor = "#01013d";
            menu.style.transition = "all .3s ease-in-out";
        }else{
            menu.style.backgroundColor = "transparent";
        }
    });

    btn.addEventListener("click", () => {
        menuText.classList.toggle('active');
        menuText.style.transition = "all .3s ease-in-out";
    });

    