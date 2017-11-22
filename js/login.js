$(document).ready(() => {


    $("#loginBtn").click(() => {

        const userName = $("#userName").val();
        const password = $("#password").val();

        SDK.User.login(userName, password, (err, data) => {
            if (err && err.xhr.status === 401) {
            }
            else if (err){
                console.log("BAd stuff happened")
            } else {
                //Egen info, bare til test lige pt
                window.alert("Du Er nu logget ind");
                window.location.href = "mainUsersMenu.html";

            }
        });

    });

});
