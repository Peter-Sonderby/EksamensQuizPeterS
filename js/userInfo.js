$(document).ready(() => {

    $("#visMinSide").click(() => {
        const $userLiset = $("#userInfo")
        const myUserInfoHTML = `
                    <ul class="form-container" >    
                    <h4>Bruger navn</h4>                    
                       <p  class="form-title"> ${SDK.Storage.load("username")} </p>
                       <h4>type</h4>
                       <p  class="form-title"> ${SDK.Storage.load("type")}</p>
                       <h4>Dit ID nr</h4>
                       <p  class="form-title"> ${SDK.Storage.load("userId")}</p>
                    </ul>
                        `;
        $userLiset.append(myUserInfoHTML);
    })
});
