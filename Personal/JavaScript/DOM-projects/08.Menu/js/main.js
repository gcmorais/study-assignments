const btnTodos = document.querySelectorAll('.todos-btn');
const btnCafe = document.querySelectorAll('.cafe-btn');
const btnDinner= document.querySelectorAll('.dinner-btn');
const btnShake= document.querySelectorAll('.shake-btn');
const btnJantar= document.querySelectorAll('.jantar-btn');
const p = document.getElementById('food-item');

function cafeBottom(){
    let novoItem = `
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Buttermilk Pancakes<strong>$15.99</strong></h2>
            <p>I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed</p>
        </div>
        </div>
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Bacon Overflow<strong>$8.99</strong></h2>
            <p>carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird</p>
        </div>
        </div>
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Country Delight<strong>$20.99</strong></h2>
            <p>Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,</p>
        </div>
    </div>
    `;

    p.innerHTML = novoItem;
    p.style.display = 'flex';
    p.style.flexFlow = 'column';
    p.style.width = '70%';
    p.style.marginLeft = '25%';
}

function dinnerBottom(){
    let novoItem = `
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Diner Double<strong>$13.99</strong></h2>
            <p>vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats</p>
        </div>
        </div>
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>American Classic<strong>$12.99</strong></h2>
            <p>on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut</p>
        </div>
        </div>
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Egg Attack<strong>$22.99</strong></h2>
            <p>franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up</p>
        </div>
    </div>
    `;

    p.innerHTML = novoItem;
    p.style.display = 'flex';
    p.style.flexFlow = 'column';
    p.style.width = '70%';
    p.style.marginLeft = '25%';
}

function shakesBottom(){
    let novoItem = `
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Godzilla Milkshake<strong>$6.99</strong></h2>
            <p>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.</p>
        </div>
        </div>
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Oreo Dream<strong>$18.99</strong></h2>
            <p>Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday</p>
        </div>
        </div>
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Quarantine Buddy<strong>$16.99</strong></h2>
            <p>skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.</p>
        </div>
    </div>
    `;

    p.innerHTML = novoItem;
    p.style.display = 'flex';
    p.style.flexFlow = 'column';
    p.style.width = '70%';
    p.style.marginLeft = '25%';
}

function jantarBottom(){
    let novoItem = `
    <div class="post-area">
        <div>
            <img src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg" alt="café da manhã" srcset="">
        </div>
        <div class="text-area">
            <h2>Steak Dinner<strong>$39.99</strong></h2>
            <p>skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.</p>
        </div>
    </div>
    `;

    p.innerHTML = novoItem;
    p.style.display = 'flex';
    p.style.flexFlow = 'column';
    p.style.width = '70%';
    p.style.marginLeft = '25%';
}

function todosBottom(){
    document.location.reload(true);
}
