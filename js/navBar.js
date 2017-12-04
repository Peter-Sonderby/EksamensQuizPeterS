$(document).ready(() => {
    const $navBar = $("#navBAR")
    const navBarHTML = `
                   <div class="continer">
    <header>
        <h3>Din quiz side</h3>
        <ul>
            <li><a href="default.asp">Hjem</a></li>
            <li><a id="visMinSide">Min side</a></li>
            <li><a id="FagBtn">Fag</a></li>
            <li><a href="login.html" id="logoutBtn">Log ud</a></li>
        </ul>
       
</div>
                        `;
    $navBar.append(navBarHTML);
});