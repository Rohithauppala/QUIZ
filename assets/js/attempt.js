
let questions = [
  {
    id: 1,
    question: "What is the full form of HTML ?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Makeup Language",
      "Hyper Toggle Markup Language",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "HTML was Developed by?",
    options: [
      "Tom Berners-Lee",
      "Berners-Leo",
      "Tim Berners-Lee",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "HTML was published in the year?",
    options: [
      "1992",
      "1995",
      "1991",
      "None of these"
    ]
  }
];

let question_count = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}


