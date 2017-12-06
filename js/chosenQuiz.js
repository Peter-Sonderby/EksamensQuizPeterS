$(document).ready(() => {
    let question = SDK.Storage.load("question")
    question.forEach(question => {
        $("#startQuiz").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${question.questionId}</th>
                            <th>${question.question}</th>
                            <th >
                            <button class="quizSpe" onclick="js/sdk.js">vælg</button>
                            </th>
                          </tr>
                        </table>
                        <div  class="userinf" id="theOption"></div>
                    </div>
               `);
        })
});
