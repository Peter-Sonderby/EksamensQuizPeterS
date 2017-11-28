$(document).ready(() => {
    $("#FagBtn").click(() => {

        SDK.getCourses.getSelectQuiz((cd) => {
            console.log("linje 5 er inde i get  ");
            if (err) SDK.errorCheckF(err);
           /* else {
                let cCourse = JSON.parse(courses)
                cCourse.forEach(cCourse => {
                    $fagBody.append(`
                   <div>
                   <table>
                         <tr>
                            <th>${cCourse.courseTitle}</th>
                            <th>
                            <button>vælg</button>
                            </th>
                          </tr>
                        </table>
                    </div>
               `);
                });
            }*/
        });
    });
});