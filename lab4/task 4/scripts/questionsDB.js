const questions = new Map();

function addQuestion(question) {
    questions.set(question.name, question)
}

function createQuestion(name) {
    return {name: name, text: "", answers: new Map(), rightAnswer:""}
}

function createAnswer(answerText, answerValue) {
    return {text: answerText, value: answerValue}
}

function addAnswerInQuestion(question, answer) {
    question.answers.set(answer.value, answer)
}

function setText(question, text) {
    question.text = text
}

function setRightAnswer(question, answerValue) {
    question.answers.forEach( value => {
        if (value.value === answerValue) {
            question.rightAnswer = answerValue
        }
    } )
}