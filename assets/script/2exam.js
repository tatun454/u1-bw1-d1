const questionsData = [
  [
    "Chi è il portatore originale dell'Anello all'inizio della saga?",
    ["Bilbo Baggins", "Gollum", "Frodo Baggins", "Samwise Gamgee"],
  ],
  [
    "Come si chiama la spada riforgiata per Aragorn?",
    ["Andúril", "Sting", "Orcrist", "Glamdring"],
  ],
  [
    "Quale creatura salva Frodo e Sam dal Monte Fato?",
    ["Le aquile giganti", "Gandalf su un'aquila", "Gollum", "Legolas e Gimli"],
  ],
  [
    "Chi è il re di Rohan durante la Guerra dell'Anello?",
    ["Théoden", "Éomer", "Boromir", "Denethor"],
  ],
  ["Qual è il vero nome di Gollum?", ["Sméagol", "Déagol", "Gríma", "Saruman"]],
  [
    "Quale dei seguenti non è uno degli Anelli del Potere?",
    ["Morgul", "Narya", "Nenya", "Vilya"],
  ],
  [
    "Dove si trova la fortezza di Saruman?",
    ["Isengard", "Gondor", "Moria", "Minas Tirith"],
  ],
  [
    "Chi uccide il Re Stregone di Angmar?",
    ["Éowyn", "Aragorn", "Frodo", "Gandalf"],
  ],
  ["Qual è la razza di Legolas?", ["Elfo", "Umano", "Nano", "Hobbit"]],
  [
    "Dove viene forgiato l’Unico Anello?",
    [
      "Mordor, nel Monte Fato",
      " Mordor, a Minas Morgul",
      "Gondor, a Osgiliath",
      "Eregion",
    ],
  ],
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60; // secondi
let checkedAnswer;
let score = 0;

// const timerDisplay = document.getElementById("timer");

const quizContainer = document.getElementById("quiz");
// seleziono il div dove verrà inserita la domanda
const nextBtn = document.getElementById("nextBtn");
// bottone da abilitare solo se viene selezionata una risposta
const counter = document.getElementById("counter");
// contatore di domande

// funzione per avviare e gestire il timer
function startTimer() {
  clearInterval(timer); // Ferma eventuali timer precedenti
  timeLeft = 60;
  // timerDisplay.textContent = `Tempo: ${timeLeft}s`; ho modificato il timer perciò ho lasciato la riga commentata
  totalTime = 60;

  const FULL_DASH_ARRAY = 2 * Math.PI * 52;
  const circle = document.querySelector(".progress-ring__circle");
  circle.style.strokeDasharray = FULL_DASH_ARRAY;

  function setProgress(time) {
    const offset = FULL_DASH_ARRAY - (time / totalTime) * FULL_DASH_ARRAY;
    circle.style.strokeDashoffset = offset;
    document.getElementById("timer-value").textContent = time;
  }

  setProgress(timeLeft);

  timer = setInterval(() => {
    timeLeft--;
    setProgress(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timer);
      goToNextQuestion(); // passa alla prossima domanda se il tempo scade
    }
  }, 1000);
}

timer = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = `Tempo: ${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    goToNextQuestion(); // passa alla prossima domanda se il tempo scade
  }
}, 1000);

// funzione per passare alla prossima domanda
function goToNextQuestion() {
  checkedAnswer = null;
  currentQuestionIndex++;
  clearInterval(timer); // Ferma il timer corrente

  if (currentQuestionIndex < questionsData.length) {
    renderQuestion(currentQuestionIndex); // mostra la prossima domanda
  } else {
    quizContainer.innerHTML = "<h2>Quiz completato!</h2>"; // mostra quiz completato quando terminato

    const endBtn = document.createElement("a");
    endBtn.href = "results.html"; // aggiornare con link pagina
    endBtn.textContent = "Next";
    endBtn.className = "end-button";
    quizContainer.appendChild(endBtn);

    nextBtn.style.display = "none";
    timerDisplay.style.display = "none"; // nasconde il timer
    counter.style.display = "none"; // nasconde il contatore
  }
}

function RandomizeAnswers(text) {
  let aux;

  text.forEach((t, index) => {
    let index2 = 0;
    aux = t;
    index2 = Math.floor(Math.random() * 4);
    text[index] = text[index2];
    text[index2] = aux;
  });

  return text;
}

function renderQuestion(index) {
  // crea una nuova domanda
  quizContainer.innerHTML = ""; // svuota il contenuto precedente
  const [title, answers] = questionsData[index]; // estraggo i dati della domanda

  const questionDiv = document.createElement("div");
  questionDiv.className = "question"; // creo contenitore per la domanda

  const titleEl = document.createElement("h2");
  titleEl.textContent = title;
  questionDiv.appendChild(titleEl); // inserisco il titolo della domanda

  const answerContainer = document.createElement("div");
  answerContainer.className = "answerContainer"; // crea contenitore per risposte

  let randText = RandomizeAnswers(Array.from(answers));

  randText.forEach((text) => {
    const label = document.createElement("label"); // creo un label per ogni elemento con classe answer
    label.className = "answer";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // creo una checkbox con classe hide
    checkbox.className = "hide";

    const span = document.createElement("span");
    span.textContent = text; // creo uno span con il testo della risposta

    label.appendChild(checkbox);
    label.appendChild(span);
    answerContainer.appendChild(label); // appendo al label e poi il label a answerContainer

    checkbox.addEventListener("change", () => {
      answerContainer
        .querySelectorAll("input[type='checkbox']")
        .forEach((cb) => {
          if (cb !== checkbox) {
            cb.checked = false;
            cb.closest(".answer").classList.remove("selected");
          }
        });

      // Aggiunge o rimuove la classe 'selected'
      if (checkbox.checked) {
        label.classList.add("selected");
      } else {
        label.classList.remove("selected");
      }

      // Abilita il pulsante "Avanti" se almeno una è selezionata
      checkedAnswer = answerContainer.querySelector(
        "input[type='checkbox']:checked"
      );
      nextBtn.disabled = !checkedAnswer;
    });
  });

  questionDiv.appendChild(answerContainer);
  quizContainer.appendChild(questionDiv);
  nextBtn.disabled = true; // disabilita inizialmente

  counter.textContent = `Domanda ${index + 1}/${questionsData.length}`; // aggiorna il contatore

  startTimer(); // avvia il timer per questa domanda
}

nextBtn.addEventListener("click", () => {
  console.log(questionsData[currentQuestionIndex][1][0]);
  if (
    checkedAnswer.closest(".answer").children[1].textContent ==
    questionsData[currentQuestionIndex][1][0]
  ) {
    ++score;
    localStorage.setItem("score", score);
  }

  goToNextQuestion();
});

renderQuestion(currentQuestionIndex); // quando carica la pagina mostra la prima domanda
