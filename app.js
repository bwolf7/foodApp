
function objectChoices(cold) {
    this.cold = cold
}

function askQuestion() {
    let questionEl = document.getElementsByTagName("main")[0]
    questionEl.innerText = "";
    let questionTitle = document.createElement('h1')
    questionTitle.innerText = "This is a question";
    questionEl.appendChild(questionTitle)
}

function showAnswers() {

}

function showResult() {

}

askQuestion()

//let innout = new objectChoices()