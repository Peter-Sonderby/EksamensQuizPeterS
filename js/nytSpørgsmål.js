$(document).ready(() => {

    $("#antalSpørgsmålFraNyQuizBtn").click(()  => {
        let nrS = $("#antalSpørgsmål").val();
        for(i = 0; i < nrS; i++  ){
        $("#nytSpørgsmål").append(`
                   <div class="container">

    <form class="form-container">
        <div class="form-title"><h2>Nyt Spørgsmål ${i}</h2></div>
        <div class="form-title" id="Spøgrsmål">Spørgsmål</div>
        <input class="form-field" type="text" id="quizTitle" placeholder="Spørgsmål" autofocus/><br/>
        <div class="userinf" id="nytSvar${+i}"></div>
    </form>

</div>
               `);


                $("#nytSvar"+i).append(`
                   <div class="container">

    <form class="form-container">
        <div class="form-title"><h2>Svar</h2></div>
        <div class="form-title">svar</div>
        <input class="form-field" type="text" id="quizTitle" placeholder="svar1" autofocus/><br/>
        <input class="form-field" type="text" id="quizTitle" placeholder="svar2" autofocus/><br/>
        <input class="form-field" type="text" id="quizTitle" placeholder="svar3" autofocus/><br/>
        <input class="form-field" type="text" id="quizTitle" placeholder="svar4" autofocus/><br/>
        
        <div class="form-title">Rigtie svar</div>
        <input class="form-field" type="text" id="quizTitle" placeholder="fx 1" autofocus/><br/>
       
    </form>

</div>
               `);
        }
    })
});
