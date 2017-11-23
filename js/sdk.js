
const SDK = {
    serverURL: "http://localhost:8080/api",
    request: (options, cb) => {
// Indsat da det stopper siden fra at opdatere før scriptet er kør til ende. hvilket ødlagde funktionen
        event.preventDefault();
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
        prefix: "Eksamens Quiz",
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
                 SDK.Storage.persist("token", data.userId);
                 SDK.Storage.persist("userId", 31); // DUMMI SLET SLET SLET VED SENER TIDSPUNKT !!!
                 SDK.Storage.persist("type", data.type);
                 SDK.Storage.persist("username", data.username);



                cb(null, data);

            });
        }, // Mangler Presist integration

        getUserInfo: () => {
            SDK.request({
                headers: {authorization: userToken/*SDK.Storage.load("tokenId")*/},
                url: "/myuser",
                method: "GET"
            }, (err, data) => {

                //On login-error
                if (err) return cb(err);
                //on Sucess
                SDK.Storage.persist("token", data.userId);
                SDK.Storage.persist("userId", data.userId);
                SDK.Storage.persist("type", data.type);
                SDK.Storage.persist("username", data.username);
                SDK.Storage.persist("password", data.password);


                cb(null, data);

            });
        }, // Not DON YET work in progress.

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
          SDK.Storage.remove("Token");
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
        getSelectQuiz: (fagId, userToken, cb) =>{
            SDK.request({
                headers: {authorization: userToken/*SDK.Storage.load("tokenId")*/},
                url: "/quiz/" + fagId,
                method: "GET"

            }, (err, data) => {
                if (err) return cb(err);

                cb(null, data);
            });
        },
    },

    getCourses: {
        // I denne klasse er alle funktioner der relatere sig til fag.
        getSelectQuiz: (userToken, cb) =>{
            SDK.request({
                headers: {authorization: userToken/*SDK.Storage.load("tokenId")*/},
                url: "/course/",
                method: "GET"

            }, (err, data) => {
                if (err) return cb(err);

                cb(null, data);
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

        } else if (err) {
            window.alert("Du har ramt en ukendt fejl prøv igen. Hvis dette blever ved kontakt da din lokale system administrator" + err.xhr.status)

        }

    },
};
