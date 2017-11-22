$(document).ready(() => {

    $("#logoutBtn").click(() => {
        SDK.User.logout()

        window.alert("Du er nu logget ud")
    });

});
