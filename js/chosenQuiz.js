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
                            <button class="quizSpe" onclick="">vælg</button>
                            </th>
                          </tr>
                        </table>
                    </div>
               `);

        SDK.Quiz.getTheOptions(question.questionId, (cb) => {
            let option = SDK.Storage.load("option")
            option.forEach(option =>{
                $("#option").append(`
                <div>
                 <table>
                         <tr>
                            <th>${option.optionId}</th>
                            <th>${option.option}</th>
                            <th>
                            <button class="quizSpe" onclick="">vælg</button>
                            </th>
                       </tr>
                  </table>
                   </div>
                `)
            })

        });

        })



});
