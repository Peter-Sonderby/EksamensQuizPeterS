$(document).ready(() => {


    $("#loginBtn").click(() => {

        const userName = $("#userName").val();
        const password = $("#password").val();

        SDK.User.login(userName, password, (err, data) => {
           if(err){
               SDK.errorCheckF(err) // dette er en funktion der bliver brugt til at give brugeren en fejlkode / forklaring ved fejl.
           } else {
               //Egen info, bare til test lige pt
               window.alert("Du Er nu logget ind");
               window.location.href = "mainUsersMenu.html";
           }
        });
    });
});
