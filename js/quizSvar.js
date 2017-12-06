$(document).ready(() => {
    $("#quizValider").click(() => {
        let svar = document.getElementsByClassName("checkbox");
        let isCorrect = " ";
        let score = 0;
        let questionNr = 0;
        for(i = 0; i < svar.length; i++){
            console.log(svar[i].checked);
           if(svar[i].checked === true){
               let temp = svar[i].value;
               if (temp == 1) {
                   score++;
                   questionNr++;
               } else questionNr++;
           } }

       /* svar.forEach(svar => {
            if (svar.value === 1) {
                socre++
                questionNr++
            } else questionNr++;
        }) */
        window.alert("Du fik " +score+ " rigtige. udaf " + questionNr + " mulige" )
    });
});