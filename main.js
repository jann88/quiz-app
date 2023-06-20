const quizData = [
  {
    question: "How old is Janet?",
    a: "10",
    b: "30",
    c: "27",
    d: "45",
    correct: "c",
  },
  {
    question: "What is the most used programming language",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of Kenya",
    a: "Uhuru Kenyatta",
    b: "Mwai Kibaki",
    c: "William Ruto",
    d: "Jomo Kenyatta",
    correct: "c",
  },
  {
    question: "What is your favourite color?",
    a: "Pink",
    b: "Yellow",
    c: "Jungle green",
    d: "Black",
    correct: "c",
  },
  {
    question: "What programming language are you currently learning",
    a: "Python",
    b: "JavaScript",
    c: "C",
    d: "Kotlin",
    correct: "c",
  },
  {
    question: "What year was Javascript launched",
    a: "2000",
    b: "1998",
    c: "2005",
    d: "1994",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  //select the entire quiz container
  questionEl.innerText = currentQuizData?.question;
  a_text.innerText = currentQuizData?.a;
  b_text.innerText = currentQuizData?.b;
  c_text.innerText = currentQuizData?.c;
  d_text.innerText = currentQuizData?.d;

  currentQuiz++;
}

submitBtn.addEventListener("click", (e) => {
  if (currentQuiz < quizData.length) {
    loadQuiz();
    //   currentQuiz++ not necessary
  } else {
    alert("You finished! Well done.");
  }
});