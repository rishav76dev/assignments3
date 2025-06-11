const submit = document.getElementById("submit");
let currentIndex =0;
let score = 0;
const optionsContainer = document.getElementById("options");
const options = ["a", "b", "c", "d"];
loadQuestion();
submit.disabled = true;

optionsContainer.addEventListener("change", () => {
    if (document.querySelector('input[name="answer"]:checked')) {
        submit.disabled = false;
    }
});


function loadQuestion() {
    const currentQuestionObj = quizData[currentIndex];
    document.getElementById("question").innerHTML = currentQuestionObj.question;

    optionsContainer.innerHTML = ""; // clear old options first

    options.forEach(key => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="answer" value="${key}">
            ${currentQuestionObj[key]}
        `;
        optionsContainer.appendChild(label);
    });
}

submit.addEventListener('click', checkanswer)

function checkanswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return; 

    const selectedAnswer = selectedOption.value;
    if (selectedAnswer === quizData[currentIndex].correct) {
        score++;
    }

    nextquestion()
}

function nextquestion(){
    currentIndex++;
     if (currentIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult(){
    
    document.getElementById("container").innerHTML = `
        <h2>You scored ${score} out of ${quizData.length}</h2>
        <button onclick="location.reload()">Restart Quiz</button>
    `;

}