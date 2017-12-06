$(document).ready(() => {
    let question = SDK.Storage.load("question");
    question.forEach(question => {

        SDK.Quiz.getTheOptions(question.questionId, (data) => {

        });

    })



});