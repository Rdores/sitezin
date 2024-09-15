document.addEventListener("DOMContentLoaded", function() { 
    const backbutton = document.getElementById("backbutton") 
    const loginbutton = document.getElementById("loginbutton")


    backbutton.onmouseup = function () {
        window.location.href = "./list.html"
    } 

    loginbutton.onmouseup = function () {
        window.location.href = "./login.html"
    }

})