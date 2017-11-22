$(document).ready(() => {
    $("#NewUsereBtn").click(() => {

        const userName = $("#newUserName").val();
        const password = $("#newPassword").val();
        SDK.User.newUser(userName,password)

        alert("Detter er dine værdier: " + userName + " : " + password )
        window.location.href = "mainUsersMenu.html";


    });
});
