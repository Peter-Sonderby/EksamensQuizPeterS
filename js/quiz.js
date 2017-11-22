$(document).ready(() => {

        $("#FagBtn").click(() => {
            // Disse værdier er dummis
            const fagId = 1;
            const userToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VyIjoicGV0ZXIxIiwiaXNzIjoiSU1ITyIsImV4cCI6MTUxMTI3MjE3MTQ3OH0.8GRh8HO5pAlYZ8sFWnevzf-7YsGOwTRg_6T_zvq3OeM";

         SDK.Quiz.getSelectQuiz(fagId, userToken, (err, data) => {
             if (err && err.xhr.status === 401) {
                window.alert("Unauthorized du har ikke adgang til denne quiz")
             }
             else if (err && err.xhr.status === 204) {
                 console.log("quiz'en findes ikke / forkert Quiz ID")
             } else if (err) {
                window.alert("Du har ramt en ukendt fejl prøv igen")
                console.log("fejl / crash linje 15 " + err)
             } else{

                     window.alert("Her ville der i det færige program være en quiz");
                 }

         });
    });

});
