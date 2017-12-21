$(document).ready(() => {
    let question = SDK.Storage.load("question");
    let i2 = -1;
    question.forEach(question => {
        i2++;
        SDK.Quiz.getTheOptions(question.questionId, i2, (data) => {

        });

    })



});