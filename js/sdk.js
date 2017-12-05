const SDK = {
    serverURL: "http://localhost:8080/api",
    request: (options, cb) => {
// Indsat da det stopper siden fra at opdatere før scriptet er kør til ende. hvilket ødlagde funktionen
      //  event.preventDefault();
        let headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach((h) => {
                headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
            });
        }

        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            headers: headers,
            contentType: "application/json",
            dataType: "json",
            //async: false,
            data: JSON.stringify(options.data),
            success: (data, status, xhr) => {
                cb(null, data, status, xhr);
            },
            error: (xhr, status, errorThrown) => {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });

    },
    Storage: {
        prefix: "Eksamens Quiz ",
        persist: (key, value) => {
            window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: (key) => {
            const val = window.localStorage.getItem(SDK.Storage.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return val;
            }
        },
        remove: (key) => {
            window.localStorage.removeItem(SDK.Storage.prefix + key);
        }
    },

    User: {
        //Denne klasse indholder de funktioner der er direkte bundet til brugeren.
        login: (username, password, cb) => {
            SDK.request({
                data: {
                    username: username,
                    password: password
                },
                url: "/user/login",
                method: "POST"
            }, (err, data) => {

                //On login-error
                if (err) return cb(err);
                //on Sucess
                let altdata = JSON.parse(data) // dette obejekt benyttes til at gøre de eneklte objekter til brugbar data
                SDK.Storage.persist("token", altdata);
                cb(null, data);

            });
        }, // DON

        getUserInfo: (cb) => {
            SDK.request({
                headers: {authorization: SDK.Storage.load("token")},
                url: "/user/myuser",
                method: "GET"
            }, (err, data) => {


                if (err) return cb(err);

                let altdata = JSON.parse(data)
                SDK.Storage.persist("username", altdata.username);
                SDK.Storage.persist("userId", altdata.userId);
                SDK.Storage.persist("type", altdata.type);
                cb(null, data);

            });
        }, // DON

        logout: (cb) => {
            //Denne funktion fjerne brugerens informationer fra lokal legert når der logges ud.
            SDK.request({

                data: {
                    userId: SDK.Storage.load("userId") // Her benyttes et gemt bruger id at logge brugeren ud af systemet.
                },
                //  headers: {authorization: userToken/*SDK.Storage.load("tokenId")*/},
                url: "/user/logout",
                method: "POST"
            }, (err, data) => {
                if (err) return cb(err);

                cb(null, data);
            });
            //Her fjernes de forskelige oplysninger om brugeren fra lokal Storage. Dette Gørs så der ikke er gemt oplysninger
            // der kan tilgås af utlisigtede personer/enheder.
            //På sigt vil det give mening at lave en auto logout funktion.
            SDK.Storage.remove("userId");
            SDK.Storage.remove("type");
            SDK.Storage.remove("token");
            SDK.Storage.remove("username");
        },
        //test af git
        newUser: (username, password, cb) => {
            //Denne funktion opretter en ny bruger i systemet.
            SDK.request({
                data: {
                    username: username,
                    password: password,
                },
                url: "/user/signup",
                method: "POST"
            }, cb);
        },
    },

    Quiz: {
        // I denne klasse er alle funktioner der relatere sig til Quiz.
        getSelectQuiz: (fagId) => {
           // const fagId = $(this).attr("data-fag-id");
            console.log(fagId);
            SDK.request({
                headers: {authorization: SDK.Storage.load("token")},
                url: "/quiz/" + fagId,
                method: "GET"

            }, (err, data) => {
                if (err) SDK.errorCheckF(err);
                let cQuiz = JSON.parse(data);
                console.log(data);
                cQuiz.forEach(cQuiz => {
                    $("#fagBody").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${cQuiz.quizId}</th>
                            <th>${cQuiz.createdBy}</th>
                            <th>${cQuiz.questionCount}</th>
                            <th>${cQuiz.quizTitle}</th>
                            <th>${cQuiz.quizDescription}</th>
                            <th>
                            <button class="quizSpe" onclick="SDK.Quiz.startSelectQuiz(${cQuiz.quizId})">vælg</button>
                            </th>
                          </tr>
                        </table>
                    </div>
               `);

                });
            });
        },

        startSelectQuiz: (quizId , cb) =>{

           event.preventDefault();
            console.log("Valgte quiz id " + quizId);
            SDK.request({
                headers: {authorization: SDK.Storage.load("token")},
                url: "/question/" + quizId,
                method: "GET"

            }, (err, data) => {
                if (err) SDK.errorCheckF(err);
                let question = JSON.parse(data);
                SDK.Storage.persist("question", question)

                window.location.href = "quizWindow.html"
                console.log(data);
            });
        },

        getTheOptions: (questionId) =>{
            SDK.request({
                headers: {authorization: SDK.Storage.load("token")},
                url: "/option/" + questionId,
                method: "GET"

            }, (err, data) => {
                if (err) SDK.errorCheckF(err);
                let option = JSON.parse(data);
                SDK.Storage.persist("option", option)
            }) },
    },

    getCourses: {
        // I denne klasse er alle funktioner der relatere sig til fag.
        getSelectQuiz: (userToken, cb) => {
            SDK.request({
                    headers: {authorization: SDK.Storage.load("token")},
                    url: "/course",
                    method: "GET"
                },

                (err, data) => {
                    if (err) return cb(err);

                    console.log(data);
                    let cCourse = JSON.parse(data);
                    cCourse.forEach(cCourse => {
                        console.log(cCourse.courseId);
                        $("#fagBody").append(`
                   <div>
                   <table>
                         <tr>
                            <th>${cCourse.courseTitle}</th>
                            <th>
                            <button class="fagSpe" onclick="SDK.Quiz.getSelectQuiz(${cCourse.courseId})">vælg</button>
                            </th>
                          </tr>
                        </table>
                      
                    </div>
               `);

                    });
                });
        },
    },
    //Denne funktion tjekker programet for fejl og retunere fejlkoder til brugeren.
    errorCheckF: (err) => {
        // Concept er at lave alle fejl kode check i en funktion
        if (err && err.xhr.status === 500) {
            window.alert("fejl 500: Der er sket en fejl på severens side. Prøv igen. Hvis det er et problem der sker flere gange kontakt system administrator ")
        }
        else if (err && err.xhr.status === 404) {
            window.alert("fejl 404 Siden du prøver at tilgå findes ikke")
        }
        else if (err && err.xhr.status === 401) {
            window.alert("fejl 401 du har ikke adgang til denne funktion")
        }
        else if (err && err.xhr.status === 204) {
            console.log("quiz'en findes ikke / forkert Quiz ID")

        } else if (err && err.xhr.status === 0) {
            console.log("Shit fejlkode 0 ")

        }else if (err) {
            window.alert("Du har ramt en ukendt fejl prøv igen. Hvis dette blever ved kontakt da din lokale system administrator " + err.xhr.status)

        }

    },
};
