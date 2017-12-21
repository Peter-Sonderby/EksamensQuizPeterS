$(document).ready(() => {

    $("#logoutBtn").click(() => {

        /*SDK.User.logout((err) => {
            if (err) {
                SDK.errorCheckF(err);
            } else {
                window.alert("Du er nu logget ud");
            }

        }) */ //Denne funktion virker desvære ikke korrekt
        SDK.Storage.remove("userId");
        SDK.Storage.remove("type");
        SDK.Storage.remove("token");
        SDK.Storage.remove("username");
    });

});
