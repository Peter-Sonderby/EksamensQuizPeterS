$(document).ready(() => {
    $("#FagBtn").click(() => {

        SDK.getCourses.getSelectQuiz((cd) => {
            console.log("linje 5 er inde i get  ");
            if (err) SDK.errorCheckF(err);
        });
    });
});