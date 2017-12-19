$(document).ready(() => {


    $("#sletEnQuizbtn").click(() => {

                SDK.Quiz.getSelectQuiz( 1, (cb, data) => {
                    let quiz = JSON.parse(data);
                    quiz.forEach(quiz => {
                        $("#sletQuizBody").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${quiz.quizId}</th>
                            <th>${quiz.createdBy}</th>
                            <th>${quiz.questionCount}</th>
                            <th>${quiz.quizTitle}</th>
                            <th>${quiz.quizDescription}</th>
                            <th>
                            <button class="quizSpe" onclick="SDK.Quiz.sletQuiz(${quiz.quizId})">vælg</button>
                            </th>
                          </tr>
                        </table>
                    </div>
                       `)
                        ;
                    })

            });
        SDK.Quiz.getSelectQuiz( 2, (cb, data) => {
            let quiz = JSON.parse(data);
            quiz.forEach(quiz => {
                $("#sletQuizBody").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${quiz.quizId}</th>
                            <th>${quiz.createdBy}</th>
                            <th>${quiz.questionCount}</th>
                            <th>${quiz.quizTitle}</th>
                            <th>${quiz.quizDescription}</th>
                            <th>
                            <button class="quizSpe" onclick="SDK.Quiz.sletQuiz(${quiz.quizId})">vælg</button>
                            </th>
                          </tr>
                        </table>
                    </div>
                       `)
                ;
            })

        });
        SDK.Quiz.getSelectQuiz( 3, (cb, data) => {
            let quiz = JSON.parse(data);
            quiz.forEach(quiz => {
                $("#sletQuizBody").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${quiz.quizId}</th>
                            <th>${quiz.createdBy}</th>
                            <th>${quiz.questionCount}</th>
                            <th>${quiz.quizTitle}</th>
                            <th>${quiz.quizDescription}</th>
                            <th>
                            <button class="quizSpe" onclick="SDK.Quiz.sletQuiz(${quiz.quizId})">vælg</button>
                            </th>
                          </tr>
                        </table>
                    </div>
                       `)
                ;
            })

        });
        SDK.Quiz.getSelectQuiz( 4, (cb, data) => {
            let quiz = JSON.parse(data);
            quiz.forEach(quiz => {
                $("#sletQuizBody").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${quiz.quizId}</th>
                            <th>${quiz.createdBy}</th>
                            <th>${quiz.questionCount}</th>
                            <th>${quiz.quizTitle}</th>
                            <th>${quiz.quizDescription}</th>
                            <th>
                            <button class="quizSpe" onclick="SDK.Quiz.sletQuiz(${quiz.quizId})">vælg</button>
                            </th>
                          </tr>
                        </table>
                    </div>
                       `)
                ;
            })

        });

         });
});
