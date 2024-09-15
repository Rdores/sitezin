document.addEventListener("DOMContentLoaded", function() { 
    var canaldiv = document.getElementsByClassName("canaldiv") 
    var playerbg = document.getElementById("playerbg")
    var playerdiv = document.getElementById("playerdiv") 
    var sairbtn = document.getElementById("sairbtn")  
    const main = document.getElementById("main")
    const perfildiv = document.getElementById("perfildiv")
    const perfilbtn = document.getElementById("perfildiv") 

    
    
    main.onmouseenter = function () { 
        perfildiv.style.opacity = 1
    } 

    main.onmouseleave = function () { 

        perfildiv.style.opacity = 0
    }

    perfilbtn.onmouseup = function () { 
        window.location.href = "./perfil.html"
    }  


    sairbtn.onmouseup = function () { 
        playerdiv.style.visibility = "hidden" 
        playerbg.innerHTML = ''
    }


    for (let i = 0; i < canaldiv.length; i++) {
        canaldiv[i].onmouseup = function() {
            

            playerdiv.style.visibility = "visible" 

            if (canaldiv[i].id == "globodiv") {
               playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=globorj-globorio" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
            } else {
                if (canaldiv[i].id == "sportvdiv") {
                    playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=sportvmosaicoalternativo" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                } else {
                    if (canaldiv[i].id == "premierediv") {
                        playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=premiereclubes" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                    } else {
                        if (canaldiv[i].id == "premiere2div") {
                            playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=premiere2" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                        } else {
                            if (canaldiv[i].id == "paramountdiv") {
                                playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=paramountplus" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                            } else {
                                if (canaldiv[i].id == "primediv") {
                                    playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=primevideo" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                                } else {
                                    if (canaldiv[i].id == "espndiv") {
                                        playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=espn" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                                    } else {
                                        if (canaldiv[i].id == "diddiv") {
                                            playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=discoveryid" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                                        } else {
                                            if (canaldiv[i].id == "tlcdiv") {
                                                playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=tlc" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                                            } else {
                                                if (canaldiv[i].id == "nickdiv") {
                                                    playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=nickelodeon" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                                                } else {
                                                    if (canaldiv[i].id == "cartoondiv") {
                                                        playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=cartoonnetwork" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                                                    } else {
                                                        if (canaldiv[i].id == "sbtdiv") {
                                                            playerbg.innerHTML = '<iframe src="https://reidoscanais.me/embed/?id=sbt" allow="encrypted-media" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>'
                                                        } else {
                                                               
                                                        }   
                                                    }  
                                                }  
                                            }  
                                        }  
                                    }  
                                } 
                            }  
                        } 
                    }
                }
            }
        };
    }

})