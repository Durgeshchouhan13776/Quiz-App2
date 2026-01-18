import { collection, addDoc } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./firebase.js";

const category = localStorage.getItem("category");
const questions = quizData[category];

let index = 0;
let score = 0;
let time = 600; // 10 minutes

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");

// TIMER
const timerInterval = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerEl.innerText = `⏱ ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  time--;

  if (time < 0) finishQuiz();
}, 1000);

// LOAD QUESTION
function loadQuestion() {
  const q = questions[index];

  questionEl.innerText = q.q;
  questionEl.classList.add("animate-pulse");

  setTimeout(() => {
    questionEl.classList.remove("animate-pulse");
  }, 300);

  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.className = `
      w-full py-3 px-4 rounded-xl font-semibold text-white
      bg-gradient-to-r from-indigo-500 to-purple-500
      hover:from-green-400 hover:to-blue-500
      transition duration-300
    `;

    btn.onclick = () => answerQuestion(i);
    optionsEl.appendChild(btn);
  });

  progressEl.style.width = ((index + 1) / questions.length) * 100 + "%";
}

// ANSWER LOGIC
function answerQuestion(selected) {
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === questions[index].answer) {
    document.getElementById("correctSound").play();
    buttons[selected].classList.add("bg-green-500");
    score++;
  } else {
    document.getElementById("wrongSound").play();
    buttons[selected].classList.add("bg-red-500");
    buttons[questions[index].answer].classList.add("bg-green-500");
  }

  setTimeout(() => {
    index++;
    index < questions.length ? loadQuestion() : finishQuiz();
  }, 900);
}

// FINISH QUIZ
async function finishQuiz() {
  clearInterval(timerInterval);

  const username = localStorage.getItem("currentUser");
  const category = localStorage.getItem("category");

  await addDoc(collection(db, "leaderboard"), {
    user: username,
    category: category,
    score: score,
    time: new Date()
  });

  localStorage.setItem("score", score);
  window.location.href = "result.html";
}



loadQuestion();
