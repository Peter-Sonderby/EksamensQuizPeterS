/*$(document).ready(() => {
    $("#loginBtn").click(() => {

        SDK.getCourses((err, courses) => {
            if(err) SDK.errorCheckF(err);
            else{
                courses.forEach(courses => {
                $fagBody.append(`
                    <tr>
                    <td>${courses.id}</td>
                    <td>${parseOrderItems(courses.orderItems)}</td>
                    <td>kr. ${sumTotal(courses.orderItems)}</td>
                    </tr>
                );
                }); }
        });
    });
*/