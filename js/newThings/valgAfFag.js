$(document).ready(() => {

$("#vøs").click(() => {
    let fag = document.getElementById("vøs").value;
    SDK.Storage.persist("fag" ,fag);
    window.alert("Du har valgt VØS 3 som fag ");
    });

$("#dis").click(() => {
    let fag = document.getElementById("dis").value;
    SDK.Storage.persist("fag" ,fag);
    Window.alert("Du har valgt DIS som fag ");
});

$("#forandringsledelse").click(() => {
    let fag = document.getElementById("forandringsledelse").value;
    SDK.Storage.persist("fag" ,fag);
    Window.alert("Du har valgt Forandringsledelse som fag ");
});

$("#makroøkonomi").click(() => {
    let fag = document.getElementById("makroøkonomi").value;
    SDK.Storage.persist("fag" ,fag);
    Window.alert("Du har valgt Makroøkonomi som fag ");
});

});