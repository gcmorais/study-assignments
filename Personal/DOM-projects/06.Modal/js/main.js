const mdArea = document.querySelectorAll('.modal-sect');
const main = document.getElementById('mainArea');

function modalAdd(){
    let modalSection = `
    <section class="modal-sect">
        <div class="modal">
            <button class="exit-modal" type="button" onclick="modalExit()">X</button>
            <h2>modal content</h2>
        </div>
    </section>`;

    main.innerHTML += modalSection;
};


function modalExit(){
    let modalSection = `
        <section>
            <div class="modal-project">
                <h1>Modal Projeto</h1>
                <button type="button" onclick="modalAdd()">OPEN MODAL</button>
            </div>
        </section>`;

    main.innerHTML = modalSection;
}