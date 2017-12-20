$(document).ready(() => {

    $("#antalSpørgsmålFraNyQuizBtn").click(()  => {
        let nrS = $("#antalSpørgsmål").val();
        for(i = 1; i <= nrS; ){
        $("#nytSpørgsmål").append(`
                   <div class="container">

    <form class="form-container">
        <div class="form-title"><h2>Nyt Spørgsmål ${i}</h2></div>
        
        <div class="form-title" id="Spøgrsmål">Spørgsmål</div>
        <input class="form-field" type="text" id="quizSpørgsmål${+i}" placeholder="Spørgsmål" autofocus/><br/>
        <div class="userinf" id="nytSvar${+i}"></div>
    </form>

</div>
               `);

                $("#nytSvar"+i).append(`
                   <div class="container">

    <form class="form-container">
        <div class="form-title"><h2>Svar</h2></div>
        <div class="form-title">svar</div>
        <input class="form-field" type="text" id="quizSvar1${+i}" placeholder="svar1" autofocus/><br/>
        <input class="form-field" type="text" id="quizSvar2${+i}" placeholder="svar2" autofocus/><br/>
        <input class="form-field" type="text" id="quizSvar3${+i}" placeholder="svar3" autofocus/><br/>
        <input class="form-field" type="text" id="quizSvar4${+i}" placeholder="svar4" autofocus/><br/>
        
        <div class="form-title">Rigtie svar</div>
        <input class="form-field" type="text" id="quizSvarR${+i}" placeholder="fx 1 OBS Grundet fejl i progamet er svaret altide det der står i den første celle" autofocus/><br/>
       
    </form>

</div>
               `);
            i++}
    })
});
