$(document).ready(() => {

        $("#FagBtn").click(() => {
            // Disse værdier er dummis
            const fagId = 1;
            const userToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VyIjoicGV0ZXIxIiwiaXNzIjoiSU1ITyIsImV4cCI6MTUxMTI3MjE3MTQ3OH0.8GRh8HO5pAlYZ8sFWnevzf-7YsGOwTRg_6T_zvq3OeM";

         SDK.Quiz.getSelectQuiz(fagId, userToken, (err, data) => {
            if(err){
                SDK.errorCheckF(err) // dette er en funktion der bliver brugt til at give brugeren en fejlkode / forklaring ved fejl.
            }else{
                     window.alert("Her ville der i det færdige program være en quiz");
                 }

         });
    });

});
