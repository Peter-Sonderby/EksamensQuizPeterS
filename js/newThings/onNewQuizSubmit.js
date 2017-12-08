$(document).ready(() => {


    $("#opretQuiz").click(() => {
    let nrQuestion = $("#antalSpørgsmål").val();
    let createdBy  = SDK.Storage.load("username");
    let quizTitle = $("#quizTitle").val();
    let quizDescription = $("#newDescription").val();
    let fagID = SDK.Storage.load("fag");
       SDK.NQSS.nyeQuiz(nrQuestion, createdBy, quizTitle, quizDescription, fagID, (err, data) =>{
           if(err){
               SDK.errorCheckF(err);
           }else{
               let newQuiz = SDK.Storage.load("newQuiz");
               let newQuizId =(newQuiz.quizId);

                   let nrS = $("#antalSpørgsmål").val();
                   for(o = 1; o <= nrS; ){
                       console.log(o);
                       let count = o;
                       let quizQuestion = $("#quizSpørgsmål"+o).val();
                       SDK.NQSS.newQuestion(newQuizId, quizQuestion, (err, data) =>{
                           console.log(count);
                        if(err){SDK.errorCheckF(err)
                        }else{
                            let newQuestion = JSON.parse(data);
                            let newQuestionId = newQuestion.questionId;
                            let Answer1 =  $("#quizSvar1"+count).val();
                            let Answer2 =  $("#quizSvar2"+count).val();
                            let Answer3 =  $("#quizSvar3"+count).val();
                            let Answer4 =  $("#quizSvar4"+count).val();
                            let rSvar = $("#quizSvarR"+count).val();
                            let status1 = 0;
                            let status2 = 0;
                            let status3 = 0;
                            let status4 = 0;
                            console.log(count);

                            console.log(Answer1);
                            console.log(rSvar);

                            if(rSvar == 1 ){
                                status1 = 1
                            } else if(rSvar == 2){
                                status2 = 1
                            }else if(rSvar == 3){
                                status3 = 1
                            }else if(rSvar == 4){
                                status4 = 1
                            }

                            let Answer = Answer1;
                            let status = status1;
                            SDK.NQSS.nytSvar(Answer, newQuestionId, status, (err) =>{
                                if(err){
                                    SDK.errorCheckF(err)
                                }else{
                                    Answer = Answer2;
                                     status = status2;
                                    SDK.NQSS.nytSvar(Answer, newQuestionId, status, (err) =>{
                                        if(err){
                                            SDK.errorCheckF(err)
                                        }else{
                                            Answer = Answer3;
                                             status = status3;
                                            SDK.NQSS.nytSvar(Answer, newQuestionId, status, (err) =>{
                                                if(err){
                                                    SDK.errorCheckF(err)
                                                }else{
                                                    Answer = Answer4;
                                                     status = status4;
                                                    SDK.NQSS.nytSvar(Answer, newQuestionId, status, (err) =>{
                                                        if(err){
                                                            SDK.errorCheckF(err)
                                                        }else{

                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                       });
                       o++ }
           }
       });
    });

});
