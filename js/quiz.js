$(document).ready(() => {

    $(".fagSpe").click(function() {
        const fagId = $(this).data("fag-id");
            console.log(fagId);
        SDK.Quiz.getSelectQuiz(fagId, (cb, data) =>{
            console.log(data);
            let cQuiz = JSON.parse(data);
            cQuiz.forEach(cQuiz => {
                $("#fagBody").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${cQuiz.quizId}</th>
                            <th>${cQuiz.createdBy}</th>
                            <th>${cQuiz.questionCount}</th>
                            <th>${cQuiz.quizTitle}</th>
                            <th>${cQuiz.quizDescription}</th>
                            <th>${cQuiz.courseId}</th>
                            <th>
                            <button class="quizSpe" data-fag-id=${cQuiz.courseId}>vælg</button>
                            </th>
                          </tr>
                        </table>
                    </div>
               `);

            });
        });
    });
});
