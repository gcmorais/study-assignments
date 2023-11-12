let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value; 

    if ((valorInput !=='') && (valorInput!==null) && (valorInput !== undefined)){
        
        let novoItem = `
        <div id='${contador}' class="item">
            <div onclick='marcarTarefa(${contador})' class="item-icone">
                <i id='icone_${contador}' class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick='marcarTarefa(${contador}) ' class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
              <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>`;

        ++contador;

        // Adicionar novo item no main
        main.innerHTML += novoItem;
        // zerar os campos
        input.value = '';      
        input.focus();  

    }
}
function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if(classe==="item"){
        item.classList.add('clicado');
        let icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
        
    }else{
        item.classList.remove('clicado');
        let icone = document.getElementById('icone_'+id);
        icone.classList.add('mdi-circle-outline');
        icone.classList.remove('mdi-check-circle');
    }
}
// ADICIONAR CLICANDO ENTER (BOTÃO 13)
input.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})