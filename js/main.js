
document.addEventListener("DOMContentLoaded", function() {
    const imgfundo = document.getElementById("imgfundo") 
    const imgcanais = document.getElementById("imgcanais") 
    const dts = document.getElementById("dts") 
    const dts1 = document.getElementById("dts1") 
    const dts2 = document.getElementById("dts2") 
    const dts3 = document.getElementById("dts3")  
    const dtstxt = document.getElementById("dtstxt") 
    const faqimg = document.getElementById("faqimg") 
    const faqbutton = document.getElementById("faqbutton")  
    const start = document.getElementById("start") 
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

    faqbutton.onmousedown = function () {
        window.location.href = "https://www.instagram.com/o21_jpzin_"
    } 
    start.onmousedown = function () { 
        window.location.href = "./list.html"
    } 
    imgfundo.onmouseenter = function () { 
        imgcanais.style.opacity = 0.3 
        imgcanais.style.filter = "blur(0.4em)" 

        dts.style.transition = "all 0.5s ease-in"
        dts.style.bottom = "5em"
        dts.style.opacity = 1
    } 

    imgfundo.onmouseleave = function () { 
        imgcanais.style.opacity = 0.6
        imgcanais.style.filter = "blur(0em)"  

        dts.style.transition = "all 0.5s ease"
        dts.style.opacity = 0 
        dts.style.bottom = "0em"
    } 

    dts1.onmouseenter = function () { 

        dts2.style.opacity = 0 
        dts3.style.opacity = 0 

        dtstxt.style.opacity = "1"
        dtstxt.textContent = "velocidade"
    } 

    dts1.onmouseleave = function () { 

        dts2.style.opacity = 1 
        dts3.style.opacity = 1

        dtstxt.style.opacity = "0"
    }  

    dts2.onmouseenter = function () { 

        dts1.style.opacity = 0 
        dts3.style.opacity = 0 

        dtstxt.style.opacity = "1"
        dtstxt.textContent = "instabilidade"
    } 

    dts2.onmouseleave = function () { 

        dts1.style.opacity = 1 
        dts3.style.opacity = 1

        dtstxt.style.opacity = "0"
    }  

    dts3.onmouseenter = function () { 

        dts1.style.opacity = 0 
        dts2.style.opacity = 0 

        dtstxt.style.opacity = "1"
        dtstxt.textContent = "qualidade"
    } 

    dts3.onmouseleave = function () { 

        dts1.style.opacity = 1 
        dts2.style.opacity = 1

        dtstxt.style.opacity = "0"
    }  


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            faqimg.style.opacity = 1;
          } else {
            faqimg.style.opacity = 0;
          }
        });
      });

      const faqdiv = document.querySelector('#faqdiv');

        observer.observe(faqdiv); 
}); 

document.addEventListener("mousemove", function() {
    var dtstxt = document.getElementById("dtstxt") 

    dtstxt.style.left = event.pageX + 'px'; 
    dtstxt.style.top = event.pageY + -50 + 'px'; 
})
