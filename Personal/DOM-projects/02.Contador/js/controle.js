const btnIncrementar = document.getElementById("btn_incrementar");
const btnDecrementar = document.getElementById("btn_decrementar");
const btnResetar = document.getElementById("btn_resetar");
const p = document.getElementById("contador");

let contador = 0;

p.innerHTML= contador;

btnIncrementar.addEventListener('click',function(){
    contador++;

    p.innerHTML= contador;
    p.style.color = 'green';
})

btnDecrementar.addEventListener('click',function(){
    contador--;

    p.innerHTML= contador;
    p.style.color = 'red';
})

btnResetar.addEventListener('click',function(){
    contador = 0;
    p.innerHTML= contador;
    p.style.color = '#222222';
})
