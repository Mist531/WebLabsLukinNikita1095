const question1 = document.getElementById("question1")
const question1_true_answer = "green"
const question2 = document.getElementById("question2")
const question2_true_answer = "travel_is_prohibited"

register_question(question1, question1_true_answer)
register_question(question2, question2_true_answer)

function register_question(question, true_value) {
    let inputs = question.getElementsByTagName("input")
    for(let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        element.onclick = () => {
            if (element.value === true_value) {
                question.style.backgroundColor = "green"
            } else {
                question.style.backgroundColor = "red"
            }
        }
    }
}
