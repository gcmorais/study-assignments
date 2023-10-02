//usando seletores dentro do elemento
const questions = document.querySelectorAll(".box-content");

questions.forEach((question) => {
  const btn = question.querySelector(".boxButton");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

