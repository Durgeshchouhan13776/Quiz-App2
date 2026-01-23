import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "./firebase.js";

const category = localStorage.getItem("category");
// Raw questions fetch karein
const rawQuestions = quizData[category] || []; 

// --- Shuffle Function (Fisher-Yates Algorithm) ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Questions ko shuffle karke save karein
const questions = shuffleArray([...rawQuestions]); 

let index = 0;
let time = 600; 
let userAnswers = {}; 

// ... baaki ka saara code (timer, loadQuestion, answerQuestion) same rahega ...
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");
const prevBtn = document.getElementById("prev-btn");
const skipBtn = document.getElementById("skip-btn");

// TIMER logic
const timerInterval = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  if(timerEl) timerEl.innerText = `⏱ ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  time--;
  if (time < 0) finishQuiz();
}, 1000);

// Score Calculation Function
function calculateScore() {
    let finalScore = 0;
    Object.keys(userAnswers).forEach(idx => {
        if (userAnswers[idx] && userAnswers[idx].isCorrect) {
            finalScore++;
        }
    });
    return finalScore;
}

function loadQuestion() {
  if (questions.length === 0) return alert("No questions found!");

  if (index > 0) prevBtn.classList.remove("hidden");
  else prevBtn.classList.add("hidden");

  const q = questions[index];
  
  questionEl.innerHTML = `
    <div class="text-sm text-indigo-400 font-bold mb-2 uppercase tracking-widest">Question ${index + 1} of ${questions.length}</div>
    <div class="text-xl font-semibold">${q.q}</div>
  `;
  
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    
    let bgColor = "from-indigo-500 to-purple-500";
    if (userAnswers[index] && userAnswers[index].selected === i) {
        bgColor = "from-blue-600 to-blue-800 border-2 border-white";
    }

    btn.className = `w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${bgColor} hover:from-green-400 hover:to-blue-500 transition duration-300 shadow-md`;
    btn.onclick = () => answerQuestion(i);
    optionsEl.appendChild(btn);
  });

  progressEl.style.width = ((index + 1) / questions.length) * 100 + "%";
}

function answerQuestion(selected) {
  const q = questions[index];
  
  userAnswers[index] = {
    question: q.q,
    selectedText: q.options[selected],
    correctText: q.options[q.answer],
    isCorrect: selected === q.answer,
    selected: selected,
    skipped: false
  };

  
  setTimeout(() => {
    if (index < questions.length - 1) {
      index++;
      loadQuestion();
    } else {
      finishQuiz();
    }
  }, 400);
}

window.previousQuestion = () => {
    if (index > 0) {
        index--;
        loadQuestion();
    }
};
prevBtn.onclick = window.previousQuestion;

window.skipQuestion = () => {
    const q = questions[index]; 
    userAnswers[index] = { 
        question: q.q,
        skipped: true, 
        isCorrect: false,
        selectedText: "Not Answered",
        correctText: q.options[q.answer] 
    };
    
    if (index < questions.length - 1) {
        index++;
        loadQuestion();
    } else {
        finishQuiz();
    }
};
skipBtn.onclick = window.skipQuestion;

async function finishQuiz() {
  clearInterval(timerInterval);
  
  const finalScore = calculateScore();
  const reviewArray = Object.keys(userAnswers).map(key => userAnswers[key]);

  localStorage.setItem("quizReview", JSON.stringify(reviewArray));
  localStorage.setItem("score", finalScore);

  const username = localStorage.getItem("currentUser") || "Anonymous";
  const categoryName = localStorage.getItem("category") || "General";

  try {
    await addDoc(collection(db, "leaderboard"), {
      user: username,
      category: categoryName,
      score: finalScore,
      time: new Date()
    });
  } catch (e) {
    console.error("Firebase Error: ", e);
  }

  window.location.href = "result.html";
}

loadQuestion();