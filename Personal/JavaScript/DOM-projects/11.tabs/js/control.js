const btn1 =  document.querySelector(".btn1");
const btn2 =  document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const area1 = document.querySelector(".text-content1");
const area2 = document.querySelector(".text-content2");
const area3 = document.querySelector(".text-content3");
const sect = document.querySelector(".text-conteiner");

btn1.addEventListener("click",() => {
    area1.classList.add("active");
    area2.classList.remove("active");
    area3.classList.remove("active");
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");

    //style
    btn1.style.transition = "all .4s ease-in-out";
});
btn2.addEventListener("click",()=>{
    area1.classList.remove("active");
    area2.classList.add("active");
    area3.classList.remove("active");
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");

    // style
    btn2.style.transition = "all .4s ease-in-out";
});
btn3.addEventListener("click",() => {
    area1.classList.remove("active");
    area2.classList.remove("active");
    area3.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");

    //style
    btn3.style.transition = "all .4s ease-in-out";
});