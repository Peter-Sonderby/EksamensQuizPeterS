$(document).ready(() => {
    let question = SDK.Storage.load("question")
    let i = 0;
    question.forEach(question  => {

        $("#startQuiz").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${question.questionId}</th>
                            <th>${question.question}</th>
                            <th > </th>
                          </tr>
                        </table>
                        <div  class="userinf" id="theOption${+i}"></div>
                    </div>
               `);
      i++  })
});
