$(document).ready(() => {

    $("#logoutBtn").click(() => {
        SDK.User.logout((err) => {
            if (err) {
                SDK.errorCheckF(err);
            } else {
                window.alert("Du er nu logget ud");
            }
            ;
        })
    });

});
