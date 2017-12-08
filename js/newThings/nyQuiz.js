$(document).ready(() => {

    $("#newQuizBtn").click(()  => {
        $("#newQuiz").append(`
                   <div class="container">

    <form class="form-container">
        <div class="form-title"><h2>Ny quiz</h2></div>
        
        <text >Her under kan du vælge fag. 1 = VØS 3, 2 = DIS, 3 = Forandringsledelse, 4 = Makroøkonomi  </text>
        
        <input class="submit-button" type="button" value="1" id="vøs"/>
        <input class="submit-button" type="button" value="2" id="dis"/>
        <input class="submit-button" type="button" value="3" id="forandringsledelse"/>
        <input class="submit-button" type="button" value="4" id="makroøkonomi"/>
        
        <div class="form-title">Quiz Title </div>
        <input class="form-field" type="text" id="quizTitle" placeholder="Quiz Title" required=""/><br/>
               
        <div class="form-title">Quiz beskrivelse</div>
        <input class="form-field" type="text" id="newDescription" placeholder="Quiz beskrivelse" required=""/><br/>
               
               <div class="form-title">Antal Spørgsmål</div>
        <input class="form-field" type="text" name="Quiz beskrivelse" id="antalSpørgsmål" placeholder="antal Spørgsmål" required=""/><br/>
         <div class="submit-container">
                <input class="submit-button" type="button" value="Vælg" id="antalSpørgsmålFraNyQuizBtn"/>
                
            </div>
    </form>
    
    
<script src="../js/newThings/nytSpørgsmål.js"></script>
<script src="../js/newThings/valgAfFag.js"></script>
</div>
               `);

      $("#opretQuiz").append(`
                   <div class="container">
     <input class="submit-button" type="button" value="SubmitQuiz" id="quizValider"/>
</div>
               `);
    })
});
