const button = document.querySelector(".btn");
const campo = document.querySelector("#amount");
const p = document.querySelector(".text");

function gerador(){
    if (campo.value == 1){
        let novoItem = `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>`

        p.innerHTML = novoItem;
    }else if (campo.value == 2){
        let novoItem = `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>`

        p.innerHTML = novoItem;
    }else if (campo.value == 3){
        let novoItem = `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>`

        p.innerHTML = novoItem;
    }else if (campo.value == 4){
        let novoItem = `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>`

        p.innerHTML = novoItem;
    }else if (campo.value == 5){
        let novoItem = `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>
        <br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur natus temporibus doloremque eligendi tempore provident est nisi, fuga harum velit sapiente omnis id quis nostrum dignissimos nobis dolores ab.</p>`

        p.innerHTML = novoItem;
    }else{
        let novoItem = `<p>Somente valores de 1 á 5.</p>`
        p.innerHTML = novoItem;
    }
}

