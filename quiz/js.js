const questions = [
    ["question 1: the sum of ten divided by two is what?"],
    ["QUESTION 2: what number is divisible by 2 4 6 and 8"],
    ["Question 3: what is the name of the creator of this site"]
];
let html = ``
const answers = [
    [
        "one",
        "twelve",
        "two",
        "five"
    ],
    [
        "one",
        "eleven",
        "two",
        "was i high"
    ],
    [
        "martin",
        "david",
        "joeseph",
        "best fred"
    ]
];
const promptKey = [
    ["five"],
    ["two"],
    ["martin"]
]
const container = document.querySelector(".container");
const submitButton = document.querySelector(".submit");

function addquestions(question, answer) {
    let y = "o";
    for (let x = 0; x < question.length; x++) {
        y = y + "o";

        html = `
        <div class="questions">${question[x]}</div>
                <div class="answer">
                    <div class="options">
                        <input id="answer"  type="radio" name="group${y}"><label for="answer">${answer[x][0]}</label><br>
                        <input id="answer"  type="radio" name="group${y}"><label for="answer">${answer[x][1]}</label><br>
                        <input id="answer"  type="radio" name="group${y}"><label for="answer">${answer[x][2]}</label><hr>
                        <input id="answer"  type="radio" name="group${y}"><label for="answer">${answer[x][3]}</label><hr>
                    </div>
                </div>`;

        container.insertAdjacentHTML("beforeend", html);
    }
}

addquestions(questions, answers);


submitButton.onclick = function(score) {
    score = 0;
    for (let x = 0; x < questions.length; x++) {
        if (promptKey) {
            console.log("goo")
            score++
        }
    }
    const html2 = `
    <footer>
        this is your score :)
        <div class="score">${score}</div>
    </footer>
    `
    container.insertAdjacentHTML("beforeend", html2);

}