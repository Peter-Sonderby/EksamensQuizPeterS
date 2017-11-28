$(document).ready(() => {

    $("#visMinSide").click(() => {
        const $userLiset = $("#userInfo")
        const myUserInfoHTML = `
                    <ul class="form-container" >
                       <p  class="form-title"> ${SDK.Storage.load("username")} </p>
                       <p  class="form-title"> ${SDK.Storage.load("type")}</p>
                       <p  class="form-title"> ${SDK.Storage.load("userId")}</p>
                    </ul>
                        `;
        $userLiset.append(myUserInfoHTML);


    })
});
