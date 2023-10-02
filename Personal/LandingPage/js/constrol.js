const reviews = [
    {img:"https://i.pinimg.com/originals/e8/d7/d5/e8d7d5241babc7f753c4ed336ee42284.jpg",
    text:"Escola Britânica de Artes Criativas e Tecnologia"},
    {img:"https://i.pinimg.com/originals/30/70/71/3070710c33932170316082a0368e0c02.jpg",
    text:"Escola Britânica de Artes Criativas e Tecnologia"},
    {img:"https://i.pinimg.com/474x/35/d1/60/35d160a18e85a1c9a4f1ebf96ee66edf.jpg",
    text:"Escola Britânica de Artes Criativas e Tecnologia"},
    {img:"https://i.pinimg.com/474x/80/1b/4d/801b4d6f45d50004aa455be66885bc35.jpg",
    text:"Escola Britânica de Artes Criativas e Tecnologia"},
];

const img = document.getElementById("person-img");
const text = document.getElementById("person-text");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

 // load initial item
 window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.text;
  });

   // show person based on item
   function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
   // show prev person
   prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });