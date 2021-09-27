var Kahoot = require("kahoot.js-updated");
var kahoots = [];
var pin = "000000"; // CHANGE THIS TO YOUR KAHOOT NUMBER PIN!!!!!
var name = "KahootBot"; // CHANGE THE NAME TO WHATEVER YOU WANT!!!
var bot_count = 230;
for (var i = 0; i < bot_count; i++) {
    kahoots.push(new Kahoot);
    kahoots[i].join(pin, name+" "+String(i)).catch(error => {
        console.log("join failed " + error.description + " " + error.status)
    });
    kahoots[i].on("Joined", () => {
        console.log("successfully joined game")
    });
    kahoots[i].on("QuestionStart", (question) => {
        question.answer(
            Math.floor(
                Math.random() * question.quizQuestionAnswers[question.questionIndex]
            ) + 0
        );
    });
    kahoots[i].on("Disconnect", (reason) => {
        console.log("disconnected because " + reason);
    });
}